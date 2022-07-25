import { useState } from "react";
import Navigation from "./components/Navigation.js";
import Products from "./components/Products.js";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
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
  };

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
