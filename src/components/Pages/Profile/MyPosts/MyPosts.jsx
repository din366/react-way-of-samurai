import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (/*{newPostText, profilePosts, addPost}*/{profilePosts, addPost, updateNewPostText}) => {

  let newPostElement = React.createRef()
  const addMessage = () => {
    addPost();
  }

  const onChangeTextArea = () => {
    let text = newPostElement.current.value;
    updateNewPostText(text);
  }

  return (
    <div className={styles.postsBlock}>
      <span className={styles.postsTitle}>My posts</span>
      <div className={styles.addPostWrapper}>
        <textarea ref={newPostElement} name="" id="" cols="30" rows="10" className={styles.textAreaBlock} placeholder='add you post...' onChange={onChangeTextArea}></textarea>
        <button className={styles.addPostButton} onClick={addMessage}>Add post</button>
      </div>
      <div>
        {profilePosts.map(item => <Post message={item.message} likesCount={item.likesCount} />)}
      </div>
    </div>
  );
}

export default MyPosts;