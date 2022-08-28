import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./controls.css";
const Controls = () => {
  const isOn = useSelector((state) => state.on.on);
  const volumeVal = useSelector((state) => state.on.volume);
  const dispatch = useDispatch();
  const handleRange = (e) => {
    dispatch({type:"ON_CHANGE_VOLUME",payload:e.target.value})
  };
  return (
    <div className="control-div">
      {/* power */}
      <h3 className="power">
        Power <span style={{ fontWeight: "bold" }}>{isOn ? "ON" : "OFF"}</span>
      </h3>
      <div
        className="toggle-button "
        onClick={() => dispatch({ type: "TOGGLE_SWITCH" })}
      >
        <div className={"switch " + (isOn ? "switch-on" : "switch-off")}></div>
      </div>
      <div className="vol-cont">
        <h1>{volumeVal}</h1>
      </div>
      {/* volumeDisplay */}
      <div className="range-div">
        <input 
        disabled={!isOn}
          value={volumeVal}
          onChange={handleRange}
          step={5}
          min={0}
          max={100}
          className="volume-range"
          type="range"
        />
      </div>
      {/* vloumebar */}
    </div>
  );
};

export default Controls;
