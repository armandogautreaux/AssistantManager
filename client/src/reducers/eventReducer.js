import { SELECT_MENU_ITEM, SELECT_SIDEBAR_ITEM } from '../actions/types';

const INITIAL_STATE = {
  activeMenuItem: 'home',
  activeSidebarItem: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_MENU_ITEM:
      return { ...state, activeMenuItem: action.payload };
    case SELECT_SIDEBAR_ITEM:
      return { ...state, activeSidebarItem: action.payload };
    default:
      return state;
  }
};
