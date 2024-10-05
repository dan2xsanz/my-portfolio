import { useNavigate } from "react-router-dom";
import { ExperienceDetails, HeaderEnums, Label, LabelSize } from "../../common";
import { Footer } from "../footer";
import { ExperienceDetailsInfo } from "./experience-constant";

import "./experience-style.css";
import { selectedScreenStore } from "../../store";
import { useEffect } from "react";

export const Experience = () => {
  // SELECTED SCREEN STORE
  const { setSelectedScreen } = selectedScreenStore();

  // ROUTING NAVIGATION
  const navigate = useNavigate();

  // AUTO SCROLL ON TOP
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="experience-container-style">
      <div className="experience-text-container">
        <Label
          labelSize={LabelSize.PAGE_TITLE_BOLD}
          labelText={"Experience."}
        />
      </div>
      <div className="div-details-style">
        {ExperienceDetailsInfo.map((experience, index) => (
          <div key={index} className="experience-link-container">
            {/* If it's the last item, apply the half-height line */}
            <div
              className={
                index === ExperienceDetailsInfo.length - 1
                  ? "experience-line-style-half"
                  : "experience-line-style"
              }
            />
            <div className="experience-circle-style" />
            <ExperienceDetails
              role={experience.role}
              width={experience.width}
              height={experience.height}
              position={experience.position}
              companyLogo={experience.companyLogo}
              yearsMonths={experience.yearsMonths}
              description={experience.description}
              companyName={experience.companyName}
            />
          </div>
        ))}
      </div>
      {/* FOOTER */}
      <Footer
        navigationMessage={"Are you convinced to contact me now?"}
        onClickNavigation={() => {
          setSelectedScreen(HeaderEnums.CONTACTS);
          navigate("/contact");
        }}
      />
    </div>
  );
};
