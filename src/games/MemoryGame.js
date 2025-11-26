import React, { useState, useEffect } from "react";
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

const emojis = ["🎮", "🎯", "🎨", "🎪", "🎭", "🎸", "🎺", "🎻"];

const MemoryGame = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const initializeGame = () => {
    const pairs = [...emojis, ...emojis];
    const shuffled = pairs.sort(() => Math.random() - 0.5);
    setCards(
      shuffled.map((emoji, index) => ({
        id: index,
        emoji,
        isFlipped: false,
        isMatched: false,
      }))
    );
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
    setGameStarted(true);
  };

  useEffect(() => {
    if (!gameStarted) return;

    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      if (cards[first].emoji === cards[second].emoji) {
        setMatchedCards([...matchedCards, first, second]);
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
      setMoves((prev) => prev + 1);
    }
  }, [flippedCards, cards, matchedCards, gameStarted]);

  const handleCardClick = (index) => {
    if (
      flippedCards.length === 2 ||
      flippedCards.includes(index) ||
      matchedCards.includes(index) ||
      !gameStarted
    )
      return;

    setFlippedCards([...flippedCards, index]);
  };

  const isGameWon = matchedCards.length === cards.length && cards.length > 0;

  return (
    <TransitionWrapper>
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-brand-navy dark:text-slate-100 transition-colors duration-300">
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
          <div className="max-w-3xl mx-auto w-full">
            <button
              onClick={() => navigate("/games")}
              className="flex items-center gap-2 text-slate-600 hover:text-brand-teal transition-colors mb-6 focus-ring"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Games</span>
            </button>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center text-slate-900 dark:text-slate-100 font-display scroll-mt-14 sm:scroll-mt-24">
              Memory Game
            </h1>

            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm p-6 mb-6">
              <div className="flex justify-between items-center mb-6">
                <div className="text-lg font-semibold text-slate-900">
                  Moves: {moves}
                </div>
                {!gameStarted ? (
                  <button
                    onClick={initializeGame}
                    className="px-4 py-2 text-sm font-semibold bg-brand-teal text-white rounded-lg hover:bg-teal-600 transition-colors focus-ring"
                  >
                    Start Game
                  </button>
                ) : (
                  <button
                    onClick={initializeGame}
                    className="px-4 py-2 text-sm font-semibold bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors focus-ring"
                  >
                    Reset
                  </button>
                )}
              </div>

              {isGameWon && (
                <div className="text-center text-2xl font-bold text-brand-teal mb-6">
                  🎉 Congratulations! You won in {moves} moves!
                </div>
              )}

              <div className="grid grid-cols-4 gap-4">
                {cards.map((card, index) => {
                  const isFlipped =
                    flippedCards.includes(index) ||
                    matchedCards.includes(index);
                  return (
                    <button
                      key={card.id}
                      onClick={() => handleCardClick(index)}
                      disabled={isFlipped || !gameStarted}
                      className={`aspect-square text-4xl sm:text-5xl rounded-lg border-2 transition-all focus-ring ${
                        isFlipped
                          ? "bg-white border-slate-300"
                          : "bg-slate-200 border-slate-300 hover:bg-slate-300"
                      } disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      {isFlipped ? card.emoji : "?"}
                    </button>
                  );
                })}
              </div>

              {!gameStarted && (
                <div className="text-center text-slate-600 mt-6">
                  Click "Start Game" to begin matching pairs!
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </TransitionWrapper>
  );
};

export default MemoryGame;
