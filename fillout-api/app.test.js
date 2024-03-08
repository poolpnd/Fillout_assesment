const request = require("supertest");
const app = require("./app"); // Assuming you have an app.js file in the same directory

describe("Test the root path", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});
