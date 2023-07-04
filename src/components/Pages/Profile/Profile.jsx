import React from "react";
import styles from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({store}) => {
    return (
    <>
      <ProfileInfo />
      <MyPostsContainer store={store}/>
    </>
  );
}

export default Profile;