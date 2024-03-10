const request = require("supertest");
const app = require("../app");
const formId = "cLZojxk94ous";

describe("GET /v1/api/forms", () => {
  it("should respond with status code 200", async () => {
    const response = await request(app).get("/v1/api/forms");
    expect(response.statusCode).toBe(200);
  });

  it("should validate the request parameters", async () => {
    const response = await request(app).get("/v1/api/forms");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([
      { formId: "cLZojxk94ous", id: 322909, name: "Tech Screen Questionnaire" },
    ]);
  });
});

describe("GET /v1/api/forms/:formId", () => {
  it("should respond with status code 200 for valid formId", async () => {
    const response = await request(app).get(`/v1/api/forms/${formId}`);
    expect(response.statusCode).toBe(200);
  });

  it("should respond with status code 400 for invalid formId", async () => {
    const response = await request(app).get(`/v1/api/forms/${formId}_invalid`);
    expect(response.statusCode).toBe(400);
  });
});

describe("GET /v1/api/forms/:formId/submissions", () => {
  it("should respond with status code 200 for valid formId", async () => {
    const response = await request(app).get(
      `/v1/api/forms/${formId}/submissions`
    );
    expect(response.statusCode).toBe(200);
  });

  it("should respond with status code 400 for invalid formId", async () => {
    const response = await request(app).get(
      `/v1/api/forms/${formId}_invalid/submissions`
    );
    expect(response.statusCode).toBe(400);
  });

  it("should return the correct submissions data for valid formId", async () => {
    const response = await request(app).get(
      `/v1/api/forms/${formId}/submissions`
    );
    expect(response.body.totalResponses).toEqual(16);
  });
});

describe("GET /v1/api/forms/:formId/filteredResponses", () => {
  it("should respond with status code 200 for valid formId", async () => {
    const response = await request(app).get(
      `/v1/api/forms/${formId}/filteredResponses`
    );
    expect(response.statusCode).toBe(200);
  });

  it("should respond with status code 400 for invalid formId", async () => {
    const response = await request(app).get(
      `/v1/api/forms/${formId}_invalid/filteredResponses`
    );
    expect(response.statusCode).toBe(400);
  });
});
