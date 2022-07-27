import { Button, Container } from "react-bootstrap";
import "../styles/shoppingCart.css";
import styles from "../styles/styles.js";
import CartItem from "./CartItem.js";

const CartMenu = ({ cart,cartActions,setShowCart }) => {

  return (
    <Container style={styles.shoppingCart.menu} >
      { cart.length > 0 ?
        cart.map((item) => <CartItem setShowCart={setShowCart} cartActions={cartActions} item={item} key={item.book.id} />)
        :
        <div>Your cart is empty</div>
      }
      <Button size="sm" variant="secondary" style={styles.shoppingCart.checkOutButton} >
          View Cart
      </Button>

    </Container>
  );
};

export default CartMenu;