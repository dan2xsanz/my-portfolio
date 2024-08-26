import { currentTimeGreetings, myRealtimeAge } from "../../functions";
import { SocialMediaIcons } from "../../common";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./introduction-style.css";
import gsap from "gsap";

// import dlPhoto from "../../assets/snz-v2.jpg";

export const Introduction = () => {
  // Use navigate to handle routing
  const navigate = useNavigate();

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
        <div
          className="see-more-about-me-style"
          onClick={() => navigate("/about")}
        >
          See More About Me
          <div className="beating-arrow-style">{`${"➜"}`}</div>
        </div>
        <SocialMediaIcons />
      </div>
    </div>
    // https://www.codewonders.dev/
  );
};
