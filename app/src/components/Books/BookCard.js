import { AppContext } from "App";
import TransactionButton from "components/Utils/TransactionButton.js";
import { useContext } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BookCoverPlaceholder from "static/BookCoverPlaceholder.js";

const BookCard = ({ book }) => {
  const { styles, user, cartActions } = useContext(AppContext);

  const outOfStock = book.copiesInStock === 0;

  const navigate = useNavigate();

  return (
    <Col style={styles.bookCard.wrapper} xs={12} sm={6} md={4} lg={3}>
      <Card style={styles.bookCard.container}>
        <Card.Body style={styles.bookCard.body}>
          <Row
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/book/${book.id}`)}
          >
            <Card.Title style={styles.bookCard.title}>
              <strong>{book.title} </strong>
            </Card.Title>
            {book.imageUrl ? (
              <img
                style={styles.bookCard.image}
                src={book.imageUrl}
                alt={book.title}
              />
            ) : (
              <BookCoverPlaceholder style={styles.bookCard.image} />
            )}
            <div style={styles.bookCard.subtitle}>
              <Card.Subtitle>By {book.Author.name} </Card.Subtitle>
              <Card.Text>
                {outOfStock ? (
                  <span style={styles.bookCard.outOfStock}>Out of stock</span>
                ) : (
                  <span>{book.copiesInStock} in stock</span>
                )}
              </Card.Text>
            </div>
          </Row>
          <Row>
            <div>
              US<strong>${book.price}</strong>
            </div>
            <TransactionButton
              disabled={user ? outOfStock : true}
              onClick={() => cartActions.addToCart(book)}
              defaultText="Add to cart"
              completedText="Added"
              errorText="Not added"
            />
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BookCard;
