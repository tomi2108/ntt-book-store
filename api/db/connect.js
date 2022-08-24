const sequelize = require("./index.js");
const User = require("./models/User.js");
const Book = require("./models/Book.js");
const Author = require("./models/Author.js");
const Review = require("./models/Review.js");

const connectToDb = async () => {
  try {
    await sequelize.authenticate();
    await User.sync();
    await Book.sync();
    await Author.sync();
    await Review.sync();
  } catch (_) {
    console.error("Error connecting to data base", _);
  }
};

module.exports = connectToDb;
