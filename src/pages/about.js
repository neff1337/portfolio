/** @jsx jsx */
import * as React from "react";
import { jsx, Box, Grid } from "theme-ui";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import TransitionLink from "gatsby-plugin-transition-link";
import { IoMdArrowDown } from "@react-icons/all-files/io/IoMdArrowDown";

const AboutPage = ({ transitionStatus, entry }) => {
  const handleMouseEnter = () => {
    const cursor = document.getElementById("cursor");
    cursor.classList.add("c--hover");
  };
  const handleMouseLeave = () => {
    const cursor = document.getElementById("cursor");
    cursor.classList.remove("c--hover");
  };
  return (
    <>
      <SEO title="neff - about" />
      {typeof window !== `undefined` && (
        <motion.div
          initial={entry.state}
          animate={
            transitionStatus === "exiting"
              ? { y: -window.innerWidth }
              : { y: 0 }
          }
          transition={{ duration: 0.4 }}
        >
          <Grid
            sx={{
              gridTemplateRows: "1fr auto",
            }}
          >
            <p>lsda</p>
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <TransitionLink
                id="navlink"
                to="/"
                exit={{
                  length: 0.4,
                }}
                entry={{
                  delay: 0.4,
                  state: { y: window.innerWidth },
                }}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  onMouseEnter={() => handleMouseEnter()}
                  onMouseLeave={() => handleMouseLeave()}
                >
                  <IoMdArrowDown
                    style={{
                      verticalAlign: "middle",
                      fontSize: "2rem",
                      marginBottom: "35px",
                    }}
                  />
                </motion.div>
              </TransitionLink>
            </Box>
          </Grid>
        </motion.div>
      )}
    </>
  );
};

export default AboutPage;
