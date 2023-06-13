import React from "react";
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={styles.content}>
      <img className={styles.contentImage} src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt=""/>

      <div>
        avatar + description
      </div>
      <MyPosts />
    </div>
  );
}

export default Profile;