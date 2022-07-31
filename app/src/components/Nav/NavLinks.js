import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavLinks = ({ user }) => {
  return (
    <Nav>
      <Nav.Link as={Link} to="/" color="secondary" variant="text">
        Products
      </Nav.Link>
      <Nav.Link as={Link} to="/search" variant="secondary">
        Search
      </Nav.Link>
      <Nav.Link as={Link} to={user ? "/publish" : "/login"} variant="secondary">
        {user ? "Publish" : "Log in"}
      </Nav.Link>
    </Nav>
  );
};

export default NavLinks;
