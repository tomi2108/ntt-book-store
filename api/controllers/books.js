const Book = require("../db/models/Book");
const Review = require("../db/models/Review");
const Author = require("../db/models/Author");
const User = require("../db/models/User");

Book.belongsTo(Author, { foreignKey: "authorId" });
Review.belongsTo(Book, { foreignKey: "bookId" });
Review.belongsTo(User, { foreignKey: "userId" });

const getAllBooks = async () => {
  try {
    return await Book.findAll({ include: Author });
  } catch (err) {
    throw new Error("Error while getting all books");
  }
};

const getBookById = async (id) => {
  try {
    const book = await Book.findByPk(id, { include: Author });
    const reviews = await Review.findAll({
      include: { model: User, attributes: ["username"] },
      where: { bookId: id },
    });
    const bookWithReviews = { ...book.dataValues, reviews };
    return bookWithReviews;
  } catch (err) {
    throw new Error("Error while getting book by id");
  }
};

const addBook = async (book) => {
  try {
    return await Book.create(book);
  } catch (err) {
    const field = err.errors[0].path;
    throw new Error(`Error with ${field} while adding book`);
  }
};

const addReview = async (review) => {
  try {
    return await Review.create(review);
  } catch (err) {
    const field = err.errors[0].path;
    throw new Error(`Error with ${field} while reviewing book`);
  }
};

module.exports = { addBook, getAllBooks, getBookById, addReview };
