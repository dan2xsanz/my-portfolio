import { getCardBackground } from "../../functions";

import { Image } from "antd";
import { useEffect, useState } from "react";
import { darkModeStore } from "../../store";

import image1 from "../../assets/herbs-mobile/1.png";
import image2 from "../../assets/herbs-mobile/2.png";
import image3 from "../../assets/herbs-mobile/3.png";
import image4 from "../../assets/herbs-mobile/4.png";

import "./project-details.css";

export const ProjectDetails = () => {
  const { mode } = darkModeStore();

  // CARD BACK GROUND
  const [cardBackground, setCardBackground] = useState<string>();

  // CURRENT IMAGE BACKGROUND
  const [currentImage, setCurrentImage] = useState<string | undefined>(image1);

  // GET CARD BACLGROUND STYLE
  useEffect(() => {
    getCardBackground(mode, setCardBackground);
  }, [mode]);

  const onClickHoverImage = (image: string | undefined) => {
    setCurrentImage(image);
  };

  return (
    <div
      className="project-details-container-style"
      style={{ backgroundColor: cardBackground }}
      onClick={() => {}}
    >
      <div style={{ display: "grid", gap: "5px" }}>
        <Image width={300} src={currentImage} />
        <div className="project-image-style-container ">
          <Image
            width={50}
            src={image1}
            preview={false}
            className="project-image-style"
            onClick={() => onClickHoverImage(image1)}
            onMouseEnter={() => onClickHoverImage(image1)}
          />
          <Image
            preview={false}
            width={50}
            src={image2}
            className="project-image-style"
            onClick={() => onClickHoverImage(image2)}
            onMouseEnter={() => onClickHoverImage(image2)}
          />
          <Image
            width={50}
            src={image3}
            preview={false}
            className="project-image-style"
            onClick={() => onClickHoverImage(image3)}
            onMouseEnter={() => onClickHoverImage(image3)}
          />
          <Image
            width={50}
            src={image4}
            preview={false}
            className="project-image-style"
            onClick={() => onClickHoverImage(image4)}
            onMouseEnter={() => onClickHoverImage(image4)}
          />
          <Image
            width={50}
            src={image4}
            preview={false}
            className="project-image-style"
            onClick={() => onClickHoverImage(image4)}
            onMouseEnter={() => onClickHoverImage(image4)}
          />
        </div>
      </div>
    </div>
  );
};
