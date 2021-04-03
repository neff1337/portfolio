const React = require("react"); // eslint-disable-line no-unused-vars

export const onInitialClientRender = () => {
  setTimeout(function () {
    document.getElementById("___loader").style.display = "none";
  }, 1000);
};
