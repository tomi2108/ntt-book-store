import { AppContext } from "App";
import Clickable from "components/Utils/Clickable";
import { useContext } from "react";
import { NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ErrorIcon from "static/ErrorIcon";
import MinusIcon from "static/MinusIcon";
import PlusIcon from "static/PlusIcon";

const CartItem = ({ item }) => {
  const { styles, cartActions } = useContext(AppContext);
  const navigate = useNavigate();

  const totalPrice = (
    Math.round(item.quantity * item.book.price * 100) / 100
  ).toFixed(2);

  const handleRemove = (e) => {
    e.stopPropagation();
    cartActions.removeFromCart(item);
  };

  const handleIncrease = (e) => {
    e.stopPropagation();
    cartActions.addToCart(item.book);
  };

  const handleDecrease = (e) => {
    e.stopPropagation();
    cartActions.removeOneFromCart(item);
  };

  return (
    <NavDropdown.Item onClick={() => navigate(`/book/${item.book.id}`)} key={item.book.id}>
      <div style={styles.shoppingCart.item}>
        <div>
          <Clickable onClick={handleRemove}>
            <ErrorIcon color="rgb(245, 106, 106)" />
          </Clickable>
          <p>
            {item.book.title.length <= 20
              ? item.book.title
              : item.book.title.substring(0, 20) + "..."}
          </p>
        </div>
        <div style={{ justifySelf: "flex-end", alignSelf: "center" }}>
          <Clickable onClick={handleIncrease}>
            <PlusIcon color="rgb(106, 245, 106)" />
          </Clickable>
          {item.quantity}
          <Clickable onClick={handleDecrease}>
            <MinusIcon width="20px" height="auto" color="rgb(245, 106, 106)" />
          </Clickable>
          <span style={{ marginLeft: "3px" }}>US${totalPrice}</span>
        </div>
      </div>
    </NavDropdown.Item>
  );
};

export default CartItem;
