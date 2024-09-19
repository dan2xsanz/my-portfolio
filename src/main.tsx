import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import { StrictMode } from "react";

import "./main.css";
const App = () => {
  return (
    <Router>
      <MainBackground />
     
      <StrictMode>
        <SvgBackground />
        <Header />
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
