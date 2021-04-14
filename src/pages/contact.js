/** @jsx jsx */
import * as React from "react";
import {
  jsx,
  Grid,
  Text,
  Button,
  Label,
  Textarea,
  Field,
  Box,
  Card,
} from "theme-ui";
import TransitionLink from "gatsby-plugin-transition-link";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import { IoMdArrowBack } from "@react-icons/all-files/io/IoMdArrowBack";
import ContactButton from "../components/ContactPage/ContactButtons";

const ContactPage = ({ transitionStatus, entry }) => {
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
      <SEO title="Contacts" />
      {typeof window !== `undefined` && (
        <motion.div
          initial={entry.state}
          animate={
            transitionStatus === "exiting" ? { x: window.innerWidth } : { x: 0 }
          }
          transition={{ duration: 0.4 }}
        >
          <Grid
            sx={{
              gridTemplateColumns: ["1fr", "1fr", "1fr 1fr"],
              gridTemplateRows: [
                "auto 1fr auto 1fr",
                "auto 1fr auto 1fr",
                "1fr 1fr 1fr",
              ],
              gridTemplateAreas: [
                `"nav"
              "form"
              "text"
              "buttons"`,
                `"nav"
              "form"
              "text"
              "buttons"`,
                `"nav form" "nav text" "nav buttons"`,
              ],
              height: [null, "100vh", "100vh"],
              gap: 0,
            }}
          >
            {/* NAVBAR */}
            <Box
              sx={{
                gridArea: "nav",
                display: "flex",
                alignItems: "center",
                alignSelf: "flex-start",
                p: [1, 2],
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
                  state: { x: -window.innerWidth },
                }}
              >
                <motion.div
                  whileHover={{ x: -5 }}
                  onMouseEnter={() => handleMouseEnter()}
                  onMouseLeave={() => handleMouseLeave()}
                >
                  <IoMdArrowBack
                    style={{ verticalAlign: "middle", fontSize: "2rem" }}
                  />
                </motion.div>
              </TransitionLink>
              <Text
                sx={{
                  ml: [1, 2],
                  pl: [1, 2],
                  borderLeft: "2px solid",
                  textTransform: "uppercase",
                  fontSize: [0, 1],
                }}
              >
                Contact Page
              </Text>
            </Box>
            <Box
              sx={{
                gridArea: "form",
                color: "background",
                bg: "text",
                p: "15px",
              }}
            >
              <Card>
                <Label>Contact with me!</Label>
                <Field label="Email" name="email" p={1} mb={1} />
                <Label htmlFor="contact">Your massage:</Label>
                <Textarea
                  name="contact"
                  id="contact"
                  rows={6}
                  mb={1}
                  p={1}
                  sx={{
                    resize: "none",
                  }}
                />
                <Button variant="fullWidth">Send</Button>
              </Card>
            </Box>
            <Box
              sx={{
                gridArea: "text",
                color: "background",
                bg: "text",
                p: "15px",
                textAlign: "center",
                height: "100%",
                color: "gray",
              }}
            >
              <p>Or find me on:</p>
            </Box>
            <Box
              sx={{
                gridArea: "buttons",
                color: "background",
                bg: "text",
                p: "15px",
              }}
            >
              <Card>
                <ContactButton />
              </Card>
            </Box>
          </Grid>
        </motion.div>
      )}
    </>
  );
};

export default ContactPage;
