import { frame, useMotionValue, useSpring } from "framer-motion";
import { RefObject, useEffect } from "react";

export const useFollowPointer = (
  ref: RefObject<HTMLElement>,
  damping: number,
  stiffness:number
) => {
  const spring = { damping: damping, stiffness: stiffness, restDelta: 0.001 };
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
