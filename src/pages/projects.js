/** @jsx jsx */
import React, { useState } from "react";
import { jsx, Grid, Text, Box, Card, Flex } from "theme-ui";
import TransitionLink from "gatsby-plugin-transition-link";
import { motion } from "framer-motion";
import { IoMdArrowForward } from "@react-icons/all-files/io/IoMdArrowForward";

import AvatarImg from "../components/AvatarImage";

function ProjectPage({ transitionStatus, entry }) {
  const [active, setActive] = useState(null);
  const openTab = (e) => setActive(+e.target.dataset.index);

  const items = [
    { title: "London", content: "London is the capital city of England." },
    { title: "Paris", content: "Paris is the capital of France." },
    { title: "Tokyo", content: "Tokyo is the capital of Japan." },
  ];

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
              gridTemplateColumns: "auto 1fr",
              gridTemplateRows: "auto 1fr",
              gridTemplateAreas: `"icons nav" "icons text"`,
              height: "100vh",
              gridGap: ["10px", "50px"],
            }}
          >
            {/*//! ---- NAV ---- */}
            <Box
              sx={{
                p: [1, 2],
                gridArea: "nav",
                display: "flex",
                justifySelf: "flex-end",
                alignItems: "center",
              }}
            >
              <Text
                sx={{
                  pr: [1, 2],
                  mr: [1, 2],
                  borderRight: "2px solid",
                  textTransform: "uppercase",
                  fontSize: [0, 1],
                }}
              >
                Project Page
              </Text>
              <TransitionLink
                id="navlink"
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
            </Box>

            {/*//! ---- ICONS ---- */}
            <Flex
              sx={{
                gridArea: "icons",
                flexDirection: "column",
                justifyContent: "center",
                bg: "text",
                variant: "shadows.primary",
                width: ["60px", "100px"],
              }}
            >
              {items.map((n, i) => (
                <AvatarImg
                  click={openTab}
                  data={i}
                  items={items}
                  tooltip={n.title}
                />
              ))}
            </Flex>

            {/*//! ---- TEXT ---- */}
            <Box sx={{ gridArea: "text", p: [1, 2] }}>
              {items[active] && <TabContent {...items[active]} />}
            </Box>
          </Grid>
        </motion.div>
      )}
    </>
  );
}

const TabContent = ({ title, content }) => (
  <Card>
    <h3>{title}</h3>
    <p>{content}</p>
  </Card>
);

export default ProjectPage;
