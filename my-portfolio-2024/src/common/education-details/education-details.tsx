import { getCardBackground } from "../../functions";
import { useEffect, useState } from "react";
import { Label, LabelSize } from "../label";
import { darkModeStore } from "../../store";
import "./education-details.css";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

interface EducationDetailsInterface {
  image: string;
  index: number;
  details: string;
  imgHght: number;
  imgWdth: number;
  titleLabel: string;
  onClick: () => void;
  isCustomBg?: boolean;
  educationClass: string;
  secondaryTitleLabel?: string;
}

export const EducationDetails = (props: EducationDetailsInterface) => {
  const {
    image,
    details,
    onClick,
    imgHght,
    imgWdth,
    isCustomBg,
    titleLabel,
    educationClass,
    secondaryTitleLabel,
    index,
  } = props;

  const { mode } = darkModeStore();

  const [cardBackground, setCardBackground] = useState<string>();

  useEffect(() => {
    getCardBackground(mode, setCardBackground);
  }, [mode]);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const elementClass = `.education-details-main-container-style-${index}`; // Use a unique class for each component

    gsap.fromTo(
      elementClass,
      { opacity: 0 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: elementClass,
          start: "top center",
          toggleActions: "play reverse play reverse",
        },
        stagger: 0.3,
      }
    );
  }, [index]);

  return (
    <div className={`${`education-details-main-container-style-${index}`}`}>
      <div
        className={`education-details-container-style`} // Add the unique class here
        style={{ backgroundColor: cardBackground }}
        onClick={onClick}
      >
        <div className="title-style-container">
          <Label labelSize={LabelSize.SMALL} labelText={educationClass} />
          <Label labelSize={LabelSize.LARGE_BOLD} labelText={titleLabel} />
          {secondaryTitleLabel && (
            <Label
              labelSize={LabelSize.MEDIUM}
              labelText={secondaryTitleLabel}
            />
          )}
          <Label labelSize={LabelSize.SMALL} labelText={details} />
        </div>
        <img
          src={image}
          height={imgHght}
          width={imgWdth}
          className={isCustomBg ? "image-style custom" : "image-style"}
        />
      </div>
    </div>
  );
};
