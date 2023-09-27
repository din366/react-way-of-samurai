import React from "react";
import styles from './FirstPage.module.css';
import {Link} from "react-router-dom";


const FirstPage = ({isAuth}) => {
  return (
    <>
      <div className={styles.mainWrapper}>
        <h1 className={styles.title}>Hi! This is Samurai Social Network</h1>
        <div className={styles.linkWrapper}>
          <Link to={"/profile"} className={styles.link}>Go to your profile</Link>
          <span className={styles.linkDescription}>(only logged users)</span>
        </div>
        <div className={styles.linkWrapper}>
          <Link to={"/dialogs"} className={styles.link}>Go to messages</Link>
          <span className={styles.linkDescription}>(only logged users)</span>
        </div>
        <div className={styles.linkWrapper}>
          <Link to={"/users"} className={styles.link}>Go to all social network registered users</Link>
          <span className={styles.linkDescription}>(if logged in - you can subscribe to your friends and chat)</span>
        </div>
        <div className={styles.linkWrapper}>
          <Link to={"/login"} className={styles.login}>{isAuth ? 'Go to your profile': 'Log In'}</Link>
          {!isAuth ? <span className={styles.linkDescription}>[ sure if you are a samurai ;) ]</span> : ''}
        </div>
      </div>
    </>
  );
}

export default FirstPage;