const request = require("supertest");
const app = require("./app");

describe("GET /", () => {
  it("should respond with status code 200", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});
