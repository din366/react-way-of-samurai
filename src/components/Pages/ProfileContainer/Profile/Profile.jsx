import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({profile, status, updateStatus, isAuth, loggedUserId, changePhoto}) =>  {
  if (!profile) {
    return <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} isAuth={isAuth} loggedUserId={loggedUserId} changePhoto={changePhoto}/>
  } else {
    return (
      <>
        <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} isAuth={isAuth} loggedUserId={loggedUserId} changePhoto={changePhoto}/>
        {(isAuth && loggedUserId === profile.userId) ? <MyPostsContainer/> : ''}
      </>
    );
  }

}

export default Profile;