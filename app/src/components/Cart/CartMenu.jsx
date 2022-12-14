import { AppContext } from "App";
import CartItem from "components/Cart/CartItem";
import { useContext, useEffect, useState } from "react";
import { Button, Container, NavDropdown } from "react-bootstrap";


const CartMenu = () => {
  const { styles, cart } = useContext(AppContext);

  const [cartTotal, setCartTotal] = useState(0);

  const totalPrice = (
    Math.round(
      cart.reduce((acc, item) => acc + item.quantity * item.book.price, 0) * 100
    ) / 100
  ).toFixed(2);

  useEffect(() => {
    setCartTotal(totalPrice);
  }, [cart]);

  const renderCartItem = (item) => (
    <CartItem item={item} key={item.book.id} />
  );

  return (
    <>
      {cart && (
        <Container style={styles.shoppingCart.menu}>
          {cart.length > 0 ? (
            cart.length < 6 ? (
              cart.map((item) => renderCartItem(item))
            ) : (
              <>
                {cart.slice(0, 5).map((item) => renderCartItem(item))}
                <NavDropdown.Item>...</NavDropdown.Item>
              </>
            )
          ) : (
            <div>Your cart is empty</div>
          )}
          <Container>
            <div>{cart.length > 0 ? <span>Total: US${cartTotal}</span> : null}</div>
          </Container>
          <Button
            size="sm"
            variant="secondary"
            style={styles.shoppingCart.checkOutButton}
          >
        View Cart
          </Button>
        </Container>
      )
      }
    </>
  );
};

export default CartMenu;
