import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Footer } from "../footer";
import {
  selectedScreenStore,
  selectedStackStore,
  blinkingStore,
} from "../../store";

import {
  RecommendationDetails,
  EducationDetails,
  StackDetails,
  LabelSize,
  Label,
  HeaderEnums,
} from "../../common";

import {
  EducationInfoDetails,
  Recommendations,
  TechStacks,
} from "./about-constants";

import "./about-style.css";

export const About = () => {
  // RECOMMENDATIONS ACTIVE KEY
  const [activeIndex, setActiveIndex] = useState<number | undefined>(0);

  // STACK SELECTED STORE
  const { stackSelected, setStackSelected } = selectedStackStore();

  // SELECTED SCREEN STORE
  const { setSelectedScreen } = selectedScreenStore();

  // BLINKING INDICATOR
  const { isBlinking, setBlinking } = blinkingStore();

  // ROUTING NAVIGATION
  const navigate = useNavigate();

  // SET RECOMMENDATIONS ACTIVE INDEX
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(
        (prevIndex: number | undefined) =>
          ((prevIndex ?? 0) + 1) % Recommendations.length
      );
    }, 10000);
    return () => clearInterval(interval);
  }, [Recommendations.length]);

  // AUTO SCROLL ON TOP
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-container-style">
      <div className="about-text-container">
        <Label labelSize={LabelSize.PAGE_TITLE_BOLD} labelText={"About Me."} />
      </div>
      {/* WHO I AM AREA */}
      <div className="who-i-am-main-container">
        <div className="title-header-style">
          <Label labelSize={LabelSize.DIV_TITLE_BOLD} labelText={"Who I am"} />
        </div>
        <div className="details-style">
          <Label
            labelSize={LabelSize.DEFAULT}
            labelText={`I'm a passionate Software Engineer with a strong background in
          developing robust and scalable software applications. With a deep
          understanding of both frontend and backend technologies, I specialize
          in creating seamless user experiences and efficient systems that solve
          complex problems. My journey in tech began with a fascination for how
          things work, which quickly grew into a love for coding and
          problem-solving.`}
          />
          <div className="more-details-2-style">
            <Label
              labelSize={LabelSize.DEFAULT}
              labelText={`I possess persistent problem-solving skills and have a knack for
          writing clean, reusable code that is easy to read and test. I
          understand how code drives overall business goals and love designing
          user interfaces and creating purposeful systems that contribute to
          industry innovation. I pride myself on my ability to "listen more than
          I speak," staying disciplined and focused on the right things. I am
          always open to new ideas and constantly think outside the box, as I
          believe in the saying,`}
            />
            <Label
              labelSize={LabelSize.DEFAULT_ITALIC}
              labelText={`"Those who do not think outside the box are easily contained." -
            Nicolas Manetta`}
            />
          </div>
        </div>
      </div>
      {/* TECH STACK AREA */}
      <div className="tech-stack-main-container">
        <div className="title-header-style">
          <Label
            labelSize={LabelSize.DIV_TITLE_BOLD}
            labelText={"Technology Stack"}
          />
        </div>
        <div className="tech-stack-main-container-style">
          <div
            className="tech-stacks-container-style"
            onScroll={() => setBlinking(false)}
          >
            {TechStacks.map(({ src, width, height, alt, stackId }) => (
              <img
                key={stackId}
                src={src}
                width={width}
                height={height}
                alt={alt}
                onClick={() => setStackSelected(stackId)}
                className={
                  stackSelected === stackId
                    ? "stack-img-style.selected"
                    : "stack-img-style"
                }
              />
            ))}
          </div>
          {isBlinking && <div className="badge" />}
        </div>
        <div className="div-details-style">
          <StackDetails stackSelected={stackSelected} />
        </div>
      </div>
      {/* EDUCATION  AREA */}
      <div className="educations-main-container">
        <div className="title-header-style">
          <Label
            labelSize={LabelSize.DIV_TITLE_BOLD}
            labelText={"Educations"}
          />
        </div>
        <div className="div-details-style">
          {EducationInfoDetails.map((education, index) => (
            <EducationDetails
              index={index}
              key={education.key}
              image={education.image}
              imgWdth={education.imgWdth}
              imgHght={education.imgHght}
              onClick={education.onClick}
              details={education.details}
              isCustomBg={education.isCustomBg}
              titleLabel={education.titleLabel}
              educationClass={education.educationClass}
              secondaryTitleLabel={education.secondaryTitleLabel}
            />
          ))}
        </div>
      </div>
      {/* RECOMMENDATIONS AREA */}
      <div className="recommendations-main-container">
        <div className="title-header-style">
          <Label
            labelSize={LabelSize.DIV_TITLE_BOLD}
            labelText={"Testimonials"}
          />
        </div>
        <div className="div-details-style">
          {Recommendations.map((data, index) => {
            if (index === activeIndex) {
              return (
                <RecommendationDetails
                  key={index}
                  name={data.name}
                  currentIndex={activeIndex}
                  profession={data.profession}
                  description={data.description}
                  setCurrentIndex={setActiveIndex}
                  numberOfRecommendations={Recommendations.length}
                />
              );
            }
          })}
        </div>
      </div>
      <Footer
        navigationMessage={"Let's Continue to Projects"}
        onClickNavigation={() => {
          setSelectedScreen(HeaderEnums.PROJECTS);
          navigate("/projects");
        }}
      />
    </div>
  );
};
