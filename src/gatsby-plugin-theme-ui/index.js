import { normalize } from "polished";

export const theme = {
  ...normalize(),
  breakpoints: ["40em", "56em", "64em"],
  colors: {
    text: "#FFF9FB",
    background: "#121212", //"#070707",
    primary: "#E94F37",
    gray: "#323633",
    grayCard: "rgba(255, 255, 255, 0.05)", //"#323633",
  },
  fonts: {
    body: "Montserrat, sans-serif",
    heading: "Josefin Sans, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 18, 22, 36, 48, 72],
  fontWeights: {
    body: 400,
    heading: 200,
    headingBold: 400,
  },
  lineHeights: {
    body: 1.5,
    heading: 0.85,
  },
  space: [0, 15, 30, 50],
  sizes: {
    vh: "70vh",
  },
  radii: {},
  shadows: {
    primary: {
      boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
    },
  },
  text: {
    heading: {
      fontFamily: "heading",
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
      padding: 1,
      borderRadius: 4,
      boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
      bg: "grayCard",
    },
    primaryWhite: {
      padding: 1,
      borderRadius: 4,
      boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
      bg: "transparent",
    },
  },
  badges: {
    primary: {
      border: ["2px solid", "5px solid"],
      borderColor: "text",
      borderRadius: "50%",
      p: 0,
      height: ["15px", "25px"],
      width: ["15px", "25px"],
    },
  },
  images: {
    avatar: {
      borderRadius: 0,
      bg: "text",
      width: ["40px", "60px"],
      height: ["40px", "60px"],
    },
  },
  styles: {
    root: {
      overflow: "hidden",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      "*|*:link, a": {
        zIndex: 2,
        color: "inherit",
        textDecoration: "none",
        textTransform: "uppercase",
        transition: "150ms easy",
        transitionProperty: "color",
      },
      "#navlink": {
        ":hover,:focus,.active": {
          color: "primary",
        },
      },
      "*, button, cursor, a, *|*:link": {
        cursor: "none",
      },
      //cursor styles
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
