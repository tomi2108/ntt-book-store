const Book = require("../db/models/Book");
const Author = require("../db/models/Author");

Book.belongsTo(Author, { foreignKey: "authorId" });

const getAllBooks = async () => {
  try {
    return await Book.findAll({ include: Author });
  } catch (err) {
    throw new Error("Error while getting all books");
  }
};

const getBookById = async (id) => {
  try {
    return await Book.findByPk(id,{ include: Author });
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

module.exports = { addBook, getAllBooks, getBookById };
