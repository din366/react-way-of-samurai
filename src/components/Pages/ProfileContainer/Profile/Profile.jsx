import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Navigate} from "react-router-dom";

const Profile = ({profile}) =>  {



    return (
      <>
        <ProfileInfo profile={profile}/>
        <MyPostsContainer/>
      </>
    );
}

export default Profile;