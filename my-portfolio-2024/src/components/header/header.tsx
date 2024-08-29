import { DarkModeIcon, HeaderButton } from "../../common";
import "./header-style.css";
import { useStore } from "../../store";
import { useNavigate } from "react-router-dom";
import logoBlack from "../../assets/logo-black.png";
import logoWhite from "../../assets/logo-white.png";
import { useState } from "react";

export const Header = () => {
  // Dark mode state
  const { setMode, mode } = useStore();

  // Use navigate to handle routing
  const navigate = useNavigate();

  const [logo, setLogo] = useState<string>(logoWhite);

  // Change color theme
  const onChangeTheme = () => {
    if (mode !== "black") {
      document.documentElement.style.setProperty("--background-color", "white");
      document.documentElement.style.setProperty("--color", "black");
      setMode("black");
      setLogo(logoBlack);
    } else {
      document.documentElement.style.setProperty("--background-color", "black");
      document.documentElement.style.setProperty("--color", "white");
      setMode("white");
      setLogo(logoWhite);
    }
  };

  return (
    <div className="header-container">
      <div className="logo-container" onClick={() => navigate("")}>
        <img src={logo} height={70} width={70} />
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
