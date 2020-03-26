import React, {useEffect} from 'react';
import tree from "../../images/tree.png";
import grass from "../../images/grass.png";
import rock from "../../images/rock.png";
import "../Game/Game.css";


const Map1 = (props) => {

  let x = { img: grass, passable: true };
  let y = { img: tree, passable: false };
  let z = { img: rock, passable: false };

  const mapGrid1 = [
    [[y], [y], [x], [y], [y], [y], [y], [y], [y], [y]],
    [[y], [x], [x], [x], [x], [x], [x], [z], [z], [y]],
    [[y], [x], [x], [y], [y], [x], [x], [z], [z], [y]],
    [[y], [x], [x], [y], [y], [x], [x], [x], [x], [y]],
    [[y], [x], [x], [x], [x], [x], [x], [x], [x], [y]],
    [[y], [x], [x], [x], [x], [y], [y], [y], [x], [y]],
    [[y], [y], [y], [x], [y], [y], [y], [y], [x], [y]],
    [[y], [y], [y], [x], [y], [y], [y], [y], [x], [y]],
    [[y], [y], [y], [x], [y], [y], [y], [x], [x], [y]],
    [[y], [y], [y], [x], [y], [y], [y], [x], [x], [y]],
    [[y], [y], [y], [y], [y], [y], [y], [y], [y], [y]]
  ];

    console.log(mapGrid1.forEach((box, idx) => console.log(box[1][0])))
  

  

  return (
    <table className="Map">
      <tbody>
        {mapGrid1.map(box => (
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
export default Map1;
