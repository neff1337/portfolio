/** @jsx jsx */
import * as React from "react"; // eslint-disable-line no-unused-vars
import { jsx } from "theme-ui";
import { Link } from "gatsby";

const Projects = () => {
  return (
    <>
      <h1>porjects page</h1>
      <p>some projects here</p>
      <Link to="/">back to home</Link>
    </>
  );
};

export default Projects;
