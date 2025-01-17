import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";
import CvApp from "./components/CvApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div id="insert">
      <CvApp />
    </div>
  </StrictMode>,
);
