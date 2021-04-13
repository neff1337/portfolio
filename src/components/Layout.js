import * as React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "../gatsby-plugin-theme-ui/index";
import Cursor from "../components/Cursor";
import "@fontsource/montserrat/200.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/josefin-sans/200.css";
import "@fontsource/josefin-sans/400.css";
const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Cursor />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
