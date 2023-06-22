import React from "react";
import styles from './Post.module.css';
import likeImage from './heart-black-shape.png'

const Post = (props) => {
  return (
    <div className={styles.singlePostWrapper}>
      <img className={styles.userImage}
        src="https://e7.pngegg.com/pngimages/931/209/png-clipart-computer-icons-symbol-avatar-logo-person-with-helmut-miscellaneous-black.png"
        alt=""/>
      <div className={styles.singlePostMessage}>{props.message}</div>
      <div className={styles.likesCount}><img src={likeImage} alt=""/> {props.likesCount}</div>
    </div>
  );
}

export default Post;