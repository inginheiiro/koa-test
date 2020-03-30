const request = require('supertest');
const server = require('../app.js');

// Before everything
beforeAll(async () => {
  console.log('Jest starting!');
});

// After everything
afterAll(() => {
  server.close();
  console.log('Jest out!');
});

// Hello world basic test
describe('basic route tests', () => {
  test('get home route  GET /', async () => {
    const response = await request(server).get('/');
    expect(response.status).toEqual(200);
    return expect(response.text).toContain('I\'m Alive!');
  });
});

// Get all method ... Page 5
describe('Get page 5 from ALL', () => {
  test(`get ${process.env.BASE_URL}/all/5`, async () => {
    const response = await request(server).get(`${process.env.BASE_URL}/all/5`);
    expect(response.status).toEqual(200);
    const dt=JSON.parse(response.text);
    return expect(dt.json.pagination.currentPage).toContain('5');
  });
});

// Get distinct payment types
describe('Get distinct payment types', () => {
  test(`get ${process.env.BASE_URL}/payment_types/distinct`, async () => {
    const response = await request(server).get(`${process.env.BASE_URL}/payment_types/distinct`);
    expect(response.status).toEqual(200);
    const dt=JSON.parse(response.text);
    return expect(dt.json.length===3);
  });
});
