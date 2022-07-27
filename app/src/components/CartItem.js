import { NavDropdown } from "react-bootstrap";
import ErrorIcon from "../static/ErrorIcon.js";
import MinusIcon from "../static/MinusIcon.js";
import PlusIcon from "../static/PlusIcon.js";
import styles from "../styles/styles.js";
import Clickable from "./Clickable.js";

const CartItem = ({ item,cartActions,setShowCart }) => {

  const handleRemove = () => {
    setShowCart();
    cartActions.removeFromCart(item);
  };

  const handleIncrease = () => {
    setShowCart();
    cartActions.addToCart(item.book);
  };

  const handleDecrease = () => {
    setShowCart();
    cartActions.removeOneFromCart(item);
  };

  return (
    <NavDropdown.Item onClick={setShowCart} key={item.book.id}>
      <div style={styles.shoppingCart.item}>
        <div>
          <Clickable onClick={handleRemove}>
            <ErrorIcon color="rgb(245, 106, 106)"/>
          </Clickable>
          <p>
            {item.book.title.length <= 20?item.book.title:item.book.title.substring(0,20)+"..."}
          </p>
        </div>
        <div style={{ justifySelf:"flex-end",alignSelf:"center" }}>
          <Clickable onClick={handleIncrease}>
            <PlusIcon color="rgb(106, 245, 106)"/>
          </Clickable>
          {item.quantity}
          <Clickable onClick={handleDecrease}>
            <MinusIcon color="rgb(245, 106, 106)"/>
          </Clickable>
        </div>
      </div>
    </NavDropdown.Item>
  );
};

export default CartItem;