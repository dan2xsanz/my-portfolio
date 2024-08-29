import { useEffect, useState } from "react";
import { useStore } from "../../store";
import "./education-details.css";
import { getCardBackground } from "../../functions";

interface EducationDetailsInterface {
  image: string;
  details: string;
  imgHght: number;
  imgWdth: number;
  isCustomBg?: boolean;
  titleLabel: string;
  onClick: () => void;
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
  } = props;

  const { mode } = useStore();

  const [cardBackground, setCardBackground] = useState<string>();

  useEffect(() => {
    getCardBackground(mode, setCardBackground);
  }, [mode]);

  return (
    <div
      className="education-details-container-style"
      style={{ backgroundColor: cardBackground }}
      onClick={onClick}
    >
      <div className="title-style-container">
        <span className="education-container">{educationClass}</span>
        {titleLabel}
        <span className="secondary-title-container">{secondaryTitleLabel}</span>
        <div className="school-details-style">{details}</div>
      </div>
      <img
        src={image}
        height={imgHght}
        width={imgWdth}
        // style={{ backgroundColor: isCustomBg ? "white" : "none" }}
        className={isCustomBg ? "image-style custom" : "image-style"}
      />
    </div>
  );
};
