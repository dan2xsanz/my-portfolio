interface HeaderButtonProps {
  label: string;
}

export const HeaderButton = (props: HeaderButtonProps) => {
  const { label } = props;
  return <div>{label}</div>;
};
