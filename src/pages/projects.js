import * as React from "react";
import { Grid, Text } from "theme-ui";
import TransitionLink from "gatsby-plugin-transition-link";
import { motion } from "framer-motion";
import { IoMdArrowForward } from "@react-icons/all-files/io/IoMdArrowForward";

const ProjectPage = ({ transitionStatus, entry }) => {
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
      {typeof window !== `undefined` && (
        <motion.div
          initial={entry.state}
          animate={
            transitionStatus === "exiting"
              ? { x: -window.innerWidth }
              : { x: 0 }
          }
          transition={{ duration: 0.4 }}
        >
          <Grid
            sx={{
              p: [1, 2],
              gridTemplateColumns: "1fr auto",
              gridTemplateRows: "1fr",
              alignItems: "center",
              justifyItems: "end",
            }}
          >
            <Text
              sx={{
                pr: [1, 2],
                borderRight: "2px solid",
                textTransform: "uppercase",
                fontSize: [0, 1],
              }}
            >
              Project Page
            </Text>
            <TransitionLink
              to="/"
              exit={{
                length: 0.4,
              }}
              entry={{
                delay: 0.4,
                state: { x: window.innerWidth },
              }}
            >
              <motion.div
                whileHover={{ x: 5 }}
                onMouseEnter={() => handleMouseEnter()}
                onMouseLeave={() => handleMouseLeave()}
              >
                <IoMdArrowForward
                  style={{ verticalAlign: "middle", fontSize: "2rem" }}
                />
              </motion.div>
            </TransitionLink>
          </Grid>
          <h1>Project page</h1>
          <p>
            Laborum dolor id magna aute do aute aliquip ipsum eiusmod culpa
            laborum adipisicing laboris anim. Irure officia nulla proident
            consequat id quis veniam. Ut do minim exercitation ad nulla dolor
            tempor nostrud Lorem fugiat ea tempor deserunt aute. Proident
            cupidatat commodo occaecat culpa deserunt ea aliquip exercitation.
            Non non ipsum incididunt nostrud mollit elit. Excepteur deserunt id
            nulla est irure et laboris anim reprehenderit ex ex.
          </p>
        </motion.div>
      )}
    </>
  );
};

export default ProjectPage;
