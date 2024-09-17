import { darkModeStore, selectedScreenStore } from "../../store";
import { useNavigate } from "react-router-dom";
import { Footer } from "../footer";
import { useEffect } from "react";
import {
  HeaderEnums,
  ButtonSize,
  LabelSize,
  Button,
  Label,
} from "../../common";

import "./contact-style.css";

export const Contact = () => {
  const { mode } = darkModeStore();

  // SELECTED SCREEN STORE
  const { setSelectedScreen } = selectedScreenStore();

  // ROUTING NAVIGATION
  const navigate = useNavigate();

  // AUTO SCROLL ON TOP
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-container-style">
      <div className="contact-text-container">
        <Label labelSize={LabelSize.PAGE_TITLE_BOLD} labelText={"Contact."} />
      </div>
      <div className="details-style">
        <div className="contact-definition-container">
          <Label
            labelSize={LabelSize.DEFAULT}
            labelText={`Get in touch or shoot me an email directly on`}
          />
          <Label
            labelSize={LabelSize.DEFAULT_BOLD}
            labelText={`danles.sanz@gmail.com`}
          />
        </div>
        <div className="contact-field-container">
          <input
            type="text"
            className={
              mode === "white"
                ? "input-name-style-dark"
                : "input-name-style-light"
            }
            placeholder="Name"
          />
          <input
            type="text"
            className={
              mode === "white"
                ? "input-name-style-dark"
                : "input-name-style-light"
            }
            placeholder="Email"
          />
          <textarea
            style={{ height: "100px", paddingTop: "10px" }}
            className={
              mode === "white"
                ? "input-name-style-dark"
                : "input-name-style-light"
            }
            placeholder="Message"
            rows={5}
            cols={20}
          />
        </div>
      </div>
      <div
        style={{
          marginTop: "20px",
        }}
      >
        <Button
          size={ButtonSize.large}
          label={"Send Message"}
          onClick={() => {}}
        />
      </div>
      {/* FOOTER */}
      <Footer
        navigationMessage={"Go Back Home"}
        onClickNavigation={() => {
          setSelectedScreen(HeaderEnums.INTRODUCTION);
          navigate("/");
        }}
      />
    </div>
  );
};
