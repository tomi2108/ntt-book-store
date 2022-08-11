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
      <div style={{ lineHeight: "2rem", marginBlock: "10px" }}>
        {book.description ? book.description : <p>No description</p>}
      </div>
      <div style={{ marginBlock: "10px", fontSize: "3rem" }}>
        US<strong>${book.price}
          <Clickable style={{ display:!user?"none":"" }} onClick={favorite}>
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
