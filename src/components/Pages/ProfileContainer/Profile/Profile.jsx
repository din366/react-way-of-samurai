import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({profile}) =>  {
    return (
      <>
        <ProfileInfo profile={profile}/>
        <MyPostsContainer/>
      </>
    );
}

export default Profile;