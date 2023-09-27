import React from "react";
import styles from './AddMessageBlock.module.css';
import {Field, Form, Formik} from "formik";

const AddMessageBlock = ({currentChatUserId, sendMessage}) => {
  return (
    <Formik
      initialValues={{
        message: '',
      }}
      onSubmit={ (values, {resetForm}) => {
        sendMessage(currentChatUserId, values.message);
        resetForm();
      }}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({errors, touched, isValid, dirty}) => {
        return <Form>
          <Field cols="30" rows="10" id="message" name="message" type="textarea" className={styles.AddMessageBlockTextarea} placeholder='Add your message...'/>
          <button type="submit" className={styles.addMessageBlockSendButton} disabled={!(isValid && dirty)}>Submit</button>
        </Form>
      }}
    </Formik>
  );
};

export default AddMessageBlock;