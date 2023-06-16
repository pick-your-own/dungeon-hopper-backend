'use strict';

//Test for Users.js (Get, P)
// FOR GET ^^^
const request = require('supertest');
const app = require('../app'); // Assuming this is the main Express application file
describe('GET /dungeons', () => {
    it('should return a list of dungeons', async () => {
        const response = await request(app).get('/dungeons');
        expect(response.status).toBe(200);
        expect(response.body).toHaveLength(0); // Check the expected length of the dungeons array
    });
    it('should handle errors and pass them to the error handler middleware', async () => {
        const response = await request(app).get('/dungeons');
        expect(response.status).toBe(500); // Assuming that the error will result in a 500 status code
        expect(response.body).toHaveProperty('error'); // Assuming that the error response has an 'error' property
    });
});

// FOR POTST


describe('POST /dungeon', () => {
    it('should create a new dungeon', async () => {
        const newDungeonData = { name: 'Cursed Castle', level: 5 };
        const response = await request(app).post('/dungeon').send(newDungeonData);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('_id'); // Assuming the created dungeon has an '_id' property
        expect(response.body.name).toBe(newDungeonData.name); // Check if the returned dungeon name matches the input
        expect(response.body.level).toBe(newDungeonData.level); // Check if the returned dungeon level matches the input
    });
    it('should handle errors and pass them to the error handler middleware', async () => {
        const response = await request(app).post('/dungeon').send({}); // Sending an empty request body to trigger an error
        expect(response.status).toBe(500); // Assuming that the error will result in a 500 status code
        expect(response.body).toHaveProperty('error'); // Assuming that the error response has an 'error' property
    });
});

const request = require('supertest');
const app = require('../app'); // Assuming this is the main Express application file
describe('GET /loot', () => {
    it('should return a list of loot items', async () => {
        const response = await request(app).get('/loot');
        expect(response.status).toBe(200);
        expect(response.body).toHaveLength(0); // Check the expected length of the loot array
    });
    it('should handle errors and pass them to the error handler middleware', async () => {
        const response = await request(app).get('/loot');
        expect(response.status).toBe(500); // Assuming that the error will result in a 500 status code
        expect(response.body).toHaveProperty('error'); // Assuming that the error response has an 'error' property
    });
});


const request = require('supertest');
const app = require('../app'); // Assuming this is the main Express application file
describe('POST /loot', () => {
    it('should create a new loot item', async () => {
        const newLootItemData = { name: 'Sword of Destiny', value: 100 };
        const response = await request(app).post('/loot').send(newLootItemData);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('_id'); // Assuming the created loot item has an '_id' property
        expect(response.body.name).toBe(newLootItemData.name); // Check if the returned loot item name matches the input
        expect(response.body.value).toBe(newLootItemData.value); // Check if the returned loot item value matches the input
    });
    it('should handle errors and pass them to the error handler middleware', async () => {
        const response = await request(app).post('/loot').send({}); // Sending an empty request body to trigger an error
        expect(response.status).toBe(500); // Assuming that the error will result in a 500 status code
        expect(response.body).toHaveProperty('error'); // Assuming that the error response has an 'error' property
    });
});


const request = require('supertest');
const app = require('../app'); // Assuming this is the main Express application file
describe('GET /users', () => {
    it('should return a list of users', async () => {
        const response = await request(app).get('/users');
        expect(response.status).toBe(200);
        expect(response.body).toHaveLength(0); // Check the expected length of the users array
    });
    it('should handle errors and pass them to the error handler middleware', async () => {
        const response = await request(app).get('/users');
        expect(response.status).toBe(500); // Assuming that the error will result in a 500 status code
        expect(response.body).toHaveProperty('error'); // Assuming that the error response has an 'error' property
    });
});

const request = require('supertest');
const app = require('../app'); // Assuming this is the main Express application file
describe('POST /user', () => {
    it('should create a new user', async () => {
        const newUser = { username: 'testuser', password: 'testpassword' };
        const response = await request(app).post('/user').send(newUser);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('_id'); // Assuming the created user has an '_id' property
        expect(response.body.username).toBe(newUser.username); // Check if the returned user username matches the input
    });
    it('should handle errors and pass them to the error handler middleware', async () => {
        const response = await request(app).post('/user').send({}); // Sending an empty request body to trigger an error
        expect(response.status).toBe(500); // Assuming that the error will result in a 500 status code
        expect(response.body).toHaveProperty('error'); // Assuming that the error response has an 'error' property
    });
});

const request = require('supertest');
const app = require('../app'); // Assuming this is the main Express application file
describe('POST /login', () => {
    it('should return the logged-in user', async () => {
        const userCredentials = { username: 'testuser', password: 'testpassword' };
        const response = await request(app).post('/login').send(userCredentials);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('username', userCredentials.username); // Check if the returned user matches the input credentials
    });
    it('should handle errors and pass them to the error handler middleware', async () => {
        const response = await request(app).post('/login').send({}); // Sending an empty request body to trigger an error
        expect(response.status).toBe(500); // Assuming that the error will result in a 500 status code
        expect(response.body).toHaveProperty('error'); // Assuming that the error response has an 'error' property
    });
});
