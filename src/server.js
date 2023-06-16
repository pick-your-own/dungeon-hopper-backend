'use strict';

require('dotenv');

//SERVER INSTANCIATION
const express = require('express');
const app = express();
const { Server } = require('socket.io');
const PORT1 = process.env.PORT1 || 4001;
const io = new Server(PORT1);

// IMPORTS
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routes/users');
const lootRouter = require('./routes/loot');
const dungeonRouter = require('./routes/dungeons');
const { dungeonEasyOdds, dungeonHardOdds, dungeonNormalOdds } = require('./dungeonLogic');
const { User } = require('./models/User');

// CONNECT TO MONGOOSE
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(lootRouter);
app.use(userRouter);
app.use(dungeonRouter);

// START EVERYTHING
io.on('connection', (socket) => {
  socket.emit('start');

  // LOG IN AND CREATE PAYLOAD
  socket.on('login', async (payload) => {
    const userDB = await User.findOne({ name: payload.username });
    if (userDB) {
      payload.access = true;
      console.log(`${payload.username} logged in`);
      socket.emit('accessGranted', payload);
    }
  });

  socket.on('createUser', async (payload) => {
    const newUser = await new User({ name: payload.username, password: payload.password });
    newUser.save();
    socket.emit('accessGranted', payload);
  });

  // LEAVE CHAT ROOM
  socket.on('leaveChat', (payload) => {
    socket.leave(payload.room);
    socket.emit('roomMenu', payload);
  });

  // JOINING ROOMS AND EMIT TO CHAT ROOM
  socket.on('chatJoin', (payload) => {
    socket.join(payload.room);
    if (payload.room === 1) {
      payload.message = `${payload.username} has joined chat room!`;
      io.to(payload.room).emit('chatMessage', payload);
    } else {
      payload.message = `${payload.username} has joined room`;
      io.to(payload.room).emit('dungeonMenu', payload);
    }
  });

  // CHAT

  socket.on('sendMessage', ({ sender, message }) => {
    io.emit('chatMessage', { sender, message});
  });

  socket.on('leaveDungeon', (payload) => {
    socket.emit('roomMenu', payload);
  });


  socket.on('dungeonFinish', (payload) => {
    socket.emit('dungeonMenu', payload);
  });
  // DUNGEON LOGIC
  socket.on('dungeonLogic', async (payload) => {
    if (payload.mode === 1) {
      await dungeonEasyOdds(payload);
    }
    if (payload.mode === 3) {
      console.log('Dungeon hard mode');
      await dungeonHardOdds(payload);
    }
    if (payload.mode === 2) {
      await dungeonNormalOdds(payload);
    }
    setTimeout(() => {
      io.to(payload.room).emit('dungeonResults', payload);
    }, 1000);
  });

  // DISCONNECT
  socket.on('disconnect', (username) => {
    console.log(`${username} disconnected`);
  });

  // LOGGING EVENTS
  socket.onAny((event, payload) => {
    let timestamp = new Date(Date.now());
    console.log(event, timestamp, payload);
  });
});

// START SERVER 
const start = (PORT) => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
};

// EXPORTS
module.exports = {
  start,
  app,
};
