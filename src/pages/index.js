/** @jsx jsx */
import React from "react"; // eslint-disable-line no-unused-vars
import { jsx, Flex, Heading } from "theme-ui";

//components
import Nav from "../components/Nav";

export default function MainPage() {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Nav />
      <Heading
        variant="headingOutlineItalic"
        sx={{
          margin: "auto",
          textAlign: "justify",
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
      <svg
        width="300"
        height="300"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="circ">
          <circle id="2" cx="150" cy="150" r="124.5" stroke="black" />
          <circle id="1" cx="150" cy="150" r="124.5" stroke="#FF0000" />
        </g>
      </svg>
    </Flex>
  );
}
