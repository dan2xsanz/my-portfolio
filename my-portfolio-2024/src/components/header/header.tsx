import { DarkModeIcon, HeaderButton } from "../../common";
import "./header-style.css";
import { useStore } from "../../store";

export const Header = () => {
  // Dark mode state
  const { setMode, mode } = useStore();

  // Change color theme
  const onChangeTheme = () => {
    if (mode !== "black") {
      document.documentElement.style.setProperty("--background-color", "white");
      document.documentElement.style.setProperty("--color", "black");
      setMode("black");
    } else {
      document.documentElement.style.setProperty("--background-color", "black");
      document.documentElement.style.setProperty("--color", "white");
      setMode("white");
    }
  };

  return (
    <div className="header-container">
      <div className="logo-container">DL</div>
      <div className="menu-options-container">
        <HeaderButton label={"About"} />
        <HeaderButton label={"Projects"} />
        <HeaderButton label={"Experience"} />
        <HeaderButton label={"Contact"} />
        <DarkModeIcon onClick={onChangeTheme} />
      </div>
    </div>
  );
};
