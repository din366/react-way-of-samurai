import React, {useEffect} from "react";
import Profile from "./Profile/Profile";
import {
  changePhoto,
  editUserInfo, setEditUserMode,
  getProfile,
  getStatus, setSendUserDataStatus,
  updateStatus
} from "../../../state/profileReducer";
import {connect} from "react-redux";
import {Navigate, useParams} from "react-router-dom";
import {compose} from "redux";

const ProfileContainer = (props) => {
  let { userId } = useParams();
  if (!userId && props.loggedUserId === null) {userId = null}
    else if (!userId && props.loggedUserId) {
     userId = props.loggedUserId;
  }

  useEffect(() => {
    if (userId !== null) { // Do not send a request to server when the user is not authorized, but came after visiting some user
      props.getProfile(userId);
      props.getStatus(userId);
    }
  }, [userId])

  if (!userId && props.loggedUserId === null) {
    return <Navigate to={'/login'}/>
  } else {
    return <Profile profile={props.profile}
                    status={props.status}
                    updateStatus={props.updateStatus}
                    isAuth={props.isAuth}
                    loggedUserId={props.loggedUserId}
                    changePhoto={props.changePhoto}
                    editUserInfo={props.editUserInfo}
                    editUserMode={props.editUserMode}
                    sendUserDataStatus={props.sendUserDataStatus}
                    setSendUserDataStatus={props.setSendUserDataStatus}
                    setEditUserMode={props.setEditUserMode}
                    isGeneralSendUserDataError={props.isGeneralSendUserDataError}
                    isGeneralSendUserDataErrorMessage={props.isGeneralSendUserDataErrorMessage}/>
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  loggedUserId: state.auth.userId,
  status: state.profilePage.status,
  isAuth: state.auth.isAuth,
  editUserMode: state.profilePage.editUserMode,
  sendUserDataStatus: state.profilePage.sendUserDataStatus,
  isGeneralSendUserDataError: state.profilePage.isGeneralSendUserDataError,
  isGeneralSendUserDataErrorMessage: state.profilePage.isGeneralSendUserDataErrorMessage,
})

export default compose( // for HOC components (create conveyor)
  connect(mapStateToProps, {getProfile,
    getStatus, updateStatus, changePhoto, editUserInfo,
    setEditUserMode, setSendUserDataStatus}),
  /*withAuthRedirect,*/
)(ProfileContainer)

