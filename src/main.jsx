import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import GeneralInfo from "./components/GeneralInfo.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="insert">
      <GeneralInfo />
      <Education />
      <Experience />
    </div>

    {/* <App /> */}
  </StrictMode>,
);
