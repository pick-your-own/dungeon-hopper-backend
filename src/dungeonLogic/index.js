'use strict';

require('dotenv').config({ path: '../../.env' });
const mongoose = require('mongoose');
const { Loot } = require('../models/loot');
const { User } = require('../models/User');
const { Dungeon } = require('../models/Dungeon');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const getStory = async () => {
  let count = await Dungeon.countDocuments().exec();
  let randomIndex = Math.floor(Math.random() * count);
  let dungeonStory = await Dungeon.findOne().skip(randomIndex).exec();
  return dungeonStory;
};

const findLootByRarity = async (rarity) => {
  let loot = await Loot.findOne({ rarity: rarity }).exec();
  return loot ? loot.name : '';
};

const assignReward = async (username, reward) => {
  const user = await User.findOne({ name: username }).exec();
  if (user != null) {
    const loot = await Loot.findOne({ name: reward }).exec();
    if (loot) {
      user.acquiredLoot.push(loot); // Push the loot's ObjectId
      await user.save();
    }
  } else {
    console.log(`User ${username} not found.`);
  }
};

const findReward = async (odds, username) => {
  let reward = '';
  if (odds < 80) {
    reward = await findLootByRarity('normal');
  } else if (odds >= 80 && odds < 95) {
    reward = await findLootByRarity('rare');
  } else {
    reward = await findLootByRarity('legendary');
  }
  console.log('loot', reward);

  if (reward) {
    await assignReward(username, reward);
  }
  return reward;
};

const dungeonOdds = async (payload, lootOdds, winScore) => {
  payload.story = await getStory();
  console.log(payload.story);
  let score = Math.floor(Math.random() * 100);
  if (score >= winScore) {
    payload.result =  'You win!';
    payload.loot = await findReward(lootOdds, payload.username);
  } else {
    payload.result = 'You lose';
  }
  return payload;
};

module.exports = {
  dungeonEasyOdds: (payload) => dungeonOdds(payload, Math.floor(Math.random() * 100), 25),
  dungeonNormalOdds: (payload) => dungeonOdds(payload, Math.floor(Math.random() * 100), 50),
  dungeonHardOdds: (payload) => dungeonOdds(payload, Math.floor(Math.random() * 100), 75),
};

// module.exports = {
//   playDungeon: (payload) => playLevel(payload, Math.floor(Math.random() * 100), 25, 'dungeon'),
//   playCastle: (payload) => playLevel(payload, Math.floor(Math.random() * 100), 50, 'castle'),
//   playSwamp: (payload) => playLevel(payload, Math.floor(Math.random() * 100), 75, 'swamp'),
//   playForest: (payload) => playLevel(payload, Math.floor(Math.random() * 100), 20, 'forest'),
//   playMountain: (payload) => playLevel(payload, Math.floor(Math.random() * 100), 55, 'mountain'),
//   playDesert: (payload) => playLevel(payload, Math.floor(Math.random() * 100), 65, 'desert'),
//   playIceCaves: (payload) => playLevel(payload, Math.floor(Math.random() * 100), 80, 'ice caves'),
//   playVolcano: (payload) => playLevel(payload, Math.floor(Math.random() * 100), 90, 'volcano'),
//   playNetherRealm: (payload) => playLevel(payload, Math.floor(Math.random() * 100), 95, 'nether realm'),
//   playSkyCity: (payload) => playLevel(payload, Math.floor(Math.random() * 100), 85, 'sky city'),
// };
