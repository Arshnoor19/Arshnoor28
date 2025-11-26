import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

const getTimeBasedTheme = () => {
  const hour = new Date().getHours();
  // Dark mode from 6 PM (18:00) to 6 AM (06:00)
  return hour >= 18 || hour < 6 ? "dark" : "light";
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      return savedTheme;
    }
    // Otherwise, use time-based theme
    return getTimeBasedTheme();
  });

  const [isAuto, setIsAuto] = useState(() => {
    return !localStorage.getItem("theme");
  });

  useEffect(() => {
    // Apply theme to document
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (isAuto) {
      // Check time every minute and update theme if needed
      const checkTime = () => {
        const timeBasedTheme = getTimeBasedTheme();
        if (timeBasedTheme !== theme) {
          setTheme(timeBasedTheme);
        }
      };

      // Check immediately
      checkTime();

      // Then check every minute
      const interval = setInterval(checkTime, 60000);

      return () => clearInterval(interval);
    }
  }, [isAuto, theme]);

  const toggleTheme = () => {
    if (isAuto) {
      // If auto, switch to manual mode with opposite of current
      setIsAuto(false);
      setTheme(theme === "dark" ? "light" : "dark");
    } else {
      // If manual, toggle between light and dark
      setTheme(theme === "dark" ? "light" : "dark");
    }
  };

  const setAutoTheme = () => {
    setIsAuto(true);
    setTheme(getTimeBasedTheme());
    localStorage.removeItem("theme");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setAutoTheme, isAuto }}>
      {children}
    </ThemeContext.Provider>
  );
};
