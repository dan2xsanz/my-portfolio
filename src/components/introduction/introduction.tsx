import { currentTimeGreetings, myRealtimeAge } from "../../functions";
import { useNavigate } from "react-router-dom";
import { CALENDLY_URL } from "../../config";
import {
  SocialMediaIcons,
  SecondaryButton,
  ButtonSize,
  Button,
  HeaderEnums,
  CalendarIcon,
  DownloadIcon,
} from "../../common";
import { useEffect } from "react";

import "./introduction-style.css";
import { selectedScreenStore } from "../../store";

export const Introduction = () => {
  // NAVIGATION ROUTING
  const navigate = useNavigate();

  // SELECTED SCREEN STORE
  const { setSelectedScreen } = selectedScreenStore();

  const onClicksSeeMoreAboutMe = () => {
    setSelectedScreen(HeaderEnums.ABOUT_ME);
    navigate("/about");
  };

  // CURRENT TIME EVENT LISTENER
  useEffect(() => {
    currentTimeGreetings();
  }, []);

  // AUTO SCROLL ON TOP
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="introduction-container-style">
      <div className="introduction-detail-style">
        <div className="greetings-container-style">{`${currentTimeGreetings()}!`}</div>
        <div className="greetings-name-container-style">
          I'm <span className="name-container-style">Dan Lester Sanz</span>
        </div>
        <div className="self-description-style">
          A {`${myRealtimeAge()}`}-year-old
          <span className="software-engineer-style"> Software Engineer </span>
          based on Cebu, Philippines who is passionate about building efficient
          and scalable applications. I enjoy solving complex problems, creating
          impactful solutions, and continuously learning new technologies to
          improve my craft. Let's create something impactful together!
        </div>
        <div className="see-more-container-style">
          <div
            className="see-more-about-me-style"
            onClick={onClicksSeeMoreAboutMe}
          >
            See more about me
            <div className="beating-arrow-style">{`${"➞"}`}</div>
          </div>
          <div className="book-download-container">
            <Button
              size={ButtonSize.large}
              label={"Book a Meeting"}
              onClick={() => window.open(CALENDLY_URL, "_blank")}
            />
          </div>
          {/* <div className="calendar-download-container">
            <CalendarIcon onClick={() => window.open(CALENDLY_URL, "_blank")} />
            <DownloadIcon onClick={() => {}} />
          </div> */}
        </div>
        <SocialMediaIcons />
      </div>
    </div>
    // https://www.codewonders.dev/
  );
};
