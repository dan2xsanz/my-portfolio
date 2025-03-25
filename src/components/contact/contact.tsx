import {
  darkModeStore,
  emailSendingStore,
  selectedScreenStore,
} from "../../store";
import { useNavigate } from "react-router-dom";
import { Footer } from "../footer";
import emailjs from "emailjs-com";

import { useEffect, useState } from "react";
import { HeaderEnums, LabelSize, Label } from "../../common";

import "./contact-style.css";
import { Button } from "antd";
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from "../../config";

import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

interface ContactDetailsInterface {
  message?: string;
  name?: string;
  email?: string;
}

export const Contact = () => {
  // DARK MODE STORE
  const { mode } = darkModeStore();

  const { setEmailSendCouter, emailSendCounter } = emailSendingStore();

  // SELECTED SCREEN STORE
  const { setSelectedScreen } = selectedScreenStore();

  const [contactDetails, setContactDetails] = useState<ContactDetailsInterface>(
    { name: "", email: "", message: "" }
  );

  const [isButtonLoading, setButtonLoading] = useState<boolean>(false);

  // ROUTING NAVIGATION
  const navigate = useNavigate();

  const onSubmitEmail = () => {
    setButtonLoading(true);
    const serviceID = SERVICE_ID;
    const templateID = TEMPLATE_ID;
    const userID = USER_ID;
    let email = contactDetails && contactDetails.email;
    let from_name = contactDetails && contactDetails.name;
    let to_name = "Dan Lester Sanz";
    let message = contactDetails && contactDetails.message;
    emailjs
      .send(
        serviceID,
        templateID,
        { email, message, from_name, to_name },
        userID
      )
      .then(() => {
        setEmailSendCouter(60);
      })
      .finally(() => {
        setContactDetails({
          name: "",
          email: "",
          message: "",
        });
      });
  };

  const validateFieldsIsComplete = (): boolean => {
    if (
      contactDetails?.name === "" ||
      contactDetails?.email === "" ||
      contactDetails?.message === "" ||
      contactDetails?.email === undefined ||
      contactDetails?.name === undefined ||
      contactDetails?.message === undefined
    ) {
      return true;
    } else {
      return false;
    }
  };

  // COUNTER EFFECT
  useEffect(() => {
    if (emailSendCounter > 0) {
      const interval = setInterval(() => {
        setEmailSendCouter(emailSendCounter > 0 ? emailSendCounter - 1 : 0);
      }, 1000);
      return () => clearInterval(interval); // Clean up interval on component unmount
    } else {
      setButtonLoading(false);
    }
  }, [emailSendCounter, setEmailSendCouter]);

  // AUTO SCROLL ON TOP
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const elementClass = [`.details-style`, `.field-submit-button-container`];
    gsap.fromTo(
      elementClass,
      { opacity: 0, filter: "blur(10px)" },
      {
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: elementClass,
          start: "top center",
          toggleActions: "play reverse play reverse",
        },
        stagger: 0.3,
      }
    );
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
      <div className="field-submit-button-container">
        {validateFieldsIsComplete() && emailSendCounter === 0 && (
          <Label
            labelSize={LabelSize.MEDIUM}
            labelText={
              "Note: Please fill required fields first before sending email."
            }
          />
        )}
        {emailSendCounter > 0 && (
          <Label
            labelSize={LabelSize.MEDIUM}
            labelText={`Note: Email is already sent. Please wait ${emailSendCounter} ${
              emailSendCounter === 1 ? "second" : "seconds"
            } to send again.`}
          />
        )}
        {!validateFieldsIsComplete() && emailSendCounter === 0 && (
          <Button
            type="text"
            className="submit-button-style"
            style={{
              backgroundColor: mode !== "white" ? "black" : "white",
              color: mode !== "white" ? "white" : "black",
            }}
            loading={isButtonLoading}
            onClick={onSubmitEmail}
          >
            Send Message
          </Button>
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
