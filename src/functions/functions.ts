import { frame, useMotionValue, useSpring } from "framer-motion";
import { RefObject, useEffect } from "react";

import night from "../assets/night.png";
import sunrise from "../assets/sunrise.png";
import afternoon from "../assets/afternoon.png";

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
interface TimeResponse {
  greeting: string;
  icon: string;
}
export const currentTimeGreetings = (): TimeResponse => {
  let response: TimeResponse;
  const currentHour = moment().hour();

  if (currentHour >= 0 && currentHour < 12) {
    response = { greeting: "Good Morning", icon: sunrise };
  } else if (currentHour >= 12 && currentHour <= 17) {
    response = { greeting: "Good Afternoon", icon: afternoon };
  } else {
    response = { greeting: "Good Evening", icon: night };
  }
  return response;
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

export const getCardBackgroundString = (mode: string): string => {
  if (mode !== "white") {
    return "rgb(124 123 123 / 6%)";
  } else {
    return "rgb(124 123 123 / 21%)";
  }
};

export const getCurrentBgColor = (mode: string): string => {
  if (mode !== "white") {
    return "black";
  } else {
    return "white";
  }
};
