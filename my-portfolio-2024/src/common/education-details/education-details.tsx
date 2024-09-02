import { useEffect, useState } from "react";
import { useStore } from "../../store";
import "./education-details.css";
import { getCardBackground } from "../../functions";
import { Label, LabelSize } from "../label";

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
        <Label labelSize={LabelSize.SMALL} labelText={educationClass} />
        <Label labelSize={LabelSize.LARGE_BOLD} labelText={titleLabel} />
        {secondaryTitleLabel && (
          <Label labelSize={LabelSize.MEDIUM} labelText={secondaryTitleLabel} />
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
  );
};
