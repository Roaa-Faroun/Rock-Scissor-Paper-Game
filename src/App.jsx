import "./App.css";
import Header from "./componants/header.componant";
import Loader from "./componants/loader.componant";
import ComputerPieces from "./componants/computerpieces.componant";
import GamePieces from "./componants/gamepieces.componant";
import { useEffect, useState } from "react";
import ShowRes from "./componants/ShowRes.componant";
function App() {
  const elements = ["Rock", "Paper", "Scissor"];
  const pos = [
    ["Rock", "Scissor"],
    ["Scissor", "Paper"],
    ["Paper", "Rock"],
  ];

  const [start, setstart] = useState(false);
  let [res, setRes] = useState(false);
  let [replay, setReplay] = useState(false);
  const [winner, setWinner] = useState("");
  const [getRes, setGetRes] = useState({ userChoice: "", computerChoice: "" });
  const [counter, setCounter] = useState({
    user: 0,
    computer: 0,
    attempts: 0,
  });
  useEffect(() => {
    if (replay === true) {
      setGetRes(false);
      setRes(false);
      setstart(false);
      setWinner("");
      setGetRes({ userChoice: "", computerChoice: "" });
      setReplay(false);
    }
  }, [replay]);
  useEffect(() => {
    if (res === true) {
      if (getRes.userChoice === getRes.computerChoice) {
        setWinner("Draw");
        setCounter({ ...counter, attempts: counter.attempts + 1 });
      } else if (getRes.userChoice === "") {
        setWinner("Computer");
        setCounter({
          ...counter,
          computer: counter.computer + 1,
          attempts: counter.attempts + 1,
        });
      } else {
        for (let i = 0; i < pos.length; i++) {
          if (
            getRes.userChoice === pos[i][0] &&
            getRes.computerChoice === pos[i][1]
          ) {
            setWinner("You");
            setCounter({
              ...counter,
              user: counter.user + 1,
              attempts: counter.attempts + 1,
            });
          } else if (
            getRes.userChoice === pos[i][1] &&
            getRes.computerChoice === pos[i][0]
          ) {
            setWinner("Computer");
            setCounter({
              ...counter,
              computer: counter.computer + 1,
              attempts: counter.attempts + 1,
            });
          }
        }
      }
    }
  }, [getRes]);

  return (
    <div className="App">
      <Header counter={counter} />
      <ComputerPieces
        res={res}
        elements={elements}
        getRes={getRes}
        start={start}
        setGetRes={setGetRes}
        replay={replay}
      />
      {res ? (
        <ShowRes
          getRes={getRes}
          winner={winner}
          res={res}
          setWinner={setWinner}
          setReplay={setReplay}
        />
      ) : (
        <Loader start={start} setRes={setRes} setstart={setstart} />
      )}

      <GamePieces
        replay={replay}
        res={res}
        getRes={getRes}
        setGetRes={setGetRes}
      />
    </div>
  );
}

export default App;
