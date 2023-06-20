import React from "react";
import styles from './DialogsItem.module.css';
import userDefaultLogo from './user.png'
import {NavLink} from "react-router-dom";

export const DialogsItem = (props) => {
  return (
    <NavLink to={props.to} className={styles.dialogsItem}>
      <img src={userDefaultLogo} alt=""/>
      <span>Леша</span>
    </NavLink>
  );
};