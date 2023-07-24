import React from "react";
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