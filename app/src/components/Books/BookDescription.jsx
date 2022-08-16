import { AppContext } from "App";
import Clickable from "components/Utils/Clickable";
import TransactionButton from "components/Utils/TransactionButton";
import { useIsFavorite } from "hooks/useIsFavorite.js";
import { useContext } from "react";
import HeartIcon from "static/HeartIcon";

const BookDescription = ({ book, outOfStock }) => {
  const { styles, user, cartActions,favorites,favoritesActions } = useContext(AppContext);

  const isFavorite = useIsFavorite(book.id,favorites);


  const favorite =  () => {
    if (isFavorite) {
      favoritesActions.removeFromFavorites(book.id);
    } else {
      favoritesActions.addToFavorites(book.id);
    }
  };



  return (
    <>
      <div style={styles.bookDetails.description}>
        {book.description ? book.description : <p>No description</p>}
      </div>
      <div style={styles.bookDetails.price}>
        US<strong>${book.price}
          <Clickable style={styles.displayIf(user)} onClick={favorite}>
            <HeartIcon style={{ ...styles.heartIcon(isFavorite),position:"static",marginBottom:"10px" }}/>
          </Clickable>
        </strong>

      </div>
      <TransactionButton
        disabled={user ? outOfStock : true}
        onClick={() => cartActions.addToCart(book)}
        defaultText="Add to cart"
        completedText="Added"
        errorText="Not added"
      />
      <div style={styles.bookDetails.outOfStock}>
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
