import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Transition = ({ children, location }) => {
  const duration = 0.5;

  const variants = {
    initial: {
      opacity: 1,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: duration,
        delay: duration,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      y: "-100wh",
      transition: { duration: duration },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 1,
        }}
        enter={{
          opacity: 1,
          x: -100,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 100,
        }}
        /* key={location.pathname}
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit" */
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Transition;
