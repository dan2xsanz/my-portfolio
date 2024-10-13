import { darkModeStore, selectedScreenStore } from "../../store";
import closeLight from "../../assets/closeLight.png";
import logoBlack from "../../assets/logo-black.png";
import logoWhite from "../../assets/logo-white.png";
import closeDark from "../../assets/closeDark.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { FaMoon, FaSun } from "react-icons/fa";
import "./header-style.css";

import {
  HeaderButton,
  HeaderEnums,
  BarsIcon,
} from "../../common";

interface HeaderProps {
  logo: string;
  setLogo: (data: string) => void;
}

export const Header = ({ logo, setLogo }: HeaderProps) => {
  const { setMode, mode } = darkModeStore();
  const { selectedScreenScreen, setSelectedScreen } = selectedScreenStore();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

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
    setIsDarkMode(!isDarkMode);
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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (window.innerWidth <= 700) {
        setShowHeader(
          prevScrollPos > currentScrollPos || currentScrollPos < 10
        );
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

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

  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Update the theme based on the state
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <div className={`header-container ${showHeader ? "visible" : "hidden"}`}>
      <div
        className="logo-container"
        onClick={() => onClickHeaderButton(HeaderEnums.INTRODUCTION)}
      >
        <img className="header-logo" src={logo} height={70} width={70} />
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
        <button
          onClick={onChangeTheme}
          style={{
            backgroundColor: isDarkMode ? "black" : "white",
            color: isDarkMode ? "#fff" : "#000",
            border: "none",
            borderRadius: "30px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
        >
          {isDarkMode ? <FaMoon /> : <FaSun />}
          <span style={{ marginLeft: "10px" }}>
            {isDarkMode ? "Dark Mode" : "Light Mode"}
          </span>
        </button>
      </div>
      <div className="menu-hamburger-container">
        <BarsIcon onClick={() => setMenuOpen(!menuOpen)} />
      </div>
      {menuOpen && (
        <div className={`full-page-menu ${menuOpen ? "active" : ""}`}>
          <div className="full-page-menu-header">
            {mode !== "black" ? (
              <img
                src={closeLight}
                className="header-close"
                alt="closeLight"
                onClick={() => setMenuOpen(!menuOpen)}
              />
            ) : (
              <img
                src={closeDark}
                className="header-close"
                alt="closeLight"
                onClick={() => setMenuOpen(!menuOpen)}
              />
            )}
          </div>
          <div
            className="logo-container"
            onClick={() => {
              setMenuOpen(false);
              onClickHeaderButton(HeaderEnums.INTRODUCTION);
            }}
          >
            <img src={logo} className="header-logo" alt="logo" />
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
          <div style={{ marginTop: "10px" }}>
            {isDarkMode ? (
              <FaMoon size={30} onClick={onChangeTheme} />
            ) : (
              <FaSun size={30} onClick={onChangeTheme} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
