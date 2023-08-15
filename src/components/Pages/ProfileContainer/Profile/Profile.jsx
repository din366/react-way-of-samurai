import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({profile, status, updateStatus, isAuth, loggedUserId}) =>  {
  console.log(profile)
    return (
      <>
        <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} isAuth={isAuth} loggedUserId={loggedUserId}/>
        <MyPostsContainer/>
      </>
    );
}

export default Profile;