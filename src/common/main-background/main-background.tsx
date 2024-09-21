import { useFollowPointer } from "../../functions";
import { motion } from "framer-motion";
import { useRef } from "react";

export const MainBackground = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { x: pointer1A, y: pointer1B } = useFollowPointer(ref, 100, 2000);
  const { x: pointer2A, y: pointer2B } = useFollowPointer(ref, 100, 800);
  return (
    <div style={{ position: "fixed", width: "80px", height: "80px", zIndex: -1 }}>
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
  );
};
