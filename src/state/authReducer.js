import {authApi} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const AUTH_FETCHING_TOGGLE = 'AUTH_FETCHING_TOGGLE';
const ERROR_AUTH_FETCHING = 'ERROR_AUTH_FETCHING';


const initialState =  {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  smallLogo: null,
  isFetching: false,
  errorAuthFetching: false,
  errorAuthFetchingMessage: null,
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
    case ERROR_AUTH_FETCHING: {
      return { ...state, errorAuthFetching: action.data.isError, errorAuthFetchingMessage: action.data.message}
    }

    default:
      return state;
  }
}

export const setAuthUserData = (userId, email, login, smallLogo, isAuth) => ({ type: SET_USER_DATA, data: {userId, email, login, smallLogo, isAuth} });
export const toggleAuthIsFetching = (isFetching) => ({ type: AUTH_FETCHING_TOGGLE, isFetching});

export const errorAuthFetching = (isError, message) => ({type: ERROR_AUTH_FETCHING, data: {isError, message}});

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

export const login = (email, password, rememberMe) => dispatch => {
  dispatch(toggleAuthIsFetching(true));
  authApi.login(email, password, rememberMe)
    .then(res => {
      if (res.data.resultCode === 0) {
        dispatch(requestAuth());
      } else {
        dispatch(errorAuthFetching(true, res.data.messages.join(', ')));
        dispatch(setAuthUserData(null, null, null, null, false));
        dispatch(toggleAuthIsFetching(false));
        setTimeout(() => {
          dispatch(errorAuthFetching(false, null));
        }, 3000)
      }
    })
}

export const logout = () => dispatch => {
  authApi.logout()
    .then(res => {
      if (res.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, null, false));
      }
    })
}


export default authReducer;