import React, {useEffect} from "react";
import Profile from "./Profile/Profile";
import axios from "axios";
import {setUserProfile} from "../../../state/profileReducer";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import {profileApi} from "../../../api/api";

const ProfileContainer = (props) => {
  let { userId } = useParams();
  if (!userId) userId = 2;

  useEffect(() => {
    profileApi.getProfile(userId)
      .then(data => {
        props.setUserProfile(data);
      });
  }, [userId])

  return <Profile profile={props.profile}/>
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);