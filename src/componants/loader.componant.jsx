import { useEffect, useState } from "react";
import "./spinner.css";
const Loader = (props) => {
  let [timer, setTimer] = useState(5);
  const startGame = () => {
    props.setstart(true);
  };

  useEffect(() => {
    if (props.start === true) {
      const handler = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
      if (timer <= 0) {
        clearTimeout(handler);
        props.setstart(false);
        props.setRes(true);
      }
    }
  }, [props.start, timer]);
  return (
    <div className="loader">
      {props.start ? (
        <>
          <div className="spinner"></div>
          <span className="span-spinner">{timer}</span>
        </>
      ) : (
        <button
          onClick={() => {
            startGame();
          }}
        >
          Start
        </button>
      )}
    </div>
  );
};
export default Loader;
