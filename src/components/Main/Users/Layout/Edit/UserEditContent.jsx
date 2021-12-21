import classes from './UserEditContent.module.css';
import {Form, Formik, Field} from "formik";
import PageHeading from "../../../../UI/PageHeading";
import Input from "../../../../UI/FormItems/Input";
import {editSchema} from "./editSchema";
import Button from "../../../../UI/Button";
import {serverURL} from "../../../../utils/configs";
import {useAuthContext} from "../../../../../store/AuthContext";
import {useState} from "react";

const InputLabel = ({children}) => {
  return (
    <label className={classes.InputLabel}>{children}:</label>
  )
}

const UserEditContent = ({user, removeModal, updateUsers}) => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const {tokenBearer} = useAuthContext();

  return (
    <div className={classes.UserEditContent}>
      <PageHeading>Vartotojo redagavimas</PageHeading>
      <Formik
        initialValues={{
          username: '',
          password: '',
          age: '',
          email: '',
        }}
        validationSchema={editSchema}
        onSubmit={async (data, {setSubmitting}) => {
          setSubmitting(true);

          const newData = {
            idToModify: user._id,
            username: !!data.username ? data.username : user.username,
            age: !!data.age ? data.age : user.age,
            email: !!data.email ? data.email : user.email,
          }
          if (data.password) {
            newData.password = data.password;
          }

          console.log('submitting');
          fetch(`${serverURL}/users`, {
            method: 'PUT',
            headers: {
              Authorization: tokenBearer,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData),
          }).then((response) => response.json())
            .then((data) => {
              if (data.msg) {
                setSuccessMessage(data.msg);
                setErrorMessage('');
                updateUsers();
                setTimeout(() => {
                  removeModal();
                }, 1000);
              } else {
                setSuccessMessage('');
                setErrorMessage(data.err);
              }
            });

          setSubmitting(false);
        }}>
        {({
          isSubmitting,
          errors,
          }) => (
          <Form className={classes.Form}>
            <div className={classes.InputWrapper}>
              <InputLabel>Vartotojas</InputLabel>
              <Field
                name='username'
                error={errors.username}
                placeholder={user.username}
                as={Input}
              />
            </div>
            <div className={classes.InputWrapper}>
              <InputLabel>Slaptažodis</InputLabel>
              <Field
                name='password'
                type='password'
                placeholder='paslėpta'
                error={errors.password}
                as={Input}
              />
            </div>
            <div className={classes.InputWrapper}>
              <InputLabel>Amžius</InputLabel>
              <Field
                name='age'
                type='number'
                placeholder={user.age}
                error={errors.age}
                as={Input}
              />
            </div>
            <div className={classes.InputWrapper}>
              <InputLabel>El. paštas</InputLabel>
              <Field
                name='email'
                placeholder={user.email}
                error={errors.email}
                as={Input}
              />
            </div>
            <div className={classes.SuccessMessage}>{successMessage}</div>
            <div className={classes.ErrorMessage}>{errorMessage}</div>
            <div className={classes.ButtonsWrapper}>
              <Button name='Koreguoti' solid/>
              <Button name='Išvalyti' type='reset'/>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default UserEditContent;
