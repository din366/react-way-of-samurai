import {authApi} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const AUTH_FETCHING_TOGGLE = 'AUTH_FETCHING_TOGGLE';


const initialState =  {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  smallLogo: null,
  isFetching: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        isAuth: action.isAuth,
        ...action.data,
      }
    }
    case AUTH_FETCHING_TOGGLE: {
      return { ...state, isFetching: action.isFetching}
    }
    default:
      return state;
  }
}

export const setAuthUserData = (userId, email, login, smallLogo, isAuth) => ({ type: SET_USER_DATA, data: {userId, email, login, smallLogo, isAuth} });
export const toggleAuthIsFetching = (isFetching) => ({ type: AUTH_FETCHING_TOGGLE, isFetching});

/* for redux thunk */
export const requestAuth = () => (dispatch) => {
    dispatch(toggleAuthIsFetching(true));
    authApi.getLoggedInfoUser()
      .then(data => {
        if (data.resultCode === 0) {
          const {id, login, email} = data.data;

          authApi.getLoggedImageUser(id)
            .then(imageUrl => {
              dispatch(setAuthUserData(id, email, login, imageUrl, true));
              dispatch(toggleAuthIsFetching(false));
            });
        } else {
          dispatch(toggleAuthIsFetching(false));
        };
      });
}


export default authReducer;