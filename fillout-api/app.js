const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const indexRouter = require("./routes/index");
const filloutRouter = require("./routes/fill-out");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/v1/api", filloutRouter);

// Check environment
if (process.env.NODE_ENV === "production") {
  console.log("Running in server environment");
} else {
  console.log("Running in local environment");
}

module.exports = app;
