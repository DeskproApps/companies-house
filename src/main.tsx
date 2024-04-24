import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "iframe-resizer/js/iframeResizer.contentWindow.js";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
