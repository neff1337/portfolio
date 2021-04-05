import React, { useState } from "react"; // eslint-disable-line no-unused-vars
import { Grid, Divider } from "theme-ui";
import theme from "../gatsby-plugin-theme-ui/index";
import { motion } from "framer-motion";
import TransitionLink from "gatsby-plugin-transition-link";
let MotionDivider = motion(Divider);

export default function Nav() {
  const [isHover, setHover] = useState(false);

  return (
    <Grid
      sx={{
        p: [1, 2],
        gridTemplateColumns: "auto 1fr auto",
        gridTemplateRows: "1fr",
        alignItems: "center",

        fontSize: [0, 1],
      }}
    >
      <motion.a
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        whileHover={{ x: "1vw" }}
      >
        <TransitionLink
          to="/projects"
          exit={{
            length: 0.4,
            state: { x: window.innerWidth, opacity: 0 },
          }}
          entry={{
            delay: 0.4,
            state: { x: window.innerWidth },
          }}
        >
          projects
        </TransitionLink>
      </motion.a>
      <MotionDivider
        sx={{
          height: "1px",
        }}
        animate={{
          backgroundColor: isHover
            ? theme["colors"]["primary"]
            : theme["colors"]["text"],
        }}
        transition={{ duration: 0.15 }}
      />
      <motion.a
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        whileHover={{ x: "-1vw" }}
      >
        <TransitionLink
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
