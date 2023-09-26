import React from "react";
import styles from './DialogsItem.module.css';
import userDefaultLogo from '../../../../Other/user.png'
import {NavLink} from "react-router-dom";

export const DialogsItem = ({to, name, photo, toggleChatsMenu}) => {
  return (
    <NavLink onClick={() => {toggleChatsMenu(false)}} to={"/dialogs/" + to} className={NavData => NavData.isActive ? (styles.dialogsItem + ' ' + styles.active) : styles.dialogsItem}>
      <img className={styles.friendPhoto} src={photo? photo : userDefaultLogo} alt=""/>
      <span>{name}</span>
    </NavLink>
  );
};