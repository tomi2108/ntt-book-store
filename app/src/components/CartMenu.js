import { Button, Container, NavDropdown } from "react-bootstrap";
import "../styles/shoppingCart.css";

const CartMenu = ({ cart }) => {
  return (
    <Container className="cart-dropdown" >
      { cart.length>0?
        cart.map((item) => {
          return (
            <NavDropdown.Item key={item.book.id}>
              <div className="cart-item">
                <p>
                  {item.book.title} x{item.quantity}
                </p>
              </div>
            </NavDropdown.Item>
          );
        }):
        <div>Your cart is empty</div>
      }
      <Button size="sm" variant="secondary" className="check-out-button" >
          View Cart
      </Button>

    </Container>
  );
};

export default CartMenu;