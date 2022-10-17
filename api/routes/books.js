const express = require("express");
const {
  addBook,
  getAllBooks,
  getBookById,
  addReview,
  getReviews,
  deleteReview,
} = require("../controllers/books");
const { getUserById } = require("../controllers/users");
const { tokenExtractor } = require("../utils/middleware");


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

router.post("/:id/review",tokenExtractor, async (req, res) => {
  const { id } = req.params;
  const { text, userId,rating } = req.body;
  const decodedToken = req.token;
  if(!decodedToken) res.status(400).json({ message:"Invalid token" }).end();
  await getUserById(decodedToken.id);

  getReviews(id)
    .then((reviews) => {
      if(reviews.some((r) => r.userId === userId)) throw new Error("User already reviewed this book");

      const review = {
        text,
        bookId: +id,
        userId,
        rating,
      };

      addReview(review)
        .then((newReview) => res.status(200).json(newReview))
        .catch((err) => res.status(400).json(err.message));
    })
    .catch((err) => res.status(400).json(err.message));
});

router.delete("/:bookId/review/:reviewId",tokenExtractor, async (req, res) => {
  const { bookId, reviewId } = req.params;

  const decodedToken = req.token;
  if(!decodedToken) res.status(400).json({ message:"Invalid token" }).end();
  await getUserById(decodedToken.id);

  getReviews(bookId)
    .then((reviews) => {
      const review = reviews.find((r) => r.id === +reviewId);

      if(!review) throw new Error("Review not found");
      if(review.userId !== decodedToken.id) throw new Error("Unauthorized");


      deleteReview(reviewId)
        .then((deletedReview) => res.status(200).json(deletedReview))
        .catch((err) => res.status(400).json(err.message));


    }).catch((err) => res.status(400).json(err.message));
} );



module.exports = router;
