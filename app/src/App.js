import { useState } from "react";
import Navigation from "./components/Navigation.js";
import Products from "./components/Products.js";
import { getBookById } from "./services/books.js";

const App = () => {
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

  return (
    <div>
      <main style={{ backgroundColor: "#212529", height: "100vh" }}>
        <Navigation cart={cart} />
        <Products addToCart={addToCart} />
      </main>
    </div>
  );
};

export default App;
