import { useState } from "react";
import { getBookById } from "../services/books.js";

export const useCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = async (book) => {
    const { copiesInStock } = await getBookById(book.id);
    if (copiesInStock > 0) {
      const bookInCart = cart.find((item) => item.book.id === book.id);
      if (!bookInCart) {
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

  return [cart, { addToCart }];
};