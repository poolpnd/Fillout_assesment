const express = require("express");
const router = express.Router();
const Ajv = require("ajv");
const ajv = new Ajv();

const apiKey =
  "sk_prod_TfMbARhdgues5AuIosvvdAC9WsA5kXiZlW8HZPaRDlIbCpSpLsXBeZO7dCVZQwHAY3P4VSBPiiC33poZ1tdUj2ljOzdTCCOSpUZ_3912";

router.get("/forms", async function (req, res, next) {
  const response = await fetch("https://api.fillout.com/v1/api/forms", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });
  let data = await response.json();
  res.json(data);
});

router.get("/forms/:formId", async function (req, res, next) {
  const formId = req.params.formId;
  const response = await fetch(
    `https://api.fillout.com/v1/api/forms/${formId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );
  let data = await response.json();
  res.json(data);
});

router.get("/forms/:formId/submissions", async function (req, res, next) {
  const formId = req.params.formId;
  const filters = req.query;
  const response = await fetch(
    `https://api.fillout.com/v1/api/forms/${formId}/submissions?${new URLSearchParams(
      filters
    )}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );
  let data = await response.json();
  res.json(data);
});

router.get("/forms/:formId/filteredResponses", async function (req, res, next) {
  const formId = req.params.formId;
  if (!formId) return res.status(400).send("formId is required");
  const filters = req.query;
  var schema = {
    properties: {
      limit: {
        type: "integer",
        minimum: 1,
        maximum: 150,
      },
      afterDate: {
        type: "string",
      },
      beforeDate: {
        type: "string",
      },
      offset: {
        type: "integer",
        minimum: 0,
      },
      status: {
        type: "string",
        enum: ["in_progress", "finished"],
      },
      includeEditLink: {
        type: "boolean",
      },
      sort: {
        enum: ["asc", "desc"],
      },
    },
    additionalProperties: true,
  };

  const validate = ajv.compile(schema);
  const valid = validate(filters);
  if (!valid) {
    return res.status(400).send(validate.errors);
  }

  const res_filters = filters.responseFilter
    ? JSON.parse(filters.responseFilter)
    : [];
  delete filters.responseFilter;
  const response = await fetch(
    `https://api.fillout.com/v1/api/forms/${formId}/submissions?${new URLSearchParams(
      filters
    )}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );
  let data = await response.json();
  if (!data.responses) {
    return res.status(data.statusCode).json(data);
  }

  if (res_filters.length > 0) {
    console.log(res_filters);
    if (res_filters?.condition === "equals") {
      data.responses.map((sub) =>
        sub.questions.filter(({ id }) => res_filters.value === id)
      );
    } else if (res_filters?.condition === "does_not_equal") {
      data.responses.map((sub) =>
        sub.questions.filter(({ id }) => res_filters.value !== id)
      );
    } else if (res_filters?.condition === "greater_than") {
      data.responses.map((sub) =>
        sub.questions.filter(({ id }) => res_filters.value > id)
      );
    } else if (res_filters?.condition === "less_than") {
      data.responses.map((sub) =>
        sub.questions.filter(({ id }) => res_filters.value < id)
      );
    }
  }
  return res.json(data);
});

module.exports = router;
