import { useEffect } from "react";
import "./introduction-style.css";
// import dlPhoto from "../../assets/snz-v2.jpg";

import moment from "moment";
import gsap from "gsap";
import { SocialMediaIcons } from "../../common";
export const Introduction = () => {
  // Calculate my real time age based on the current date
  const myRealtimeAge = (): string => {
    let today = moment().year() - 2000;
    if (moment().month() <= 3 && moment().date() < 31) {
      today = today - 1;
    }
    return today.toString();
  };

  // Calculate greetings reatime based on the current time
  const currentTimeGreetings = (): string => {
    const currentHour = moment().hour();

    let greeting: string;

    if (currentHour >= 0 && currentHour < 12) {
      greeting = "Good Morning";
    } else if (currentHour >= 12 && currentHour <= 17) {
      greeting = "Good Afternoon";
    } else {
      greeting = "Good Evening";
    }

    return greeting;
  };

  useEffect(() => {
    currentTimeGreetings();
  }, []);

  useEffect(() => {
    gsap.to(".introduction-detail-style", {
      y: -50,
      duration: 8,
      ease: "elastic",
      scrollTrigger: {
        trigger: ".introduction-detail-style",
      },
    });
  }, []);

  return (
    <div className="introduction-container-style">
      {/* TODO <img
        src={dlPhoto}
        alt="Dan Lester Photo"
        height={250}
        width={250}
        style={{ borderRadius: "100%" }}
      /> */}
      <div className="introduction-detail-style">
        <div className="greetings-container-style">{`${currentTimeGreetings()}!`}</div>
        <div className="greetings-name-container-style">
          I'm <span className="name-container-style">Dan Lester Sanz</span>
        </div>
        <div className="self-description-style">
          A {`${myRealtimeAge()}`}-year-old{" "}
          <span className="software-engineer-style">Software Engineer</span>{" "}
          based on Cebu, Philippines who is passionate about building efficient
          and scalable applications. I enjoy solving complex problems, creating
          impactful solutions, and continuously learning new technologies to
          improve my craft. Let's create something impactful together!
        </div>
        <div className="see-more-about-me-style">
          See More About Me
          <div className="beating-arrow-style">{`${"➜"}`}</div>
        </div>
        <SocialMediaIcons />
      </div>
    </div>
    // https://www.codewonders.dev/
  );
};
