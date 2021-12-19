import {NavLink} from 'react-router-dom';
import classes from './NavItem.module.css';

const NavItem = ({to, content, logo}) => {
  return (
    <NavLink to={to} className={`${classes.NavItem} ${logo ? classes.Logo : ""}`}>
      {content}
    </NavLink>
  )
}

export default NavItem;
