import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing (if needed)
import "./AboutMe.css";
import TransitionWrapper from "./component/TransitionWrapper";

const AboutMe = () => {
  const navigate = useNavigate(); // Initialize useNavigate (if needed)

  return (
    <TransitionWrapper>
      <section className="about-section">
        <div className="about-content">
          <h1>About Me</h1>
          <div className="profile-image-container"></div>
          <p>
            Hi, I'm Arshnoor Singh, a passionate and competent coder with a
            strong background in software development. I specialize in creating
            efficient, scalable, and user-friendly applications. My journey in
            the world of technology has equipped me with a diverse skill set,
            allowing me to tackle complex problems and deliver innovative
            solutions.
          </p>
          <p>
            When I'm not coding, you can find me exploring the latest tech
            trends, contributing to open-source projects, or enjoying a good
            book. I'm always eager to learn and grow, and I'm excited to bring
            my skills and enthusiasm to your team.
          </p>
          <button className="cta-button">Download Resume</button>
          <button
            className="cta-button"
            onClick={() => navigate("/")} // Navigate back to homepage
          >
            Back to Home
          </button>
        </div>
      </section>
    </TransitionWrapper>
  );
};

export default AboutMe;
