// app.test.js
const request = require("supertest");
const { app, server } = require("./app");

afterAll(() => {
  server.close(); // Close server after tests
});

describe("GET /", () => {
  it("should return Hello World!", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain("Hello World!");
  });
});
