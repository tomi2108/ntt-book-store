const cors = require("cors");
const express = require("express");
const morgan = require("morgan");

const api = express();
const bookRouter = require("./routes/books.js");
const userRouter = require("./routes/users.js");

api.use(cors());

if (process.env.NODE_ENV === "development") api.use(morgan("tiny"));
if (process.env.NODE_ENV !== "development") api.use(express.static("build"));

api.use(express.json());

api.use("/api/books", bookRouter);
api.use("/api/users", userRouter);

module.exports = api;
