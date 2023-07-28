import React from "react";
import styles from './Post.module.css';
import likeImage from './heart-black-shape.png';
import defaultProfileImage from '../../../../../Other/user.png';

const Post = (props) => {
  return (
    <div className={styles.singlePostWrapper}>
      <img className={styles.userImage}
        src={defaultProfileImage}
        alt=""/>
      <div className={styles.singlePostMessage}>{props.message}</div>
      <div className={styles.likesCount}><img src={likeImage} alt=""/> {props.likesCount}</div>
    </div>
  );
}

export default Post;