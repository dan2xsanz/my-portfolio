import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logoBlack from "./assets/logo-black.png";
import logoWhite from "./assets/logo-white.png";
import {
  SvgBackground,
  Introduction,
  Projects,
  Header,
  About,
  Experience,
  Contact,
} from "./components";

import { createRoot } from "react-dom/client";
import { MainBackground } from "./common";
import { StrictMode, useEffect, useState } from "react";

import "./main.css";
import { darkModeStore } from "./store";
const App = () => {
  // DARK MODE STORE
  const { mode, setMode } = darkModeStore();

  const [logo, setLogo] = useState<string>(logoWhite);

  const currentBackgroundColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--background-color")
    .trim();

  useEffect(() => {
    if (mode === currentBackgroundColor) {
      if (mode !== "black") {
        document.documentElement.style.setProperty(
          "--background-color",
          "white"
        );
        document.documentElement.style.setProperty("--color", "black");
        setMode("black");
        setLogo(logoBlack);
      } else {
        document.documentElement.style.setProperty(
          "--background-color",
          "black"
        );
        document.documentElement.style.setProperty("--color", "white");
        setMode("white");
        setLogo(logoWhite);
      }
    }
  }, []);

  return (
    <Router>
      <MainBackground />
      <StrictMode>
        <Header logo={logo} setLogo={setLogo} />
        <SvgBackground />
        <Routes>
          <Route path="" element={<Introduction />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          {/*TODO: Catch all invalid paths and show the Unauthorized screen */}
          {/* <Route path="*" element={<Unauthorized />} /> */}
        </Routes>
      </StrictMode>
    </Router>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
