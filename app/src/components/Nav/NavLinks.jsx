import { AppContext } from "App";
import { useContext } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeartIcon from "static/HeartIcon";
import MagnifyingGlass from "static/MagnifyingGlass";
import PowerSwitchIcon from "static/PowerSwitchIcon";
import ShoppingBags from "static/ShoppingBags";

const NavLinks = () => {
  const { user,styles,theme } = useContext(AppContext);

  return (
    <Nav style={styles.nav.links}>
      <Nav.Link className={`nav-link-bt ${theme}-bt`} as={Link} to="/">
        <ShoppingBags style={{ width: "17px", height: "17px", fill: styles.iconColor }} />
        <span style={{ marginInline:"10px" }}>
        Products
        </span>
      </Nav.Link>
      <Nav.Link className={`nav-link-bt ${theme}-bt`} as={Link} to="/search">
        <MagnifyingGlass style={{ width: "17px", height: "17px", fill: styles.iconColor }} />
        <span style={{ marginInline:"10px" }}>
        Search
        </span>
      </Nav.Link>
      <Nav.Link className={`nav-link-bt ${theme}-bt`} as={Link} to={user ? "/favorites" : "/login"}>
        { user? <HeartIcon style={{ width: "17px", height: "17px", fill: styles.iconColor } }/>:
          <PowerSwitchIcon style={{ width: "17px", height: "17px", fill: styles.iconColor } }/>}
        <span style={{ marginInline:"10px" }}>
          {user ? "Favorites" : "Log in"}
        </span>
      </Nav.Link>
    </Nav>
  );
};

export default NavLinks;
