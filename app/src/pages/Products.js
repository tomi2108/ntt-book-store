import BookCard from "components/Books/BookCard.js";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { getBooks } from "services/books.js";

const Products = ({ cartActions,user }) => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    getBooks()
      .then((books) => setBooks(books))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container style={{ color: "white" }}>
      <Row>
        {books &&
          books.sort((a,b) => a.Author.name.localeCompare(b.Author.name)).map((book) => {
            return <BookCard user={user} key={book.id} book={book} addToCart={cartActions.addToCart} />;
          })}
      </Row>
    </Container>
  );
};

export default Products;
