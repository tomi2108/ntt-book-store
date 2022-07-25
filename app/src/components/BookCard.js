import { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const BookCard = ({ book, addCart }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    addCart(book);
    setLoading(false);
  };
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
          <Row lg={{ span: 4, offset: 4 }}>
            <Button disabled={loading} onClick={handleClick}>
              Add to cart
            </Button>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BookCard;
