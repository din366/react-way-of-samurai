import React from "react";
import {Formik, Field, Form} from 'formik';
import {LoginValidationSchema} from "../../utils/validationForms";
import styles from './Login.module.css';
import {connect} from "react-redux";
import {login, logout} from "../../state/authReducer";
import {Navigate} from "react-router-dom";
import Preloader from "../Other/Preloader/Preloader";

const Login = ({login, isAuth, isFetching, isError, errorMessage, captchaUrl}) => {
  if (isAuth) {
    return <Navigate to={'/profile'} />
  } else {
    return (
      <>
        <h1 className={styles.title}>Login</h1>

        <Formik
          initialValues={{
            login: '',
            password: '',
            remember: '',
            captcha: '',
          }}
          validationSchema={LoginValidationSchema}
          onSubmit={ (formData, {setFieldValue}) => {
            login(
              formData.login,
              formData.password,
              formData.remember === '' ? false : formData.remember,
              captchaUrl ? formData.captcha : null,
              setFieldValue,
            );
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

                <div className={`${styles.generalErrorFetchingWrapper} ${isError ? styles.setHeightErrorWrapper : ''} `}>
                  {isError ? <div className={styles.generalErrorFetching}>{errorMessage}</div> : ''}
                </div>

                {captchaUrl ?
                  <div className={styles.inputWrapper}>
                    <img src={captchaUrl} alt="captcha"/>
                    <Field className={styles.checkbox} id="captcha" name="captcha" placeholder="Captcha"/>
                  </div> : ''
                }



                <div className={styles.buttonWrapper}>
                  <button type="submit" className={styles.authButton} disabled={!(isValid && dirty)}>Log In</button>
                  <div className={styles.preloaderWrapper}>{isFetching ? <Preloader/> : ''}</div>
                </div>
              </div>
            </Form>
          }}
        </Formik>
      </>
    )
  }

}

export default connect(
  (state) => ({
    isAuth: state.auth.isAuth,
    isFetching: state.auth.isFetching,
    isError: state.auth.errorAuthFetching,
    errorMessage: state.auth.errorAuthFetchingMessage,
    captchaUrl: state.auth.captchaUrl,
  }),
  {login, logout})
(Login);