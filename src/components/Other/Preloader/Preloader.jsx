import React from "react";
import styles from './Preloader.module.css';
import preloader from "./preloader.svg";

const Preloader = () => {
  return <div className={styles.preloaderContainer}>
    <img src={preloader} alt=""/>
  </div>
}

export default Preloader;