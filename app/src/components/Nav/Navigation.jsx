import { AppContext } from "App";
import CartMenu from "components/Cart/CartMenu";
import NavLinks from "components/Nav/NavLinks";
import Clickable from "components/Utils/Clickable";
import { useContext, useState } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import MoonIcon from "static/MoonIcon";
import ShoppingCartIcon from "static/ShoppingCartIcon";
import SunIcon from "static/SunIcon";
import "styles/Navigation.css";

const Navigation = () => {
  const { theme, styles, toggleTheme, user, userActions } =
    useContext(AppContext);
  const [showCart, setShowCart] = useState(false);

  const shoppingCartColor = theme === "dark" ? "#fff" : "#000";

  return (
    <Navbar  bg={theme} variant={theme} expand="lg">
      <Container style={styles.nav.navbar}>
        <Navbar.Brand>LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse >
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
          <Nav.Item style={styles.nav.loggedUser}>
            {user && `Logged in as ${user.username}`}
          </Nav.Item>
          {user && (
            <Button
              onClick={userActions.logOut}
              size="sm"
              variant="secondary"
              style={{ marginLeft: "auto" }}
            >
            Log out
            </Button>
          )}
        </Navbar.Collapse>
        <Clickable className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? (
            <SunIcon color="white" />
          ) : (
            <MoonIcon  color="black" />
          )}
        </Clickable>
      </Container>
    </Navbar>
  );
};

export default Navigation;
