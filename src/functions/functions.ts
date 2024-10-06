import { frame, useMotionValue, useSpring } from "framer-motion";
import { RefObject, useEffect } from "react";

import moment from "moment";

// Follow cursor pointer
export const useFollowPointer = (
  ref: RefObject<HTMLElement>,
  damping: number,
  stiffness: number
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
        // Adjust position calculations to consider scrolling
        const scrollX =
          window.scrollX ||
          window.pageXOffset ||
          document.documentElement.scrollLeft;
        const scrollY =
          window.scrollY ||
          window.pageYOffset ||
          document.documentElement.scrollTop;

        // Calculate the new position for the element based on cursor and scroll position
        xPoint.set(
          clientX + scrollX - element.offsetLeft - element.offsetWidth / 2
        );
        yPoint.set(
          clientY + scrollY - element.offsetTop - element.offsetHeight / 2
        );
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [ref, xPoint, yPoint]);

  return { x, y };
};

// Calculate my real time age based on the current date
export const myRealtimeAge = (): string => {
  let today = moment().year() - 2000;
  if (moment().month() <= 3 && moment().date() < 31) {
    today = today - 1;
  }
  return today.toString();
};

// Calculate greetings reatime based on the current time
export const currentTimeGreetings = (): string => {
  const currentHour = moment().hour();

  let greeting: string;

  if (currentHour >= 0 && currentHour < 12) {
    greeting = "Good Morning";
  } else if (currentHour >= 12 && currentHour <= 17) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return greeting;
};

export const getCardBackground = (
  mode: string,
  setCardBackground: (data: string) => void
) => {
  if (mode !== "white") {
    setCardBackground("rgb(124 123 123 / 6%)");
  } else {
    setCardBackground("rgb(124 123 123 / 21%)");
  }
};
