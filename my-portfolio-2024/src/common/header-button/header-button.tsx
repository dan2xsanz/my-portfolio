import "./header-button-style.css";

interface HeaderButtonProps {
  label: string;
}

export const HeaderButton = (props: HeaderButtonProps) => {
  const { label } = props;
  return <div className="header-button-style">{label}</div>;
};
