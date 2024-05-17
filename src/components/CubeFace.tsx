import { FC } from "react";
import "./Rubiks.css";
import { Color, Face, Tile } from "../types/rubiks";
import { getFaceColors } from "../util/rubiks";

const SELECTED_COLOR = "#14e37f";

type FaceProps = {
  cube: Tile[];
  face: Face;
  selected: Face;
  setSelected: (face: Face) => void;
};

const CubeFace: FC<FaceProps> = ({ cube, face, selected, setSelected }) => {
  const tileColors = getFaceColors(cube, face);
  const isSelfSelected = selected === face;

  return (
    <div className="face" onClick={() => setSelected(face)}>
      <div className="row">
        <div
          className="tile"
          style={{
            backgroundColor: tileColors[0],
            borderColor: isSelfSelected ? SELECTED_COLOR : "black",
          }}
        />
        <div
          className="tile"
          style={{
            backgroundColor: tileColors[1],
            borderColor: isSelfSelected ? SELECTED_COLOR : "black",
          }}
        />
        <div
          className="tile"
          style={{
            backgroundColor: tileColors[2],
            borderColor: isSelfSelected ? SELECTED_COLOR : "black",
          }}
        />
      </div>
      <div className="row">
        <div
          className="tile"
          style={{
            backgroundColor: tileColors[3],
            borderColor: isSelfSelected ? SELECTED_COLOR : "black",
          }}
        />
        <div
          className="tile"
          style={{
            backgroundColor: tileColors[4],
            borderColor: isSelfSelected ? SELECTED_COLOR : "black",
          }}
        />
        <div
          className="tile"
          style={{
            backgroundColor: tileColors[5],
            borderColor: isSelfSelected ? SELECTED_COLOR : "black",
          }}
        />
      </div>
      <div className="row">
        <div
          className="tile"
          style={{
            backgroundColor: tileColors[6],
            borderColor: isSelfSelected ? SELECTED_COLOR : "black",
          }}
        />
        <div
          className="tile"
          style={{
            backgroundColor: tileColors[7],
            borderColor: isSelfSelected ? SELECTED_COLOR : "black",
          }}
        />
        <div
          className="tile"
          style={{
            backgroundColor: tileColors[8],
            borderColor: isSelfSelected ? SELECTED_COLOR : "black",
          }}
        />
      </div>
    </div>
  );
};

export default CubeFace;
