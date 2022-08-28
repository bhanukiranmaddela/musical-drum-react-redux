import { combineReducers } from "redux";
import { ACTION_TYPES } from "./actions";
const initialState = {
  on: true,
  volume:55
};
export const toggleSwitchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.TOGGLE_SWITCH:
      return {
        ...state,
        on: !state.on,
      };
      case ACTION_TYPES.ON_CHANGE_VOLUME:
        return {
          ...state,
          volume:action.payload,
        };
    default:
      return state;
  }
};

export const reducers = combineReducers({
  on:toggleSwitchReducer
})
 