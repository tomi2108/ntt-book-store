import { AppContext } from "App";
import BookCard from "components/Books/BookCard";
import { useContext } from "react";
import { Container, Row } from "react-bootstrap";

const Products = () => {
  const { books } = useContext(AppContext);

  const sortByAuthorName = (a, b) => a.Author.name.localeCompare(b.Author.name);

  return (
    <Container>
      <Row>
        {books &&
          books
            .sort(sortByAuthorName)
            .map((book) => <BookCard key={book.id} book={book} />)}
      </Row>
    </Container>
  );
};

export default Products;
