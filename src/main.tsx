import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./router";
import { WcagContextProvider } from "./wcag/wcagContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WcagContextProvider>
      <Router />
    </WcagContextProvider>
  </React.StrictMode>,
);
