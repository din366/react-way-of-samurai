import React from "react";
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import OnlineFriendsListItem from "./OnlineFriendsListItem/OnlineFriendsListItem";

const Navbar = ({state, isAuth}) => {
  return (
    <>
      <nav className={styles.nav}>
        <div><NavLink to="/profile" className={NavData => NavData.isActive ? styles.active : ''}>Profile</NavLink></div>
        {isAuth ? <div><NavLink to="/friends" className={NavData => NavData.isActive ? styles.active : ''}>Friends</NavLink></div> : ''}

        <div><NavLink to="/dialogs" className={NavData => NavData.isActive ? styles.active : ''}>Messages</NavLink></div>
        <div className={styles.lastNavChild}><NavLink to="/users" className={NavData => NavData.isActive ? styles.active : ''}>Users</NavLink></div>

        <span className={styles.onlineTitle}>Your friends:</span>
        <div className={styles.sidebarFriends}>
          <OnlineFriendsListItem/>
        </div>
      </nav>


    </>
  );
}

export default Navbar;