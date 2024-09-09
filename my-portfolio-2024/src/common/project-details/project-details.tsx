import { getCardBackground } from "../../functions";

import { useEffect, useState } from "react";
import { darkModeStore } from "../../store";
import { Label, LabelSize } from "../label";

import { Image } from "antd";

import "./project-details.css";

interface ProjectDetailsInterface {
  images: string[];
  projectType: string;
  isNotAllowed?: boolean;
  projectTitle: string;
  projectDescription: string;
}

export const ProjectDetails = (props: ProjectDetailsInterface) => {
  // DARK MODE STORE
  const { mode } = darkModeStore();

  // PROJECT DETAILS PROPS
  const {
    images,
    projectType,
    isNotAllowed,
    projectTitle,
    projectDescription,
  } = props;

  // RECOMMENDATIONS ACTIVE KEY
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // CURRENT IMAGE BACKGROUND
  const [currentImage, setCurrentImage] = useState<string>(images[9]);

  // CARD BACK GROUND
  const [cardBackground, setCardBackground] = useState<string>();

  // GET CURRENT IMAGE DISPLAY
  useEffect(() => {
    setCurrentImage(images[activeIndex]);
  }, [activeIndex]);

  // GET CARD BACLGROUND STYLE
  useEffect(() => {
    getCardBackground(mode, setCardBackground);
  }, [mode]);

  return (
    <div
      className="project-details-container-style"
      style={{ backgroundColor: cardBackground }}
    >
      <div className="project-image-container">
        <Image
          width={280}
          preview={!isNotAllowed}
          style={{ cursor: isNotAllowed ? "not-allowed" : "" }}
          src={currentImage}
        />
        <div className="slider-buttons-container-style">
          {Array.from({ length: images.length ?? 0 }, (_, i) => (
            <div
              key={i}
              className={
                activeIndex === i
                  ? "slider-button-style current"
                  : "slider-button-style"
              }
              onClick={() => {
                setCurrentImage(images[i]);
                setActiveIndex(i);
              }}
            />
          ))}
        </div>
      </div>
      <div>
        <div>
          <Label labelSize={LabelSize.LARGE_BOLD} labelText={projectTitle} />
        </div>
        <Label labelSize={LabelSize.MEDIUM} labelText={projectType} />
        <div className="project-description-scrollable-style">
          <Label labelSize={LabelSize.SMALL} labelText={projectDescription} />
        </div>
      </div>
    </div>
  );
};
