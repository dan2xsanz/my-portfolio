import { currentTimeGreetings, myRealtimeAge } from "../../functions";
import { Button, ButtonSize, SocialMediaIcons } from "../../common";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./introduction-style.css";
// import gsap from "gsap";

// import dlPhoto from "../../assets/snz-v2.jpg";

export const Introduction = () => {
  // Use navigate to handle routing
  const navigate = useNavigate();

  useEffect(() => {
    currentTimeGreetings();
  }, []);

  // useEffect(() => {
  //   gsap.to(".introduction-detail-style", {
  //     y: -50,
  //     duration: 8,
  //     ease: "elastic",
  //     scrollTrigger: {
  //       trigger: ".introduction-detail-style",
  //     },
  //   });
  // }, []);

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
            onClick={() => navigate("/about")}
          >
            See more about me
            <div className="beating-arrow-style">{`${"➜"}`}</div>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <Button
              size={ButtonSize.large}
              label={"Book a Meeting"}
              onClick={() =>
                window.open("https://calendly.com/danles-sanz", "_blank")
              }
            />
            <Button
              size={ButtonSize.large}
              label={"Download CV"}
              onClick={() => {}}
            />
          </div>
        </div>
        <SocialMediaIcons />
      </div>
      {/* <div>
        Dan Lester Sanz 24-year-old Software Engineer based in Cebu, Philippines
        As a dedicated software engineer, I am driven by a passion for crafting
        high-performance, scalable applications that address real-world
        challenges. With a keen eye for detail and a commitment to excellence, I
        thrive on solving intricate problems and developing solutions that leave
        a lasting impact. I am constantly expanding my expertise and staying
        ahead of the curve in emerging technologies to refine my skills. Let’s
        collaborate to build innovative solutions that make a difference!
      </div> */}
    </div>
    // https://www.codewonders.dev/
  );
};
