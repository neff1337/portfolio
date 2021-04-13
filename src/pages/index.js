/** @jsx jsx */
import { jsx, Grid, Heading } from "theme-ui";
import { motion } from "framer-motion";
import { TransitionState } from "gatsby-plugin-transition-link";

import Nav from "../components/Nav";

function MainPage() {
  return (
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
            <p>.</p>
          </Grid>
        </motion.div>
      )}
    </TransitionState>
  );
}

export default MainPage;
