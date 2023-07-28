import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../../state/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    profilePosts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
    onAddMessage: () => {
      dispatch(addPostActionCreator());
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;