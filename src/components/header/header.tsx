import { HeaderButton, HeaderEnums, BarsIcon, CloseIcon } from "../../common";
import { darkModeStore, selectedScreenStore } from "../../store";
import logoBlack from "../../assets/logo-black.png";
import logoWhite from "../../assets/logo-white.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import moon from "../../assets/moon.png";
import sun from "../../assets/sun.png";
import "./header-style.css";

export const Header = () => {
  const { setMode, mode } = darkModeStore();
  const { selectedScreenScreen, setSelectedScreen } = selectedScreenStore();
  const navigate = useNavigate();

  // const [showScrollUp, setShowScrollUp] = useState(false);
  const [logo, setLogo] = useState<string>(logoWhite);
  const [menuOpen, setMenuOpen] = useState(false);

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
    setMenuOpen(false);
  };

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

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 500) {
  //       setShowScrollUp(true);
  //     } else {
  //       setShowScrollUp(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"; // Prevent background scroll
    } else {
      document.body.style.overflow = ""; // Restore scroll
    }

    return () => {
      document.body.style.overflow = ""; // Clean up when component unmounts
    };
  }, [menuOpen]);

  return (
    <div className="header-container">
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
        <img
          src={mode !== "black" ? sun : moon}
          height={23}
          width={23}
          onClick={onChangeTheme}
          className="icon-mode-display"
        />
      </div>
      <div className="menu-hamburger-container">
        <BarsIcon onClick={() => setMenuOpen(!menuOpen)} />
      </div>
      {menuOpen && (
        <div className={`full-page-menu ${menuOpen ? "active" : ""}`}>
          <div className="full-page-menu-header">
            <div
              className="logo-container"
              onClick={() => {
                setMenuOpen(false);
                onClickHeaderButton(HeaderEnums.INTRODUCTION);
              }}
            >
              <img src={logo} height={70} width={70} alt="logo" />
            </div>
            <CloseIcon onClick={() => setMenuOpen(!menuOpen)} />
          </div>
          <HeaderButton
            isFullScreen
            label="About"
            onClick={() => {
              onClickHeaderButton(HeaderEnums.ABOUT_ME);
              setMenuOpen(false);
            }}
          />
          <HeaderButton
            isFullScreen
            label="Projects"
            onClick={() => {
              onClickHeaderButton(HeaderEnums.PROJECTS);
              setMenuOpen(false);
            }}
          />
          <HeaderButton
            isFullScreen
            label="Experience"
            onClick={() => {
              onClickHeaderButton(HeaderEnums.EXPERIENCE);
              setMenuOpen(false);
            }}
          />
          <HeaderButton
            isFullScreen
            label="Contact"
            onClick={() => {
              onClickHeaderButton(HeaderEnums.CONTACTS);
              setMenuOpen(false);
            }}
          />
          <img
            src={mode !== "black" ? sun : moon}
            height={23}
            width={23}
            onClick={onChangeTheme}
            className="icon-mode-display"
            alt="theme-icon"
          />
        </div>
      )}

      {/* HIDE FOR THE MOMENT
       {showScrollUp && (
        <div className="scroll-up-btn">
          <UpButtonIcon
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </div>
      )} */}
    </div>
  );
};
