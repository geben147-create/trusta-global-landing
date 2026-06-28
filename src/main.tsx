import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import AppV5 from "./AppV5.tsx";
import "./index.css";

const isV5 = new URLSearchParams(window.location.search).get("v") === "5";

createRoot(document.getElementById("root")!).render(
  <StrictMode>{isV5 ? <AppV5 /> : <App />}</StrictMode>,
);
