import classes from './Logout.module.css';
import PageHeading from "../../UI/PageHeading";
import {useEffect} from "react";

const Logout = () => {
  useEffect(() => {
    localStorage.removeItem('vks_key');
  }, [])
  return (
    <div className={classes.Logout}>
      <PageHeading>Sėkmingai atsijungėte</PageHeading>
    </div>
  )
}

export default Logout;
