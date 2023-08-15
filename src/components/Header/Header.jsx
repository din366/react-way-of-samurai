import React from "react";
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import Preloader from "../Other/Preloader/Preloader";
import defaultUser from '../Other/user-smalled.png'
const Header = (props) => {
  return (
    <header className={styles.header}>
      <NavLink to={'/profile'}>
        <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" alt=""/>
      </NavLink>

      <div className={styles.loginWrapper}>
        {props.isFetching ? <Preloader /> :
          props.isAuth ?
            <NavLink className={styles.loggedUserLink} to={`/profile/${props.userId}`}>
              <div className={styles.loggedUserWrapper}>
                <span className={styles.loginName}>{props.login}</span>
                <div className={styles.loginLogoWrapper}>
                  <div className={styles.loginLogoWrapperOverflow}>
                    <img className={styles.loginLogo} src={props.smallLogo === null ? defaultUser : props.smallLogo} alt=""/>
                  </div>
                  <div className={styles.logoutButtonWrapper}>
                    <button className={styles.logoutButton} onClick={props.logout}>LogOut</button>
                  </div>
                </div>
              </div>
            </NavLink> :
          <NavLink to={'/login'} className={styles.loginButton}>LogIn</NavLink>}
      </div>
    </header>
  );
}

export default Header;