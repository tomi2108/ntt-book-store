import { AppContext } from "App";
import { useContext } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavLinkItem = ({ Icon,text,to }) => {
  const { styles, theme } = useContext(AppContext);
  return (
    <Nav.Link className={`nav-link-bt ${theme}-bt`} as={Link} to={to}>
      <Icon style={styles.nav.icon} />
      <span style={styles.nav.link}>
        {text}
      </span>
    </Nav.Link>
  );
};

export default NavLinkItem;