import "./header-button-style.css";

interface HeaderButtonProps {
  label: string;
  onClick: () => void;
}

export const HeaderButton = (props: HeaderButtonProps) => {
  const { label, onClick } = props;
  return (
    <div className="header-button-style" onClick={onClick}>
      {label}
    </div>
  );
};
