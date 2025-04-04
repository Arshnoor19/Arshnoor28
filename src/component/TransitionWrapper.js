// src/component/TransitionWrapper.js
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

const TransitionWrapper = ({ children }) => {
  const location = useLocation();
  const transitionRef = useRef(null);

  useLayoutEffect(() => {
    const element = transitionRef.current;
    if (!element) return;

    // Immediately hide content to prevent flash
    gsap.set(element, { opacity: 0 });

    const ctx = gsap.context(() => {
      // Animate in
      gsap.to(element, {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.1,
      });
    }, element);

    return () => {
      // Animate out before unmounting
      ctx.add(() => {
        gsap.to(element, {
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
        });
      });
      return ctx.revert; // Proper cleanup
    };
  }, [location]);

  return (
    <div
      ref={transitionRef}
      style={{
        position: "absolute", // Fixes overlap during transition
        top: 0,
        left: 0,
        width: "100%",
        minHeight: "100vh",
        opacity: 0, // Start hidden
      }}
    >
      {children}
    </div>
  );
};

export default TransitionWrapper;
