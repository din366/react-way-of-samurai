import React, {useEffect} from "react";
import Profile from "./Profile/Profile";
import {getProfile, getStatus, updateStatus} from "../../../state/profileReducer";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import withAuthRedirect from "../../../hoc/WithAuthRedirect";
import {compose} from "redux";

const ProfileContainer = (props) => {
  let { userId } = useParams();
  if (!userId && props.loggedUserId === null) {userId = 2}
    else if (!userId && props.loggedUserId) {
     userId = props.loggedUserId;
  }

  useEffect(() => {
    props.getProfile(userId);
  }, [userId])

  useEffect(() => {
    props.getStatus(userId);
  }, [userId])

  return <Profile profile={props.profile}
                  status={props.status}
                  updateStatus={props.updateStatus}
                  isAuth={props.isAuth}
                  loggedUserId={props.loggedUserId}/>
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  loggedUserId: state.auth.userId,
  status: state.profilePage.status,
  isAuth: state.auth.isAuth,
})

export default compose( // for HOC components (create conveyor)
  connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
  withAuthRedirect,
)(ProfileContainer)

