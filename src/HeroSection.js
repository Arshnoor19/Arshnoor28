import React, { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import profilePic from "./ask-gif.gif";
import "./HeroSection.css";
import TransitionWrapper from "./component/TransitionWrapper";

const HeroSection = () => {
  const navigate = useNavigate();
  const profilePicRef = useRef(null);
  const heroContentRef = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const buttonsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. BOUNCY BALL ENTRY for all elements
      const elements = [
        profilePicRef.current,
        h1Ref.current,
        pRef.current,
        ...buttonsRef.current,
      ].filter(Boolean);

      elements.forEach((el, i) => {
        // Entry animation
        gsap.from(el, {
          y: -500,
          duration: 1.5,
          ease: "bounce.out",
          rotation: 360,
          opacity: 0,
          delay: 0.3 + i * 0.1, // Staggered delay
        });

        // Floating effect (after bounce completes)
        gsap.to(el, {
          y: -20,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 2 + i * 0.1,
        });
      });
    }, heroContentRef);

    return () => ctx.revert();
  }, []);

  return (
    <TransitionWrapper>
      <section className="hero-section">
        <div className="hero-content" ref={heroContentRef}>
          <div className="name-pic-container">
            <img
              ref={profilePicRef}
              src={profilePic}
              alt="Arshnoor Singh"
              className="profile-pic floating"
            />
            <h1 ref={h1Ref}>ARSHNOOR SINGH</h1>
          </div>
          <p ref={pRef}>A Competent coder at your Service</p>

          <div className="button-container">
            <button
              ref={(el) => (buttonsRef.current[0] = el)}
              className="cta-button"
              onClick={() => navigate("/about")}
            >
              About Me
            </button>
            <button
              ref={(el) => (buttonsRef.current[1] = el)}
              className="cta-button"
              onClick={() => navigate("/projects")}
            >
              Projects
            </button>
            <button
              ref={(el) => (buttonsRef.current[2] = el)}
              className="cta-button"
              onClick={() => navigate("/experience")}
            >
              Experience
            </button>
            <button
              ref={(el) => (buttonsRef.current[3] = el)}
              className="cta-button"
              onClick={() => navigate("/education")}
            >
              Education
            </button>
            <button
              ref={(el) => (buttonsRef.current[4] = el)}
              className="cta-button"
              onClick={() => navigate("/contact")}
            >
              Contact
            </button>
          </div>
        </div>
      </section>
    </TransitionWrapper>
  );
};

export default HeroSection;
