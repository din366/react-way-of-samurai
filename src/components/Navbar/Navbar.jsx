import React from "react";
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import OnlineFriendsListItem from "./OnlineFriendsListItem/OnlineFriendsListItem";

const Navbar = ({state}) => {
  return (
    <>
      <nav className={styles.nav}>
        <div><NavLink to="/profile" className={NavData => NavData.isActive ? styles.active : ''}>Profile</NavLink></div>
        <div><NavLink to="/dialogs" className={NavData => NavData.isActive ? styles.active : ''}>Messages</NavLink></div>
        <div><NavLink to="/users" className={NavData => NavData.isActive ? styles.active : ''}>Users</NavLink></div>
        <div><NavLink to="/news" className={NavData => NavData.isActive ? styles.active : ''}>News</NavLink></div>
        <div><NavLink to="/music" className={NavData => NavData.isActive ? styles.active : ''}>Music</NavLink></div>
        <div className={styles.lastNavChild}><NavLink to="/settings" className={NavData => NavData.isActive ? styles.active : ''}>Settings</NavLink></div>

        <span className={styles.onlineTitle}>Сейчас в онлайне:</span>
        <div className={styles.sidebarFriends}>
          {state.onlineFriendsList.map((item, index) => index > 5 ? '' : <OnlineFriendsListItem id={item.id} key={item.id} friendName={item.name}/>)}
        </div>
      </nav>


    </>
  );
}

export default Navbar;