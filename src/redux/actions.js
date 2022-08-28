export const ACTION_TYPES = {
  TOGGLE_SWITCH: "TOGGLE_SWITCH",
  ON_CHANGE_VOLUME:"ON_CHANGE_VOLUME"
};
export const ToggleSwitch = () => {
  return {
    type: ACTION_TYPES.TOGGLE_SWITCH,
  };
};

export const oNChangeVolume = (payload) => {
  return {
    type: ACTION_TYPES.ON_CHANGE_VOLUME,
    payload
  };
};
