import { Card, Col, Row } from "react-bootstrap";
import BookCoverPlaceholder from "../static/BookCoverPlaceholder.js";
import "../styles/bookCard.css";
import TransactionButton from "./TransactionButton.js";


const BookCard = ({ book, addCart }) => {

  const outOfStock = book.copiesInStock === 0;

  return (
    <Col className="card-wrapper" xs={12} sm={6} md={4} lg={3} >
      <Card className="card-container">
        <Card.Body className="card-body">
          <Row>
            <Card.Title className="card-title"><strong>{book.title} </strong></Card.Title>
            {book.imageUrl? <img className="card-image" src={book.imageUrl} alt={book.title} /> : <BookCoverPlaceholder className="card-image" />}
            <div className="card-subtitle">
              <Card.Subtitle>By {book.Author.name} </Card.Subtitle>
              <Card.Text>{outOfStock? <div className="out-of-stock">Out of stock</div> : <div>{book.copiesInStock} in stock</div>}</Card.Text>
            </div>
          </Row>
          <Row>
            <div>US<strong>${book.price}</strong></div>
            <TransactionButton disabled={outOfStock} onClick={() => addCart(book)} defaultText="Add to cart" completedText="Added" errorText="Not added" />
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BookCard;
