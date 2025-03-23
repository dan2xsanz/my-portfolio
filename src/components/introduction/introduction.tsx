import { currentTimeGreetings, myRealtimeAge } from "../../functions";
import { selectedScreenStore } from "../../store";
import { useNavigate } from "react-router-dom";
import { CALENDLY_URL } from "../../config";

import {
  SocialMediaIcons,
  ButtonSize,
  Button,
  HeaderEnums,
} from "../../common";

import { useEffect } from "react";
import "./introduction-style.css";

import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

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

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const elementClass = `.self-description-style`;
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
    <div className="introduction-container-style">
      <div className="introduction-detail-style">
        <div
          style={{
            gap: "5px",
            display: "flex",
            alignItems: "center",
            marginBottom: "-5px",
          }}
        >
          <div className="greetings-container-style">{`${
            currentTimeGreetings().greeting
          }!`}</div>
          <img src={currentTimeGreetings().icon} width={25} height={25} />
        </div>

        <div className="greetings-name-container-style">
          <span className="name-container-style">
            {[
              "I",
              "'",
              "m",
              "\u00A0",
              "D",
              "a",
              "n",
              "\u00A0",
              "L",
              "e",
              "s",
              "t",
              "e",
              "r",
              "\u00A0",
              "S",
              "a",
              "n",
              "z",
            ].map((char, index) => (
              <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                {char}
              </span>
            ))}
          </span>
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
        </div>
        <SocialMediaIcons />
      </div>
    </div>
    // https://www.codewonders.dev/
  );
};
