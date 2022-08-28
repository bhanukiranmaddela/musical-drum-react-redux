import React from "react";
import { useSelector } from "react-redux";

const EachButton = ({ letter, soundSource }) => {
  const isOn = useSelector((state) => state.on.on);
  const volumeVal = useSelector((state) => state.on.volume);
  console.log(isOn, "from EachButton");
  console.log(volumeVal/100)
  var audio = new Audio(soundSource);
  audio.volume = volumeVal/100;
  const song = () => {
    audio.play();
  };
  // const turnOnRequest=()=>{
  //   alert("Please trun on the power")
  // }
  return (
    <div>
      <button disabled={!isOn} onClick={song}  className="drum-pad ">
        {letter}
      </button>
    </div>
  );
};
export default EachButton;
