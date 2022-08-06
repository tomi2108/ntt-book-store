import { AppContext } from "App";
import TransactionButton from "components/Utils/TransactionButton.js";
import { useContext } from "react";

const BookDescription = ({ book, outOfStock }) => {
  const { styles, user, cartActions } = useContext(AppContext);

  return (
    <>
      <div style={{ marginBlock: "10px" }}>
        {book.description ? book.description : <p>No description</p>}
      </div>
      <div>
        US<strong>${book.price}</strong>
      </div>
      <div style={{ margin: "20px 0px" }}>
        {outOfStock ? (
          <span style={styles.bookCard.outOfStock}>Out of stock</span>
        ) : (
          <span>{book.copiesInStock} in stock</span>
        )}
      </div>
      <TransactionButton
        disabled={user ? outOfStock : true}
        onClick={() => cartActions.addToCart(book)}
        defaultText="Add to cart"
        completedText="Added"
        errorText="Not added"
      />
    </>
  );
};

export default BookDescription;
