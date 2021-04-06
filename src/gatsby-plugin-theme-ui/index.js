import { normalize } from "polished";

export const theme = {
  ...normalize(),
  breakpoints: ["40em", "56em", "64em"],
  colors: {
    text: "#FFF9FB",
    background: "#070707",
    primary: "#E94F37",
    gray: "#323633",
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
    headingItalic: {
      fontFamily: "Soulmaze-Italic",
      lineHeight: "heading",
      fontWeight: "heading",
      textTransform: "uppercase",
      letterSpacing: "1px",
    },
  },
  links: {
    buttonLight: {
      color: "text",
      borderRadius: "4px",
      py: "15px",
      px: "30px",
      transition: "150ms easy",
      transitionProperty: "all",
      textAlign: "center",
      ":hover, :active, :focus": {
        color: "text",
      },
    },
  },
  buttons: {
    primary100: {
      width: "100%",
      py: "10px",
      px: 0,
      bg: "background",
      textTransform: "uppercase",
      "&:hover": {
        bg: "gray",
      },
    },
  },
  cards: {
    primary: {
      bg: "transparent",
      width: ["mobW", "tabW", "descW"],
    },
    primaryTittle: {
      bg: "text",
      color: "gray",
      textAlign: "center",
      padding: "2vw",
      mt: "10px",
      width: ["mobW", "tabW", "descW"],
    },
  },
  styles: {
    root: {
      overflow: "hidden",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      minHeight: "100vh",

      //link styles
      "*|*:link, a": {
        zIndex: 2,
        color: "inherit",
        textDecoration: "none",
        textTransform: "uppercase",
        cursor: "none",
        transition: "150ms easy",
        transitionProperty: "color",
        ":hover,:focus,.active": {
          color: "primary",
        },
      },
      button: {
        cursor: "none",
      },

      //cursor styles
      cursor: "none",
      ".c--hidden": {
        opacity: 0,
      },
      ".c--clicked": {
        transform: "translate(-50%, -50%) scale(0.5)",
        bg: "primary",
        mixBlendMode: "normal",
      },
      ".c--hover": {
        transform: "translate(-50%, -50%) scale(1.5)",
        bg: "transparent",
        border: "1px solid",
      },
    },
    hr: {
      bg: "text",
      height: "2px",
      border: "0",
      m: "0",
    },
  },
};

export default theme;
