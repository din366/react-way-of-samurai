import {requestAuth} from "./authReducer";

const SET_INITIALIZED = 'app/SET_INITIALIZED';
const SWITCH_BURGER_MENU_STATUS = 'app/SWITCH_BURGER_MENU_STATUS';

const initialState =  {
  initialized: false,
  burgerMenuStatus: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED: {
      return {
        ...state,
        initialized: action.bool,
      }
    }
    case SWITCH_BURGER_MENU_STATUS: {
      return {
        ...state,
        burgerMenuStatus: action.burgerMenuStatus,
      }
    }
    default:
      return state;
  }
}

export const setInitialized = (bool) => ({ type: SET_INITIALIZED, bool });

export const switchBurgerMenuStatus = (burgerMenuStatus) => ({ type: SWITCH_BURGER_MENU_STATUS, burgerMenuStatus})

/* for redux thunk */
export const initializeApp = () => dispatch => {
  let abc = dispatch(requestAuth());
  abc.then((data) => {
      dispatch(setInitialized(true));
    });

}


export default appReducer;