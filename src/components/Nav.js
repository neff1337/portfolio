/** @jsx jsx */
import React, { useState } from "react"; // eslint-disable-line no-unused-vars
import { jsx, Flex, Link, Divider, Box } from "theme-ui";
import theme from "../gatsby-plugin-theme-ui/index";
import { motion } from "framer-motion";
import TransitionLink from "gatsby-plugin-transition-link";

let MotionLink = motion(Link);
let MotionDivider = motion(Divider);

export default function Nav() {
  const [isHover, setHover] = useState(false);

  return (
    <>
      <Flex
        sx={{
          color: "mWhite",
          p: [1, 2],
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NavLink
          text={"Projects"}
          setHover={setHover}
          hoverX={"2vw"}
          href="/projects"
        />
        <Box
          sx={{
            flex: "1 1 auto",
            px: "5vw",
          }}
        >
          <MotionDivider
            animate={{
              backgroundColor: isHover
                ? theme["colors"]["mRed"]
                : theme["colors"]["mWhite"],
              scaleX: isHover ? 1.05 : 1,
            }}
          />
        </Box>
        <NavLink
          text={"Contact"}
          setHover={setHover}
          hoverX={"-2vw"}
          href="/404"
        />
      </Flex>
    </>
  );
}

function NavLink({ text, href, hoverX, setHover }) {
  return (
    <MotionLink
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      variant="navLink"
      whileHover={{
        x: hoverX,
      }}
    >
      <TransitionLink to={href}>{text}</TransitionLink>
    </MotionLink>
  );
}
