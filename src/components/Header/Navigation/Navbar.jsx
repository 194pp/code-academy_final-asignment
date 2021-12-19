import classes from './Navbar.module.css';
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <nav className={classes.Navbar}>
      <NavItem to="/register" content="Register"/>
      <NavItem to="/login" content="Login"/>
      <NavItem to="/" content="Logout"/>
      <NavItem to="/users" content="Users"/>
    </nav>
  )
}

export default Navbar;
