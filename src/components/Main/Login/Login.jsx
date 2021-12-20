import classes from './Login.module.css';
import PageHeading from "../../UI/PageHeading";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className={classes.Login}>
      <PageHeading>Prisijungimas</PageHeading>
      <LoginForm />
    </div>
  )
}

export default Login;
