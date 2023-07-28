import React from "react";
import Profile from "./Profile/Profile";
import axios from "axios";
import {setUserProfile} from "../../../state/profileReducer";
import {connect} from "react-redux";

class ProfileContainer extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`) /*${this.props.userId}*/
      .then(res => {
        this.props.setUserProfile(res.data);
      });
  }

  render () {
    return <Profile profile={this.props.profile}/>;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})

export default connect(mapStateToProps, {
  setUserProfile,
})(ProfileContainer);