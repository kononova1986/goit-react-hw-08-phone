import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import css from './RegistretionForm.module.css';
import { register } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .min(8, 'Too short')
    .max(30, 'Too long')
    .matches(/^[0-9/-/a-z/A-Z/@/.]{8,30}$/, 'This is not a valid email!')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Too short')
    .max(16, 'Too long')
    .matches(/^[0-9/-/a-z/A-Z]{8,16}$/, 'This is not a valid password!')
    .required('Required'),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const handleSubmitRegistration = (user, actions) => {
    dispatch(
      register({
        name: user.name,
        email: user.email,
        password: user.password,
      })
    );
    actions.resetForm();
  };

  return (
   
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmitRegistration}
        validationSchema={RegisterSchema}
      >
        <Form className={css.formStyle}>
          <label htmlFor={nameId}>Name</label>
          <Field className={css.field} id={nameId} name="name" type="text" />
          <ErrorMessage style={{ color: 'red' }} name="name" component="span" />
          <label htmlFor={emailId}>Email</label>
          <Field
            className={css.field}
            id={passwordId}
            name="email"
            type="email"
          />
          <label htmlFor={passwordId}>Password</label>
          <Field
            className={css.field}
            id={emailId}
            name="password"
            type="password"
          />
          <ErrorMessage
            style={{ color: 'red' }}
            name="error"
            component="span"
          />
          <Button
            variant="contained"
            style={{ marginTop: '15px' }}
            type="submit"
          >
            Registration
          </Button>
        </Form>
      </Formik>
    
  );
}
