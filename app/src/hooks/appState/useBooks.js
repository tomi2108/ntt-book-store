import { useEffect, useState } from "react";
import { getBooks } from "services/books.js";

export const useBooks = () => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    getBooks()
      .then((books) => setBooks(books))
      .catch((err) => console.log(err));
  }, []);

  return [books];
};
