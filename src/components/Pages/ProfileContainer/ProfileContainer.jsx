import React, {useEffect} from "react";
import Profile from "./Profile/Profile";
import {getProfile} from "../../../state/profileReducer";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";

const ProfileContainer = (props) => {
  let { userId } = useParams();
  if (!userId) userId = 2;

  useEffect(() => {
    props.getProfile(userId);
  }, [userId])

  return <Profile profile={props.profile}/>
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})

export default connect(mapStateToProps, {getProfile})(ProfileContainer);