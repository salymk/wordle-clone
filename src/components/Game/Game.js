import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Form from "../Form/Form";
import GuessResults from "../GuessResults/GuessResults";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // running | won | lost
  const [gameStatus, setGameStatus] = React.useState("running");
  const [guessResults, setGuessResults] = React.useState([]);

  const addGuess = (guess) => {
    const nextGuess = [...guessResults, guess];
    setGuessResults(nextGuess);

    if (guess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (
      nextGuess.length >= NUM_OF_GUESSES_ALLOWED &&
      guess.toUpperCase() !== answer
    ) {
      setGameStatus("lost");
    } else {
      setGameStatus("running");
    }
  };

  const restartGame = () => {
    setGameStatus("running");
    setGuessResults([]);
  };

  return (
    <>
      <GuessResults guessResults={guessResults} answer={answer} />
      {gameStatus !== "running" && (
        <button onClick={restartGame} className="restart-btn">
          Restart the game!
        </button>
      )}
      <Form addGuess={addGuess} status={gameStatus} />
      {gameStatus === "won" && <WonBanner numOfTries={guessResults.lenth} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
