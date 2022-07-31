import Navigation from "components/Nav/Navigation.js";
import { useCart } from "hooks/useCart.js";
import { useLocalStorage } from "hooks/useLocalStorage.js";
import BookDetails from "pages/BookDetails.js";
import Login from "pages/Login.js";
import Products from "pages/Products.js";
import Publish from "pages/Publish.js";
import Search from "pages/Search.js";
import { useEffect } from "react";
import { Navigate, Route, Routes, useMatch } from "react-router-dom";

const App = () => {
  const [user, { logIn, logOut, getUser }] = useLocalStorage();
  useEffect(() => {
    getUser();
  }, []);

  const [cart, cartActions] = useCart(user);
  const id = useMatch("id");

  return (
    <div>
      <Navigation
        user={user}
        cart={cart}
        cartActions={cartActions}
        logOut={logOut}
      />
      <main style={{ backgroundColor: "#212529", minHeight: "100vh" }}>
        <Routes>
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login logIn={logIn} />}
          />
          <Route
            path="/search"
            element={<Search user={user} addToCart={cartActions.addToCart} />}
          />
          <Route path="/publish" element={<Publish />} />
          <Route
            path="/book/:id"
            element={
              <BookDetails
                user={user}
                addToCart={cartActions.addToCart}
                id={id}
              />
            }
          />
          <Route
            path="/"
            element={<Products user={user} cartActions={cartActions} />}
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
