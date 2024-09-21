import "./header-button-style.css";

interface HeaderButtonProps {
  label: string;
  onClick: () => void;
  isFullScreen?: boolean;
}

export const HeaderButton = (props: HeaderButtonProps) => {
  const { label, onClick, isFullScreen } = props;
  return (
    <div
      className={
        isFullScreen ? "header-button-style-full" : "header-button-style"
      }
      onClick={onClick}
    >
      {label}
    </div>
  );
};
