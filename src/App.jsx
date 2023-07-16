import "./App.css";
import { data } from "./data";
import { useState } from "react";
import DrumPad from "./DrumPad";
import DisplayText from "./DisplayText";

const App = () => {
  const [displayText, setDisplayText] = useState("Beats");

  return (
    <>
      <h1>Drum Machine</h1>
      <div id="drum-machine">
        <div id="drum">
          <DrumPad setDisplayText={setDisplayText} />
        </div>
        <div id="display">
          <DisplayText displayText={displayText} />
        </div>
      </div>
      <h2>Play Options</h2>
      <h3>1: Press keypads on screen by mouse</h3>
      <h3>2: Press keypads same keys,capital by keyboard</h3>
    </>
  );
};

export default App;
