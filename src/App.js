import React, { useState } from "react";
import "./App.css";

import Map1 from "./components/Maps/Map1";
import Player from "./components/Player/Player";

const App = () => {
  const [playerPosition, movePlayer] = useState([-400, -20]);
  const [stepFoot, setStep] = useState("rightstep");
  const [lastStep, setLastStep] = useState("right");
  const [playerView, setView] = useState("up");

  const movement = (x, y) => {
    movePlayer([playerPosition[0] + x, playerPosition[1] + y]);
  };

  const keyPressHandler = e => {
    e.preventDefault();
    if (stepFoot === "rightstep") {
      setStep("middlestep");
      setLastStep("right");
    } else if (stepFoot === "middlestep" && lastStep === "right") {
      setStep("leftstep");
    } else if (stepFoot === "middlestep" && lastStep === "left") {
      setStep("rightstep");
    } else if (stepFoot === "leftstep") {
      setStep("middlestep");
      setLastStep("left");
    } else {
      setStep("rightstep");
    }

    if (e.which === 40) {
      setView("down");
      movement(0, 10);
    } else if (e.which === 38) {
      setView("up");
      movement(0, -10);
    } else if (e.which === 39) {
      setView("right");
      movement(10, 0);
    } else if (e.which === 37) {
      setView("left");
      movement(-10, 0);
    }
  };

  return (
    <div className="App" tabIndex={10} onKeyDown={keyPressHandler}>
      <Player
        position={playerPosition}
        movement={movement}
        view={playerView}
        foot={stepFoot}
      />
      <Map1 />
    </div>
  );
};

export default App;
