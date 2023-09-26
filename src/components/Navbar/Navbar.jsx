import React from "react";
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import OnlineFriendsListItem from "./OnlineFriendsListItem/OnlineFriendsListItem";

const Navbar = ({isAuth, burgerMenuStatus, switchBurgerMenuStatus}) => {

  return (
    <>
      <nav className={`${styles.nav} ${burgerMenuStatus ? styles.navActive : ''}`}>
        <div><NavLink to="/profile" className={NavData => NavData.isActive ? styles.active : ''}
                      onClick={() => {switchBurgerMenuStatus(!burgerMenuStatus)}}>Profile</NavLink></div>
        {isAuth ? <div><NavLink to="/friends" className={NavData => NavData.isActive ? styles.active : ''}
                                onClick={() => {switchBurgerMenuStatus(!burgerMenuStatus)}}>Friends</NavLink></div> : ''}

        <div><NavLink to="/dialogs" className={NavData => NavData.isActive ? styles.active : ''}
                      onClick={() => {switchBurgerMenuStatus(!burgerMenuStatus)}}>Messages</NavLink></div>
        <div className={styles.lastNavChild}><NavLink to="/users" className={NavData => NavData.isActive ? styles.active : ''}
                                                      onClick={() => {switchBurgerMenuStatus(!burgerMenuStatus)}}>Users</NavLink></div>

        {isAuth && window.innerWidth > 992 ? <> {/* hide friends list on mobile view */}
          <span className={styles.onlineTitle}>Your friends:</span>
          <div className={styles.sidebarFriends}>
            <OnlineFriendsListItem/>
          </div>
        </> : ''}

      </nav>


    </>
  );
}

export default Navbar;