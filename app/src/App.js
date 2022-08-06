import Navigation from "components/Nav/Navigation.js";
import { useCart } from "hooks/useCart.js";
import { useLocalStorage } from "hooks/useLocalStorage.js";
import { useTheme } from "hooks/useTheme.js";
import BookDetails from "pages/BookDetails.js";
import Login from "pages/Login.js";
import Products from "pages/Products.js";
import Publish from "pages/Publish.js";
import Search from "pages/Search.js";
import { createContext, useEffect } from "react";
import { Navigate, Route, Routes, useMatch } from "react-router-dom";

export const AppContext = createContext();

const App = () => {
  const [user, userActions] = useLocalStorage();

  const { theme, styles, toggleTheme } = useTheme();

  useEffect(() => {
    userActions.getUser();
  }, []);

  const [cart, cartActions] = useCart(user);

  const id = useMatch("id");

  return (
    <AppContext.Provider
      value={{
        theme,
        styles,
        toggleTheme,
        user,
        userActions,
        cart,
        cartActions,
      }}
    >
      <div className="App">
        <Navigation />
        <main style={styles.main}>
          <Routes>
            <Route
              path="/login"
              element={user ? <Navigate to="/" /> : <Login />}
            />
            <Route path="/search" element={<Search />} />
            <Route path="/publish" element={<Publish />} />
            <Route path="/book/:id" element={<BookDetails id={id} />} />
            <Route path="/" element={<Products />} />
          </Routes>
        </main>
      </div>
    </AppContext.Provider>
  );
};

export default App;
