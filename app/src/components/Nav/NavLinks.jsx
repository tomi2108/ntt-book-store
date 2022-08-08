import { AppContext } from "App";
import { useContext } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavLinks = () => {
  const { user } = useContext(AppContext);

  return (
    <Nav>
      <Nav.Link as={Link} to="/">
        Products
      </Nav.Link>
      <Nav.Link as={Link} to="/search">
        Search
      </Nav.Link>
      <Nav.Link as={Link} to={user ? "/publish" : "/login"}>
        {user ? "Publish" : "Log in"}
      </Nav.Link>
    </Nav>
  );
};

export default NavLinks;