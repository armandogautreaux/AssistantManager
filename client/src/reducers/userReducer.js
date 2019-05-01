import { USER_CREATE, USER_CREATE_ERROR } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case USER_CREATE:
      return { ...state, registering: true };
    case USER_CREATE_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
