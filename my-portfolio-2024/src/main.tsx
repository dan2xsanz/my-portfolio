import { Header, Introduction, SvgBackground } from "./components";
import { useFollowPointer } from "./functions";
import { createRoot } from "react-dom/client";
import { StrictMode, useRef } from "react";
import { motion } from "framer-motion";

import "./main.css";

const App = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { x: pointer1A, y: pointer1B } = useFollowPointer(ref, 100, 2000);
  const { x: pointer2A, y: pointer2B } = useFollowPointer(ref, 100, 800);

  return (
    <StrictMode>
      <div style={{ position: "relative", width: "80px", height: "80px" }}>
        <motion.div
          ref={ref}
          className="circle b"
          style={{ x: pointer2A, y: pointer2B }}
        />
        <motion.div
          ref={ref}
          className="circle a"
          style={{
            x: pointer1A,
            y: pointer1B,
            position: "absolute",
            top: "45%",
            left: "45%",
          }}
        />
      </div>

      <SvgBackground />
      <Header />
      <Introduction />
    </StrictMode>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
