import React from "react";
import styles from './DialogsItem.module.css';
import userDefaultLogo from '../../../../Other/user.png'
import {NavLink} from "react-router-dom";

export const DialogsItem = (props) => {
  return (
    <NavLink to={"/dialogs/" + props.to} className={NavData => NavData.isActive ? (styles.dialogsItem + ' ' + styles.active) : styles.dialogsItem}>
      <img src={userDefaultLogo} alt=""/>
      <span>{props.name}</span>
    </NavLink>
  );
};