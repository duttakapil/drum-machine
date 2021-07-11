import React from 'react';
import './style.css';
import {hot} from 'react-hot-loader';

const keys = [{
    key: "Heater_1",
    value: "Q",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  }, {
    key: "Heater_2", 
    value: "W", 
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  }, {
    key: "Heater_3",
    value: "E",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  }, {
    key: "Heater_4_1",
    value: "A",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  }, {
    key:"Heater 6",
    value:"S",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  }, {
    key: "DSC_OH",
    value: "D",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  }, {
    key: "Kick_n_Hat", 
    value: "Z",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  }, {
    key: "RP4_Kick_1",
    value : "X",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  }, {
    key: "Cev_H2",
    value: "C",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
}];

function Drum() {
  const [currentKey, setKey] = React.useState('Display');
  
  React.useEffect(()=> {
    document.getElementById('drum-machine').focus();
  });
  
  const playAudio = (audio) => {
    audio.play();
  }
  
  const handleKey = (e) => {
    let key = e.code.split('').pop();
    let keyCode = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
    let elem = document.getElementById(key);
    if(keyCode.indexOf(key) != -1) {
      setKey(elem.parentNode.id);
      playAudio(elem);
    }
  }
  
  const handleClick = (e) => {
    setKey(e.target.id);
    playAudio(e.target.firstChild);
  }
  
  const drumPad = keys.map(e =>
    <button className="drum-pad" id={e.key} onClick={handleClick}>
        <audio className="clip" id={e.value} src={e.url}></audio>
        {e.value}
    </button>  
  )
  
  return (
    <div id="drum-machine" onKeyDown={handleKey} tabindex="0">
      {drumPad}
      <div id="display">{currentKey}</div>
    </div>    
  )
}

export default hot(module)(Drum);