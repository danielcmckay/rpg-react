import React from "react";
import tree from "../../images/tree.png";
import grass from "../../images/grass.png";
import rock from "../../images/rock.png";
import Player from "../Player/Player";
import Map1 from "../Maps/Map1";
import Map2 from "../Maps/Map2";


const Map = props => {
  console.log(props.position)

  return (
    <>
      <Player
        position={props.position}
        movement={props.movement}
        view={props.view}
        foot={props.foot}
      />
      <Map1 />
    </>
  );
};

export default Map;
