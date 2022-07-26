import Navigation from "./components/Navigation.js";
import { useCart } from "./hooks/useCart.js";
import Products from "./pages/Products.js";

const App = () => {
  const [cart,{ addToCart }] = useCart();

  return (
    <div>
      <main style={{ backgroundColor: "#212529", height: "100%" }}>
        <Navigation cart={cart} />
        <Products addToCart={addToCart} />
      </main>
    </div>
  );
};

export default App;
