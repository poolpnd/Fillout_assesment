const request = require("supertest");
const express = require("express");
const app = express();
const router = require("./fill-out");

app.use(express.json());
app.use("/", router);

const formId = "cLZojxk94ous";

describe("GET /forms", () => {
  it("should return all forms", async () => {
    const response = await request(app).get("/forms");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(form_data);
  });
});

describe("GET /forms/:formId", () => {
  it("should return a specific form", async () => {
    const response = await request(app).get(`/forms/${formId}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(form_meta_data);
  });
});

describe("GET /forms/:formId/submissions", () => {
  it("should return submissions for a specific form", async () => {
    const response = await request(app).get(`/forms/${formId}/submissions`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(form_submissions_data);
  });
});

// describe("POST /v1/api/webhook/create", () => {
//   it("should create a webhook", async () => {
//     const body = /* provide a valid request body */;
//     const response = await request(app)
//       .post("/v1/api/webhook/create")
//       .send(body);
//     expect(response.status).toBe(200);
//     expect(response.body).toEqual(/* expected response body */);
//   });
// });

// describe("GET /:id/filteredResponses", () => {
//   it("should return filtered responses", async () => {
//     const id = /* provide a valid ID */;
//     const response = await request(app).get(`/${id}/filteredResponses`);
//     expect(response.status).toBe(200);
//     expect(response.body).toEqual(/* expected response body */);
//   });
// });
const form_data = [
  { formId: "cLZojxk94ous", id: 322909, name: "Tech Screen Questionnaire" },
];

const form_meta_data = {
  calculations: [],
  documents: [],
  id: "cLZojxk94ous",
  name: "Tech Screen Questionnaire",
  questions: [
    {
      id: "4KC356y4M6W8jHPKx9QfEy",
      name: "Anything else you'd like to share before your call?",
      type: "LongAnswer",
    },
    {
      id: "bE2Bo4cGUv49cjnqZ4UnkW",
      name: "What is your name?",
      type: "ShortAnswer",
    },
    {
      id: "dSRAe3hygqVwTpPK69p5td",
      name: "Please select a date to schedule your yearly check-in.",
      type: "DatePicker",
    },
    {
      id: "fFnyxwWa3KV6nBdfBDCHEA",
      name: "How many employees work under you?",
      type: "NumberInput",
    },
    {
      id: "jB2qDRcXQ8Pjo1kg3jre2J",
      name: "Which department do you work in?",
      options: [
        {
          id: "5htRiCardXxV2vZm19dczD",
          label: "Engineering",
          value: "Engineering",
        },
        {
          id: "1vSpMUqsU9mXzKQbrqxJVj",
          label: "Upper management",
          value: "Upper management",
        },
        {
          id: "e4qgpfVGZfD3FixUBU1CqJ",
          label: "Human resources",
          value: "Human resources",
        },
        {
          id: "okokaN19gTvEBbACGFj6jc",
          label: "Recruiting",
          value: "Recruiting",
        },
      ],
      type: "MultipleChoice",
    },
    {
      id: "kc6S6ThWu3cT5PVZkwKUg4",
      name: "What is your email?",
      type: "EmailInput",
    },
  ],
  urlParameters: [],
};

const form_submissions_data = {
  responses: [
    {
      submissionId: "ab9959b2-73e8-4994-85b9-56e780b89ce3",
      submissionTime: "2024-02-27T19:37:08.228Z",
      lastUpdatedAt: "2024-02-27T19:37:08.228Z",
      questions: [
        {
          id: "4KC356y4M6W8jHPKx9QfEy",
          name: "Anything else you'd like to share before your call?",
          type: "LongAnswer",
          value: "Nothing much to share yet!",
        },
        {
          id: "bE2Bo4cGUv49cjnqZ4UnkW",
          name: "What is your name?",
          type: "ShortAnswer",
          value: "Johnny",
        },
        {
          id: "dSRAe3hygqVwTpPK69p5td",
          name: "Please select a date to schedule your yearly check-in.",
          type: "DatePicker",
          value: "2024-02-01",
        },
        {
          id: "fFnyxwWa3KV6nBdfBDCHEA",
          name: "How many employees work under you?",
          type: "NumberInput",
          value: 2,
        },
        {
          id: "jB2qDRcXQ8Pjo1kg3jre2J",
          name: "Which department do you work in?",
          type: "MultipleChoice",
          value: "Engineering",
        },
        {
          id: "kc6S6ThWu3cT5PVZkwKUg4",
          name: "What is your email?",
          type: "EmailInput",
          value: "johnny@fillout.com",
        },
      ],
      calculations: [],
      urlParameters: [],
      quiz: {},
      documents: [],
    },
    {
      submissionId: "f9b8b405-6ca9-41f3-a03f-d5a563dfa0f6",
      submissionTime: "2024-02-27T20:49:43.783Z",
      lastUpdatedAt: "2024-02-27T20:49:43.783Z",
      questions: [
        {
          id: "4KC356y4M6W8jHPKx9QfEy",
          name: "Anything else you'd like to share before your call?",
          type: "LongAnswer",
          value: "I'm excited for it!",
        },
        {
          id: "bE2Bo4cGUv49cjnqZ4UnkW",
          name: "What is your name?",
          type: "ShortAnswer",
          value: "Jane",
        },
        {
          id: "dSRAe3hygqVwTpPK69p5td",
          name: "Please select a date to schedule your yearly check-in.",
          type: "DatePicker",
          value: "2021-08-23",
        },
        {
          id: "fFnyxwWa3KV6nBdfBDCHEA",
          name: "How many employees work under you?",
          type: "NumberInput",
          value: 10,
        },
        {
          id: "jB2qDRcXQ8Pjo1kg3jre2J",
          name: "Which department do you work in?",
          type: "MultipleChoice",
          value: "Recruiting",
        },
        {
          id: "kc6S6ThWu3cT5PVZkwKUg4",
          name: "What is your email?",
          type: "EmailInput",
          value: "jane@fillout.com",
        },
      ],
      calculations: [],
      urlParameters: [],
      quiz: {},
      documents: [],
    },
    {
      submissionId: "e837e306-d4bc-429e-b540-3c5ec9605eab",
      submissionTime: "2024-02-27T21:11:29.857Z",
      lastUpdatedAt: "2024-02-27T21:11:29.857Z",
      questions: [
        {
          id: "4KC356y4M6W8jHPKx9QfEy",
          name: "Anything else you'd like to share before your call?",
          type: "LongAnswer",
          value: null,
        },
        {
          id: "bE2Bo4cGUv49cjnqZ4UnkW",
          name: "What is your name?",
          type: "ShortAnswer",
          value: null,
        },
        {
          id: "dSRAe3hygqVwTpPK69p5td",
          name: "Please select a date to schedule your yearly check-in.",
          type: "DatePicker",
          value: null,
        },
        {
          id: "fFnyxwWa3KV6nBdfBDCHEA",
          name: "How many employees work under you?",
          type: "NumberInput",
          value: null,
        },
        {
          id: "jB2qDRcXQ8Pjo1kg3jre2J",
          name: "Which department do you work in?",
          type: "MultipleChoice",
          value: "Human resources",
        },
        {
          id: "kc6S6ThWu3cT5PVZkwKUg4",
          name: "What is your email?",
          type: "EmailInput",
          value: null,
        },
      ],
      calculations: [],
      urlParameters: [],
      quiz: {},
      documents: [],
    },
    {
      submissionId: "1602a627-7846-4073-8eec-da61a81f7abd",
      submissionTime: "2024-02-27T21:12:23.199Z",
      lastUpdatedAt: "2024-02-27T21:12:23.199Z",
      questions: [
        {
          id: "4KC356y4M6W8jHPKx9QfEy",
          name: "Anything else you'd like to share before your call?",
          type: "LongAnswer",
          value: "Nope!",
        },
        {
          id: "bE2Bo4cGUv49cjnqZ4UnkW",
          name: "What is your name?",
          type: "ShortAnswer",
          value: "Bobby",
        },
        {
          id: "dSRAe3hygqVwTpPK69p5td",
          name: "Please select a date to schedule your yearly check-in.",
          type: "DatePicker",
          value: "2024-02-10",
        },
        {
          id: "fFnyxwWa3KV6nBdfBDCHEA",
          name: "How many employees work under you?",
          type: "NumberInput",
          value: 0,
        },
        {
          id: "jB2qDRcXQ8Pjo1kg3jre2J",
          name: "Which department do you work in?",
          type: "MultipleChoice",
          value: null,
        },
        {
          id: "kc6S6ThWu3cT5PVZkwKUg4",
          name: "What is your email?",
          type: "EmailInput",
          value: "bobby@fillout.com",
        },
      ],
      calculations: [],
      urlParameters: [],
      quiz: {},
      documents: [],
    },
    {
      submissionId: "17e08db1-d685-48a2-b88c-b4486a57cfa7",
      submissionTime: "2024-02-27T21:21:15.587Z",
      lastUpdatedAt: "2024-02-27T21:21:15.587Z",
      questions: [
        {
          id: "4KC356y4M6W8jHPKx9QfEy",
          name: "Anything else you'd like to share before your call?",
          type: "LongAnswer",
          value: "Nope",
        },
        {
          id: "bE2Bo4cGUv49cjnqZ4UnkW",
          name: "What is your name?",
          type: "ShortAnswer",
          value: "Tom",
        },
        {
          id: "dSRAe3hygqVwTpPK69p5td",
          name: "Please select a date to schedule your yearly check-in.",
          type: "DatePicker",
          value: "2024-02-24",
        },
        {
          id: "fFnyxwWa3KV6nBdfBDCHEA",
          name: "How many employees work under you?",
          type: "NumberInput",
          value: 50,
        },
        {
          id: "jB2qDRcXQ8Pjo1kg3jre2J",
          name: "Which department do you work in?",
          type: "MultipleChoice",
          value: "Upper management",
        },
        {
          id: "kc6S6ThWu3cT5PVZkwKUg4",
          name: "What is your email?",
          type: "EmailInput",
          value: "tom@fillout.com",
        },
      ],
      calculations: [],
      urlParameters: [],
      quiz: {},
      documents: [],
    },
    {
      submissionId: "a3551874-2554-4070-b636-f18a0b1281e4",
      submissionTime: "2024-02-27T21:21:42.823Z",
      lastUpdatedAt: "2024-02-27T21:21:42.823Z",
      questions: [
        {
          id: "4KC356y4M6W8jHPKx9QfEy",
          name: "Anything else you'd like to share before your call?",
          type: "LongAnswer",
          value: "Nah",
        },
        {
          id: "bE2Bo4cGUv49cjnqZ4UnkW",
          name: "What is your name?",
          type: "ShortAnswer",
          value: "Billy",
        },
        {
          id: "dSRAe3hygqVwTpPK69p5td",
          name: "Please select a date to schedule your yearly check-in.",
          type: "DatePicker",
          value: "1999-10-10",
        },
        {
          id: "fFnyxwWa3KV6nBdfBDCHEA",
          name: "How many employees work under you?",
          type: "NumberInput",
          value: -5,
        },
        {
          id: "jB2qDRcXQ8Pjo1kg3jre2J",
          name: "Which department do you work in?",
          type: "MultipleChoice",
          value: "Human resources",
        },
        {
          id: "kc6S6ThWu3cT5PVZkwKUg4",
          name: "What is your email?",
          type: "EmailInput",
          value: "billy@fillout.com",
        },
      ],
      calculations: [],
      urlParameters: [],
      quiz: {},
      documents: [],
    },
    {
      submissionId: "fefcd911-4622-4547-a634-23f2c3cd9973",
      submissionTime: "2024-03-04T03:58:51.669Z",
      lastUpdatedAt: "2024-03-04T03:58:51.669Z",
      questions: [
        {
          id: "4KC356y4M6W8jHPKx9QfEy",
          name: "Anything else you'd like to share before your call?",
          type: "LongAnswer",
          value: null,
        },
        {
          id: "bE2Bo4cGUv49cjnqZ4UnkW",
          name: "What is your name?",
          type: "ShortAnswer",
          value: null,
        },
        {
          id: "dSRAe3hygqVwTpPK69p5td",
          name: "Please select a date to schedule your yearly check-in.",
          type: "DatePicker",
          value: null,
        },
        {
          id: "fFnyxwWa3KV6nBdfBDCHEA",
          name: "How many employees work under you?",
          type: "NumberInput",
          value: null,
        },
        {
          id: "jB2qDRcXQ8Pjo1kg3jre2J",
          name: "Which department do you work in?",
          type: "MultipleChoice",
          value: null,
        },
        {
          id: "kc6S6ThWu3cT5PVZkwKUg4",
          name: "What is your email?",
          type: "EmailInput",
          value: "nope@fillout.com",
        },
      ],
      calculations: [],
      urlParameters: [],
      quiz: {},
      documents: [],
    },
    {
      submissionId: "d25c76c4-0ad6-4418-acca-39809b98cb9e",
      submissionTime: "2024-03-04T04:00:02.025Z",
      lastUpdatedAt: "2024-03-04T04:00:02.025Z",
      questions: [
        {
          id: "4KC356y4M6W8jHPKx9QfEy",
          name: "Anything else you'd like to share before your call?",
          type: "LongAnswer",
          value: "Nope",
        },
        {
          id: "bE2Bo4cGUv49cjnqZ4UnkW",
          name: "What is your name?",
          type: "ShortAnswer",
          value: "Duplicate submission",
        },
        {
          id: "dSRAe3hygqVwTpPK69p5td",
          name: "Please select a date to schedule your yearly check-in.",
          type: "DatePicker",
          value: "2024-03-02",
        },
        {
          id: "fFnyxwWa3KV6nBdfBDCHEA",
          name: "How many employees work under you?",
          type: "NumberInput",
          value: 5,
        },
        {
          id: "jB2qDRcXQ8Pjo1kg3jre2J",
          name: "Which department do you work in?",
          type: "MultipleChoice",
          value: "Upper management",
        },
        {
          id: "kc6S6ThWu3cT5PVZkwKUg4",
          name: "What is your email?",
          type: "EmailInput",
          value: "billy@fillout.com",
        },
      ],
      calculations: [],
      urlParameters: [],
      quiz: {},
      documents: [],
    },
    {
      submissionId: "fde2a9bd-872e-46f3-b42d-80788171762c",
      submissionTime: "2024-03-04T04:00:19.160Z",
      lastUpdatedAt: "2024-03-04T04:00:19.160Z",
      questions: [
        {
          id: "4KC356y4M6W8jHPKx9QfEy",
          name: "Anything else you'd like to share before your call?",
          type: "LongAnswer",
          value: "Not really",
        },
        {
          id: "bE2Bo4cGUv49cjnqZ4UnkW",
          name: "What is your name?",
          type: "ShortAnswer",
          value: "Admin",
        },
        {
          id: "dSRAe3hygqVwTpPK69p5td",
          name: "Please select a date to schedule your yearly check-in.",
          type: "DatePicker",
          value: "2024-04-02",
        },
        {
          id: "fFnyxwWa3KV6nBdfBDCHEA",
          name: "How many employees work under you?",
          type: "NumberInput",
          value: 1,
        },
        {
          id: "jB2qDRcXQ8Pjo1kg3jre2J",
          name: "Which department do you work in?",
          type: "MultipleChoice",
          value: "Engineering",
        },
        {
          id: "kc6S6ThWu3cT5PVZkwKUg4",
          name: "What is your email?",
          type: "EmailInput",
          value: "admin@fillout.com",
        },
      ],
      calculations: [],
      urlParameters: [],
      quiz: {},
      documents: [],
    },
    {
      submissionId: "07e5d3d8-94c6-46a1-9793-e1f4c542b0ae",
      submissionTime: "2024-03-04T04:00:42.461Z",
      lastUpdatedAt: "2024-03-04T04:00:42.461Z",
      questions: [
        {
          id: "4KC356y4M6W8jHPKx9QfEy",
          name: "Anything else you'd like to share before your call?",
          type: "LongAnswer",
          value: "Thank you!",
        },
        {
          id: "bE2Bo4cGUv49cjnqZ4UnkW",
          name: "What is your name?",
          type: "ShortAnswer",
          value: "Dev",
        },
        {
          id: "dSRAe3hygqVwTpPK69p5td",
          name: "Please select a date to schedule your yearly check-in.",
          type: "DatePicker",
          value: "2024-06-15",
        },
        {
          id: "fFnyxwWa3KV6nBdfBDCHEA",
          name: "How many employees work under you?",
          type: "NumberInput",
          value: 0,
        },
        {
          id: "jB2qDRcXQ8Pjo1kg3jre2J",
          name: "Which department do you work in?",
          type: "MultipleChoice",
          value: "Engineering",
        },
        {
          id: "kc6S6ThWu3cT5PVZkwKUg4",
          name: "What is your email?",
          type: "EmailInput",
          value: "dev@fillout.com",
        },
      ],
      calculations: [],
      urlParameters: [],
      quiz: {},
      documents: [],
    },
    {
      submissionId: "4f6c50c9-b25e-4398-95e6-9817bab431df",
      submissionTime: "2024-03-04T05:04:08.102Z",
      lastUpdatedAt: "2024-03-04T05:04:08.102Z",
      questions: [
        {
          id: "4KC356y4M6W8jHPKx9QfEy",
          name: "Anything else you'd like to share before your call?",
          type: "LongAnswer",
          value: "500",
        },
        {
          id: "bE2Bo4cGUv49cjnqZ4UnkW",
          name: "What is your name?",
          type: "ShortAnswer",
          value: "Test",
        },
        {
          id: "dSRAe3hygqVwTpPK69p5td",
          name: "Please select a date to schedule your yearly check-in.",
          type: "DatePicker",
          value: "2024-03-01",
        },
        {
          id: "fFnyxwWa3KV6nBdfBDCHEA",
          name: "How many employees work under you?",
          type: "NumberInput",
          value: 2.5,
        },
        {
          id: "jB2qDRcXQ8Pjo1kg3jre2J",
          name: "Which department do you work in?",
          type: "MultipleChoice",
          value: "Engineering",
        },
        {
          id: "kc6S6ThWu3cT5PVZkwKUg4",
          name: "What is your email?",
          type: "EmailInput",
          value: "test@test.com",
        },
      ],
      calculations: [],
      urlParameters: [],
      quiz: {},
      documents: [],
    },
    {
      submissionId: "33474ed2-d136-4ac5-9aae-8671f8f8a891",
      submissionTime: "2024-03-06T15:44:49.832Z",
      lastUpdatedAt: "2024-03-06T15:44:49.832Z",
      questions: [
        {
          id: "4KC356y4M6W8jHPKx9QfEy",
          name: "Anything else you'd like to share before your call?",
          type: "LongAnswer",
          value: null,
        },
        {
          id: "bE2Bo4cGUv49cjnqZ4UnkW",
          name: "What is your name?",
          type: "ShortAnswer",
          value: "Jane Doe",
        },
        {
          id: "dSRAe3hygqVwTpPK69p5td",
          name: "Please select a date to schedule your yearly check-in.",
          type: "DatePicker",
          value: "2024-03-01",
        },
        {
          id: "fFnyxwWa3KV6nBdfBDCHEA",
          name: "How many employees work under you?",
          type: "NumberInput",
          value: 100000,
        },
        {
          id: "jB2qDRcXQ8Pjo1kg3jre2J",
          name: "Which department do you work in?",
          type: "MultipleChoice",
          value: "Human resources",
        },
        {
          id: "kc6S6ThWu3cT5PVZkwKUg4",
          name: "What is your email?",
          type: "EmailInput",
          value: "jane.doe@gmail.com",
        },
      ],
      calculations: [],
      urlParameters: [],
      quiz: {},
      documents: [],
    },
    {
      submissionId: "9fd0a500-8a58-4f9c-9d0a-e2cb709ceaa5",
      submissionTime: "2024-03-06T22:55:55.010Z",
      lastUpdatedAt: "2024-03-06T22:55:55.010Z",
      questions: [
        {
          id: "4KC356y4M6W8jHPKx9QfEy",
          name: "Anything else you'd like to share before your call?",
          type: "LongAnswer",
          value: "test",
        },
        {
          id: "bE2Bo4cGUv49cjnqZ4UnkW",
          name: "What is your name?",
          type: "ShortAnswer",
          value: "test person",
        },
        {
          id: "dSRAe3hygqVwTpPK69p5td",
          name: "Please select a date to schedule your yearly check-in.",
          type: "DatePicker",
          value: "2024-03-21",
        },
        {
          id: "fFnyxwWa3KV6nBdfBDCHEA",
          name: "How many employees work under you?",
          type: "NumberInput",
          value: 5,
        },
        {
          id: "jB2qDRcXQ8Pjo1kg3jre2J",
          name: "Which department do you work in?",
          type: "MultipleChoice",
          value: "Engineering",
        },
        {
          id: "kc6S6ThWu3cT5PVZkwKUg4",
          name: "What is your email?",
          type: "EmailInput",
          value: "test@test.com",
        },
      ],
      calculations: [],
      urlParameters: [],
      quiz: {},
      documents: [],
    },
    {
      submissionId: "e2e42fde-82df-4e28-8ae3-0700b37a09c8",
      submissionTime: "2024-03-07T15:32:04.200Z",
      lastUpdatedAt: "2024-03-07T15:32:04.200Z",
      questions: [
        {
          id: "4KC356y4M6W8jHPKx9QfEy",
          name: "Anything else you'd like to share before your call?",
          type: "LongAnswer",
          value: "ff",
        },
        {
          id: "bE2Bo4cGUv49cjnqZ4UnkW",
          name: "What is your name?",
          type: "ShortAnswer",
          value: "ss",
        },
        {
          id: "dSRAe3hygqVwTpPK69p5td",
          name: "Please select a date to schedule your yearly check-in.",
          type: "DatePicker",
          value: "2024-03-12",
        },
        {
          id: "fFnyxwWa3KV6nBdfBDCHEA",
          name: "How many employees work under you?",
          type: "NumberInput",
          value: 12,
        },
        {
          id: "jB2qDRcXQ8Pjo1kg3jre2J",
          name: "Which department do you work in?",
          type: "MultipleChoice",
          value: "Engineering",
        },
        {
          id: "kc6S6ThWu3cT5PVZkwKUg4",
          name: "What is your email?",
          type: "EmailInput",
          value: "Gamesjastech@gmail.com",
        },
      ],
      calculations: [],
      urlParameters: [],
      quiz: {},
      documents: [],
    },
    {
      submissionId: "edb69762-62c1-4560-9b09-f82ea44bd8ef",
      submissionTime: "2024-03-08T11:12:55.180Z",
      lastUpdatedAt: "2024-03-08T11:12:55.180Z",
      questions: [
        {
          id: "4KC356y4M6W8jHPKx9QfEy",
          name: "Anything else you'd like to share before your call?",
          type: "LongAnswer",
          value: "Yes",
        },
        {
          id: "bE2Bo4cGUv49cjnqZ4UnkW",
          name: "What is your name?",
          type: "ShortAnswer",
          value: "John",
        },
        {
          id: "dSRAe3hygqVwTpPK69p5td",
          name: "Please select a date to schedule your yearly check-in.",
          type: "DatePicker",
          value: "2024-03-07",
        },
        {
          id: "fFnyxwWa3KV6nBdfBDCHEA",
          name: "How many employees work under you?",
          type: "NumberInput",
          value: 10,
        },
        {
          id: "jB2qDRcXQ8Pjo1kg3jre2J",
          name: "Which department do you work in?",
          type: "MultipleChoice",
          value: "Engineering",
        },
        {
          id: "kc6S6ThWu3cT5PVZkwKUg4",
          name: "What is your email?",
          type: "EmailInput",
          value: "john.doe@mailinator.com",
        },
      ],
      calculations: [],
      urlParameters: [],
      quiz: {},
      documents: [],
    },
  ],
  totalResponses: 15,
  pageCount: 1,
};
