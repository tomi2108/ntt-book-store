import { AppContext } from "App";
import BookTableRow from "components/Books/BookTableRow";
import { useContext } from "react";
import { Table } from "react-bootstrap";

const BookRecommendations = ({ recommendations,authorName }) => {
  const { theme } = useContext(AppContext);


  return (
    <>
      <h5>Other books by {authorName}</h5>
      <Table variant={theme} bordered hover>
        <tbody>
          {recommendations &&
            recommendations.map((b) => {
              const outOfStock = b.copiesInStock === 0;
              return (
                <BookTableRow key={b.id} book={b} outOfStock={outOfStock} />
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

export default BookRecommendations;
