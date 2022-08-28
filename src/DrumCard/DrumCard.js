import "./DrumCard.css";
import EachButton from "../EachButton/EachButton";
import Controls from "../Controls/Controls";
const DrumCard = () => {
  const Source = [
    {
      letter: "Q",
      sound:
        "http://codeskulptor-demos.commondatastorage.googleapis.com/pang/arrow.mp3",
    },
    {
      letter: "W",
      sound:
        "http://commondatastorage.googleapis.com/codeskulptor-assets/week7-bounce.m4a",
    },
    {
      letter: "E",
      sound:
        "http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/intromusic.ogg",
    },
    {
      letter: "A",
      sound:
        "http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/start.ogg",
    },
    {
      letter: "S",
      sound:
        "http://codeskulptor-demos.commondatastorage.googleapis.com/descent/spring.mp3",
    },
    {
      letter: "D",
      sound:
        "https://rpg.hamsterrepublic.com/wiki-images/2/21/Collision8-Bit.ogg",
    },
    {
      letter: "Z",
      sound: "https://rpg.hamsterrepublic.com/wiki-images/d/db/Crush8-Bit.ogg",
    },
    {
      letter: "X",
      sound: "https://rpg.hamsterrepublic.com/wiki-images/7/72/Metal_Hit.ogg",
    },
    {
      letter: "C",
      sound: "http://codeskulptor-demos.commondatastorage.googleapis.com/descent/spring.mp3",
    },
  ];

  return (
    <div id="display">
      <div className="card">
        <div className="card1">
          {Source.map((eachItem) => {
            return (
              <EachButton
                key={eachItem.letter}
                letter={eachItem.letter}
                soundSource={eachItem.sound}
              />
            );
          })}
        </div>
        <div className="card2">
          <Controls/>
        </div>
      </div>
    </div>
  );
};

export default DrumCard;
