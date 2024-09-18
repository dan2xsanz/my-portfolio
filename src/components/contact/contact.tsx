import { darkModeStore, selectedScreenStore } from "../../store";
import { useNavigate } from "react-router-dom";
import { Footer } from "../footer";
import emailjs from "emailjs-com";

import { useEffect, useState } from "react";
import {
  HeaderEnums,
  ButtonSize,
  LabelSize,
  Button,
  Label,
} from "../../common";

import "./contact-style.css";

interface ContactDetailsInterface {
  message?: string;
  name?: string;
  email?: string;
}

export const Contact = () => {
  // DARK MODE STORE
  const { mode } = darkModeStore();

  // SELECTED SCREEN STORE
  const { setSelectedScreen } = selectedScreenStore();

  const [contactDetails, setContactDetails] =
    useState<ContactDetailsInterface>();

  const [isStatusMessage, setStatusMessage] = useState<string | undefined>(
    undefined
  );

  // ROUTING NAVIGATION
  const navigate = useNavigate();

  const onSubmitEmail = () => {
    const serviceID = "service_y6dzqrd";
    const templateID = "template_kdc7kt2";
    const userID = "YM7gmbALaFNByqWRS";
    let email = contactDetails && contactDetails.email;
    let from_name = contactDetails && contactDetails.name;
    let message = contactDetails && contactDetails.message;
    emailjs
      .send(serviceID, templateID, { email, message, from_name }, userID)
      .then(
        () => {
          alert("Email sent successfully");
        },
        () => {
          alert("Failed to send email");
        }
      );
    // RESET THE FIELDS
    setContactDetails({
      name: "",
      email: "",
      message: "",
    });
    setStatusMessage(
      "Note: Email is already sent, please wait a couple of minuites to send again. Thank you"
    );
  };

  useEffect(() => {
    if (
      contactDetails?.name === "" ||
      contactDetails?.email === "" ||
      contactDetails?.message === "" ||
      contactDetails?.email === undefined ||
      contactDetails?.name === undefined ||
      contactDetails?.message === undefined
    ) {
      setStatusMessage(
        "Note: Please fill required fields first before sending email."
      );
    } else {
      setStatusMessage(undefined);
    }
  }, [contactDetails]);

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
            key={"name"}
            type="text"
            className={
              mode === "white"
                ? "input-name-style-dark"
                : "input-name-style-light"
            }
            placeholder="* Name"
            value={contactDetails && contactDetails?.name}
            onChange={(data) => {
              if (data.target.value) {
                setContactDetails({
                  ...contactDetails,
                  name: data.target.value.toString(),
                });
              } else {
                setContactDetails({
                  ...contactDetails,
                  name: "",
                });
              }
            }}
          />
          <input
            type="text"
            key={"email"}
            className={
              mode === "white"
                ? "input-name-style-dark"
                : "input-name-style-light"
            }
            placeholder="* Email"
            value={contactDetails && contactDetails.email}
            onChange={(data) => {
              if (data.target.value) {
                setContactDetails({
                  ...contactDetails,
                  email: data.target.value.toString(),
                });
              } else {
                setContactDetails({
                  ...contactDetails,
                  email: "",
                });
              }
            }}
          />
          <textarea
            rows={5}
            cols={20}
            key={"message"}
            className={
              mode === "white"
                ? "input-name-style-dark"
                : "input-name-style-light"
            }
            value={contactDetails && contactDetails?.message}
            placeholder="* Message"
            onChange={(data) => {
              if (data.target.value) {
                setContactDetails({
                  ...contactDetails,
                  message: data.target.value.toString(),
                });
              } else {
                setContactDetails({
                  ...contactDetails,
                  message: "",
                });
              }
            }}
            style={{ height: "100px", paddingTop: "10px" }}
          />
        </div>
      </div>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {isStatusMessage ? (
          <Label labelSize={LabelSize.MEDIUM} labelText={isStatusMessage} />
        ) : (
          <Button
            size={ButtonSize.large}
            label={"Send Message"}
            onClick={onSubmitEmail}
          />
        )}
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
