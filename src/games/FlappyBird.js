import React, { useEffect, useRef, useState } from "react";
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

const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 600;
const GRAVITY = 0.5;
const JUMP_STRENGTH = -8;
const PIPE_WIDTH = 60;
const PIPE_GAP = 150;
const PIPE_SPEED = 2;
const BIRD_SIZE = 30;

const FlappyBird = () => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const birdRef = useRef({ x: 100, y: CANVAS_HEIGHT / 2, velocity: 0 });
  const pipesRef = useRef([]);
  const scoreRef = useRef(0);
  const gameStartedRef = useRef(false);
  const gameOverRef = useRef(false);

  const [bird, setBird] = useState({
    x: 100,
    y: CANVAS_HEIGHT / 2,
    velocity: 0,
  });
  const [pipes, setPipes] = useState([]);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const storedHighScore = localStorage.getItem("flappyBirdHighScore");
    if (storedHighScore) {
      setHighScore(parseInt(storedHighScore, 10));
    }
  }, []);

  const resetGame = () => {
    birdRef.current = { x: 100, y: CANVAS_HEIGHT / 2, velocity: 0 };
    pipesRef.current = [];
    scoreRef.current = 0;
    gameStartedRef.current = true;
    gameOverRef.current = false;
    setBird({ x: 100, y: CANVAS_HEIGHT / 2, velocity: 0 });
    setPipes([]);
    setScore(0);
    setGameOver(false);
    setGameStarted(true);
  };

  const jump = () => {
    if (!gameStartedRef.current) {
      resetGame();
      return;
    }
    if (gameOverRef.current) return;
    birdRef.current.velocity = JUMP_STRENGTH;
    setBird({ ...birdRef.current });
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === " " || e.key === "ArrowUp") {
        e.preventDefault();
        jump();
      }
    };

    const handleClick = () => {
      jump();
    };

    window.addEventListener("keydown", handleKeyPress);
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.addEventListener("click", handleClick);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      if (canvas) {
        canvas.removeEventListener("click", handleClick);
      }
    };
  }, []);

  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const gameLoop = () => {
      if (gameOverRef.current || !gameStartedRef.current) {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        return;
      }

      // Update bird
      birdRef.current.velocity += GRAVITY;
      birdRef.current.y = Math.max(
        0,
        Math.min(
          CANVAS_HEIGHT - BIRD_SIZE,
          birdRef.current.y + birdRef.current.velocity
        )
      );

      // Check collision with top/bottom
      if (
        birdRef.current.y === 0 ||
        birdRef.current.y === CANVAS_HEIGHT - BIRD_SIZE
      ) {
        gameOverRef.current = true;
        setGameOver(true);
        setGameStarted(false);
        if (scoreRef.current > highScore) {
          setHighScore(scoreRef.current);
          localStorage.setItem(
            "flappyBirdHighScore",
            scoreRef.current.toString()
          );
        }
        return;
      }

      // Update pipes
      pipesRef.current = pipesRef.current.map((pipe) => ({
        ...pipe,
        x: pipe.x - PIPE_SPEED,
      }));

      // Remove pipes that are off screen
      pipesRef.current = pipesRef.current.filter(
        (pipe) => pipe.x + PIPE_WIDTH > 0
      );

      // Add new pipe
      if (
        pipesRef.current.length === 0 ||
        pipesRef.current[pipesRef.current.length - 1].x < CANVAS_WIDTH - 300
      ) {
        const pipeHeight =
          Math.random() * (CANVAS_HEIGHT - PIPE_GAP - 100) + 50;
        pipesRef.current.push({
          x: CANVAS_WIDTH,
          topHeight: pipeHeight,
          bottomY: pipeHeight + PIPE_GAP,
          passed: false,
        });
      }

      // Check collisions
      for (const pipe of pipesRef.current) {
        if (
          birdRef.current.x + BIRD_SIZE > pipe.x &&
          birdRef.current.x < pipe.x + PIPE_WIDTH
        ) {
          if (
            birdRef.current.y < pipe.topHeight ||
            birdRef.current.y + BIRD_SIZE > pipe.bottomY
          ) {
            gameOverRef.current = true;
            setGameOver(true);
            setGameStarted(false);
            if (scoreRef.current > highScore) {
              setHighScore(scoreRef.current);
              localStorage.setItem(
                "flappyBirdHighScore",
                scoreRef.current.toString()
              );
            }
            return;
          }
        }

        // Score point when passing pipe
        if (pipe.x + PIPE_WIDTH < birdRef.current.x && !pipe.passed) {
          pipe.passed = true;
          scoreRef.current += 1;
          setScore(scoreRef.current);
        }
      }

      setBird({ ...birdRef.current });
      setPipes([...pipesRef.current]);

      animationFrameRef.current = requestAnimationFrame(gameLoop);
    };

    animationFrameRef.current = requestAnimationFrame(gameLoop);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [gameStarted, gameOver, highScore]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = "#87CEEB";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Draw ground
    ctx.fillStyle = "#8B4513";
    ctx.fillRect(0, CANVAS_HEIGHT - 50, CANVAS_WIDTH, 50);
    ctx.fillStyle = "#90EE90";
    ctx.fillRect(0, CANVAS_HEIGHT - 50, CANVAS_WIDTH, 10);

    // Draw pipes
    pipes.forEach((pipe) => {
      ctx.fillStyle = "#228B22";
      // Top pipe
      ctx.fillRect(pipe.x, 0, PIPE_WIDTH, pipe.topHeight);
      // Bottom pipe
      ctx.fillRect(
        pipe.x,
        pipe.bottomY,
        PIPE_WIDTH,
        CANVAS_HEIGHT - pipe.bottomY - 50
      );

      // Pipe caps
      ctx.fillStyle = "#32CD32";
      ctx.fillRect(pipe.x - 5, pipe.topHeight - 20, PIPE_WIDTH + 10, 20);
      ctx.fillRect(pipe.x - 5, pipe.bottomY, PIPE_WIDTH + 10, 20);
    });

    // Draw bird
    ctx.fillStyle = "#FFD700";
    ctx.beginPath();
    ctx.arc(
      bird.x + BIRD_SIZE / 2,
      bird.y + BIRD_SIZE / 2,
      BIRD_SIZE / 2,
      0,
      2 * Math.PI
    );
    ctx.fill();
    ctx.fillStyle = "#FFA500";
    ctx.beginPath();
    ctx.arc(
      bird.x + BIRD_SIZE / 2 + 5,
      bird.y + BIRD_SIZE / 2 - 5,
      5,
      0,
      2 * Math.PI
    );
    ctx.fill();
  }, [bird, pipes]);

  return (
    <TransitionWrapper>
      <section className="relative min-h-screen overflow-hidden bg-sky-50 text-brand-navy">
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
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-12 sm:pb-16 lg:pb-20 min-h-screen">
          <div className="max-w-2xl mx-auto w-full">
            <button
              onClick={() => navigate("/games")}
              className="flex items-center gap-2 text-slate-600 hover:text-brand-teal transition-colors mb-6 focus-ring"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Games</span>
            </button>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center text-slate-900 font-display scroll-mt-16 sm:scroll-mt-24">
              Flappy Bird
            </h1>

            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <div className="text-lg font-semibold text-slate-900">
                  Score: {score}
                </div>
                <div className="text-sm text-slate-600">
                  High Score: {highScore}
                </div>
                <button
                  onClick={resetGame}
                  className="px-4 py-2 text-sm font-semibold bg-brand-teal text-white rounded-lg hover:bg-teal-600 transition-colors focus-ring"
                >
                  {gameStarted ? "Restart" : "Start Game"}
                </button>
              </div>

              <div className="flex justify-center mb-4">
                <canvas
                  ref={canvasRef}
                  width={CANVAS_WIDTH}
                  height={CANVAS_HEIGHT}
                  className="border-2 border-slate-300 rounded-lg cursor-pointer"
                />
              </div>

              {gameOver && (
                <div className="text-center text-lg font-semibold text-red-500 mb-4">
                  Game Over! Final Score: {score}
                  {score === highScore && score > 0 && (
                    <span className="block text-sm text-brand-teal mt-2">
                      🎉 New High Score!
                    </span>
                  )}
                </div>
              )}

              {!gameStarted && !gameOver && (
                <div className="text-center text-slate-600 mb-4">
                  Click or press Space/↑ to start and make the bird fly!
                </div>
              )}

              <div className="text-center text-sm text-slate-600">
                Click or press Space/↑ to make the bird jump. Avoid the pipes!
              </div>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4 text-slate-900 font-display">
                Controls
              </h2>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <kbd className="px-2 py-1 bg-slate-100 rounded border border-slate-300 text-slate-700">
                    Space
                  </kbd>
                  <span className="text-slate-600">Jump</span>
                </div>
                <div className="flex items-center gap-2">
                  <kbd className="px-2 py-1 bg-slate-100 rounded border border-slate-300 text-slate-700">
                    ↑
                  </kbd>
                  <span className="text-slate-600">Jump</span>
                </div>
                <div className="flex items-center gap-2">
                  <kbd className="px-2 py-1 bg-slate-100 rounded border border-slate-300 text-slate-700">
                    Click
                  </kbd>
                  <span className="text-slate-600">Jump</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-600">Navigate through pipes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TransitionWrapper>
  );
};

export default FlappyBird;
