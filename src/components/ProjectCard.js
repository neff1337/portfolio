/** @jsx jsx */
import React from "react"; // eslint-disable-line no-unused-vars
import TransitionLink from "gatsby-plugin-transition-link";
import { jsx, Card, Button, Image, Heading, Box } from "theme-ui";

export default function ProjectCard() {
  return (
    <Card>
      <Button
        sx={{
          position: "fixed",
          transform: "rotate(90deg)",
          transformOrigin: "left",
          top: ["35%", "35%", "30%"],
          px: ["20px", "40px", "60px"],
          letterSpacing: "5px",
          fontSize: [0, 1, 2],
        }}
      >
        <TransitionLink to="/">details</TransitionLink>
      </Button>
      <Box
        sx={{
          bg: "mWhite",
        }}
      >
        <Image src="https://picsum.photos/750/540" />
      </Box>
      <Card variant="primaryTittle">
        <Heading
          sx={{
            fontSize: [1, 2, 3],
          }}
        >
          lorem hui
        </Heading>
      </Card>
    </Card>
  );
}
