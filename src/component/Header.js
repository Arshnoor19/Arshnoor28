import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const navigationLinks = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Experience", path: "/experience" },
  { label: "Education", path: "/education" },
  { label: "Blog", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Games", path: "/games" },
];

const backgroundGlyphs = [
  { glyph: "[]", top: "10%", left: "5%", delay: "0s", duration: "18s" },
  { glyph: "{}", top: "35%", left: "80%", delay: "1s", duration: "22s" },
  { glyph: "()", top: "70%", left: "15%", delay: "0.5s", duration: "20s" },
  { glyph: "[]", top: "20%", left: "55%", delay: "1.5s", duration: "16s" },
  { glyph: "{}", top: "60%", left: "90%", delay: "0.2s", duration: "24s" },
  { glyph: "()", top: "45%", left: "30%", delay: "1.2s", duration: "19s" },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme, isAuto } = useTheme();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (path) => () => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm transition-colors duration-300">
      <div className="relative mx-auto w-full max-w-6xl px-3 py-1.5 sm:px-6 sm:py-3 md:px-10 md:py-4">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden hidden md:block">
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
              className="absolute text-4xl font-semibold text-slate-200/60 dark:text-slate-700/40 opacity-40 blur-[0.2px] transition duration-500 ease-out motion-safe:animate-spin"
            >
              {glyph}
            </span>
          ))}
        </div>
        <div className="relative z-10 flex flex-col items-start gap-1 sm:gap-3 md:flex-row md:items-center md:justify-between md:gap-6">
          <div className="flex w-full items-center justify-between gap-2">
            <button
              type="button"
              aria-label="Go to home"
              onClick={handleNavigate("/")}
              className="text-left text-sm font-semibold tracking-tight text-brand-ink dark:text-slate-100 transition-transform duration-200 ease-out hover:scale-105 focus-visible:scale-105 focus-ring sm:text-base md:text-xl leading-tight"
            >
              <div className="leading-tight">Welcome</div>
              <div className="text-xs font-medium text-brand-teal dark:text-teal-400 leading-tight sm:text-sm md:text-lg">
                User!
              </div>
            </button>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label={`Switch to ${
                  theme === "dark" ? "light" : "dark"
                } mode`}
                onClick={toggleTheme}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    toggleTheme();
                  }
                }}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-brand-ink dark:text-slate-200 transition-all duration-200 hover:scale-105 hover:border-brand-teal hover:text-brand-teal focus-visible:scale-105 focus-ring flex-shrink-0"
                title={
                  isAuto
                    ? "Auto (Time-based)"
                    : `Switch to ${theme === "dark" ? "light" : "dark"} mode`
                }
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>
              <button
                type="button"
                aria-label={
                  isMenuOpen ? "Close navigation menu" : "Open navigation menu"
                }
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                onClick={handleToggleMenu}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    handleToggleMenu();
                  }
                }}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-brand-ink dark:text-slate-200 transition duration-200 hover:scale-105 hover:border-brand-teal hover:text-brand-teal focus-visible:scale-105 focus-ring md:hidden flex-shrink-0"
              >
                <span className="sr-only">Toggle navigation</span>
                <span
                  aria-hidden="true"
                  className="relative block h-2.5 w-4 before:absolute before:-top-1 before:block before:h-0.5 before:w-full before:rounded-full before:bg-current before:content-[''] after:absolute after:top-1 after:block after:h-0.5 after:w-full after:rounded-full after:bg-current after:content-['']"
                >
                  <span className="absolute left-0 top-1/2 block h-0.5 w-full -translate-y-1/2 rounded-full bg-current" />
                </span>
              </button>
            </div>
          </div>
          <nav className="hidden w-full md:block md:w-auto">
            <ul className="flex flex-nowrap items-center justify-end gap-4 text-sm font-medium text-brand-gray dark:text-slate-400">
              {navigationLinks.map(({ label, path }) => {
                const isActive = location.pathname === path;
                return (
                  <li key={label}>
                    <button
                      type="button"
                      aria-label={`Navigate to ${label}`}
                      aria-current={isActive ? "page" : undefined}
                      onClick={handleNavigate(path)}
                      className={`relative rounded-full px-4 py-2.5 text-center transition-transform duration-200 ease-out hover:scale-105 hover:text-brand-ink dark:hover:text-slate-100 focus-visible:scale-105 focus-ring sm:px-4 sm:py-2 md:px-3 md:py-2 ${
                        isActive ? "text-brand-teal dark:text-teal-400" : ""
                      }`}
                    >
                      {label}
                      {isActive ? (
                        <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-brand-teal dark:bg-teal-400" />
                      ) : null}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
          <nav
            id="mobile-menu"
            className={`w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 shadow-lg transition-all duration-200 md:hidden mt-1 ${
              isMenuOpen
                ? "grid gap-1 opacity-100 visible max-h-96"
                : "pointer-events-none scale-95 opacity-0 invisible max-h-0 overflow-hidden"
            }`}
            role="menu"
            aria-label="Mobile navigation"
          >
            {navigationLinks.map(({ label, path }) => {
              const isActive = location.pathname === path;
              return (
                <button
                  key={`${label}-mobile`}
                  type="button"
                  aria-label={`Navigate to ${label}`}
                  aria-current={isActive ? "page" : undefined}
                  onClick={handleNavigate(path)}
                  className={`rounded-lg px-3 py-2 text-left text-sm font-medium transition duration-200 hover:bg-brand-teal/10 dark:hover:bg-teal-400/10 hover:text-brand-ink dark:hover:text-slate-100 focus-ring min-h-[40px] ${
                    isActive
                      ? "text-brand-teal dark:text-teal-400 bg-brand-teal/5 dark:bg-teal-400/10"
                      : "text-brand-gray dark:text-slate-400"
                  }`}
                  role="menuitem"
                >
                  {label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
