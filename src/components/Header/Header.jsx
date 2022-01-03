import classes from './Header.module.css';
import SpacerContainer from "../UI/SpacerContainer";
import Icon from "../UI/Icon";
import NavItem from "./Navigation/NavItem";
import Navbar from "./Navigation/Navbar";
import {useAuthContext} from "../../store/AuthContext";
import LoggedInUserLabel from "./LoggedInUserLabel";
import {useState} from "react";

const Header = () => {
  const {authData} = useAuthContext();
  const [burgerClicked, setBurgerClicked] = useState(false);

  const burgerClickHandler = () => {
    setBurgerClicked(burgerClicked => !burgerClicked);
  }

  return (
    <header className={classes.Header}>
      <SpacerContainer>
        <div className={classes.HeaderContent}>
          <div className={classes.LogoAndBurger}>
            <NavItem to="/"
                     logo
                     content={
                       <>
                         <Icon icon="account_circle" className={classes.SiteLogo}/>
                         VKS
                         <LoggedInUserLabel authData={authData} />
                       </>
                     }/>
            <div className={classes.BurgerContainer} onClick={burgerClickHandler}>
              <Icon icon='menu' className={
                `${classes.Burger} ${burgerClicked ? classes.BurgerClicked : ''}`
              }/>
            </div>
          </div>
          <div className={classes.BurgerNavbar}>
            {burgerClicked ? <Navbar /> : ''}
          </div>
          <div className={classes.RegularNavbar}>
            <Navbar />
          </div>
        </div>
      </SpacerContainer>
    </header>
  )
}

export default Header;
