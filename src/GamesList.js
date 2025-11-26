import React from "react";
import { useNavigate } from "react-router-dom";
import { Gamepad2, Zap, Brain, Target, Bird } from "lucide-react";
import TransitionWrapper from "./component/TransitionWrapper";

const backgroundGlyphs = [
  { glyph: "[]", top: "8%", left: "10%", delay: "0.2s", duration: "20s" },
  { glyph: "{}", top: "40%", left: "85%", delay: "1s", duration: "18s" },
  { glyph: "()", top: "65%", left: "5%", delay: "0.5s", duration: "22s" },
  { glyph: "[]", top: "25%", left: "60%", delay: "1.4s", duration: "16s" },
  { glyph: "{}", top: "75%", left: "70%", delay: "0.8s", duration: "24s" },
  { glyph: "()", top: "50%", left: "30%", delay: "1.1s", duration: "19s" },
];

const games = [
  {
    id: "snake",
    title: "Snake Game",
    description:
      "Classic snake game. Control the snake to eat food and grow longer. Avoid hitting walls or yourself!",
    icon: Gamepad2,
    color: "text-brand-teal",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
  },
  {
    id: "tictactoe",
    title: "Tic-Tac-Toe",
    description:
      "Play the classic Tic-Tac-Toe game against an AI opponent. Try to get three in a row!",
    icon: Target,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    id: "memory",
    title: "Memory Game",
    description:
      "Test your memory! Match pairs of cards by remembering their positions. Challenge yourself!",
    icon: Brain,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
  {
    id: "flappybird",
    title: "Flappy Bird",
    description:
      "Navigate the bird through pipes! Click or press Space to make it fly. How far can you go?",
    icon: Bird,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
  },
];

const GamesList = () => {
  const navigate = useNavigate();

  const handleGameClick = (gameId) => {
    navigate(`/games/${gameId}`);
  };

  const handleKeyDown = (event, gameId) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleGameClick(gameId);
    }
  };

  return (
    <TransitionWrapper>
      <section className="relative min-h-screen overflow-hidden bg-white dark:bg-slate-900 text-brand-navy dark:text-slate-100 transition-colors duration-300">
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
              className="absolute text-4xl sm:text-6xl md:text-8xl font-semibold text-slate-200/60 dark:text-slate-700/40 opacity-40 blur-[0.2px] motion-safe:animate-spin"
            >
              {glyph}
            </span>
          ))}
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-24 pb-8 sm:pb-12 md:pb-16 lg:pb-20 min-h-screen">
          <div className="max-w-6xl mx-auto w-full">
            <div className="mb-8 sm:mb-12 animate-fade-in">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4 font-display scroll-mt-14 sm:scroll-mt-24">
                Mini Games
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                A collection of fun mini games to play and enjoy!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {games.map((game, index) => {
                const IconComponent = game.icon;
                return (
                  <div
                    key={game.id}
                    onClick={() => handleGameClick(game.id)}
                    onKeyDown={(e) => handleKeyDown(e, game.id)}
                    className={`bg-white dark:bg-slate-800 rounded-lg border-2 ${game.borderColor} dark:border-slate-600 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer p-4 sm:p-6 animate-slide-up ${game.bgColor} dark:bg-slate-700/30`}
                    style={{ animationDelay: `${index * 100}ms` }}
                    tabIndex={0}
                    role="button"
                    aria-label={`Play ${game.title}`}
                  >
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div
                        className={`p-2 sm:p-3 rounded-lg ${game.bgColor} border ${game.borderColor}`}
                      >
                        <IconComponent
                          className={`h-6 w-6 sm:h-8 sm:w-8 ${game.color}`}
                        />
                      </div>
                      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 dark:text-slate-100 font-display">
                        {game.title}
                      </h2>
                    </div>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      {game.description}
                    </p>
                    <div className="mt-3 sm:mt-4">
                      <span className="text-xs sm:text-sm font-medium text-brand-teal dark:text-teal-400">
                        Play Now →
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </TransitionWrapper>
  );
};

export default GamesList;
