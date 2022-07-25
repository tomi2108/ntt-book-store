import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import ShoppingCartIcon from "../static/ShoppingCartIcon.js";
import "../styles/shoppingCart.css";

const Navigation = ({ cart }) => {
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
            title={<ShoppingCartIcon />}
            id="nav-dropdown-dark-example"
            menuVariant="dark"
          >
            {cart.map((item) => {
              return (
                <NavDropdown.Item key={item.book.id}>
                  <div className="dropdownItem">
                    <p>
                      {item.book.title} x{item.quantity}
                    </p>
                  </div>
                </NavDropdown.Item>
              );
            })}
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
