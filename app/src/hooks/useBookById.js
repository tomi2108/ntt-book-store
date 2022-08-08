import { useEffect, useState } from "react";
import { getBookById, getBooks } from "services/books.js";

export const useBookById = (id) => {
  const [book, setBook] = useState(null);
  const [outOfStock, setOutOfStock] = useState(false);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    getBookById(id).then((bookData) => {
      setBook(bookData);
      setOutOfStock(bookData.copiesInStock === 0);
      getBooks()
        .then((books) => {
          setRecommendations(
            books
              .filter((b) => b.Author.name === bookData.Author.name)
              .filter((b) => b.id !== bookData.id)
          );
        })
        .catch((err) => console.log(err));
    });
  }, [id]);



  return { book, outOfStock, recommendations };
};