import React from "react";
import { useNavigate } from "react-router-dom";
import TransitionWrapper from "./component/TransitionWrapper";

const heroGlyphs = [
  { glyph: "[]", top: "8%", left: "10%", delay: "0.2s", duration: "20s" },
  { glyph: "{}", top: "40%", left: "85%", delay: "1s", duration: "18s" },
  { glyph: "()", top: "65%", left: "5%", delay: "0.5s", duration: "22s" },
  { glyph: "[]", top: "25%", left: "60%", delay: "1.4s", duration: "16s" },
  { glyph: "{}", top: "75%", left: "70%", delay: "0.8s", duration: "24s" },
  { glyph: "()", top: "50%", left: "30%", delay: "1.1s", duration: "19s" },
];

const HeroSection = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => () => navigate(path);

  return (
    <TransitionWrapper>
      <section className="relative min-h-screen overflow-hidden bg-white text-brand-navy">
        <div className="pointer-events-none absolute inset-0 z-0">
          {heroGlyphs.map(({ glyph, top, left, delay, duration }) => (
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
        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-6 sm:gap-8 px-4 sm:px-6 pb-8 sm:pb-10 pt-16 sm:pt-24 md:px-10 lg:pb-12">
          <div className="flex flex-1 items-center">
            <div className="flex w-full max-w-4xl flex-col gap-4 sm:gap-6 text-left">
              <div className="space-y-2 sm:space-y-3">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-brand-ink">
                  Arshnoor Singh
                </h1>
                <p className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-semibold leading-tight text-brand-teal">
                  Building Digital Experiences
                </p>
              </div>
              <p className="max-w-2xl text-sm sm:text-base md:text-lg text-slate-500">
                Crafting innovative solutions at the intersection of design and
                engineering. Specialized in building scalable products that
                users love.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={handleNavigate("/projects")}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-ink px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-slate-900 focus-ring"
                  aria-label="View projects"
                >
                  View Projects
                  <span aria-hidden="true">→</span>
                </button>
                <button
                  type="button"
                  onClick={handleNavigate("/contact")}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-brand-ink transition hover:border-brand-ink focus-ring"
                  aria-label="Get in touch"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TransitionWrapper>
  );
};

export default HeroSection;
