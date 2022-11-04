import { HandFist, HandPalm, Scissors } from "phosphor-react";
import { useEffect, useState } from "react";

const GamePieces = (props) => {
  let [choice, setChoice] = useState("");
  let [done, setDone] = useState(false);

  const styleChanges = (num) => {
    setDone(true);
    document.querySelectorAll(".mypieces button").forEach((e, i) => {
      if (i === num) {
        e.classList.add("chosen");
        e.disabled = true;
      } else {
        e.classList.add("not-chosen");
        e.disabled = true;
      }
    });
  };
  useEffect(() => {
    if (done === true) {
      props.setGetRes({ ...props.getRes, userChoice: choice });
    }
  }, [done]);
  useEffect(() => {
    if (props.replay === true) {
      setChoice("");
      setDone(false);
      document.querySelectorAll(".mypieces button").forEach((e, i) => {
        e.classList.remove("chosen");
        e.disabled = false;
        e.classList.remove("not-chosen");
      });
    }
  }, [props.replay]);
  return (
    <div className="mypieces">
      <button
        className=" gamebtns pieceBtn"
        disabled={done}
        onClick={(e) => {
          setChoice("Rock");

          styleChanges(0);
        }}
      >
        <HandFist size={32} />
      </button>
      <button
        className=" gamebtns pieceBtn"
        disabled={done}
        onClick={(e) => {
          setChoice("Paper");
          styleChanges(1);
        }}
      >
        <HandPalm size={32} />
      </button>
      <button
        disabled={done}
        className=" gamebtns pieceBtn"
        onClick={(e) => {
          setChoice("Scissor");
          styleChanges(2);
        }}
      >
        <Scissors size={32} />
      </button>
    </div>
  );
};
export default GamePieces;
