import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
  return (
    <div className={styles.postsBlock}>
      <span className={styles.postsTitle}>My posts</span>
      <div className={styles.addPostWrapper}>
        <textarea name="" id="" cols="30" rows="10" className={styles.textAreaBlock} placeholder='add you post...'></textarea>
        <button className={styles.addPostButton}>Add post</button>
      </div>
      <div>
        {props.profilePosts.map(item => <Post message={item.message} likesCount={item.likesCount} />)}
      </div>
    </div>

  );
}

export default MyPosts;