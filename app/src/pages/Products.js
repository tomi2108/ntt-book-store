import BookCard from "components/Books/BookCard.js";
import { useBooks } from "hooks/useBooks.js";
import { Container, Row } from "react-bootstrap";

const Products = ({ cartActions, user }) => {
  const [books] = useBooks();

  const sortByAuthorName = (a, b) => a.Author.name.localeCompare(b.Author.name);

  return (
    <Container>
      <Row>
        {books &&
          books
            .sort(sortByAuthorName)
            .map((book) => (
              <BookCard
                user={user}
                key={book.id}
                book={book}
                addToCart={cartActions.addToCart}
              />
            ))}
      </Row>
    </Container>
  );
};

export default Products;
