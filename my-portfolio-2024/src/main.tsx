import { RefObject, StrictMode, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import { Header } from "./components/header";
import { Introduction } from "./components/introduction/introduction";
import { frame, motion, useMotionValue, useSpring } from "framer-motion";

const useFollowPointer = (ref: RefObject<HTMLElement>, damping: number) => {
  const spring = { damping: damping, stiffness: 100, restDelta: 0.001 };
  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);
  const x = useSpring(xPoint, spring);
  const y = useSpring(yPoint, spring);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;
      frame.read(() => {
        xPoint.set(clientX - element.offsetLeft - element.offsetWidth / 2);
        yPoint.set(clientY - element.offsetTop - element.offsetHeight / 2);
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [ref, xPoint, yPoint]);

  return { x, y };
};

const App = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { x: pointer2A, y: pointer2B } = useFollowPointer(ref, 20);

  return (
    <StrictMode>
        <motion.div
          ref={ref}
          className="circle"
          style={{ x: pointer2A, y: pointer2B }}
        />
      <Header />
      <Introduction />
    </StrictMode>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
