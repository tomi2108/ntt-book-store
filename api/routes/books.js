const express = require("express");
const { addBook, getAllBooks, getBookById } = require("../controllers/books");

const router = express.Router();

router.get("/", (_, res) => {
  getAllBooks()
    .then((books) => res.json(books))
    .catch((err) => res.status(400).json(err.message));
});

router.post("/", (req, res) => {
  const book = req.body;
  addBook(book)
    .then((newBook) => res.status(200).json(newBook))
    .catch((err) => res.status(400).json(err.message));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  getBookById(id)
    .then((book) => res.json(book))
    .catch((err) => res.status(400).json(err.message));
});

module.exports = router;
