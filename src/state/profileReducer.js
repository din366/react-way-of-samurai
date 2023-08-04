import {profileApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState =  {
  posts: [
    {message: 'Hi, how are you?', likesCount: 35},
    {message: 'It\'s my first post', likesCount: 26}
  ],
  newPostText: '',
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        newPostText: '',
        posts: [...state.posts, newPost]
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.userId}
    }
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({
  type: ADD_POST
});

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT, newText: text
});

export const setUserProfile = (userId) => ({
  type: SET_USER_PROFILE, userId
})

/* for redux thunk */
export const getProfile = (userId) => (dispatch) => {
    profileApi.getProfile(userId)
      .then(data => {
        dispatch(setUserProfile(data));
      });
}

export default profileReducer;