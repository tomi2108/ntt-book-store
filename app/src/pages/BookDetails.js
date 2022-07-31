import BookDescription from "components/Books/BookDescription.js";
import BookRecommendations from "components/Books/BookRecommendations.js";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getBookById } from "services/books.js";
import BookCoverPlaceholder from "static/BookCoverPlaceholder.js";
import styles from "styles/styles.js";

const BookDetails = ({ user, addToCart }) => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [outOfStock, setOutOfStock] = useState(false);

  useEffect(() => {
    getBookById(id).then((bookData) => {
      setBook(bookData);
      setOutOfStock(bookData.copiesInStock === 0);
    });
  }, [id]);

  return (
    <>
      {book ? (
        <Container style={{ color: "white" }}>
          <Row>
            <Col>
              <h1>{book.title}</h1>
              <h3>By {book.Author.name}</h3>
              {book.imageUrl ? (
                <img
                  style={styles.bookDetails.image}
                  src={book.imageUrl}
                  alt={book.title}
                />
              ) : (
                <BookCoverPlaceholder style={styles.bookDetails.image} />
              )}
            </Col>
            <Col>
              <BookDescription
                user={user}
                book={book}
                outOfStock={outOfStock}
                addToCart={addToCart}
              />
              <BookRecommendations
                user={user}
                book={book}
                addToCart={addToCart}
              />
            </Col>
          </Row>
          <Row></Row>
        </Container>
      ) : (
        <div style={{ color: "white" }}>Loading...</div>
      )}
    </>
  );
};

export default BookDetails;
