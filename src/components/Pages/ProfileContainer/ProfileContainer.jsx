import React, {useEffect} from "react";
import Profile from "./Profile/Profile";
import axios from "axios";
import {setUserProfile} from "../../../state/profileReducer";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";

const ProfileContainer = (props) => {
  let { userId } = useParams();
  if (!userId) userId = 2;

  useEffect(() => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(res => {
        props.setUserProfile(res.data);
      });
  }, [userId])

  return <Profile profile={props.profile}/>
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);