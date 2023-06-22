import React from "react";
import styles from './ProfileInfo.module.css';

export const ProfileInfo = () => {
  return (
    <>
      <div className={styles.imgBackgroundWrapper}>
        <img className={styles.contentImage} src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt=""/>
      </div>
      <div className={styles.descriptionBlock}>
        avatar + description
      </div>
    </>
  );
};