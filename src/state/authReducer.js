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

export default authReducer;