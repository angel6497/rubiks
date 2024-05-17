import { useState } from "react";
import { makeCube, rotateFace } from "../util/rubiks";
import CubeFace from "./CubeFace";
import "./Rubiks.css";
import { Face, Tile } from "../types/rubiks";
import { FiLoader, FiRotateCcw, FiRotateCw } from "react-icons/fi";

function Rubiks() {
  const [cube, setCube] = useState<Tile[]>(makeCube());
  const [selected, setSelected] = useState<Face>("F");

  return (
    <div className="rubiks">
      <div className="rubiks-col">
        <CubeFace
          cube={cube}
          face={"L"}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <div className="rubiks-col">
        <CubeFace
          cube={cube}
          face={"U"}
          selected={selected}
          setSelected={setSelected}
        />
        <CubeFace
          cube={cube}
          face={"F"}
          selected={selected}
          setSelected={setSelected}
        />
        <CubeFace
          cube={cube}
          face={"D"}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <div className="rubiks-col">
        <CubeFace
          cube={cube}
          face={"R"}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <div className="rubiks-col">
        <CubeFace
          cube={cube}
          face={"B"}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <div className="buttons-col">
        <div>
          <button
            className="rotate-button rubiks-button"
            onClick={() => setCube(rotateFace(cube, selected, true))}
          >
            <FiRotateCw className="rubiks-button-rotate-icon" />
          </button>
          <button
            className="rotate-button rubiks-button"
            onClick={() => setCube(rotateFace(cube, selected, false))}
          >
            <FiRotateCcw className="rubiks-button-rotate-icon" />
          </button>
        </div>
        <button
          className="reset-button rubiks-button"
          onClick={() => setCube(makeCube())}
        >
          <FiLoader /> <p className="rubiks-button-text">Reset</p>
        </button>
      </div>
    </div>
  );
}

export default Rubiks;
