import React from "react";
import styles from "../styles/styles.js";
import TransactionButton from "./TransactionButton.js";

const BookDescription = ({ book,outOfStock,user,addToCart }) => {
  return (
    <>
      <div style={{ marginBlock:"10px" }}>
        {book.description? book.description : <p>No description</p>}
      </div>
      <div>US<strong>${book.price}</strong></div>
      <div style={{ margin:"20px 0px" }}>
        {outOfStock? <span style={styles.bookCard.outOfStock}>Out of stock</span> : <span>{book.copiesInStock} in stock</span>}
      </div>
      <TransactionButton disabled={user? outOfStock : true } onClick={() => addToCart(book)} defaultText="Add to cart" completedText="Added" errorText="Not added" />
    </>

  );
};

export default BookDescription;