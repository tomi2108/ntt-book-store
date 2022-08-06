import { AppContext } from "App";
import BookTableRow from "components/Books/BookTableRow.js";
import { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { getBooks } from "services/books.js";

const BookRecommendations = ({ book }) => {
  const [recommendations, setRecommendations] = useState([]);
  const { theme } = useContext(AppContext);

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
      <Table variant={theme} bordered hover>
        <tbody>
          {recommendations &&
            recommendations.map((b) => {
              const outOfStock = b.copiesInStock === 0;
              return (
                <BookTableRow key={b.id} book={b} outOfStock={outOfStock} />
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

export default BookRecommendations;
