import { HandFist, HandPalm, Scissors } from "phosphor-react";
import { useEffect, useState } from "react";

const ComputerPieces = (props) => {
  let [choice, setChoice] = useState(Math.floor(Math.random() * 3));
  useEffect(() => {
    if (props.res === true) {
      document.querySelectorAll(".computerBtns").forEach((e, i) => {
        if (i === choice) {
          e.classList.add("computer-chosen");
          props.setGetRes({
            ...props.getRes,
            computerChoice: props.elements[choice],
          });
        } else {
          e.classList.add("computer-not-chosen");
        }
        e.disabled = true;
      });
    } else {
    }
  }, [props.res]);
  useEffect(() => {
    if (props.replay === true) {
      setChoice(Math.floor(Math.random() * 3));
      document.querySelectorAll(".computerBtns").forEach((e, i) => {
        e.classList.remove("computer-chosen");
        e.classList.remove("computer-not-chosen");
      });
    }
  }, [props.replay]);
  return (
    <div className="computer">
      <div className="gamebtns computerBtns">
        <HandFist size={32} />
      </div>
      <div className="gamebtns computerBtns">
        <HandPalm size={32} />
      </div>
      <div className="gamebtns computerBtns">
        <Scissors size={32} />
      </div>
    </div>
  );
};
export default ComputerPieces;
