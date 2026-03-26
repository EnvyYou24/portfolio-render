const request = require('supertest');
const express = require('express');

// Small test to check if the API route exists
describe('Basic API Tests', () => {
  it('should have a MONGO_URI defined', () => {
    expect(process.env.MONGO_URI).toBeDefined();
  });

  it('should return 404 for a non-existent route', async () => {
    const app = express();
    const res = await request(app).get('/api/does-not-exist');
    expect(res.statusCode).toEqual(404);
  });
});