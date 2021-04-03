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
        key={location.pathname}
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Transition;
