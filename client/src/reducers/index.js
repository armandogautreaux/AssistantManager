import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './userReducer';
import authReducer from './authReducer';
import fileReducer from './fileReducer';
import searchReducer from './searchReducer';
import eventReducer from './eventReducer';

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  files: fileReducer,
  form: formReducer,
  search: searchReducer,
  event: eventReducer
});
