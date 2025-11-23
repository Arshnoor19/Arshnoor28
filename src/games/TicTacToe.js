import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import TransitionWrapper from "../component/TransitionWrapper";

const backgroundGlyphs = [
  { glyph: "[]", top: "8%", left: "10%", delay: "0.2s", duration: "20s" },
  { glyph: "{}", top: "40%", left: "85%", delay: "1s", duration: "18s" },
  { glyph: "()", top: "65%", left: "5%", delay: "0.5s", duration: "22s" },
  { glyph: "[]", top: "25%", left: "60%", delay: "1.4s", duration: "16s" },
  { glyph: "{}", top: "75%", left: "70%", delay: "0.8s", duration: "24s" },
  { glyph: "()", top: "50%", left: "30%", delay: "1.1s", duration: "19s" },
];

const TicTacToe = () => {
  const navigate = useNavigate();
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [scores, setScores] = useState({ x: 0, o: 0, ties: 0 });

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  React.useEffect(() => {
    if (!isXNext && !calculateWinner(board) && board.some((cell) => !cell)) {
      const makeAIMove = () => {
        const availableMoves = board
          .map((cell, index) => (cell === null ? index : null))
          .filter((val) => val !== null);

        if (availableMoves.length === 0) return;

        let move = null;

        // Try to win
        for (const moveIndex of availableMoves) {
          const testBoard = [...board];
          testBoard[moveIndex] = "O";
          if (calculateWinner(testBoard) === "O") {
            move = moveIndex;
            break;
          }
        }

        // Try to block
        if (move === null) {
          for (const moveIndex of availableMoves) {
            const testBoard = [...board];
            testBoard[moveIndex] = "X";
            if (calculateWinner(testBoard) === "X") {
              move = moveIndex;
              break;
            }
          }
        }

        // Random move
        if (move === null) {
          move =
            availableMoves[Math.floor(Math.random() * availableMoves.length)];
        }

        const newBoard = [...board];
        newBoard[move] = "O";
        setBoard(newBoard);
        setIsXNext(true);
      };

      const timer = setTimeout(() => {
        makeAIMove();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isXNext, board]);

  const winner = calculateWinner(board);
  const isBoardFull = board.every((cell) => cell !== null);
  const gameOver = winner || isBoardFull;

  React.useEffect(() => {
    if (gameOver) {
      if (winner === "X") {
        setScores((prev) => ({ ...prev, x: prev.x + 1 }));
      } else if (winner === "O") {
        setScores((prev) => ({ ...prev, o: prev.o + 1 }));
      } else if (isBoardFull) {
        setScores((prev) => ({ ...prev, ties: prev.ties + 1 }));
      }
    }
  }, [gameOver, winner, isBoardFull]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const renderSquare = (index) => {
    return (
      <button
        onClick={() => handleClick(index)}
        disabled={board[index] || gameOver}
        className={`w-20 h-20 sm:w-24 sm:h-24 text-3xl sm:text-4xl font-bold border-2 border-slate-300 rounded-lg transition-all ${
          board[index]
            ? board[index] === "X"
              ? "text-blue-600 bg-blue-50"
              : "text-red-600 bg-red-50"
            : "hover:bg-slate-50"
        } disabled:opacity-50 disabled:cursor-not-allowed focus-ring`}
      >
        {board[index]}
      </button>
    );
  };

  return (
    <TransitionWrapper>
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 text-brand-navy">
        <div className="pointer-events-none absolute inset-0 z-0">
          {backgroundGlyphs.map(({ glyph, top, left, delay, duration }) => (
            <span
              key={`${glyph}-${top}-${left}`}
              aria-hidden="true"
              style={{
                top,
                left,
                animationDelay: delay,
                animationDuration: duration,
              }}
              className="absolute text-8xl font-semibold text-slate-200/60 opacity-40 blur-[0.2px] motion-safe:animate-spin"
            >
              {glyph}
            </span>
          ))}
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-24 pb-12 sm:pb-16 lg:pb-20 min-h-screen">
          <div className="max-w-2xl mx-auto w-full">
            <button
              onClick={() => navigate("/games")}
              className="flex items-center gap-2 text-slate-600 hover:text-brand-teal transition-colors mb-6 focus-ring"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Games</span>
            </button>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center text-slate-900 font-display scroll-mt-14 sm:scroll-mt-24">
              Tic-Tac-Toe
            </h1>

            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 mb-6">
              <div className="flex justify-between items-center mb-6">
                <div className="text-center">
                  <div className="text-sm text-slate-600">You (X)</div>
                  <div className="text-2xl font-bold text-blue-600">
                    {scores.x}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-slate-600">Ties</div>
                  <div className="text-2xl font-bold text-slate-600">
                    {scores.ties}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-slate-600">AI (O)</div>
                  <div className="text-2xl font-bold text-red-600">
                    {scores.o}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-center text-lg font-semibold text-slate-900 mb-4">
                  {winner
                    ? `Winner: ${winner === "X" ? "You!" : "AI Wins!"}`
                    : isBoardFull
                    ? "It's a Tie!"
                    : `Current Player: ${isXNext ? "X (You)" : "O (AI)"}`}
                </div>
                <div className="grid grid-cols-3 gap-2 justify-center">
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                    <div key={index}>{renderSquare(index)}</div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={resetGame}
                  className="px-6 py-2 text-sm font-semibold bg-brand-teal text-white rounded-lg hover:bg-teal-600 transition-colors focus-ring"
                >
                  New Game
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TransitionWrapper>
  );
};

export default TicTacToe;
