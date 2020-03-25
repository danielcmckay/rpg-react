import React from "react";
import "./Player.css";
import down from "../../images/char-down.png";
import up from "../../images/char-up.png";
import left from "../../images/char-left.png";
import right from "../../images/char-right.png";
import downleft from "../../images/char-down-leftstep.png";
import downright from "../../images/char-down-rightstep.png";
import upleft from "../../images/char-up-leftstep.png";
import upright from "../../images/char-up-rightstep.png";
import leftleft from "../../images/char-left-leftstep.png";
import leftright from "../../images/char-left-rightstep.png";
import rightleft from "../../images/char-right-leftstep.png";
import rightright from "../../images/char-right-rightstep.png";

const Player = ({ view, foot, position }) => {
  let direction;

  switch (view) {
    case "down":
      if (foot === "rightstep") {
        direction = downright;
      } else if (foot === "middlestep") {
        direction = down;
      } else {
        direction = downleft;
      }
      break;
    case "up":
      if (foot === "rightstep") {
        direction = upright;
      } else if (foot === "middlestep") {
        direction = up;
      } else {
        direction = upleft;
      }
      break;
    case "left":
      if (foot === "rightstep") {
        direction = leftright;
      } else if (foot === "middlestep") {
        direction = left;
      } else {
        direction = leftleft;
      }
      break;
    case "right":
      if (foot === "rightstep") {
        direction = rightright;
      } else if (foot === "middlestep") {
        direction = right;
      } else {
        direction = rightleft;
      }
      break;
  }

  return (
    <div className="Player" style={{ top: position[1], left: position[0] }}>
      <img src={direction} alt="Character" />
    </div>
  );
};

export default Player;
