const express = require("express");
const mongoose = require("mongoose");
const config = require("./utils/config");
const blogRouter = require("./controllers/blogs");
const logger = require("./utils/logger");

const app = express();

logger.info("connecting to", config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI, { family: 4 })
  .then(() => {
    logger.info("connected to MongoDB");
  })
  .catch((error) => {
    logger.error("error connection to MongoDB:", error.message);
  });

app.use(express.json());
app.use("/api/blogs", blogRouter);

const errorHandler = (error, request, response, next) => {
  if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  }
  next(error);
};

app.use(errorHandler);

module.exports = app;
