/** @jsx jsx */
import * as React from "react";
import { jsx, Grid, Heading } from "theme-ui";
import { motion } from "framer-motion";
import { TransitionState } from "gatsby-plugin-transition-link";
import SEO from "../components/SEO";
import Nav from "../components/Nav";

function MainPage() {
  return (
    <>
      <SEO title="neff" />
      <TransitionState>
        {({ transitionStatus, entry, exit }) => (
          <motion.div
            initial={entry.state}
            animate={
              transitionStatus === "exiting"
                ? exit.state
                : { opacity: 1, x: 0, y: 0 }
            }
            transition={
              transitionStatus === "exiting"
                ? { duration: exit.length }
                : { duration: 0.4 }
            }
          >
            <Grid
              sx={{
                gridTemplateColumns: "1fr",
                gridTemplateRows: "auto 1fr auto",
                height: "100vh",
              }}
            >
              <Nav />
              <Heading
                sx={{
                  textAlign: "justify",
                  alignSelf: "center",
                  justifySelf: "center",
                  fontSize: [3, 4, 4],
                  width: ["80vw", "70vw", "55vw"],
                }}
              >
                neff. Web-design & some — magic
                <span
                  sx={{
                    width: "100%",
                    display: "inline-block",
                  }}
                ></span>
              </Heading>
              <p>.</p>
            </Grid>
          </motion.div>
        )}
      </TransitionState>
    </>
  );
}

export default MainPage;
