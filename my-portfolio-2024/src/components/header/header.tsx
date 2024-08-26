import { DarkModeIcon, HeaderButton } from "../../common";
import "./header-style.css";
import { useStore } from "../../store";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  // Dark mode state
  const { setMode, mode } = useStore();

  // Use navigate to handle routing
  const navigate = useNavigate();

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
      <div className="logo-container" onClick={() => navigate("")}>
        DL
      </div>
      <div className="menu-options-container">
        <HeaderButton
          key={1}
          label={"About"}
          onClick={() => navigate("/about")}
        />
        <HeaderButton key={2} label={"Projects"} onClick={() => {}} />
        <HeaderButton key={3} label={"Experience"} onClick={() => {}} />
        <HeaderButton key={4} label={"Contact"} onClick={() => {}} />
        <DarkModeIcon onClick={onChangeTheme} />
      </div>
    </div>
  );
};
