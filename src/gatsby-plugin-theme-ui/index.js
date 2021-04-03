import { normalize } from "polished";

export const theme = {
  ...normalize(),
  breakpoints: ["40em", "56em", "64em"],
  colors: {
    mWhite: "#FFF9FB",
    mRed: "#E94F37",
    mGray: "#323633",
    mDark: "#070707",

    text: "#000",
    background: "#fff",
    primary: "#07c",
    secondary: "#30c",
    muted: "#f6f6f9",
    gray: "#dddddf",
    highlight: "hsla(205, 100%, 40%, 0.125)",
  },
  fonts: {
    body: "Montserrat, sans-serif",
    heading: "Soulmaze, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 18, 22, 36, 48, 72, 86],
  fontWeights: {
    body: 400,
    heading: 500,
  },
  lineHeights: {
    body: 1.5,
    heading: 0.85,
  },
  space: [0, 15, 30, 50],
  sizes: {
    vh: "70vh",
    mobW: "90vw",
    tabW: "80vw",
    descW: "70vw",
  },
  radii: {},
  shadows: {},
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      textTransform: "uppercase",
      letterSpacing: "1px",
    },
    headingOutlineItalic: {
      fontFamily: "Soulmaze-Outline-Italic",
      lineHeight: "heading",
      fontWeight: "heading",
      textTransform: "uppercase",
      letterSpacing: "1px",
    },
    display: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      fontSize: [5, 6, 7],
    },
  },
  links: {
    navLink: {
      color: "mWhite",
      textDecoration: "none",
      textTransform: "uppercase",
      transition: "all 150ms",
      fontSize: [0, 1],
      ":hover,:focus,.active": {
        color: "mRed",
      },
    },
  },
  buttons: {
    primary: {
      textTransform: "uppercase",
      fontFamily: "body",
      color: "mWhite",
      bg: "mRed",
      p: "5px",
      borderRadius: 0,
    },
  },
  cards: {
    primary: {
      bg: "transparent",
      width: ["mobW", "tabW", "descW"],
    },
    primaryTittle: {
      bg: "mWhite",
      color: "mGray",
      textAlign: "center",
      padding: "2vw",
      mt: "10px",
      width: ["mobW", "tabW", "descW"],
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      bg: "mDark",
      color: "mWhite",
      minHeight: "100vh",
      "*|*:link, a": {
        color: "inherit",
        textDecoration: "none",
      },
    },
    hr: {
      bg: "mWhite",
      height: "2px",
      border: "0",
      m: "0",
    },
  },
};

export default theme;
