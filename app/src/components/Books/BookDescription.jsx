import { AppContext } from "App";
import TransactionButton from "components/Utils/TransactionButton";
import { useContext } from "react";

const BookDescription = ({ book, outOfStock }) => {
  const { styles, user, cartActions } = useContext(AppContext);

  return (
    <>
      <div style={ { lineHeight: "2rem" , marginBlock: "10px" }}>
        {book.description ? book.description : <p>No description</p>}
      </div>
      <div style={{ marginBlock:"10px", fontSize:"3rem" }}>
          US<strong>${book.price}</strong>
      </div>
      <TransactionButton
        disabled={user ? outOfStock : true}
        onClick={() => cartActions.addToCart(book)}
        defaultText="Add to cart"
        completedText="Added"
        errorText="Not added"
      />
      <div style={{ margin: "20px 0px" }}>
        {outOfStock ? (
          <span style={styles.bookCard.outOfStock}>Out of stock</span>
        ) : (
          <span>{book.copiesInStock} in stock</span>
        )}
      </div>
    </>
  );
};

export default BookDescription;
