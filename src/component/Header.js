import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (path) => () => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="relative mx-auto w-full max-w-6xl px-4 py-1 sm:px-6 sm:py-3 md:px-10 md:py-2">
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
              className="absolute text-4xl font-semibold text-slate-200/60 opacity-40 blur-[0.2px] transition duration-500 ease-out motion-safe:animate-spin"
            >
              {glyph}
            </span>
          ))}
        </div>
        <div className="relative z-10 flex flex-col items-start gap-1.5 sm:gap-3 md:flex-row md:items-center md:justify-between md:gap-6">
          <div className="flex w-full items-center justify-between gap-2">
            <button
              type="button"
              aria-label="Go to home"
              onClick={handleNavigate("/")}
              className="text-left text-xs font-semibold tracking-tight text-brand-ink transition-transform duration-200 ease-out hover:scale-105 focus-visible:scale-105 focus-ring sm:text-base md:text-xl"
            >
              Welcome
              <div className="text-[10px] font-medium text-brand-teal leading-tight sm:text-sm md:text-lg">
                User!!
              </div>
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
              className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-ink transition duration-200 hover:scale-105 hover:border-brand-teal hover:text-brand-teal focus-visible:scale-105 focus-ring md:hidden"
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
          <nav className="hidden w-full md:block md:w-auto">
            <ul className="flex flex-nowrap items-center justify-end gap-4 text-sm font-medium text-brand-gray">
              {navigationLinks.map(({ label, path }) => {
                const isActive = location.pathname === path;
                return (
                  <li key={label}>
                    <button
                      type="button"
                      aria-label={`Navigate to ${label}`}
                      aria-current={isActive ? "page" : undefined}
                      onClick={handleNavigate(path)}
                      className={`relative rounded-full px-4 py-2.5 text-center transition-transform duration-200 ease-out hover:scale-105 hover:text-brand-ink focus-visible:scale-105 focus-ring sm:px-4 sm:py-2 md:px-3 md:py-2 ${
                        isActive ? "text-brand-teal" : ""
                      }`}
                    >
                      {label}
                      {isActive ? (
                        <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-brand-teal" />
                      ) : null}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
          <nav
            id="mobile-menu"
            className={`w-full rounded-xl border border-slate-200 bg-white p-2.5 shadow-lg transition-all duration-200 md:hidden mt-1 ${
              isMenuOpen
                ? "grid gap-1.5 opacity-100 visible max-h-96"
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
                  className={`rounded-lg px-3 py-1.5 text-left text-sm font-medium transition duration-200 hover:bg-brand-teal/10 hover:text-brand-ink focus-ring ${
                    isActive ? "text-brand-teal" : "text-brand-gray"
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
