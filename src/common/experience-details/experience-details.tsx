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
  role?: string;
  position: string;
  height?: number;
  width?: number;
}

export const ExperienceDetails = (props: ExperienceDetailsProps) => {
  const {
    role,
    width,
    height,
    position,
    companyLogo,
    yearsMonths,
    description,
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
      <div style={{ display: "grid" }}>
        <div className="experience-details-container-style">
          <img
            src={companyLogo}
            width={width ? width : 70}
            height={height ? height : 70}
            className="experience-img-style"
          />
          <div className="experience-details-description-container-style">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ marginTop: "-5px" }}>
                <div className="experience-full-screen">
                  <Label
                    labelSize={LabelSize.LARGE_BOLD}
                    labelText={`${position} - ${role}`}
                  />
                </div>
              </div>
              <Label labelSize={LabelSize.MEDIUM} labelText={companyName} />
              <div style={{ marginTop: "-5px" }}>
                <Label labelSize={LabelSize.SMALL} labelText={yearsMonths} />
              </div>
            </div>
          </div>
        </div>
        <div className="experience-description-scrollable-style">
          <Label labelSize={LabelSize.SMALL} labelText={description} />
        </div>
      </div>
    </div>
  );
};
