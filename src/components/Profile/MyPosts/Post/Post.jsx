import React from "react";
import styles from './Post.module.css';

const Post = () => {
  return (
    <div className={styles.singlePostWrapper}>
      <img className={styles.userImage}
        src="https://e7.pngegg.com/pngimages/931/209/png-clipart-computer-icons-symbol-avatar-logo-person-with-helmut-miscellaneous-black.png"
        alt=""/>
      <div className="">post</div>
      <div>like</div>
    </div>
  );
}

export default Post;