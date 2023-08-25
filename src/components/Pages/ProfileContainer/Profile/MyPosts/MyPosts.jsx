import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, Form, Formik} from "formik";

const MyPosts = ({profilePosts, onAddMessage}) => {

  const addMessage = (newPostText) => {
    onAddMessage(newPostText);
  }

  return (
    <div className={styles.postsBlock}>
      <span className={styles.postsTitle}>My posts</span>
      <div className={styles.addPostWrapper}>

        <Formik
          initialValues={{
            message: '',
          }}
          onSubmit={ (values, {resetForm}) => {
            addMessage(values.message);
            resetForm();
          }}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {({errors, touched, isValid, dirty}) => {
            return <Form>
              <Field cols="30" rows="10" id="message" name="message" type="textarea" className={styles.textAreaBlock} placeholder='Add your post...'/>
              <button type="submit" className={styles.addPostButton} disabled={!(isValid && dirty)}>Add post</button>
            </Form>
          }}
        </Formik>
      </div>
      <div>
        {profilePosts.map(item => <Post key={Math.random()} message={item.message} likesCount={item.likesCount} />)}
      </div>
    </div>
  );
}

export default MyPosts;