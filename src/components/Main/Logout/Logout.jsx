import classes from './Logout.module.css';
import PageHeading from "../../UI/PageHeading";
import {useEffect} from "react";
import {useAuthContext} from "../../../store/AuthContext";

const Logout = () => {
  const {setAuthData} = useAuthContext()
  useEffect(() => {
    localStorage.removeItem('vks_key');
    setAuthData({});
  }, [])
  return (
    <div className={classes.Logout}>
      <PageHeading>Sėkmingai atsijungėte</PageHeading>
    </div>
  )
}

export default Logout;
