const express = require("express");
const {
  addBook,
  getAllBooks,
  getBookById,
  addReview,
} = require("../controllers/books");

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

router.post("/:id/review", (req, res) => {
  const { id } = req.params;
  const { text, userId,rating } = req.body;
  const review = {
    text,
    bookId: +id,
    userId,
    rating,
  };
  addReview(review)
    .then((newReview) => res.status(200).json(newReview))
    .catch((err) => res.status(400).json(err.message));
});

module.exports = router;
