// src/component/TransitionWrapper.js
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

// Animation configuration constants - moved outside component to avoid recreation
const ANIMATION_CONFIG = {
  fadeIn: {
    duration: 0.6,
    ease: "power2.out",
    delay: 0.1,
  },
  fadeOut: {
    duration: 0.4,
    ease: "power2.in",
  },
};

/**
 * TransitionWrapper - Provides smooth page transitions using GSAP animations
 * @param {React.ReactNode} children - The content to wrap with transition effects
 * @returns {JSX.Element} Wrapped content with transition animations
 */
const TransitionWrapper = ({ children }) => {
  const location = useLocation();
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Capture container reference for cleanup function
    const containerElement = container;

    // Initialize animation context for proper cleanup
    const animationContext = gsap.context(() => {
      // Set initial state to prevent content flash
      gsap.set(containerElement, { opacity: 0 });

      // Animate content in
      gsap.to(containerElement, {
        opacity: 1,
        ...ANIMATION_CONFIG.fadeIn,
      });
    }, containerElement);

    // Cleanup function for unmounting
    return () => {
      if (containerElement) {
        // Animate out before unmounting
        animationContext.add(() => {
          gsap.to(containerElement, {
            opacity: 0,
            ...ANIMATION_CONFIG.fadeOut,
          });
        });
      }

      // Revert context to clean up all animations
      animationContext.revert();
    };
  }, [location]);

  return (
    <div
      ref={containerRef}
      className="transition-wrapper"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        minHeight: "100vh",
        opacity: 0,
      }}
    >
      {children}
    </div>
  );
};

export default TransitionWrapper;
