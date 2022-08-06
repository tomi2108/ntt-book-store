import BookCard from "components/Books/BookCard.js";
import { useBooks } from "hooks/useBooks.js";
import { Container, Row } from "react-bootstrap";

const Products = () => {
  const [books] = useBooks();

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
