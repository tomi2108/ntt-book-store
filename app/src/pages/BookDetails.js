import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import TransactionButton from "../components/TransactionButton.js";
import { getBookById } from "../services/books.js";
import BookCoverPlaceholder from "../static/BookCoverPlaceholder.js";
import styles from "../styles/styles.js";

const BookDetails = ({ user,addToCart }) => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [outOfStock,setOutOfStock] = useState(false);
  console.log(outOfStock);
  useEffect(() => {
    getBookById(id).then((bookData) => {
      setBook(bookData);
      setOutOfStock(bookData.copiesInStock === 0);
    });

  },[]);

  return (
    <>
      { book?
        <Container  style={{ color: "white", }}>
          <Row>
            <Col>
              <h1>
                {book.title}
              </h1>
              <h3>
            By {book.Author.name}
              </h3>
              {book.imageUrl? <img style={styles.bookDetails.image} src={book.imageUrl} alt={book.title} /> : <BookCoverPlaceholder style={styles.bookDetails.image} />}
            </Col>
            <Col>
              {book.description? book.description : <p>No description</p>}
              <div>US<strong>${book.price}</strong></div>
              <div style={{ margin:"20px 0px" }}>
                {outOfStock? <span style={styles.bookCard.outOfStock}>Out of stock</span> : <span>{book.copiesInStock} in stock</span>}
              </div>
              <TransactionButton disabled={user? outOfStock : true } onClick={() => addToCart(book)} defaultText="Add to cart" completedText="Added" errorText="Not added" />
            </Col>
          </Row>
          <Row>
          </Row>
        </Container>
        : <div style={{ color:"white" }}>Loading...</div>
      }
    </>
  );
};

export default BookDetails;