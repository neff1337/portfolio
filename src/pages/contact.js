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
  Link,
  Card,
} from "theme-ui";
import TransitionLink from "gatsby-plugin-transition-link";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
//icons
import { IoMdArrowBack } from "@react-icons/all-files/io/IoMdArrowBack";
import { SiInstagram } from "@react-icons/all-files/si/SiInstagram";
import { SiTelegram } from "@react-icons/all-files/si/SiTelegram";
import { SiBehance } from "@react-icons/all-files/si/SiBehance";
import { SiDribbble } from "@react-icons/all-files/si/SiDribbble";
import { SiGithub } from "@react-icons/all-files/si/SiGithub";
import { SiGmail } from "@react-icons/all-files/si/SiGmail";

let MotionButton = motion.custom(Link);

function IconButton({ bg, children, href }) {
  return (
    <MotionButton
      href={href}
      variant="buttonLight"
      sx={{
        bg: bg,
      }}
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.9,
      }}
    >
      {children}
    </MotionButton>
  );
}

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
      <SEO title="neff - contacts" />
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
              gridTemplateColumns: ["1fr", "1fr 1fr"],
              gap: 0,
              alignItems: "start",
            }}
          >
            {/* NAVBAR */}
            <Grid
              sx={{
                p: [1, 2],
                gridTemplateColumns: "auto 1fr",
                gridTemplateRows: "1fr",
                gap: [1, 2],
                alignItems: "center",
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
                  pl: [1, 2],
                  borderLeft: "2px solid",
                  textTransform: "uppercase",
                  fontSize: [0, 1],
                }}
              >
                Contact Page
              </Text>
            </Grid>

            <Grid
              sx={{
                gridTemplateRows: "auto 1fr auto",
                bg: "text",
                color: "background",
                p: 1,
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
                <Button variant="primary100">Send</Button>
              </Card>
              <Box
                sx={{
                  textAlign: "center",
                  alignSelf: "center",
                  color: "gray",
                }}
              >
                <p>Or find me on:</p>
              </Box>
              <Card>
                <Grid
                  sx={{
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gridTemplateRows: "1fr 1fr",
                    gridGap: "15px",
                    fontSize: [2, 3],
                    color: "text",
                    ":hover": {
                      color: "text",
                    },
                  }}
                >
                  <IconButton bg="#0088cc" href={"https://t.me/neff1337"}>
                    <SiTelegram style={{ verticalAlign: "text-top" }} />
                  </IconButton>
                  <IconButton
                    bg="#e1306c"
                    href={"https://instagram.com/neff1337"}
                  >
                    <SiInstagram style={{ verticalAlign: "text-top" }} />
                  </IconButton>
                  <IconButton bg="#333" href={"https://github.com/neff1337"}>
                    <SiGithub style={{ verticalAlign: "text-top" }} />
                  </IconButton>
                  <IconButton
                    bg="#ea4335"
                    href={
                      "https://mail.google.com/mail/?view=cm&fs=1&to=dimadebelskiy@gmail.com"
                    }
                  >
                    <SiGmail style={{ verticalAlign: "text-top" }} />
                  </IconButton>
                  <IconButton bg="#1769ff">
                    <SiBehance style={{ verticalAlign: "text-top" }} />
                  </IconButton>
                  <IconButton bg="#ea4c89">
                    <SiDribbble style={{ verticalAlign: "text-top" }} />
                  </IconButton>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </motion.div>
      )}
    </>
  );
};

export default ContactPage;
