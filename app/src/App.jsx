import Navigation from "components/Nav/Navigation";
import { useCart } from "hooks/useCart.js";
import { useTheme } from "hooks/useTheme.js";
import { useUser } from "hooks/useUser.js";
import BookDetails from "pages/BookDetails";
import Login from "pages/Login";
import Products from "pages/Products";
import Publish from "pages/Publish";
import Search from "pages/Search";
import { createContext, useEffect } from "react";
import { Navigate, Route, Routes, useMatch } from "react-router-dom";

export const AppContext = createContext();

const App = () => {
  const [user, userActions] = useUser();

  useEffect(() => {
    userActions.getUser();
  }, []);

  const { theme, styles, toggleTheme } = useTheme();

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