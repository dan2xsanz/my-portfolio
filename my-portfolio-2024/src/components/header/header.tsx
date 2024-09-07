import { DarkModeIcon, HeaderButton, HeaderEnums } from "../../common";
import "./header-style.css";
import { useNavigate } from "react-router-dom";
import logoBlack from "../../assets/logo-black.png";
import logoWhite from "../../assets/logo-white.png";
import { useState } from "react";
import { darkModeStore, selectedScreenStore } from "../../store";

export const Header = () => {
  // DARK MODE STORE
  const { setMode, mode } = darkModeStore();

  // SELECTED SCREEN STORE
  const { selectedScreenScreen, setSelectedScreen } = selectedScreenStore();

  // ROUTING NAVIGATION
  const navigate = useNavigate();

  // DL LOGO
  const [logo, setLogo] = useState<string>(logoWhite);

  // CHANGE COLOR THEME
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

  // ON CLICK HEADER BUTTON
  const onClickHeaderButton = (screen: number) => {
    switch (screen) {
      case 1:
        setSelectedScreen(1);
        navigate("");
        break;
      case 2:
        setSelectedScreen(2);
        navigate("/about");
        break;
      case 3:
        setSelectedScreen(3);
        navigate("/projects");
        break;
      case 4:
        setSelectedScreen(4);
        navigate("/experience");
        break;
      case 5:
        setSelectedScreen(5);
        navigate("/contact");
        break;
    }
  };

  return (
    <div className="header-container">
      <div
        className="logo-container"
        key={1}
        onClick={() => onClickHeaderButton(HeaderEnums.INTRODUCTION)}
      >
        <img src={logo} height={70} width={70} />
      </div>
      <div className="menu-options-container">
        {selectedScreenScreen !== HeaderEnums.ABOUT_ME && (
          <HeaderButton
            key={2}
            label={"About"}
            onClick={() => onClickHeaderButton(HeaderEnums.ABOUT_ME)}
          />
        )}
        {selectedScreenScreen !== HeaderEnums.PROJECTS && (
          <HeaderButton
            key={3}
            label={"Projects"}
            onClick={() => onClickHeaderButton(HeaderEnums.PROJECTS)}
          />
        )}
        {selectedScreenScreen !== HeaderEnums.EXPERIENCE && (
          <HeaderButton
            key={4}
            label={"Experience"}
            onClick={() => onClickHeaderButton(HeaderEnums.EXPERIENCE)}
          />
        )}
        {selectedScreenScreen !== HeaderEnums.CONTACTS && (
          <HeaderButton
            key={5}
            label={"Contact"}
            onClick={() => onClickHeaderButton(HeaderEnums.CONTACTS)}
          />
        )}
        <DarkModeIcon onClick={onChangeTheme} />
      </div>
    </div>
  );
};
