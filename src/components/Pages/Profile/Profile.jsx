import React from "react";
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

const Profile = ({state, dispatch}) => {
  return (
    <>
      <ProfileInfo />
      <MyPosts profilePosts={state.posts} dispatch={dispatch}/>
    </>
  );
}

export default Profile;