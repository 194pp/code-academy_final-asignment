import classes from './Register.module.css';
import PageHeading from "../../UI/PageHeading";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <div className={classes.Register}>
      <PageHeading>Registracija</PageHeading>
      <RegisterForm />
    </div>
  )
}

export default Register;
