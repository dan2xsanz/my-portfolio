import { ButtonInterface, ButtonSize } from "./button-interface";
import { darkModeStore } from "../../store";

import "./button-style.css";
export const Button = (props: ButtonInterface) => {
  const { size, label, onClick } = props;

  const { mode } = darkModeStore();

  switch (size) {
    case ButtonSize.large:
      return (
        <button
          className={
            mode === "white"
              ? "button-style white large"
              : "button-style dark large"
          }
          onClick={onClick}
        >
          {label}
        </button>
      );
    case ButtonSize.medium:
      return (
        <button
          className={
            mode === "white"
              ? "button-style white medium"
              : "button-style dark medium"
          }
        >
          {label}
        </button>
      );
    case ButtonSize.small:
      return (
        <button
          className={
            mode === "white"
              ? "button-style white small"
              : "button-style dark small"
          }
        >
          {label}
        </button>
      );
    default:
      return <button className="button-style"> {label}</button>;
  }
};

export const SecondaryButton = (props: ButtonInterface) => {
  const { size, label, onClick } = props;

  const { mode } = darkModeStore();

  switch (size) {
    case ButtonSize.large:
      return (
        <button
          className={
            mode === "white"
              ? "button-style secondary white large"
              : "button-style secondary dark large"
          }
          onClick={onClick}
        >
          {label}
        </button>
      );
    default:
      <></>;
  }
};
