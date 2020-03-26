import React from 'react';
import tree from "../../images/tree.png";
import grass from "../../images/grass.png";
import rock from "../../images/rock.png";
import "../Game/Game.css";


const Map2 = () => {

  let x = { img: grass, passable: true };
  let y = { img: tree, passable: false };
  let z = { img: rock, passable: false };

  const mapGrid2 = [
    [[y], [y], [y], [y], [y], [y], [y], [y], [x], [y]],
    [[y], [x], [x], [x], [x], [x], [x], [x], [x], [y]],
    [[y], [x], [x], [y], [y], [x], [x], [z], [z], [y]],
    [[y], [x], [x], [y], [y], [x], [x], [z], [z], [y]],
    [[y], [x], [x], [x], [x], [x], [x], [x], [x], [y]],
    [[y], [x], [x], [x], [x], [y], [y], [y], [x], [y]],
    [[y], [y], [x], [x], [y], [y], [y], [y], [x], [y]],
    [[y], [y], [x], [x], [y], [y], [y], [y], [x], [y]],
    [[y], [y], [x], [x], [y], [y], [y], [x], [x], [y]],
    [[y], [y], [x], [x], [y], [y], [y], [x], [x], [y]],
    [[y], [y], [x], [y], [y], [y], [y], [y], [y], [y]]
  ];


  return (
    <table className="Map">
      <tbody>
        {mapGrid2.map(box => (
          <tr className="MapRow">
            {box.map(b => (
              <td className="MapCell">
                <img
                  src={b[0].img}
                  style={{ width: "50px", height: "50px" }}
                ></img>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Map2;
