import { useState } from "react";
import { makeCube, rotateFace, getFaceColors } from "../util/rubiks";
import Face from "./Face";
import "./Rubiks.css";
import { Tile } from "../types/rubiks";

function Rubiks() {
  const [cube, setCube] = useState<Tile[]>(makeCube());

  return (
    <div className="rubiks">
      <div className="rubiks-col">
        <Face tileColors={getFaceColors(cube, "L")} />
      </div>
      <div className="rubiks-col">
        <Face tileColors={getFaceColors(cube, "U")} />
        <Face tileColors={getFaceColors(cube, "F")} />
        <Face tileColors={getFaceColors(cube, "D")} />
      </div>
      <div className="rubiks-col">
        <Face tileColors={getFaceColors(cube, "R")} />
      </div>
      <div className="rubiks-col">
        <Face tileColors={getFaceColors(cube, "B")} />
      </div>
      <div className="rubiks-col">
        <button onClick={() => setCube(rotateFace(cube, "L", true))}>
          Rotate L CW
        </button>
        <button onClick={() => setCube(rotateFace(cube, "L", false))}>
          Rotate L CC
        </button>
        <button onClick={() => setCube(rotateFace(cube, "U", true))}>
          Rotate U CW
        </button>
        <button onClick={() => setCube(rotateFace(cube, "U", false))}>
          Rotate U CC
        </button>
        <button onClick={() => setCube(rotateFace(cube, "F", true))}>
          Rotate F CW
        </button>
        <button onClick={() => setCube(rotateFace(cube, "F", false))}>
          Rotate F CC
        </button>
        <button onClick={() => setCube(rotateFace(cube, "D", true))}>
          Rotate D CW
        </button>
        <button onClick={() => setCube(rotateFace(cube, "D", false))}>
          Rotate D CC
        </button>
        <button onClick={() => setCube(rotateFace(cube, "R", true))}>
          Rotate R CW
        </button>
        <button onClick={() => setCube(rotateFace(cube, "R", false))}>
          Rotate R CC
        </button>
        <button onClick={() => setCube(rotateFace(cube, "B", true))}>
          Rotate B CW
        </button>
        <button onClick={() => setCube(rotateFace(cube, "B", false))}>
          Rotate B CC
        </button>
      </div>
    </div>
  );
}

export default Rubiks;
