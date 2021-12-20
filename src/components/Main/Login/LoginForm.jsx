import classes from './LoginForm.module.css';
import {Form, Formik, Field} from "formik";
import {loginSchema} from "./loginSchema";
import Button from "../../UI/Button";
import Input from "../../UI/FormItems/Input";
import {postFetch} from "../../utils/fetch";
import {serverURL} from "../../utils/configs";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const LoginForm = () => {
  const navigate = useNavigate();
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState();

  return (
    <div>
      <div className={classes.LoginError}>{loginError}</div>
      {loginSuccess ?
        <>
          <div>Prisijungėte sėkmingai!</div>
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

            await postFetch(serverURL + "/login", data)
              .then(data => {
                if (data.msg === "Logged in") {
                  const token = data.data.token;
                  localStorage.setItem('vks_key', token);
                  setLoginSuccess(true);
                  setLoginError('');
                  setTimeout(() => {
                    navigate('/users');
                  }, 1000)
                } else {
                  console.log(data);
                  setLoginError(data.err);
                }
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
