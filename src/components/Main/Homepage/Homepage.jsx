import classes from './Homepage.module.css';
import PageHeading from "../../UI/PageHeading";
import Button from "../../UI/Button";
import {Link} from "react-router-dom";
import {useAuthContext} from "../../../store/AuthContext";

const Homepage = () => {
  const {tokenIsValid} = useAuthContext()
  return (
    <div className={classes.Homepage}>
      <PageHeading>Pradžia</PageHeading>
      {tokenIsValid ?
        <>
          <Link to="/users">
            <Button name="Vartotojai"/>
          </Link>
        </>
        :
        <>
          <Link to="/login">
            <Button name="Prisijungti"/>
          </Link>
          <Link to="/register">
            <Button name="Registracija" solid/>
          </Link>
        </>
      }
    </div>
  )
}

export default Homepage;
