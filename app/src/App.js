import Navigation from "./components/Navigation.js";
import Products from "./components/Products.js";

const App = () => {
  return (

    <div>
      <main style={{ backgroundColor:"#212529", height:"100vh" }}>
        <Navigation />
        <Products/>
      </main>
    </div>


  );
};

export default App;
