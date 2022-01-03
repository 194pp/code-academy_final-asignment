import classes from "./RegisterForm.module.css";
import {Form, Formik, Field} from "formik";
import Input from "../../UI/FormItems/Input";
import Button from "../../UI/Button";
import {useState} from "react";
import {Link} from "react-router-dom";
import {registerSchema} from "./registerSchema";
import {postFetch} from "../../utils/fetch";

const RegisterForm = () => {
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [registerError, setRegisterError] = useState('');

  return (
    <div>
      <section className={classes.RegisterError}>{registerError}</section>
      {registerSuccess ?
        <>
          <section>Sveikiname užsiregistravus!</section>
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



            await postFetch( 'register', dataToSend)
              .then(data => {
                if (data.msg === "Vartotojas buvo sukurtas") {
                  setRegisterError('');
                  setRegisterSuccess(true);
                } else {
                  setRegisterError(data.err);
                }
              });
            setSubmitting(false);
          }}>
          {({
              isSubmitting,
              errors,
              touched,
            }) => (
            <Form>
              <Field
                name="username"
                placeholder="Vartotojo vardas"
                error={errors.username}
                touched={touched.username}
                as={Input}
              />
              <Field
                name="password"
                placeholder="Slaptažodis"
                type="password"
                error={errors.password}
                touched={touched.password}
                as={Input}
              />
              <Field
                name="repeatPassword"
                placeholder="Pakartoti slaptažodį"
                type="password"
                error={errors.repeatPassword}
                touched={touched.repeatPassword}
                as={Input}
              />
              <Field
                name="age"
                placeholder="Amžius"
                type="number"
                error={errors.age}
                touched={touched.age}
                as={Input}
              />
              <Field
                name="email"
                placeholder="Elektroninis paštas"
                error={errors.email}
                touched={touched.email}
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
