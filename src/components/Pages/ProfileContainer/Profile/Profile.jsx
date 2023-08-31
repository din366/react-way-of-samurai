import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {setSendUserDataStatus} from "../../../../state/profileReducer";

const Profile = ({profile, status, updateStatus, isAuth, loggedUserId, changePhoto, editUserInfo,
                   editUserMode, sendUserDataStatus, setSendUserDataStatus, setEditUserMode, isGeneralSendUserDataError,
                   isGeneralSendUserDataErrorMessage}) =>  {
  if (!profile) {
    return <ProfileInfo profile={profile}
                        status={status}
                        updateStatus={updateStatus}
                        isAuth={isAuth}
                        loggedUserId={loggedUserId}
                        changePhoto={changePhoto}
                        editUserInfo={editUserInfo}
                        editUserMode={editUserMode}
                        sendUserDataStatus={sendUserDataStatus}
                        setSendUserDataStatus={setSendUserDataStatus}
                        setEditUserMode={setEditUserMode}
                        isGeneralSendUserDataError={isGeneralSendUserDataError}
                        isGeneralSendUserDataErrorMessage={isGeneralSendUserDataErrorMessage}/>
  } else {
    return (
      <>
        <ProfileInfo profile={profile}
                     status={status}
                     updateStatus={updateStatus}
                     isAuth={isAuth}
                     loggedUserId={loggedUserId}
                     changePhoto={changePhoto}
                     editUserInfo={editUserInfo}
                     editUserMode={editUserMode}
                     sendUserDataStatus={sendUserDataStatus}
                     setSendUserDataStatus={setSendUserDataStatus}
                     setEditUserMode={setEditUserMode}
                     isGeneralSendUserDataError={isGeneralSendUserDataError}
                     isGeneralSendUserDataErrorMessage={isGeneralSendUserDataErrorMessage}/>
        {(isAuth && loggedUserId === profile.userId) ? <MyPostsContainer/> : ''}
      </>
    );
  }

}

export default Profile;