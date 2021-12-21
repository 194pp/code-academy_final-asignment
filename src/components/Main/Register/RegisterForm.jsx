import classes from './RegisterForm.module.css';
import {Form, Formik, Field} from "formik";
import Input from "../../UI/FormItems/Input";
import Button from "../../UI/Button";
import {postFetch} from "../../utils/fetch";
import {useState} from "react";
import {Link} from "react-router-dom";
import {registerSchema} from "./registerSchema";
import {serverURL} from "../../utils/configs";

const RegisterForm = () => {
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [registerError, setRegisterError] = useState('');

  return (
    <div>
      <div className={classes.RegisterError}>{registerError}</div>
      {registerSuccess ?
        <>
          <div>Sveikiname užsiregistravus!</div>
          <Link to="/login">
            <Button name="Prisijungti"/>
          </Link>
        </>
        :
        <Formik
          initialValues={{
            username: '',
            password: '',
            repeatPassword: '',
            age: '',
            email: '',
          }}
          validationSchema={registerSchema}
          onSubmit={async (data, {setSubmitting}) => {
            setSubmitting(true);
            const dataToSend = {...data};
            delete dataToSend.repeatPassword;

            await postFetch(serverURL + '/register', dataToSend)
              .then(data => {
                if (data.msg === "Vartotojas buvo sukurtas") {
                  setRegisterError('');
                  setRegisterSuccess(true);
                } else {
                  setRegisterError(data.err);
                  console.log(data);
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
              <Field
                name="repeatPassword"
                placeholder="Pakartoti slaptažodį"
                type="password"
                error={errors.repeatPassword}
                as={Input}
              />
              <Field
                name="age"
                placeholder="Amžius"
                type="number"
                error={errors.age}
                as={Input}
              />
              <Field
                name="email"
                placeholder="Elektroninis paštas"
                error={errors.email}
                as={Input}
              />
              <Button name="Pateikti" disabled={isSubmitting || !!Object.keys(errors).length}/>
            </Form>
          )}
        </Formik>
      }

    </div>
  )
};

export default RegisterForm;
