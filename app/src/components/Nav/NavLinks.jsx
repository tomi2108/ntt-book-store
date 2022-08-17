import { AppContext } from "App";
import { useContext } from "react";
import { Nav } from "react-bootstrap";
import HeartIcon from "static/HeartIcon";
import MagnifyingGlass from "static/MagnifyingGlass";
import PowerSwitchIcon from "static/PowerSwitchIcon";
import ShoppingBags from "static/ShoppingBags";
import NavLinkItem from "./NavLinkItem";

const NavLinks = () => {
  const { user,styles } = useContext(AppContext);

  return (
    <Nav style={styles.nav.buttons}>
      <NavLinkItem text="Products" Icon={ShoppingBags}/>
      <NavLinkItem text="Search" Icon={MagnifyingGlass}/>
      <NavLinkItem {...user?{ text:"Favorites",Icon:HeartIcon } : { text:"Log in",Icon:PowerSwitchIcon }}/>
    </Nav>
  );
};

export default NavLinks;
