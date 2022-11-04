import { useEffect } from "react";
import "./showres.css";

const ShowRes = (props) => {
  return (
    <div className="showRes">
      <div className="showWinner">
        <span>Winner is:</span> <span className="winner">{props.winner}</span>
        <button className="replay" onClick={() => props.setReplay(true)}>
          Replay
        </button>
      </div>
    </div>
  );
};
export default ShowRes;
