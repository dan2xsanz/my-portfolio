import { HeaderEnums, Label, LabelSize } from "../../common";

import { Image } from "antd";

import image1 from "../../assets/gallery/1.jpeg";
import image2 from "../../assets/gallery/2.jpeg";
import image3 from "../../assets/gallery/3.jpeg";
import image4 from "../../assets/gallery/4.jpg";
import image5 from "../../assets/gallery/5.jpg";
import image6 from "../../assets/gallery/6.jpg";
import image7 from "../../assets/gallery/7.jpg";
import image8 from "../../assets/gallery/8.jpg";
import image9 from "../../assets/gallery/9.jpg";
import image11 from "../../assets/gallery/11.jpeg";
import image12 from "../../assets/gallery/12.jpeg";
import image14 from "../../assets/gallery/14.jpeg";

import "./gallery-style.css";
import { Footer } from "../footer";
import { useNavigate } from "react-router-dom";
import { selectedScreenStore } from "../../store";
import { useEffect } from "react";

import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

export const Gallery = () => {
  // SELECTED SCREEN STORE
  const { setSelectedScreen } = selectedScreenStore();

  // ROUTING NAVIGATION
  const navigate = useNavigate();

  // AUTO SCROLL ON TOP
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const elementClass = `.left-images-main-container-1`;
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

  useEffect(() => {
    const elementClass = `.right-images-main-container-1`;
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

  useEffect(() => {
    const elementClass = `.left-images-main-container-2`;
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

  useEffect(() => {
    const elementClass = `.right-images-main-container-2`;
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
    <div className="gallery-container-style">
      <div className="gallery-text-container">
        <Label labelSize={LabelSize.PAGE_TITLE_BOLD} labelText={"Gallery."} />
      </div>
      <div className="gallery-images-container">
        {/* COFFENAITED CODING IMAGES */}
        <div className="left-images-main-container-1">
          <div className="left-images-container">
            <Image src={image3} className="large-image-container" />
            <div className="secondary-image-container">
              <Image src={image2} className="small-image-container-1" />
              <Image src={image1} className="small-image-container-2" />
            </div>
          </div>
          <div className="image-details-main-container">
            <label className="image-title-container">Caffeinated Coding</label>
            <label className="image-details-container">
              &emsp; &emsp; &emsp;Loves coffee and finds inspiration in the cozy
              ambiance of coffee shops. Whether it’s brainstorming new features,
              writing code, or tackling complex problems, enjoys the perfect
              blend of caffeine and creativity. Coffee shop coding sessions have
              become a go-to ritual for staying productive and motivated. The
              gentle hum of conversations and the aroma of freshly brewed coffee
              create the ideal atmosphere to spark new ideas and fuel
              creativity. It’s not just about the coffee—it’s about the
              experience, the vibe, and the endless possibilities that come with
              every cup.
            </label>
          </div>
        </div>
        {/* OCEAN BLISS IMAGES */}
        <div className="right-images-main-container-1">
          <div className="image-details-main-container">
            <label className="image-title-container">Ocean Bliss</label>
            <label className="image-details-container">
              &emsp; &emsp; &emsp;Loves the sea and enjoys spending time by the
              seashore, finding peace in the sound of crashing waves. The
              rhythmic ebb and flow of the ocean inspire moments of reflection
              and creativity, making it a favorite place to unwind and recharge.
              Whether it’s strolling along the shoreline, feeling the cool
              breeze on the face, or simply sitting and watching the waves
              dance, there’s a sense of freedom and tranquility that only the
              sea can bring. It’s a place to pause, dream, and let thoughts
              drift like the tides—refreshing both the mind and soul.
            </label>
          </div>
          <div className="right-images-container">
            <div className="secondary-image-container">
              <Image src={image6} className="small-image-container-1" />
              <Image src={image5} className="small-image-container-2" />
            </div>
            <Image src={image4} className="large-image-container" />
          </div>
        </div>
        {/* FOREST SCAPE IMAGES */}
        <div className="left-images-main-container-2">
          <div className="left-images-container">
            <Image src={image7} className="large-image-container" />
            <div className="secondary-image-container">
              <Image src={image8} className="small-image-container-1" />
              <Image src={image9} className="small-image-container-2" />
            </div>
          </div>
          <div className="image-details-main-container">
            <label className="image-title-container">Forest Escape</label>
            <label className="image-details-container">
              &emsp; &emsp; &emsp;Loves mountains and forests, finding
              tranquility in the lush greenery and towering peaks. Hiking
              through winding trails and breathing in the crisp, fresh air
              brings a sense of adventure and peace. Being surrounded by
              nature's beauty sparks creativity and provides a refreshing escape
              from the hustle of everyday life. Whether it’s reaching a
              mountaintop for a breathtaking view or wandering through dense
              woods, it’s a journey of discovery and connection with the natural
              world.
            </label>
          </div>
        </div>
        {/* CURIOSITY UNVEILED IMAGES */}
        <div className="right-images-main-container-2">
          <div className="image-details-main-container">
            <label className="image-title-container">Curiosity Unveiled</label>
            <label className="image-details-container">
              &emsp; &emsp; &emsp;Loves visiting museums and exploring the
              stories behind art, history, and culture. Walking through exhibits
              filled with masterpieces and ancient artifacts sparks curiosity
              and deepens the appreciation for human creativity and innovation.
              Whether it’s admiring classic paintings, discovering historical
              treasures, or immersing in interactive displays, museums provide a
              unique journey through time and imagination. It’s a place to
              reflect, learn, and be inspired by the remarkable achievements of
              past and present.
            </label>
          </div>
          <div className="right-images-container">
            <div className="secondary-image-container">
              <Image src={image14} className="small-image-container-1" />
              <Image src={image12} className="small-image-container-2" />
            </div>
            <Image src={image11} className="large-image-container" />
          </div>
        </div>
      </div>
      <Footer
        navigationMessage={"Let's Continue to Projects"}
        onClickNavigation={() => {
          setSelectedScreen(HeaderEnums.PROJECTS);
          navigate("/projects");
        }}
      />
    </div>
  );
};
