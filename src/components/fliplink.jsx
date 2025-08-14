import React from "react"
import { motion } from "framer-motion"

const DURATION = 0.25
const STAGGER = 0.025

const FlipLink = ({ children, href }) => {
  // Add safety check for children prop
  if (!children || typeof children !== 'string') {
    return null;
  }

  const [isHovered, setIsHovered] = React.useState(false);

  // Detect touch device
  const isTouchDevice = typeof window !== 'undefined' && (
    'ontouchstart' in window || navigator.maxTouchPoints > 0
  );

  const handleClick = (e) => {
    if (isTouchDevice) {
      e.preventDefault();
      setIsHovered(true);
      setTimeout(() => {
        window.open(href, '_blank', 'noopener,noreferrer');
        setIsHovered(false);
      }, 300); // Show animation for 300ms before opening link
    }
  };

  // Simulate hover on touch devices
  const handleTouchStart = () => {
    if (isTouchDevice) {
      setIsHovered(true);
    }
  };

  const handleTouchEnd = () => {
    if (isTouchDevice) {
      setTimeout(() => setIsHovered(false), 300); // Keep animation for 300ms
    }
  };

  return (
    <motion.a
      initial="initial"
      animate={isHovered ? "hovered" : "initial"}
      whileHover={!isTouchDevice ? "hovered" : false}
      target="_blank"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-semibold uppercase dark:text-white/90 sm:text-7xl md:text-8xl "
      style={{
        lineHeight: 0.75,
      }}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  )
}

export default FlipLink
