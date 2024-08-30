export enum ButtonSize {
  large,
  medium,
  small,
}

export interface ButtonInterface {
  size: ButtonSize;
  label: string;
  onClick: () => void;
}
