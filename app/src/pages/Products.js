import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import BookCard from "../components/BookCard.js";
import { getBooks } from "../services/books.js";

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
          books.sort((a,b) => a.Author.name.localeCompare(b.Author.name)).map((book) => {
            return <BookCard key={book.id} book={book} addCart={addToCart} />;
          })}
      </Row>
    </Container>
  );
};

export default Products;
