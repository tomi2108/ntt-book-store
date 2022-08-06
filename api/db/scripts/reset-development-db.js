const bcrypt = require("bcrypt");
const users = [
  {
    id: 1,
    username: "John",
    password: "password",
    booksBoughtIds: [],
    dateOfBirth: "2000-01-01",
    cart: [],
  },
  {
    id: 2,
    username: "Mike",
    password: "secret",
    booksBoughtIds: [],
    dateOfBirth: "2001-07-01",
    cart: [],
  },
];
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    authorId: 1,
    price: 4.99,
    copiesInStock: 0,
    imageUrl:
      "https://http2.mlstatic.com/D_NQ_NP_836779-MLA48787050689_012022-O.jpg",
    description:
      "F. Scott Fitzgerald's novel,The Great Gatsby, follows Jay Gatsby, a man who orders his life around one desire: to be reunited with Daisy Buchanan, the love he lost five years earlier. Gatsby's quest leads him from poverty to wealth, into the arms of his beloved.",
  },
  {
    id: 2,
    title: "Harry Potter and the Sorcerer's Stone",
    authorId: 2,
    price: 10.99,
    copiesInStock: 300,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg",
    description:
      "The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry.",
  },
  {
    id: 3,
    title: "The Lord of the Rings",
    authorId: 3,
    price: 6.6,
    copiesInStock: 13,
    imageUrl:
      "https://s26162.pcdn.co/wp-content/uploads/2017/05/the-lord-of-the-rings-book-cover.jpg?w=640",
    description:
      "The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil. Its many worlds and creatures were drawn from Tolkien's extensive knowledge of philology and folklore.",
  },
  {
    id: 4,
    title: "The Hobbit",
    authorId: 3,
    price: 5.37,
    copiesInStock: 7000,
    imageUrl:
      "https://i.pinimg.com/originals/27/cf/91/27cf91f605923223613909c7b9d2219f.jpg",
    description:
      "The Hobbit is set within Tolkien's fictional universe and follows the quest of home-loving Bilbo Baggins, the titular hobbit, to win a share of the treasure guarded by a dragon named Smaug. Bilbo's journey takes him from his light-hearted, rural surroundings into more sinister territory.",
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    authorId: 4,
    price: 2.5,
    copiesInStock: 2,
    imageUrl:
      "https://i.pinimg.com/originals/59/7f/b4/597fb48556f2d63ae86cb49197d0b477.jpg",
    description:
      "The Catcher in the Rye, novel by J.D. Salinger published in 1951. The novel details two days in the life of 16-year-old Holden Caulfield after he has been expelled from prep school. Confused and disillusioned, Holden searches for truth and rails against the \"phoniness\" of the adult world.",
  },
  {
    id: 6,
    title: "Hamlet",
    authorId: 5,
    price: 1.99,
    copiesInStock: 10,
    imageUrl:
      "https://i.pinimg.com/originals/01/bd/c2/01bdc285d890b422504f10604b619fea.jpg",
    description:
      "The ghost of the King of Denmark tells his son Hamlet to avenge his murder by killing the new king, Hamlet's uncle. Hamlet feigns madness, contemplates life and death, and seeks revenge. His uncle, fearing for his life, also devises plots to kill Hamlet.",
  },
  {
    id: 7,
    title: "Harry Potter and the Chamber of Secrets",
    authorId: 2,
    price: 10.99,
    copiesInStock: 300,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/91OINeHnJGL.jpg",
    description:
      "The plot follows Harry's second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school's corridors warn that the \"Chamber of Secrets\" has been opened and that the \"heir of Slytherin\" would kill all pupils who do not come from all-magical families.",
  },
  {
    id: 8,
    title: "Alice's Adventures in Wonderland",
    authorId: 6,
    price: 1.99,
    copiesInStock: 10,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/41oPBbjlskL._SX331_BO1,204,203,200_.jpg",
    description:
      "Alice's Adventures in Wonderland by Lewis Carroll is a story about Alice who falls down a rabbit hole and lands into a fantasy world that is full of weird, wonderful people and animals. It is classic children's book that is also popular with adults. Personally, at 16, I found the book strange and uninteresting.",
  },
  {
    id: 9,
    title: "Pride and Prejudice",
    authorId: 7,
    price: 1.99,
    copiesInStock: 0,
    imageUrl:
      "https://i.pinimg.com/originals/82/eb/cf/82ebcf8435a2d403014064eee495d8f2.jpg",
    description:
      "Pride and Prejudice follows the turbulent relationship between Elizabeth Bennet, the daughter of a country gentleman, and Fitzwilliam Darcy, a rich aristocratic landowner. They must overcome the titular sins of pride and prejudice in order to fall in love and marry.",
  },
  {
    id: 10,
    title: "The invisible man",
    authorId: 8,
    price: 7.99,
    copiesInStock: 230,
    imageUrl: "https://m.media-amazon.com/images/I/41urypNXYyL.jpg",
    description:
      "The Invisible Man, science-fiction novel by H.G. Wells, published in 1897. The story concerns the life and death of a scientist named Griffin who has gone mad. Having learned how to make himself invisible, Griffin begins to use his invisibility for nefarious purposes, including murder.",
  },
  {
    id: 11,
    title: "Othello",
    authorId: 5,
    price: 1.99,
    copiesInStock: 10,
    imageUrl: "https://m.media-amazon.com/images/I/511N5LJjowL.jpg",
    description:
      "The play is set in motion when Othello, a heroic black general in the service of Venice, appoints Cassio and not Iago as his chief lieutenant. Jealous of Othello's success and envious of Cassio, Iago plots Othello's downfall by falsely implicating Othello's wife, Desdemona, and Cassio in a love affair.",
  },
  {
    id: 12,
    title: "Romeo and Juliet",
    authorId: 5,
    price: 1.99,
    copiesInStock: 20,
    imageUrl:
      "https://i.pinimg.com/originals/c8/7b/0f/c87b0f154ab3b6bf4ef875b97ba392e7.jpg",
    description:
      "An age-old vendetta between two powerful families erupts into bloodshed. A group of masked Montagues risk further conflict by gatecrashing a Capulet party. A young lovesick Romeo Montague falls instantly in love with Juliet Capulet, who is due to marry her father's choice, the County Paris.",
  },
  {
    id: 13,
    title: "Brave New World",
    authorId: 9,
    price: 5.99,
    copiesInStock: 110,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/62/BraveNewWorld_FirstEdition.jpg",
    description:
      "The novel examines a futuristic society, called the World State, that revolves around science and efficiency. In this society, emotions and individuality are conditioned out of children at a young age, and there are no lasting relationships because \"every one belongs to every one else\" (a common World State dictum).",
  },
  {
    id: 14,
    title: "Harry Potter and the Prisoner of Azkaban",
    authorId: 2,
    price: 10.99,
    copiesInStock: 300,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/81lAPl9Fl0L.jpg",
    description:
      "The book follows Harry Potter, a young wizard, in his third year at Hogwarts School of Witchcraft and Wizardry. Along with friends Ronald Weasley and Hermione Granger, Harry investigates Sirius Black, an escaped prisoner from Azkaban, the wizard prison, believed to be one of Lord Voldemort's old allies.",
  },
  {
    id: 15,
    title: "Tender is the Night",
    authorId: 1,
    price: 1.99,
    copiesInStock: 500,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/25/Tender_Is_the_Night_%281934_1st_ed_dust_jacket%29.jpg",
    description:
      "Tender Is the Night, semiautobiographical novel by F. Scott Fitzgerald, published in 1934. It is the story of a psychiatrist who marries one of his patients; as she slowly recovers, she exhausts his vitality until he is, in Fitzgerald's words, un homme épuisé (\"a used-up man\").",
  },
  {
    id: 16,
    title: "The legend of Sigurd & Gurdun",
    authorId: 3,
    price: 3.5,
    copiesInStock: 30,
    imageUrl:
      "https://d29xot63vimef3.cloudfront.net/image/jrr-tolkien-books/1-4.jpg",
    description:
      "Many years ago, J.R.R. Tolkien composed his own version of the great legend of Northern antiquity, recounted here in The Legend of Sigurd and Gudrún. In the Lay of the Völsungs is told the ancestry of the great hero Sigurd, the slayer of Fáfnir, most celebrated of dragons; of his awakening of the Valkyrie Brynhild, who slept surrounded by a wall of fire, and of their betrothal; and of his coming to the court of the great princes who were named the Niflungs (or Nibelungs), with whom he entered into blood-brotherhood. ",
  },
];
const authors = [
  {
    id: 1,
    name: "F. Scott Fitzgerald",
    dateOfBirth: "1896-09-24",
    booksIds: [1, 15],
  },
  {
    id: 2,
    name: "J.K. Rowling",
    dateOfBirth: "1965-07-31",
    booksIds: [2, 7, 14],
  },
  {
    id: 3,
    name: "J.R.R. Tolkien",
    dateOfBirth: "1892-01-03",
    booksIds: [3, 4, 16],
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
    booksIds: [6, 11, 12],
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
  },
  {
    id: 9,
    name: "Aldous Huxley",
    dateOfBirth: "1894-01-01",
    booksIds: [13],
  },
];
const comments = [
  {
    id: 1,
    bookId: 1,
    userId: 1,
    text: "This is a great book",
  },
  {
    id: 2,
    bookId: 1,
    userId: 2,
    text: "Awesome book",
  },
];

const Book = require("../models/Book.js");
const Author = require("../models/Author.js");
const User = require("../models/User.js");
const Comment = require("../models/Comment.js");
const sequelize = require("../index.js");

const hashPasswords = async () => {
  users.forEach(async (user) => {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
  });
};

async function resetDb() {
  await hashPasswords();
  await sequelize.authenticate();
  await Book.sync({ force: true });
  await Author.sync({ force: true });
  await User.sync({ force: true });
  await Comment.sync({ force: true });

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

  await Promise.all(
    comments.map(async (comment) => {
      await Comment.create(comment);
    })
  );

  console.log("Database reseted");
}

resetDb();
