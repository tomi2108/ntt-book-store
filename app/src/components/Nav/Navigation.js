import { ThemeContext } from "App";
import CartMenu from "components/Cart/CartMenu.js";
import NavLinks from "components/Nav/NavLinks.js";
import Clickable from "components/Utils/Clickable.js";
import { useContext, useState } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import MoonIcon from "static/MoonIcon.js";
import ShoppingCartIcon from "static/ShoppingCartIcon.js";
import SunIcon from "static/SunIcon.js";

const Navigation = ({ cart, cartActions, user, logOut }) => {
  const { theme, styles, toggleTheme } = useContext(ThemeContext);
  const [showCart, setShowCart] = useState(false);

  return (
    <Navbar bg={theme} variant={theme} expand="lg">
      <Container>
        <Navbar.Brand>LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <NavLinks user={user} />
          <Nav.Item style={styles.nav.item}>
            {user && `Logged in as ${user.username}`}
          </Nav.Item>
          <NavDropdown
            show={user ? showCart : false}
            title={
              <ShoppingCartIcon
                color={theme === "dark" ? "#fff" : "#000"}
                onClick={() => setShowCart(!showCart)}
              />
            }
            id="nav-dropdown-dark-example"
            menuVariant={theme}
          >
            <CartMenu
              setShowCart={() => setShowCart(true)}
              cart={cart}
              cartActions={cartActions}
            />
          </NavDropdown>
        </Navbar.Collapse>
        {user && (
          <Button
            onClick={logOut}
            size="sm"
            variant="secondary"
            style={{ marginLeft: "auto" }}
          >
            Log out
          </Button>
        )}
        <Clickable onClick={toggleTheme}>
          {theme === "dark" ? (
            <SunIcon color="white" />
          ) : (
            <MoonIcon color="black" />
          )}
        </Clickable>
      </Container>
    </Navbar>
  );
};

export default Navigation;
