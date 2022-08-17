import { AppContext } from "App";
import CartMenu from "components/Cart/CartMenu";
import NavLinks from "components/Nav/NavLinks";
import { useContext, useState } from "react";
import { Container, Navbar, NavDropdown } from "react-bootstrap";
import ShoppingCartIcon from "static/ShoppingCartIcon";
import "styles/Navigation.css";
import ThemeToggle from "./ThemeToggle";
import UserInfo from "./UserInfo";

const Navigation = () => {
  const { theme, styles, user } =
    useContext(AppContext);
  const [showCart, setShowCart] = useState(false);

  const shoppingCartColor = theme === "dark" ? "#fff" : "#000";

  return (
    <Navbar bg={theme} variant={theme} expand="lg">
      <Container style={styles.nav.navbar}>
        <Navbar.Brand>LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <NavLinks />
          <NavDropdown
            show={user ? showCart : false}
            title={
              user ? (
                <ShoppingCartIcon
                  color={shoppingCartColor}
                  onClick={() => setShowCart(!showCart)}
                />
              ) : null
            }
            menuVariant={theme}
          >
            <CartMenu />
          </NavDropdown>
          <UserInfo/>
        </Navbar.Collapse>
        <ThemeToggle />
      </Container>
    </Navbar>
  );
};

export default Navigation;
