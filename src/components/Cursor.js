/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState, useEffect } from "react"; // eslint-disable-line no-unused-vars

const Cursor = () => {
  const [position, setPosition] = useState({ x: -50, y: -50 });
  const [hidden, setHidden] = useState(false);
  const [click, setClick] = useState(false);
  const [linkHover, setLinkHover] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", mMove);
      document.addEventListener("mouseenter", mEnter);
      document.addEventListener("mouseleave", mLeave);
      document.addEventListener("mousedown", mDown);
      document.addEventListener("mouseup", mUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", mMove);
      document.removeEventListener("mouseenter", mEnter);
      document.removeEventListener("mouseleave", mLeave);
      document.removeEventListener("mousedown", mDown);
      document.removeEventListener("mouseup", mUp);
    };

    const mDown = () => {
      setClick(true);
    };

    const mUp = () => {
      setClick(false);
      setLinkHover(false);
    };

    const mMove = (el) => {
      setPosition({ x: el.clientX, y: el.clientY });
    };

    const mLeave = () => {
      setHidden(true);
    };

    const mEnter = () => {
      setHidden(false);
    };

    const addLinkEvents = () => {
      document.querySelectorAll("a").forEach((el) => {
        el.addEventListener("mouseover", () => setLinkHover(true));
        el.addEventListener("mouseout", () => setLinkHover(false));
      });
      document.querySelectorAll("button").forEach((el) => {
        el.addEventListener("mouseover", () => setLinkHover(true));
        el.addEventListener("mouseout", () => setLinkHover(false));
      });
    };

    addEventListeners();
    addLinkEvents();
    return () => removeEventListeners();
  }, []);

  return (
    <div
      id="cursor"
      className={
        "cursor " +
        (hidden ? "c--hidden " : " ") +
        (click ? "c--clicked " : " ") +
        (linkHover ? "c--hover " : " ")
      }
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      sx={{
        display: ["none", "block", "block"],
        width: "20px",
        height: "20px",
        backgroundColor: "text",
        borderRadius: "100%",
        position: "fixed",
        zIndex: 2,
        pointerEvents: "none",
        mixBlendMode: "difference",
        transform: "translate(-50%, -50%)",
        transition: "all 100ms ease",
        transitionProperty: "border, opacity, background-color, transform",
      }}
    />
  );
};

export default Cursor;
