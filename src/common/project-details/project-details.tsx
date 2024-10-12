import { getCardBackground } from "../../functions";

import { useEffect, useState } from "react";
import { darkModeStore } from "../../store";
import { Label, LabelSize } from "../label";

import { Image } from "antd";

import "./project-details.css";
import { ProjectStatus } from "./project-details-constant";

interface ProjectDetailsInterface {
  images: string[];
  projectType: string;
  status: ProjectStatus;
  projectTitle: string;
  projectDescription: string;
  projectStacks?: React.ReactNode;
}

export const ProjectDetails = (props: ProjectDetailsInterface) => {
  // DARK MODE STORE
  const { mode } = darkModeStore();

  // PROJECT DETAILS PROPS
  const {
    images,
    status,
    projectType,
    projectTitle,
    projectStacks,
    projectDescription,
  } = props;

  // CURRENT IMAGE BACKGROUND
  const [currentImage, setCurrentImage] = useState<string>(images[9]);

  // CARD BACK GROUND
  const [cardBackground, setCardBackground] = useState<string>();

  // RECOMMENDATIONS ACTIVE KEY
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // GET PROJECT CONTAINER STYLE
  const projectContainerStyle = (): string => {
    switch (status) {
      case ProjectStatus.ONGOING: {
        return "project-title-container";
      }
      case ProjectStatus.PERSONAL: {
        return "project-title-container";
      }
      case ProjectStatus.PROTECTED: {
        return "project-title-container.disabled";
      }
    }
  };

  // GET PROJECT CONTAINER STYLE
  const projectStatusStyle = (): JSX.Element => {
    switch (status) {
      case ProjectStatus.ONGOING: {
        return (
          <div className="protected-project-ongoing-style">
            <Label labelSize={LabelSize.MEDIUM} labelText={"Ongoing"} />
          </div>
        );
      }
      case ProjectStatus.PERSONAL: {
        return (
          <div className="personal-project-pesonal-style">
            <Label labelSize={LabelSize.MEDIUM} labelText={"Personal"} />
          </div>
        );
      }
      case ProjectStatus.PROTECTED: {
        return (
          <div className="protected-project-protected-style">
            <Label labelSize={LabelSize.MEDIUM} labelText={"Protected"} />
          </div>
        );
      }
    }
  };

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
          preview={status !== ProjectStatus.PROTECTED}
          style={{ cursor: status !== ProjectStatus.PROTECTED ? "" : "not-allowed" }}
          src={currentImage}
        />
        <div className="project-slider-buttons-container-style">
          {Array.from({ length: images.length ?? 0 }, (_, i) => (
            <div
              key={i}
              className={
                activeIndex === i
                  ? "project-slider-button-style current"
                  : "project-slider-button-style"
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
        <div className={projectContainerStyle()}>
          <Label labelSize={LabelSize.LARGE_BOLD} labelText={projectTitle} />
        </div>
        <div className="project-status-container-style">
          {projectStatusStyle()}
          <Label labelSize={LabelSize.MEDIUM} labelText={`| ${projectType}`} />
        </div>
        <div className="project-details-stacks-container-style">
          <div className="project-description-scrollable-style">
            <Label labelSize={LabelSize.SMALL} labelText={projectDescription} />
          </div>
          <div className="project-stacks-images-container">{projectStacks}</div>
        </div>
      </div>
    </div>
  );
};
