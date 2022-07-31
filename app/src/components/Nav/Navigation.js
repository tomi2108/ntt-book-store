import CartMenu from "components/Cart/CartMenu.js";
import { useState } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "static/ShoppingCartIcon.js";


const Navigation = ({ cart,cartActions,user, logOut }) => {
  const [showCart, setShowCart] = useState(false);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link as={Link} to="/"  color="secondary" variant="text">
                Products
            </Nav.Link>
            <Nav.Link as={Link} to="/search" variant="secondary">
            Search
            </Nav.Link>
            <Nav.Link as={Link} to={user?"/publish":"/login"} variant="secondary">{user? "Publish": "Log in"}</Nav.Link>
          </Nav>
          <Nav.Item style={{ color:"white",margin:"0 5px" }}>
            {user && `Logged in as ${user.username}`}
          </Nav.Item>
          <NavDropdown
            show={user? showCart : false}
            title={<ShoppingCartIcon onClick={() => setShowCart(!showCart)} />}
            id="nav-dropdown-dark-example"
            menuVariant="dark"
          >
            <CartMenu setShowCart={() => setShowCart(true)} cart={cart} cartActions={cartActions}/>
          </NavDropdown>
        </Navbar.Collapse>
        {user && <Button onClick={logOut} size="sm" variant="secondary" style={{ marginLeft: "auto" }}>
          Log out
        </Button>}
      </Container>
    </Navbar>
  );
};

export default Navigation;
