import api from '../apis/api';
import {
  USER_CREATE,
  USER_CREATE_ERROR,
  SIGN_IN,
  SIGN_IN_ERROR,
  SIGN_OUT,
  SIGN_OUT_ERROR,
  CREATE_FILE,
  CREATE_FILE_ERROR,
  FETCH_FILES,
  FETCH_FILES_ERROR,
  FETCH_FILE,
  FETCH_FILE_ERROR,
  EDIT_FILE,
  EDIT_FILE_ERROR,
  DELETE_FILE,
  DELETE_FILE_ERROR,
  FETCH_SEARCH,
  FETCH_SEARCH_ERROR,
  RESET_SEARCH,
  GET_USER,
  GET_USER_ERROR,
  SELECT_MENU_ITEM,
  SELECT_SIDEBAR_ITEM,
  LOADING_COMPONENT
} from './types';
import history from '../history';

//Register Action
export const register = ({ name, email, password }) => {
  return async dispatch => {
    try {
      const response = await api.post('/users/register', {
        name,
        email,
        password
      });
      dispatch({ type: USER_CREATE, payload: response.data });
      history.push('/login');
    } catch (error) {
      dispatch({
        type: USER_CREATE_ERROR,
        payload: 'Invalid email or password'
      });
    }
  };
};

//SignIn Action
export const signIn = ({ email, password }) => {
  return async dispatch => {
    try {
      const response = await api.post('/users/login', { email, password });
      dispatch({ type: SIGN_IN, payload: response.data });
      console.log(response.data);
      history.push('/dashboard');
    } catch (error) {
      dispatch({
        type: SIGN_IN_ERROR,
        payload: 'Invalid email or password'
      });
    }
  };
};

export const getUser = () => {
  return async dispatch => {
    try {
      const response = await api.get('/users/profile', {
        withCredentials: true
      });
      dispatch({ type: GET_USER, payload: response.data.user.username });
    } catch (error) {
      dispatch({
        type: GET_USER_ERROR,
        payload: 'No permissions granted'
      });
    }
  };
};

//SignOut Action
export const signOut = () => {
  return async dispatch => {
    try {
      await api.get('/users/logout', { withCredentials: true });
      dispatch({ type: SIGN_OUT });
      history.push('/');
    } catch (error) {
      dispatch({
        type: SIGN_OUT_ERROR,
        payload: 'Logout failed'
      });
    }
  };
};

//CreateFile Action
export const createFile = formValues => {
  return async (dispatch, getState) => {
    try {
      const { userId } = getState().auth;
      const response = await api.post('/files/', { ...formValues, userId });
      dispatch({ type: CREATE_FILE, payload: response.data });
      history.push('/dashboard');
    } catch (error) {
      dispatch({
        type: CREATE_FILE_ERROR,
        payload: 'Errors while creating file'
      });
    }
  };
};

//Fetch files
export const fetchFiles = () => {
  return async dispatch => {
    try {
      const response = await api.get('/files/');
      dispatch({ type: FETCH_FILES, payload: response.data });
    } catch (error) {
      dispatch({
        type: FETCH_FILES_ERROR,
        payload: 'error while fetching file'
      });
    }
  };
};

export const fetchFile = id => {
  return async dispatch => {
    try {
      const response = await api.get(`/files/${id}`);
      dispatch({ type: FETCH_FILE, payload: response.data });
    } catch (error) {
      dispatch({
        type: FETCH_FILE_ERROR,
        payload: 'error while fetching file'
      });
    }
  };
};

export const editFile = (id, formValues) => {
  return async dispatch => {
    try {
      const response = await api.patch(`/files/${id}`, formValues);
      dispatch({ type: EDIT_FILE, payload: response.data });
      history.push('/dashboard');
    } catch (error) {
      dispatch({
        type: EDIT_FILE_ERROR,
        payload: 'error while editing file'
      });
    }
  };
};

export const deleteFile = id => {
  return async dispatch => {
    try {
      await api.delete(`/files/${id}`);
      dispatch({ type: DELETE_FILE, payload: id });
      history.push('/dashboard');
    } catch (error) {
      dispatch({
        type: DELETE_FILE_ERROR,
        payload: 'error while deleting file'
      });
    }
  };
};

//searchFile
export const fetchSearch = Query => {
  return async dispatch => {
    try {
      const response = await api.get(`/files/search${Query}`);
      dispatch({
        type: FETCH_SEARCH,
        payload: response.data[0]
      });
      history.push(`/search/${Query}`);
    } catch (error) {
      dispatch({
        type: FETCH_SEARCH_ERROR,
        payload: 'error while fetching search'
      });
    }
  };
};

export const resetSearch = () => {
  return {
    type: RESET_SEARCH
  };
};

export const handleItemClickMenu = e => {
  return {
    type: SELECT_MENU_ITEM,
    payload: e
  };
};
export const handleItemClickSidebar = e => {
  return {
    type: SELECT_SIDEBAR_ITEM,
    payload: e
  };
};

export const handleOnLoadingComponent = () => {
  return {
    type: LOADING_COMPONENT
  };
};
