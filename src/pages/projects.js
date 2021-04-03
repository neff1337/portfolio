/** @jsx jsx */
import React from "react"; // eslint-disable-line no-unused-vars
import { jsx, Flex } from "theme-ui";
import { graphql } from "gatsby";

//icons
import { BsChevronCompactUp } from "@react-icons/all-files/bs/BsChevronCompactUp";
import { BsChevronCompactDown } from "@react-icons/all-files/bs/BsChevronCompactDown";

//components
import ProjectCard from "../components/ProjectCard";

export const query = graphql`
  query MyQuery {
    allDatoCmsProject {
      edges {
        node {
          projectTittle
          projectImg {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default function projects({ data }) {
  return (
    <>
      <Flex
        sx={{
          minHeight: "100vh",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BsChevronCompactUp
          sx={{
            fontSize: 4,
          }}
        />
        <ProjectCard />
        <BsChevronCompactDown
          sx={{
            fontSize: 4,
          }}
        />
      </Flex>
    </>
  );
}
