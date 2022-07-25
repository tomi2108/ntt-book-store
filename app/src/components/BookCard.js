import { Button, Card, Col, Row } from "react-bootstrap";

const BookCard = ({ book }) => {
  return (
    <Col xs={12} sm={6} md={4} lg={3}>
      <Card
        style={{
          margin: 3,
          width: "18rem",
          height: "18rem",
          backgroundColor: "#202124",
        }}
      >
        <Card.Body>
          <Col>
            <Row>
              <Card.Title>{book.title}</Card.Title>
              <Card.Subtitle>By {book.Author.name} </Card.Subtitle>
              <Card.Text>US${book.price}</Card.Text>
            </Row>
            <Row lg={{ span: 4, offset: 4 }}>
              <Button>Add to cart</Button>
            </Row>
          </Col>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BookCard;
