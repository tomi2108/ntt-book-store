import CartMenu from "components/Cart/CartMenu.js";
import NavLinks from "components/Nav/NavLinks.js";
import { useState } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import ShoppingCartIcon from "static/ShoppingCartIcon.js";

const Navigation = ({ cart, cartActions, user, logOut }) => {
  const [showCart, setShowCart] = useState(false);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <NavLinks user={user} />
          <Nav.Item style={{ color: "white", margin: "0 5px" }}>
            {user && `Logged in as ${user.username}`}
          </Nav.Item>
          <NavDropdown
            show={user ? showCart : false}
            title={<ShoppingCartIcon onClick={() => setShowCart(!showCart)} />}
            id="nav-dropdown-dark-example"
            menuVariant="dark"
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
      </Container>
    </Navbar>
  );
};

export default Navigation;
