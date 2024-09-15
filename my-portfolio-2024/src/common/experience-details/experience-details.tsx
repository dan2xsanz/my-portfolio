import { getCardBackground } from "../../functions";
import { Label, LabelSize } from "../label";
import { useEffect, useState } from "react";
import { darkModeStore } from "../../store";

import "./experience-details.css";

export interface ExperienceDetailsProps {
  companyLogo: string;
  yearsMonths: string;
  description: string;
  companyName: string;
  position: string;
  height?: number;
  width?: number;
}

export const ExperienceDetails = (props: ExperienceDetailsProps) => {
  const {
    companyLogo,
    position,
    yearsMonths,
    description,
    width,
    height,
    companyName,
  } = props;
  // DARK MODE STORE
  const { mode } = darkModeStore();

  // CARD BACK GROUND
  const [cardBackground, setCardBackground] = useState<string>();

  // GET CARD BACLGROUND STYLE
  useEffect(() => {
    getCardBackground(mode, setCardBackground);
  }, [mode]);

  return (
    <div
      className="experience-details-main-container-style"
      style={{ backgroundColor: cardBackground }}
    >
      <div className="experience-details-container-style">
        <img
          src={companyLogo}
          width={width ? width : 150}
          height={height ? height : 150}
          className="experience-img-style"
        />
        <div className="experience-details-description-container-style">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Label labelSize={LabelSize.LARGE_BOLD} labelText={position} />
            <div style={{ display: "flex", gap: "10px" }}>
              <Label labelSize={LabelSize.MEDIUM} labelText={companyName} />
              |
              <Label labelSize={LabelSize.MEDIUM} labelText={yearsMonths} />
            </div>
          </div>
          <div className="experience-description-scrollable-style">
            <Label labelSize={LabelSize.SMALL} labelText={description} />
          </div>
        </div>
      </div>
    </div>
  );
};
