const users = [
  { username: "John", password: "password", booksBoughtIds: [] },
  { username: "Mike", password: "secret", booksBoughtIds: [] },
];
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    authorId: 1,
    price: 4.99,
    copiesInStock: 500,
  },
  {
    id: 2,
    title: "Harry Potter and the Sorcerer's Stone",
    authorId: 2,
    price: 10.99,
    copiesInStock: 300,
  },
  {
    id: 3,
    title: "Lord of the Rings",
    authorId: 3,
    price: 6.6,
    copiesInStock: 13,
  },
  {
    id: 4,
    title: "The Hobbit",
    authorId: 3,
    price: 5.37,
    copiesInStock: 7000,
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    authorId: 4,
    price: 2.5,
    copiesInStock: 2,
  },
];
const authors = [
  {
    id: 1,
    name: "F. Scott Fitzgerald",
    dateOfBirth: "1896-09-24",
    booksIds: [1],
  },
  {
    id: 2,
    name: "J.K. Rowling",
    dateOfBirth: "1965-07-31",
    booksIds: [2],
  },
  {
    id: 3,
    name: "J.R.R. Tolkien",
    dateOfBirth: "1892-01-03",
    booksIds: [3, 4],
  },
  {
    id: 4,
    name: "J.D. Salinger",
    dateOfBirth: "1919-01-01",
    booksIds: [5],
  },
];

const Book = require("../models/Book.js");
const Author = require("../models/Author.js");
const User = require("../models/User.js");

const resetDb = async () => {
  await Book.sync({ force: true });
  await Author.sync({ force: true });
  await User.sync({ force: true });

  await Promise.all(
    users.map(async (user) => {
      await User.create(user);
    })
  );

  await Promise.all(
    books.map(async (book) => {
      await Book.create(book);
    })
  );

  await Promise.all(
    authors.map(async (author) => {
      await Author.create(author);
    })
  );
  console.log("Database reseted");
};

resetDb();
