import * as React from "react";
import { Grid, Button, useColorMode, Themed } from "theme-ui";
import TransitionLink from "gatsby-plugin-transition-link";

import { IoMdArrowBack } from "@react-icons/all-files/io/IoMdArrowBack";

const ContactPage = () => {
  useColorMode("light");
  return (
    <>
      <Grid
        sx={{
          p: [1, 2],
          gridTemplateColumns: "auto 1fr",
          gridTemplateRows: "1fr",
          alignItems: "center",
        }}
      >
        <Themed.a as={TransitionLink} to="/">
          <IoMdArrowBack
            style={{ verticalAlign: "middle", fontSize: "2rem" }}
          />
        </Themed.a>
        Contact Page
      </Grid>
      <h1>Contact page</h1>
    </>
  );
};

export default ContactPage;
