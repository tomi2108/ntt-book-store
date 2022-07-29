import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { getBooks } from "../services/books.js";
import BookTableRow from "./BookTableRow.js";

const BookRecommendations = ({ book, addToCart, user }) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    getBooks()
      .then((books) => {
        setRecommendations(
          books
            .filter((b) => b.Author.name === book.Author.name)
            .filter((b) => b.id !== book.id)
        );
      })
      .catch((err) => console.log(err));
  }, [book]);

  return (
    <>
      <h5>Other books by {book.Author.name}</h5>
      <Table variant="dark" bordered hover>
        <tbody>
          {recommendations &&
            recommendations.map((b) => {
              const outOfStock = b.copiesInStock === 0;
              return (
                <BookTableRow
                  key={b.id}
                  book={b}
                  addToCart={addToCart}
                  user={user}
                  outOfStock={outOfStock}
                />
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

export default BookRecommendations;
