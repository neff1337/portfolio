import React, { useState } from "react"; // eslint-disable-line no-unused-vars
import { Grid, Divider } from "theme-ui";
import theme from "../gatsby-plugin-theme-ui/index";
import { motion } from "framer-motion";
import TransitionLink from "gatsby-plugin-transition-link";

let MotionDivider = motion(Divider);

export default function Nav() {
  const [isHoverL, setHoverL] = useState(false);
  const [isHoverR, setHoverR] = useState(false);
  const handleMouseEnter = () => {
    const cursor = document.getElementById("cursor");
    cursor.classList.add("c--hover");
  };
  const handleMouseLeave = () => {
    const cursor = document.getElementById("cursor");
    cursor.classList.remove("c--hover");
  };
  return (
    <Grid
      sx={{
        p: [1, 2],
        gridTemplateColumns: "auto 1fr auto 1fr auto",
        gridTemplateRows: "1fr",
        alignItems: "center",
        fontSize: [0, 1],
      }}
    >
      {/* PROJECT LINK */}
      <motion.a
        onHoverStart={() => setHoverL(true)}
        onHoverEnd={() => setHoverL(false)}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
        whileHover={{ x: "1vw" }}
      >
        <TransitionLink
          id="navlink"
          to="/projects"
          exit={{
            length: 0.4,
            state: { x: window.innerWidth, opacity: 0 },
          }}
          entry={{
            delay: 0.4,
            state: { x: -window.innerWidth },
          }}
        >
          projects
        </TransitionLink>
      </motion.a>

      {/* PROJECT DIVIDER */}
      <MotionDivider
        sx={{
          height: "1px",
        }}
        animate={{
          backgroundColor: isHoverL
            ? theme["colors"]["primary"]
            : theme["colors"]["text"],
          width: isHoverL ? "20px" : "100%",
        }}
        transition={{ duration: 0.15 }}
      />

      {/* LOGO LINK */}
      <motion.a
        whileHover={{ y: 10 }}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
      >
        <TransitionLink
          id="navlink"
          to="/about"
          exit={{
            length: 0.4,
            state: { y: window.innerWidth, opacity: 0 },
          }}
          entry={{
            delay: 0.4,
            state: { y: -window.innerWidth },
          }}
        >
          neff
        </TransitionLink>
      </motion.a>

      {/* CONTACT DIVIDER */}
      <MotionDivider
        sx={{
          height: "1px",
        }}
        animate={{
          backgroundColor: isHoverR
            ? theme["colors"]["primary"]
            : theme["colors"]["text"],
          width: isHoverR ? "20px" : "100%",
        }}
        transition={{ duration: 0.15 }}
        initial={{
          justifySelf: "end",
        }}
      />

      {/* CONTACT LINK */}
      <motion.a
        onHoverStart={() => setHoverR(true)}
        onHoverEnd={() => setHoverR(false)}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
        whileHover={{ x: "-1vw" }}
      >
        <TransitionLink
          id="navlink"
          to="/contact"
          exit={{
            length: 0.4,
            state: { x: -window.innerWidth, opacity: 0 },
          }}
          entry={{
            delay: 0.4,
            state: { x: window.innerWidth },
          }}
        >
          contact
        </TransitionLink>
      </motion.a>
    </Grid>
  );
}
