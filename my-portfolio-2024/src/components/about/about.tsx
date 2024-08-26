import { useEffect } from "react";

import gsap from "gsap";
import "./about-style.css";

export const About = () => {
  useEffect(() => {
    gsap.to(".about-container-style", {
      y: -50,
      duration: 8,
      ease: "elastic",
      scrollTrigger: {
        trigger: ".about-container-style",
      },
    });
  }, []);

  return (
    <div className="about-container-style">
      <div className="about-text-container">About Me.</div>
      <div
        style={{
          paddingLeft: "290px",
          paddingRight: "290px",
          textAlign: "justify",
        }}
      >
        <div>
          Hello! I'm a passionate Software Engineer with a strong background in
          developing robust and scalable software applications. With a deep
          understanding of both frontend and backend technologies, I specialize
          in creating seamless user experiences and efficient systems that solve
          complex problems
        </div>
        {/* TODO: CONTINUE HERE */}
      </div>
    </div>
  );
};
