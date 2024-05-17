import { FC } from "react";
import "./Rubiks.css";
import { Color } from "../types/rubiks";

type FaceProps = {
  tileColors: Color[];
};

const Face: FC<FaceProps> = ({ tileColors }) => {
  return (
    <div className="face">
      <div className="row">
        <div className="tile" style={{ backgroundColor: tileColors[0] }} />
        <div className="tile" style={{ backgroundColor: tileColors[1] }} />
        <div className="tile" style={{ backgroundColor: tileColors[2] }} />
      </div>
      <div className="row">
        <div className="tile" style={{ backgroundColor: tileColors[3] }} />
        <div className="tile" style={{ backgroundColor: tileColors[4] }} />
        <div className="tile" style={{ backgroundColor: tileColors[5] }} />
      </div>
      <div className="row">
        <div className="tile" style={{ backgroundColor: tileColors[6] }} />
        <div className="tile" style={{ backgroundColor: tileColors[7] }} />
        <div className="tile" style={{ backgroundColor: tileColors[8] }} />
      </div>
    </div>
  );
};

export default Face;
