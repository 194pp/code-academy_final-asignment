import classes from './Navbar.module.css';
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <nav className={classes.Navbar}>
      <NavItem to="/register" content="Registracija"/>
      <NavItem to="/login" content="Prisijungimas"/>
      <NavItem to="/logout" content="Atsijungti"/>
      <NavItem to="/users" content="Vartotojai"/>
    </nav>
  )
}

export default Navbar;
