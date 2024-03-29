# Fillout_assesment

This project is a Node.js API for the Fillout Assessment. It provides endpoints retreiving forms, submissions, submissions with custom filtering

## Installation

To install the project, follow these steps:

1. Clone the repository
2. Navigate to the project directory
3. Run `npm install`

## Usage

To start the server, run `npm start`. The API will be available at `http://localhost:3000`.

## API Endpoints

The API uses `/v1/api` as the entry point. Below are the available endpoints:

- `/v1/api/forms`: GET request to retrieve a form.
- `/v1/api/forms/:id`: GET request to retrieve a specific form by its formID.
- `/v1/api/forms/:id/submissions/`: GET request to retrieve submissions by its formID with filters. Available filters are:

  - `limit` (optional): The maximum number of submissions to retrieve per request. Must be a number between 1 and 150. Default is 150.
  - `afterDate` (optional): A date string to filter submissions submitted after this date. The date should be in the format: YYYY-MM-DDTHH:mm:ss.sssZ. For example: 2024-05-16T23:20:05.324Z.
  - `beforeDate` (optional): A date string to filter submissions submitted before this date. The date should be in the format: YYYY-MM-DDTHH:mm:ss.sssZ. For example: 2024-05-16T23:20:05.324Z.
  - `offset` (optional): The starting position from which to fetch the submissions. Default is 0.
  - `status` (optional): Pass `in_progress` to get a list of in-progress (unfinished) submissions. By default, only finished submissions are returned.
  - `includeEditLink` (optional): Pass `true` to include a link to edit the submission as `editLink`.
  - `sort` (optional): Can be `asc` or `desc`, defaults to `asc`.

- `/v1/api/forms/:id/filteredResponses`:GET request to retrieve submissions by its formID. Available filters are everything from `/v1/api/forms/:id/submissions/` with custom filters
  - `filters` (optional): An array of filter objects to apply to the responses. Each filter object should have the following properties:
    - `id`: The ID of the question to filter by.
    - `condition`: The condition to apply. Can be one of the following: `equals`, `does_not_equal`, `greater_than`, `less_than`.
    - `value`: The value to compare the question's answer to. Can be a string or an integer.

Please refer to the `fill-out.js` routes for more details on how these endpoints are implemented.
