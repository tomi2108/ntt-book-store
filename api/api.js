const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const api = express();
const bookRouter = require("./routes/books.js");

api.use(cors());

if (process.env.NODE_ENV === "development") api.use(morgan("tiny"));
api.use(express.static("build"));

api.use(express.json());

api.use("/api/books", bookRouter);

module.exports = api;
