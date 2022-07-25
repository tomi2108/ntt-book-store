import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { getBooks } from "../services/books.js";
import BookCard from "./BookCard.js";

const Products = ({ addToCart }) => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    getBooks()
      .then((books) => setBooks(books))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container style={{ color: "white" }}>
      Products
      <Row>
        {books &&
          books.map((book) => {
            return <BookCard key={book.id} book={book} addCart={addToCart} />;
          })}
      </Row>
    </Container>
  );
};

export default Products;
