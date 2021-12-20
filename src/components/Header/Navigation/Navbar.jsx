import classes from './Navbar.module.css';
import NavItem from "./NavItem";
import {useAuthContext} from "../../../store/AuthContext";

const Navbar = () => {
  const {tokenIsValid} = useAuthContext()

  return (
    <nav className={classes.Navbar}>
      {!tokenIsValid ?
        <>
          <NavItem to="/register" content="Registracija"/>
          <NavItem to="/login" content="Prisijungimas"/>
        </>
        :
        <>
          <NavItem to="/logout" content="Atsijungti"/>
          <NavItem to="/users" content="Vartotojai"/>
        </>
      }
    </nav>
  )
}

export default Navbar;
