import { getCardBackground } from "../../functions";
import profile from "../../assets/profile.png";
import { useEffect, useState } from "react";
import { darkModeStore } from "../../store";
import { Label, LabelSize } from "../label";

import "./recommendation-details.css";

interface RecommendationDetailsInterface {
  name: string;
  profession: string;
  description: string;
  currentIndex?: number;
  numberOfRecommendations?: number | undefined;
  setCurrentIndex?: (data: number | undefined) => void;
}

export const RecommendationDetails = (
  props: RecommendationDetailsInterface
) => {
  const {
    name,
    profession,
    description,
    currentIndex,
    setCurrentIndex,
    numberOfRecommendations,
  } = props;

  const { mode } = darkModeStore();

  const [cardBackground, setCardBackground] = useState<string>();

  useEffect(() => {
    getCardBackground(mode, setCardBackground);
  }, [mode]);

  return (
    <div
      className="recommendation-details-container-style"
      style={{ backgroundColor: cardBackground }}
    >
      <div className="recommendation-profile-name-style">
        <img src={profile} height={100} width={100} />
        <div className="recommendation-name-position-style">
          <Label labelSize={LabelSize.LARGE_BOLD} labelText={name} />
          <div className="recommendation-position-style">
            <Label labelSize={LabelSize.SMALL} labelText={profession} />
          </div>
        </div>
      </div>
      <div className="recommendation-description-style">
        <Label labelSize={LabelSize.SMALL} labelText={description} />
      </div>
      <div className="slider-buttons-container-style">
        {Array.from({ length: numberOfRecommendations ?? 0 }, (_, i) => (
          <div
            key={i}
            className={
              currentIndex === i
                ? "slider-button-style current"
                : "slider-button-style"
            }
            onClick={() => setCurrentIndex && setCurrentIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};
