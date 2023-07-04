import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../state/profileReducer";
import MyPosts from "./MyPosts";



const MyPostsContainer = ({store}) => {

  const state = store.getState();
  const addMessage = () => {
    store.dispatch(addPostActionCreator());
  }

  const onChangeTextArea = (text) => {
    store.dispatch(updateNewPostTextActionCreator(text));
  }

  console.log(onChangeTextArea)

  return (<MyPosts updateNewPostText={onChangeTextArea}
                   onAddMessage={addMessage}
                   profilePosts={state.profilePage.posts}
                   newPostText={state.profilePage.newPostText}/>);
}

export default MyPostsContainer;