import { AppContext } from "App";
import BookComments from "components/Books/BookComments";
import BookDescription from "components/Books/BookDescription";
import BookRecommendations from "components/Books/BookRecommendations";
import { useBookById } from "hooks/useBookById.js";
import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import BookCoverPlaceholder from "static/BookCoverPlaceholder";

const BookDetails = () => {
  const { styles } = useContext(AppContext);
  const { id } = useParams();

  const { book,outOfStock,recommendations }= useBookById(id);


  return (
    <>
      {book ? (
        <Container>
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
              <BookDescription book={book} outOfStock={outOfStock} />
              <BookRecommendations authorName={book.Author.name} recommendations={recommendations} />
            </Col>
          </Row>
          <Row>
            <Col>
              <BookComments bookComments={book.comments} bookId={book.id}/>
            </Col>
          </Row>
        </Container>
      ) : (
        <Container>Loading...</Container>
      )}
    </>
  );
};

export default BookDetails;
