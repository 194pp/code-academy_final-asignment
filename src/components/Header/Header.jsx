import classes from './Header.module.css';
import SpacerContainer from "../UI/SpacerContainer";
import Icon from "../UI/Icon";
import NavItem from "./Navigation/NavItem";
import Navbar from "./Navigation/Navbar";

const Header = () => {
  return (
    <header className={classes.Header}>
      <SpacerContainer>
        <div className={classes.HeaderContent}>
          <NavItem to="/"
                   logo={true}
                   content={<><Icon icon="account_circle"/>
                     AccountManager</>}/>
          <Navbar />
        </div>
      </SpacerContainer>
    </header>
  )
}

export default Header;
