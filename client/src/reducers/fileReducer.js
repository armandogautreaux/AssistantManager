import _ from 'lodash';
import {
  CREATE_FILE,
  CREATE_FILE_ERROR,
  FETCH_FILES,
  FETCH_FILES_ERROR,
  FETCH_FILE,
  FETCH_FILE_ERROR,
  EDIT_FILE,
  EDIT_FILE_ERROR,
  DELETE_FILE,
  DELETE_FILE_ERROR
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_FILE:
      return { ...state, [action.payload._id]: action.payload };
    case CREATE_FILE_ERROR:
      return { ...state, error: action.payload };
    case FETCH_FILES:
      return {
        ...state,
        ..._.mapKeys(action.payload, '_id')
      };
    case FETCH_FILES_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case FETCH_FILE:
      return {
        ...state,
        [action.payload._id]: action.payload
      };
    case FETCH_FILE_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case EDIT_FILE:
      return {
        ...state,
        [action.payload._id]: action.payload
      };
    case EDIT_FILE_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case DELETE_FILE:
      return _.omit(state, action.payload);
    case DELETE_FILE_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
