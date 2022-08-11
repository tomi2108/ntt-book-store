import Navigation from "components/Nav/Navigation";
import { useBooks } from "hooks/useBooks";
import { useCart } from "hooks/useCart.js";
import { useFavorites } from "hooks/useFavorites.js";
import { useTheme } from "hooks/useTheme.js";
import { useUser } from "hooks/useUser.js";
import BookDetails from "pages/BookDetails";
import Favorites from "pages/Favorites";
import Login from "pages/Login";
import Products from "pages/Products";
import Search from "pages/Search";
import { createContext, useEffect } from "react";
import { Navigate, Route, Routes, useMatch } from "react-router-dom";
import "styles/App.css";


export const AppContext = createContext();

const App = () => {

  const [user, userActions] = useUser();
  const [books] = useBooks();
  const { theme, styles, toggleTheme } = useTheme();
  const [cart, cartActions] = useCart(user);
  const [favorites,favoritesActions] = useFavorites(user);
  const context = { theme, styles, toggleTheme, user, userActions, cart, cartActions, favorites, favoritesActions, books };

  useEffect(() => {
    userActions.getUser();
  }, []);


  const id = useMatch("id");
  return (
    <AppContext.Provider value={context} >
      <div className="App">
        <Navigation />
        <main style={styles.main}>
          <Routes>
            <Route
              path="/login"
              element={user ? <Navigate to="/" /> : <Login />}
            />
            <Route path="/search" element={<Search />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/book/:id" element={<BookDetails id={id} />} />
            <Route path="/" element={<Products />} />
          </Routes>
        </main>
      </div>
    </AppContext.Provider>
  );
};

export default App;
