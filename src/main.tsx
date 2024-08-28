import React from "react";
import ReactDOM from "react-dom";
import "./main.css";
import App from "./App";
import "simplebar/dist/simplebar.min.css";
import { Scrollbar } from "@deskpro/deskpro-ui";

ReactDOM.render(
  <React.StrictMode>
    <Scrollbar style={{height: "100%", width: "100%"}}><App /></Scrollbar>
  </React.StrictMode>,
  document.getElementById("root")
);
