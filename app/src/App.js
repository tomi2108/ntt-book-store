import Navigation from "components/Nav/Navigation.js";
import { useCart } from "hooks/useCart.js";
import { useTheme } from "hooks/useTheme.js";
import { useUser } from "hooks/useUser.js";
import BookDetails from "pages/BookDetails.js";
import Login from "pages/Login.js";
import Products from "pages/Products.js";
import Publish from "pages/Publish.js";
import Search from "pages/Search.js";
import { createContext, useEffect } from "react";
import { Navigate, Route, Routes, useMatch } from "react-router-dom";

export const ThemeContext = createContext();

const App = () => {
  const [user, { logIn, logOut, getUser }] = useUser();
  useEffect(() => {
    getUser();
  }, []);

  const { theme, styles, toggleTheme } = useTheme();

  const [cart, cartActions] = useCart(user);
  const id = useMatch("id");

  return (
    <ThemeContext.Provider value={{ theme, styles, toggleTheme }}>
      <div className="App" id={theme}>
        <Navigation
          user={user}
          cart={cart}
          cartActions={cartActions}
          logOut={logOut}
        />
        <main style={styles.main}>
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
    </ThemeContext.Provider>
  );
};

export default App;
