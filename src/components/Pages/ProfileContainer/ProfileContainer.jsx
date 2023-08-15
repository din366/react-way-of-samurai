import React, {useEffect} from "react";
import Profile from "./Profile/Profile";
import {getProfile, getStatus, updateStatus} from "../../../state/profileReducer";
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
                    loggedUserId={props.loggedUserId}/>
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  loggedUserId: state.auth.userId,
  status: state.profilePage.status,
  isAuth: state.auth.isAuth,
})

export default compose( // for HOC components (create conveyor)
  connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
  /*withAuthRedirect,*/
)(ProfileContainer)

