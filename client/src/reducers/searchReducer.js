import {
  FETCH_SEARCH,
  FETCH_SEARCH_ERROR,
  RESET_SEARCH
} from '../actions/types';

const INITIAL_STATE = {
  response: null,
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SEARCH:
      return { ...state, response: action.payload };
    case FETCH_SEARCH_ERROR:
      return { ...state, error: action.payload };
    case RESET_SEARCH:
      return { ...state, response: null };
    default:
      return state;
  }
};
