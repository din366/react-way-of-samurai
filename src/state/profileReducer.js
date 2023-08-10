import {profileApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState =  {
  posts: [
    {message: 'Hi, how are you?', likesCount: 35},
    {message: 'It\'s my first post', likesCount: 26}
  ],
  newPostText: '',
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost]
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.userId}
    }
    case SET_STATUS : {
      return { ...state, status: action.status};
    }
    default:
      return state;
  }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});

export const setUserProfile = (userId) => ({type: SET_USER_PROFILE, userId})

export const setStatus = (status) => ({ type: SET_STATUS, status});

/* for redux thunk */
export const getProfile = (userId) => (dispatch) => {
    profileApi.getProfile(userId)
      .then(data => {
        dispatch(setUserProfile(data));
      });
};

export const getStatus = (userId) => (dispatch) => {
  profileApi.getStatus(userId)
    .then(data => {
      dispatch(setStatus(data.data));
    })
}

export const updateStatus = (status) => (dispatch) => {
  profileApi.updateStatus(status)
    .then(data => {
      if (data.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    })
}

export default profileReducer;