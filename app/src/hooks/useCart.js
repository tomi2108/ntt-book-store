import { useEffect, useState } from "react";
import { getBookById } from "../services/books.js";
import { updateCart } from "../services/users.js";


export const useCart = (user) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (user) {
      setCart(user.cart);
    }
  }, [user]);


  const addToCart = async (book) => {
    const { copiesInStock } = await getBookById(book.id);

    if (copiesInStock > 0) {

      const itemInCart = cart.find((item) => item.book.id === book.id);
      if (!itemInCart) {

        const newCart = [...cart, { book, quantity: 1 }];
        setCart(newCart);
        await updateCart(user, newCart);

      } else {

        const newCart =  cart.map((item) =>
          item.book.id === book.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        setCart(newCart);
        await updateCart(user, newCart);

      }
    }else
      throw new Error("Book out of stock");
  };

  const removeFromCart = async (itemToRemove) => {
    const newCart = cart.filter((item) => item.book.id !== itemToRemove.book.id);
    setCart(newCart);
    await updateCart(user, newCart);
  };

  const removeOneFromCart = async (itemToRemove) => {
    if(itemToRemove.quantity <= 1){
      removeFromCart(itemToRemove);
    }else{
      const newCart = cart.map((item) =>
        item.book.id === itemToRemove.book.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      setCart(newCart);
      await updateCart(newCart);
    }
  };

  return [cart, { addToCart,removeFromCart,removeOneFromCart }];
};