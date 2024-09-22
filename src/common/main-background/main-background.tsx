import { useFollowPointer } from "../../functions";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

export const MainBackground = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { x: pointer1A, y: pointer1B } = useFollowPointer(ref, 100, 2000);
  const { x: pointer2A, y: pointer2B } = useFollowPointer(ref, 100, 800);

  const setCenterPosition = () => {
    if (ref.current) {
      const { clientWidth, clientHeight } = ref.current;
      const centerX = clientWidth / 2;
      const centerY = clientHeight / 2;

      // Manually set the pointer positions to the center
      pointer1A.set(centerX);
      pointer1B.set(centerY);
      pointer2A.set(centerX);
      pointer2B.set(centerY);
    }
  };

  useEffect(() => {
    // Set initial position
    setCenterPosition();

    // Set up resize event listener
    window.addEventListener("resize", setCenterPosition);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", setCenterPosition);
    };
  }, [ref]);

  return (
    <div
      style={{
        position: "relative",
        width: "80px",
        height: "80px",
        zIndex: -1,
      }}
      ref={ref}
    >
      <motion.div className="circle b" style={{ x: pointer2A, y: pointer2B }} />
      <motion.div
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
