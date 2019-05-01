// import { types } from '../actions/types';
import {
  SIGN_IN,
  SIGN_IN_ERROR,
  SIGN_OUT,
  SIGN_OUT_ERROR,
  GET_USER,
  GET_USER_ERROR,
  LOADING_COMPONENT
} from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
  error: null,
  isLoading: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true
      };
    case SIGN_IN_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    case SIGN_OUT_ERROR:
      return { ...state, error: action.payload };
    case GET_USER:
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload
      };
    case GET_USER_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case LOADING_COMPONENT:
      return {
        ...state,
        isloading: false
      };

    default:
      return state;
  }
};
