import { AppContext } from "App";
import NavLinkItem from "components/Nav/NavLinkItem";
import { useContext } from "react";
import { Nav } from "react-bootstrap";
import HeartIcon from "static/HeartIcon";
import MagnifyingGlass from "static/MagnifyingGlass";
import PowerSwitchIcon from "static/PowerSwitchIcon";
import ShoppingBags from "static/ShoppingBags";

const NavLinks = () => {
  const { user,styles } = useContext(AppContext);

  return (
    <Nav style={styles.nav.buttons}>
      <NavLinkItem text="Products" Icon={ShoppingBags} to="/"/>
      <NavLinkItem text="Search" Icon={MagnifyingGlass} to="/search"/>
      <NavLinkItem {...user?{ text:"Favorites",Icon:HeartIcon,to:"/favorites" } : { text:"Log in",Icon:PowerSwitchIcon,to:"/login" }}/>
    </Nav>
  );
};

export default NavLinks;
