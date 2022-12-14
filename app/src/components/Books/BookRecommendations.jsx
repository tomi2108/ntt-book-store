import { AppContext } from "App";
import BookTableRow from "components/Books/BookTableRow";
import { useContext } from "react";
import { Table } from "react-bootstrap";

const BookRecommendations = ({ recommendations, authorName }) => {
  const { theme, styles } = useContext(AppContext);

  return (
    recommendations.length > 0 ? (
      <>
        <h5 style={styles.recommendations.heading}>
        Other books by {authorName}
        </h5>
        <Table variant={theme} bordered hover>
          <tbody>
            {recommendations &&
            recommendations.slice(0, 5).map((b) => {
              const outOfStock = b.copiesInStock === 0;
              return (
                <BookTableRow key={b.id} book={b} outOfStock={outOfStock} />
              );
            })}
          </tbody>
        </Table>
      </>
    ): null
  );
};

export default BookRecommendations;
