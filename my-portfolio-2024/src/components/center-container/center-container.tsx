// import "./center-container-style.css";

// export const CenterContainer = () => {
//   return (
//     <div className="center-container">
//       <div className="box a">a</div>
//       <div className="box b">b</div>
//       <div className="box c">c</div>
//     </div>
//   );
// };

import "./center-container-style.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

export const CenterContainer = () => {

  
  React.useEffect(() => {
    gsap.to(".b", {
      x: 400,
      rotation: 360,
      duration: 3,
      scrollTrigger: {
        trigger: ".center-container",
        start: "top top",
        end: "bottom bottom",
        scrub: true
      }
    });
  }, []);

  return (
    <div className="center-container">
      <div className="box a">a</div>
      <div className="box b">b</div>
      <div className="box c">c</div>
    </div>
  );
};
