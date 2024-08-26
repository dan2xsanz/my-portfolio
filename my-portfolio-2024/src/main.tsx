import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About, Header, Introduction, SvgBackground } from "./components";
import { createRoot } from "react-dom/client";
import { MainBackground } from "./common";
import { StrictMode } from "react";

import "./main.css";

const App = () => {
  return (
    <Router>
      <StrictMode>
        <MainBackground />
        <SvgBackground />
        <Header />
        <Routes>
          <Route path="" element={<Introduction />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </StrictMode>
    </Router>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
