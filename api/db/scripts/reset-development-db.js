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
    copiesInStock: 0,
    imageUrl:"https://http2.mlstatic.com/D_NQ_NP_836779-MLA48787050689_012022-O.jpg"
  },
  {
    id: 2,
    title: "Harry Potter and the Sorcerer's Stone",
    authorId: 2,
    price: 10.99,
    copiesInStock: 300,
    imageUrl:"https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg"
  },
  {
    id: 3,
    title: "The Lord of the Rings",
    authorId: 3,
    price: 6.6,
    copiesInStock: 13,
    imageUrl:"https://s26162.pcdn.co/wp-content/uploads/2017/05/the-lord-of-the-rings-book-cover.jpg?w=640"
  },
  {
    id: 4,
    title: "The Hobbit",
    authorId: 3,
    price: 5.37,
    copiesInStock: 7000,
    imageUrl: "https://i.pinimg.com/originals/27/cf/91/27cf91f605923223613909c7b9d2219f.jpg"
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    authorId: 4,
    price: 2.5,
    copiesInStock: 2,
    imageUrl:"https://i.pinimg.com/originals/59/7f/b4/597fb48556f2d63ae86cb49197d0b477.jpg"
  },
  {
    id: 6,
    title: "Hamlet",
    authorId: 5,
    price: 1.99,
    copiesInStock: 10,
    imageUrl:"https://i.pinimg.com/originals/01/bd/c2/01bdc285d890b422504f10604b619fea.jpg"
  },
  {
    id: 7,
    title: "Harry Potter and the Chamber of Secrets",
    authorId: 2,
    price: 10.99,
    copiesInStock: 300,
    imageUrl:"https://images-na.ssl-images-amazon.com/images/I/91OINeHnJGL.jpg"
  },
  {
    id: 8,
    title: "Alice's Adventures in Wonderland",
    authorId: 6,
    price: 1.99,
    copiesInStock: 10,
    imageUrl:"https://images-na.ssl-images-amazon.com/images/I/41oPBbjlskL._SX331_BO1,204,203,200_.jpg"
  },
  {
    id: 9,
    title:"Pride and Prejudice",
    authorId: 7,
    price: 1.99,
    copiesInStock: 0,
    imageUrl:"https://i.pinimg.com/originals/82/eb/cf/82ebcf8435a2d403014064eee495d8f2.jpg"
  },
  {
    id: 10,
    title:"The invisible man",
    authorId:8,
    price:7.99,
    copiesInStock:230,
    imageUrl:"https://m.media-amazon.com/images/I/41urypNXYyL.jpg"
  },
  {
    id:11,
    title:"Othello",
    authorId:5,
    price:1.99,
    copiesInStock:10,
    imageUrl:"https://m.media-amazon.com/images/I/511N5LJjowL.jpg"
  },
  {
    id:12,
    title:"Romeo and Juliet",
    authorId:5,
    price:1.99,
    copiesInStock:20,
    imageUrl:"https://i.pinimg.com/originals/c8/7b/0f/c87b0f154ab3b6bf4ef875b97ba392e7.jpg"
  }
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
    booksIds: [2,7],
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
  {
    id: 5,
    name: "William Shakespeare",
    dateOfBirth: "1564-04-23",
    booksIds: [6,11,12],
  },
  {
    id: 6,
    name: "Lewis Carroll",
    dateOfBirth: "1832-01-27",
    booksIds: [8],
  },
  {
    id: 7,
    name: "Jane Austen",
    dateOfBirth: "1775-12-16",
    booksIds: [9],
  },
  {
    id: 8,
    name: "H.G. Wells",
    dateOfBirth: "1866-09-21",
    booksIds: [10],
  }
];

const Book = require("../models/Book.js");
const Author = require("../models/Author.js");
const User = require("../models/User.js");
const sequelize = require("../index.js");

const resetDb = async () => {
  await sequelize.authenticate();
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
