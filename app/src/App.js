import { Navigate, Route, Routes, useMatch } from "react-router-dom";
import Navigation from "./components/Navigation.js";
import { useCart } from "./hooks/useCart.js";
import BookDetails from "./pages/BookDetails.js";
import Login from "./pages/Login.js";
import Products from "./pages/Products.js";
import Profile from "./pages/Profile.js";
import Search from "./pages/Search.js";


const App = () => {
  const [cart,cartActions] = useCart();
  const user = true;
  const id = useMatch("id");


  return (
    <div>
      <Navigation user={user} cart={cart} cartActions={cartActions} />
      <main style={{ backgroundColor: "#212529", minHeight: "100vh" }}>
        <Routes>
          <Route path="/login" element={user? <Navigate to="/"/> : <Login />}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/profile/:username" element={<Profile />}/>
          <Route path="/book/:id" element={<BookDetails user={user} addToCart={cartActions.addToCart} id={id} />}/>
          <Route path="/" element={<Products user={user} cartActions={cartActions} />}/>
        </Routes>
      </main>
    </div>
  );
};

export default App;
