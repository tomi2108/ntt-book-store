import { Card, Col, Row } from "react-bootstrap";
import TransactionButton from "./TransactionButton.js";



const BookCard = ({ book, addCart }) => {

  return (
    <Col
      style={{
        margin: 3,
        width: "20rem",
        height: "20rem",
      }}
      xs={12}
      sm={6}
      md={4}
      lg={3}
    >
      <Card
        style={{
          height: "100%",
          backgroundColor: "#202124",
        }}
      >
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Row>
            <Card.Title>{book.title}</Card.Title>
            {book.imageUrl && <img src={book.imageUrl} alt={book.title} />}
            <Card.Subtitle>By {book.Author.name} </Card.Subtitle>
            <Card.Text>US${book.price}</Card.Text>
          </Row>
          <Row>
            {book.copiesInStock > 0? `${book.copiesInStock} Copies in stock`: "Out of stock"}
            <TransactionButton onClick={() => addCart(book)} defaultText="Add to cart" completedText="Added" errorText="Not added" />
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BookCard;
