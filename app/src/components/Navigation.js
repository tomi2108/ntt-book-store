import { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import ShoppingCartIcon from "../static/ShoppingCartIcon.js";
import CartMenu from "./CartMenu.js";


const Navigation = ({ cart,cartActions }) => {
  const [showCart, setShowCart] = useState(false);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link color="secondary" variant="text">
              Products
            </Nav.Link>
            <Nav.Link variant="secondary">Search</Nav.Link>
            <Nav.Link variant="secondary">Sign In</Nav.Link>
          </Nav>
          <NavDropdown
            show={showCart}

            title={<ShoppingCartIcon onClick={() => setShowCart(!showCart)} />}
            id="nav-dropdown-dark-example"
            menuVariant="dark"
          >
            <CartMenu setShowCart={() => setShowCart(true)} cart={cart} cartActions={cartActions}/>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
