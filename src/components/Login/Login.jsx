import React from "react";
import {Formik, Field, Form} from 'formik';
import {LoginValidationSchema} from "../../utils/validationForms";
import styles from './Login.module.css';

const Login = () => {
  return (
    <>
      <h1 className={styles.title}>Login</h1>

      <Formik
        initialValues={{
          login: '',
          password: '',
          remember: '',
        }}
        validationSchema={LoginValidationSchema}
        onSubmit={ (values) => {
          console.log(values);
        }}
      >
        {({errors, touched, dirty, isValid}) => {
          return <Form>
            <div className={styles.formWrapper}>
              <div className={styles.inputWrapper}>
                <label htmlFor="login">Email:</label>
                <Field className={styles.input} id="login" name="login" placeholder="Your email" type="text"/>
                {errors.login && touched.login && <div className={styles.errorBlock}>{errors.login}</div>}
              </div>
              <div className={styles.inputWrapper}>
                <label htmlFor="password">Password:</label>
                <Field className={styles.input} id="password" name="password" placeholder="Your password" />
                {errors.password && touched.password && <div className={styles.errorBlock}>{errors.password}</div>}
              </div>

              <div className={styles.inputWrapper + ' ' + styles.checkboxWrapper}>
                <label htmlFor="remember" className={styles.checkboxLabel}>Remember me</label>
                <Field className={styles.checkbox} id="remember" name="remember" type="checkbox"/>
              </div>

              <div className={styles.buttonWrapper}>
                <button type="submit" className={styles.authButton} disabled={!(isValid && dirty)}>Log In</button>
              </div>
            </div>
          </Form>
        }}
      </Formik>
    </>
  )
}

export default Login;