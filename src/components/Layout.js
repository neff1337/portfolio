import * as React from "react";

//theme
import { ThemeProvider } from "theme-ui";
import theme from "../gatsby-plugin-theme-ui/index";
import "../fonts/fonts.css";

//components
import Transition from "../components/Transition";
import Cursor from "../components/Cursor";

const Layout = (props) => {
  return (
    <ThemeProvider theme={theme}>
      {/* <Transition {...props}>
      </Transition> */}
      <Cursor />
      {props.children}
    </ThemeProvider>
  );
};

export default Layout;
