import React from "react";
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import Preloader from "../Other/Preloader/Preloader";
import defaultUser from '../Other/user-smalled.png';
import samuraiLogo from './../Other/samuraiLogo.png';
import {ModalButton} from "../Other/ModalButton/ModalButton";
const Header = (props) => {
  return (
    <header className={styles.header}>
      <NavLink to={'/'} className={styles.navLinkHeaderLogoWrapper} onClick={ () => {props.switchBurgerMenuStatus(false)}}>
        <img src={samuraiLogo} alt="logo"/>
        <div className={styles.headerSocialTitleWrapper}>
          <span className={styles.headerSocialName}>Samurai</span>
          <span className={styles.headerSocialSubname}>Social Network</span>
        </div>
      </NavLink>

      <div className={styles.loginWrapper}>
        {props.isFetching ? <Preloader /> :
          props.isAuth ?
            <NavLink className={styles.loggedUserLink} to={`/profile/${props.userId}`}
                     onClick={ () => {props.switchBurgerMenuStatus(false)}}>
              <div className={styles.loggedUserWrapper}>
                <span className={styles.loginName}>{props.login}</span>
                <div className={styles.loginLogoWrapper}>
                  <div className={styles.loginLogoWrapperOverflow}>
                    <img className={styles.loginLogo} src={props.smallLogo === null ? defaultUser : props.smallLogo} alt=""/>
                  </div>
                  <div className={styles.logoutButtonWrapper}>
                    <button className={styles.logoutButton} onClick={ () => {
                      props.logout();
                      props.switchBurgerMenuStatus(false);
                    }}>LogOut</button>
                  </div>
                </div>
              </div>
            </NavLink> :
          <NavLink to={'/login'} className={styles.loginButton}>LogIn</NavLink>}

        <ModalButton burgerMenuStatus={props.burgerMenuStatus} switchBurgerMenuStatus={props.switchBurgerMenuStatus}></ModalButton>
      </div>
    </header>
  );
}

export default Header;