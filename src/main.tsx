import "@fontsource-variable/google-sans-flex";
import "@fontsource/fragment-mono/400.css";
import "@fontsource/instrument-serif/400.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { App } from "./App";
import "./styles.css";

const Router = import.meta.env.MODE === "github" ? HashRouter : BrowserRouter;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
);
