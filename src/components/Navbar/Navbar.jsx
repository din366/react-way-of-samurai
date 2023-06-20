import React from "react";
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div><NavLink to="/profile" className={NavData => NavData.isActive ? styles.active : ''}>Profile</NavLink></div>
      <div><NavLink to="/dialogs" className={NavData => NavData.isActive ? styles.active : ''}>Messages</NavLink></div>
      <div><NavLink to="/news" className={NavData => NavData.isActive ? styles.active : ''}>News</NavLink></div>
      <div><NavLink to="/music" className={NavData => NavData.isActive ? styles.active : ''}>Music</NavLink></div>
      <div><NavLink to="/settings" className={NavData => NavData.isActive ? styles.active : ''}>Settings</NavLink></div>
    </nav>
  );
}

export default Navbar;