import React from "react";
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
const Header = (props) => {
  return (
    <header className={styles.header}>
      <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" alt=""/>

      <div className={styles.loginWrapper}>
        {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
}

export default Header;