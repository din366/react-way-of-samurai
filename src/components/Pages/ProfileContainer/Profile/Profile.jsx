import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({profile, status, updateStatus, isAuth, loggedUserId}) =>  {
  if (!profile) {
    return <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} isAuth={isAuth} loggedUserId={loggedUserId}/>
  } else {
    return (
      <>
        <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} isAuth={isAuth} loggedUserId={loggedUserId}/>
        {(isAuth && loggedUserId === profile.userId) ? <MyPostsContainer/> : ''}
      </>
    );
  }

}

export default Profile;