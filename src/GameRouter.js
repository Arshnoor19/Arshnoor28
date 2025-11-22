import React from "react";
import { useParams } from "react-router-dom";
import SnakeGame from "./games/SnakeGame";
import TicTacToe from "./games/TicTacToe";
import MemoryGame from "./games/MemoryGame";
import FlappyBird from "./games/FlappyBird";

const GameRouter = () => {
  const { gameId } = useParams();

  switch (gameId) {
    case "snake":
      return <SnakeGame />;
    case "tictactoe":
      return <TicTacToe />;
    case "memory":
      return <MemoryGame />;
    case "flappybird":
      return <FlappyBird />;
    default:
      return (
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Game Not Found</h1>
          <p className="text-slate-600">
            The game you're looking for doesn't exist.
          </p>
        </div>
      );
  }
};

export default GameRouter;
