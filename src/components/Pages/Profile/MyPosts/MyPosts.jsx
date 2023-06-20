import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      my posts
      <div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Add post</button>
      </div>
      <div>
        <Post message='Hi, how are you?' likesCount = '35' />
        <Post message="It's my first post" likesCount = '26'/>
      </div>
    </div>

  );
}

export default MyPosts;