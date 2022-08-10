const cors = require("cors");
const express = require("express");

const api = express();
const bookRouter = require("./routes/books.js");
const userRouter = require("./routes/users.js");

api.use(cors());

if (process.env.NODE_ENV === "development") {
  const morgan = require("morgan");
  api.use(morgan("tiny"));
}

if (process.env.NODE_ENV !== "development") api.use(express.static("build"));

api.use(express.json());

api.use("/api/books", bookRouter);
api.use("/api/users", userRouter);
api.get("/health", (req, res) => res.send("OK"));

api.get("/*", (req, res) => {
  res.sendFile(this.path.join(__dirname, "path/to/your/index.html"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});


module.exports = api;
