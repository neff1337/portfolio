/** @jsx jsx */
import * as React from "react"; // eslint-disable-line no-unused-vars
import { jsx, Grid, Heading } from "theme-ui";

//components
import Nav from "../components/Nav";

import { motion } from "framer-motion";
import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link";

function MainPage() {
  return (
    <>
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
                variant="headingOutlineItalic"
                sx={{
                  textAlign: "justify",
                  alignSelf: "center",
                  justifySelf: "center",
                  fontSize: [3, 4, 5],
                  width: ["mobW", "tabW", "descW"],
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
              <h1>footer</h1>
            </Grid>
          </motion.div>
        )}
      </TransitionState>
    </>
  );
}

export default MainPage;
