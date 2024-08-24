import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import {
  CenterContainer,
  ProfileContainer,
  RightContainer,
} from "./components";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div
      style={{
        display: "flex",
        gap: "5px",
        width: "100%",
        height: "100%",
      }}
    >
      <ProfileContainer />
      <CenterContainer />
      <RightContainer />
    </div>
  </StrictMode>
);
