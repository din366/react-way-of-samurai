import React from "react";
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

const Profile = ({state}) => {
  return (
    <>
      <ProfileInfo />
      <MyPosts profilePosts={state.posts} />
    </>
  );
}

export default Profile;