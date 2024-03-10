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
  data = { toma: "are you a tomato?" };
  res.json(data);
});

router.get("/forms/:formId", async function (req, res, next) {
  const formId = req.params.formId;
  if (!formId) {
    return res.status(400).send("formId is required");
  }
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

  if (data.error) {
    return res.status(data.statusCode).json(data);
  }

  res.json(data);
});

router.get("/forms/:formId/submissions", async function (req, res, next) {
  const formId = req.params.formId;
  if (!formId) {
    return res.status(400).send("formId is required");
  }
  const filters = req.query;
  const queryParams = {
    ...req.query,
    limit: req.query.limit ? parseInt(req.query.limit) : undefined,
    offset: req.query.offset ? parseInt(req.query.offset) : undefined,
  };

  const validate = ajv.compile(submission_schema);
  const valid_schema = validate(queryParams);
  if (!valid_schema) {
    return res.status(400).send(validate.errors);
  }

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

  res.json(data);
});

router.get("/forms/:formId/filteredResponses", async function (req, res, next) {
  const formId = req.params.formId;
  if (!formId) {
    return res.status(400).send("formId is required");
  }
  const filters = req.query;
  const filter_schema = {
    type: "array",
    items: {
      type: "object",
      properties: {
        id: {
          type: "string",
        },
        condition: {
          type: "string",
          enum: ["equals", "does_not_equal", "greater_than", "less_than"],
        },
        value: {
          type: ["integer", "string"],
        },
      },
      required: ["id", "condition", "value"],
    },
    additionalProperties: false,
  };

  const queryParams = {
    ...req.query, // Assuming req.query contains the query parameters from the URL
    limit: req.query.limit ? parseInt(req.query.limit) : undefined,
    offset: req.query.offset ? parseInt(req.query.offset) : undefined,
  };

  const validate = ajv.compile(submission_schema);
  const valid_schema = validate(queryParams);
  if (!valid_schema) {
    return res.status(400).send(validate.errors);
  }

  const res_filters = filters.responseFilter
    ? JSON.parse(filters.responseFilter)
    : [];

  if (res_filters.length > 0) {
    const validate_res = ajv.compile(filter_schema);
    const valid_res_filter = validate_res(res_filters);
    if (!valid_res_filter) {
      return res.status(400).json(validate_res.errors);
    }
    delete filters.responseFilter;
  }

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
    data = filterResponses(data, res_filters);
  }
  return res.json(data);
});

module.exports = router;

const filterResponses = (data, conditions) => {
  // Filter responses based on conditions
  const filteredResponses = data.responses.filter((response) => {
    return conditions.every((cond) => {
      const { id, value, condition } = cond;
      const question = response.questions.find((q) => q.id === id);

      if (!question) return false; // If question not found, submission doesn't meet condition

      // Apply conditions based on the operator
      switch (condition) {
        case "equals":
          return question.value === value;
        case "does_not_equal":
          return question.value !== value;
        case "greater_than":
          // Compare as ISO datetime if value is a string, otherwise as number
          const questionValueGT = isNaN(Date.parse(question.value))
            ? parseFloat(question.value)
            : new Date(question.value);
          const conditionValueGT = isNaN(Date.parse(value))
            ? parseFloat(value)
            : new Date(value);
          return questionValueGT > conditionValueGT;
        case "less_than":
          // Compare as ISO datetime if value is a string, otherwise as number
          const questionValueLT = isNaN(Date.parse(question.value))
            ? parseFloat(question.value)
            : new Date(question.value);
          const conditionValueLT = isNaN(Date.parse(value))
            ? parseFloat(value)
            : new Date(value);
          return questionValueLT < conditionValueLT;
        default:
          return false;
      }
    });
  });

  return {
    responses: filteredResponses,
    totalResponses: filteredResponses.length,
  };
};

const submission_schema = {
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
