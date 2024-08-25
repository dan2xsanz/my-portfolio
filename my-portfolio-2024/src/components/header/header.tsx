import { HeaderButton } from "../../common";
import "./header-style.css";
import { useStore } from "../../store";

export const Header = () => {
  // LOADING SCREEN STORE
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
        <div style={{ height: "15px", width: "15px" }} onClick={onChangeTheme}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill={mode}
          >
            <path d="M448 256c0-106-86-192-192-192l0 384c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
