import React from "react";
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import Preloader from "../Other/Preloader/Preloader";
import defaultUser from '../Other/user-smalled.png'
const Header = (props) => {
  return (
    <header className={styles.header}>
      <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" alt=""/>

      <div className={styles.loginWrapper}>
        {props.isFetching ? <Preloader /> :
          props.isAuth ?
            <NavLink className={styles.loggedUserLink} to={`/profile/${props.userId}`}>
              <div className={styles.loggedUserWrapper}>
                <span className={styles.loginName}>{props.login}</span>
                <div className={styles.loginLogoWrapper}>
                  <img className={styles.loginLogo} src={props.smallLogo === null ? defaultUser : props.smallLogo} alt=""/>
                </div>
              </div>
            </NavLink> :
          <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
}

export default Header;