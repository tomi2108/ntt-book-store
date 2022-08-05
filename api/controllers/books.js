const Book = require("../db/models/Book");
const Comment = require("../db/models/Comment");
const Author = require("../db/models/Author");
const User = require("../db/models/User");

Book.belongsTo(Author, { foreignKey: "authorId" });
Comment.belongsTo(Book, { foreignKey: "bookId" });
Comment.belongsTo(User, { foreignKey: "userId" });

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
    const comments = await Comment.findAll({
      include: { model: User, attributes: ["username"] },
      where: { bookId: id },
    });
    const bookWithComments = { ...book.dataValues, comments };
    return bookWithComments;
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

const addComment = async (comment) => {
  try {
    return await Comment.create(comment);
  } catch (err) {
    const field = err.errors[0].path;
    throw new Error(`Error with ${field} while commenting book`);
  }
};

module.exports = { addBook, getAllBooks, getBookById, addComment };
