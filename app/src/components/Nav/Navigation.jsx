import { AppContext } from "App";
import CartMenu from "components/Cart/CartMenu";
import NavLinks from "components/Nav/NavLinks";
import Clickable from "components/Utils/Clickable";
import { useContext, useState } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import MoonIcon from "static/MoonIcon";
import ShoppingCartIcon from "static/ShoppingCartIcon";
import SunIcon from "static/SunIcon";

const Navigation = () => {
  const { theme, styles, toggleTheme, user, userActions } =
    useContext(AppContext);
  const [showCart, setShowCart] = useState(false);

  return (
    <Navbar bg={theme} variant={theme} expand="lg">
      <Container>
        <Navbar.Brand>LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <NavLinks />
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
            menuVariant={theme}
          >
            <CartMenu />
          </NavDropdown>
        </Navbar.Collapse>
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
