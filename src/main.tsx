import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./router";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    // END: ed8c6549bwf9
    <React.StrictMode>
      <Router />
    </React.StrictMode>,
  );
}
