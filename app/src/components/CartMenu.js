import { Button, Container, NavDropdown } from "react-bootstrap";
import "../styles/shoppingCart.css";
import styles from "../styles/styles.js";
import CartItem from "./CartItem.js";

const CartMenu = ({ cart,cartActions,setShowCart }) => {

  return (
    <Container style={styles.shoppingCart.menu} >
      { cart.length > 0 ?
        cart.length < 6 ?
          cart.map((item) => <CartItem setShowCart={setShowCart} cartActions={cartActions} item={item} key={item.book.id} />)
          :
          <>
            {
              cart.slice(0,5).map((item) => <CartItem setShowCart={setShowCart} cartActions={cartActions} item={item} key={item.book.id} />)
            }
            <NavDropdown.Item>...</NavDropdown.Item>
          </>
        : <div>Your cart is empty</div>
      }
      <Button size="sm" variant="secondary" style={styles.shoppingCart.checkOutButton} >
          View Cart
      </Button>

    </Container>
  );
};

export default CartMenu;