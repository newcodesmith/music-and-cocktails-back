const test = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');

const app = require('../src/app');

test('GET /health returns ok', async () => {
  const response = await request(app).get('/health');

  assert.equal(response.statusCode, 200);
  assert.deepEqual(response.body, { status: 'ok' });
});

test('GET unknown route returns JSON 404', async () => {
  const response = await request(app).get('/does-not-exist');

  assert.equal(response.statusCode, 404);
  assert.equal(response.body.error, 'Not Found');
});
