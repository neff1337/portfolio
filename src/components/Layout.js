import * as React from "react";

//theme
import { ThemeProvider } from "theme-ui";
import theme from "../gatsby-plugin-theme-ui/index";
import "../fonts/fonts.css";

//components
import Transition from "../components/Transition";

const Layout = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Transition {...props}>{props.children}</Transition>
    </ThemeProvider>
  );
};

export default Layout;
