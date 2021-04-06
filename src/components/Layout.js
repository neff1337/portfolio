import * as React from "react";

//theme
import { ThemeProvider } from "theme-ui";
import theme from "../gatsby-plugin-theme-ui/index";
import "../fonts/fonts.css";

//components
import Cursor from "../components/Cursor";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Cursor />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
