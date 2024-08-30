import "./button-style.css";
import { useStore } from "../../store";

export enum ButtonSize {
  large,
  medium,
  small
}

interface ButtonInterface {
  size: ButtonSize;
  label: string;
  onClick: () => void;
}

export const Button = (props: ButtonInterface) => {
  const { size, label, onClick } = props;

  const { mode } = useStore();

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
