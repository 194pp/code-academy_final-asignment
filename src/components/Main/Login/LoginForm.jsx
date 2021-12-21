import classes from './LoginForm.module.css';
import {Form, Formik, Field} from "formik";
import {loginSchema} from "./loginSchema";
import Button from "../../UI/Button";
import Input from "../../UI/FormItems/Input";
import {serverURL} from "../../utils/configs";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {useAuthContext} from "../../../store/AuthContext";
import axios from "axios";

const LoginForm = () => {
  const navigate = useNavigate();
  const {setAuthData} = useAuthContext();
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState();

  return (
    <div>
      <div className={classes.LoginError}>{loginError}</div>
      {loginSuccess ?
        <>
          <div className={classes.LoginSuccess}>Prisijungėte sėkmingai!</div>
        </>
        :
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          validationSchema={loginSchema}
          onSubmit={async (data, {setSubmitting}) => {
            setSubmitting(true);

            await axios.post(serverURL + "/login", data)
              .then((response) => {
                localStorage.setItem('vks_token', response.data.data.token);
                localStorage.setItem('vks_username', data.username);
                setAuthData({username: data.username, token: response.data.data.token});
                setLoginError("");
                setLoginSuccess(true);
                setTimeout(() => {
                  navigate('/users');
                }, 1000)
              }).catch((err) => {
                setLoginError(err.response.data.err);
              });

            setSubmitting(false);
          }}>
          {({
              isSubmitting,
              errors
            }) => (
            <Form>
              <Field
                name="username"
                placeholder="Vartotojo vardas"
                error={errors.username}
                as={Input}
              />
              <Field
                name="password"
                placeholder="Slaptažodis"
                type="password"
                error={errors.password}
                as={Input}
              />
              <Button name="Pateikti" solid disabled={isSubmitting || !!Object.keys(errors).length}/>
            </Form>
          )}
        </Formik>
      }
    </div>
  )
}

export default LoginForm;
