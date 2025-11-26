// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./component/Header";
import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import Contact from "./ContactMe";
import GamesList from "./GamesList";
import GameRouter from "./GameRouter";
import TransitionWrapper from "./component/TransitionWrapper";

// This component needs to be INSIDE the Router
const AnimatedRoutes = () => {
  const location = useLocation(); // Now this works because it's inside Router

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <TransitionWrapper>
              <HeroSection />
            </TransitionWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <TransitionWrapper>
              <AboutMe />
            </TransitionWrapper>
          }
        />
        <Route
          path="/projects"
          element={
            <TransitionWrapper>
              <Projects />
            </TransitionWrapper>
          }
        />
        <Route
          path="/experience"
          element={
            <TransitionWrapper>
              <Experience />
            </TransitionWrapper>
          }
        />
        <Route
          path="/education"
          element={
            <TransitionWrapper>
              <Education />
            </TransitionWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <TransitionWrapper>
              <Contact />
            </TransitionWrapper>
          }
        />
        <Route
          path="/games"
          element={
            <TransitionWrapper>
              <GamesList />
            </TransitionWrapper>
          }
        />
        <Route
          path="/games/:gameId"
          element={
            <TransitionWrapper>
              <GameRouter />
            </TransitionWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <AnimatedRoutes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
