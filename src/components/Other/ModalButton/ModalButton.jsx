import React from "react";
import styles from './ModalButton.module.css';

export const ModalButton = ({burgerMenuStatus, switchBurgerMenuStatus}) => {
  return (
    <button className={`${styles.modalMenuButton} ${burgerMenuStatus ? styles.modalMenuButtonActive : ''}`}
            onClick={() => {switchBurgerMenuStatus(!burgerMenuStatus)}}>
      <span>menu</span>
    </button>
  )
};