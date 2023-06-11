import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
document.documentElement.className = "fadeSet";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
