import { darkModeStore, selectedScreenStore } from "../../store";
import logoBlack from "../../assets/logo-black.png";
import logoWhite from "../../assets/logo-white.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./header-style.css";
import {
  DarkModeIcon,
  HeaderButton,
  HeaderEnums,
  UpButtonIcon,
} from "../../common";

export const Header = () => {
  const { setMode, mode } = darkModeStore();
  const { selectedScreenScreen, setSelectedScreen } = selectedScreenStore();
  const navigate = useNavigate();

  // STATE TO MANAGE SCROLL UP BUTTON VISIBILITY
  const [showScrollUp, setShowScrollUp] = useState(false);

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

  // EVENT LISTENER FOR NAV BAR STICKY
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`header-container`}>
      <div
        className="logo-container"
        onClick={() => onClickHeaderButton(HeaderEnums.INTRODUCTION)}
      >
        <img src={logo} height={70} width={70} />
      </div>
      <div className="menu-options-container">
        {selectedScreenScreen !== HeaderEnums.ABOUT_ME && (
          <HeaderButton
            label="About"
            onClick={() => onClickHeaderButton(HeaderEnums.ABOUT_ME)}
          />
        )}
        {selectedScreenScreen !== HeaderEnums.PROJECTS && (
          <HeaderButton
            label="Projects"
            onClick={() => onClickHeaderButton(HeaderEnums.PROJECTS)}
          />
        )}
        {selectedScreenScreen !== HeaderEnums.EXPERIENCE && (
          <HeaderButton
            label="Experience"
            onClick={() => onClickHeaderButton(HeaderEnums.EXPERIENCE)}
          />
        )}
        {selectedScreenScreen !== HeaderEnums.CONTACTS && (
          <HeaderButton
            label="Contact"
            onClick={() => onClickHeaderButton(HeaderEnums.CONTACTS)}
          />
        )}
        <DarkModeIcon onClick={onChangeTheme} />
      </div>

      {/* SCROLL UP BUTTON */}
      {showScrollUp && (
        <div className="scroll-up-btn">
          <UpButtonIcon
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </div>
      )}
    </div>
  );
};
