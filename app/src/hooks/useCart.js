import { useState } from "react";
import { getBookById } from "../services/books.js";


export const useCart = () => {
  const [cart, setCart] = useState([]);
  const addToCart = async (book) => {
    const { copiesInStock } = await getBookById(book.id);
    if (copiesInStock > 0) {
      const itemInCart = cart.find((item) => item.book.id === book.id);
      if (!itemInCart) {
        setCart([...cart, { book, quantity: 1 }]);
      } else {
        setCart(
          cart.map((item) =>
            item.book.id === book.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      }
    }else{
      throw new Error("Book out of stock");
    }};

  const removeFromCart = (itemToRemove) => {
    setCart(cart.filter((item) => item.book.id !== itemToRemove.book.id));
  };

  const removeOneFromCart = (itemToRemove) => {
    if(itemToRemove.quantity <= 1){
      removeFromCart(itemToRemove);
    }else{
      setCart(
        cart.map((item) =>
          item.book.id === itemToRemove.book.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  return [cart, { addToCart,removeFromCart,removeOneFromCart }];
};