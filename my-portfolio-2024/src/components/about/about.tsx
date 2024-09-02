import { EducationDetails, Label, LabelSize, StackDetails } from "../../common";

import typeScript from "../../assets/typescript.png";
import javaScript from "../../assets/javascript.png";
import sqlLite from "../../assets/sqlite.png";
import android from "../../assets/android.png";
import cSharp from "../../assets/csharp.png";
import python from "../../assets/python.png";
import spring from "../../assets/spring.png";
import scnhs from "../../assets/scnhs.png";
import monggo from "../../assets/mongo.png";
import react from "../../assets/react.png";
import slsu from "../../assets/SLSU.png";
import sces from "../../assets/sces.png";
import html from "../../assets/html.png";
import java from "../../assets/java.png";
import sql from "../../assets/sql.png";
import css from "../../assets/css.png";

import { useState } from "react";

import "./about-style.css";
import { blinkingStore } from "../../store";

export const About = () => {
  // SELECTED STACK STATE
  const [stackSelected, setStackSelected] = useState<number>(1);

  // Dark mode state
  const { isBlinking, setBlinking } = blinkingStore();

  return (
    <div className="about-container-style">
      <div className="about-text-container">
        <Label labelSize={LabelSize.PAGE_TITLE_BOLD} labelText={"About Me."} />
      </div>
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
          <img
            src={java}
            width={75}
            height={75}
            alt="Java Logo"
            onClick={() => setStackSelected(1)}
            className={
              stackSelected === 1
                ? "stack-img-style.selected"
                : "stack-img-style"
            }
          />
          <img
            width={90}
            height={80}
            src={cSharp}
            alt="C# Logo"
            onClick={() => setStackSelected(2)}
            className={
              stackSelected === 2
                ? "stack-img-style.selected"
                : "stack-img-style"
            }
          />
          <img
            width={70}
            height={70}
            src={python}
            alt="Python Logo"
            onClick={() => setStackSelected(3)}
            className={
              stackSelected === 3
                ? "stack-img-style.selected"
                : "stack-img-style"
            }
          />
          <img
            width={80}
            height={80}
            src={android}
            alt="Android Logo"
            onClick={() => setStackSelected(4)}
            className={
              stackSelected === 4
                ? "stack-img-style.selected"
                : "stack-img-style"
            }
          />
          <img
            width={60}
            height={60}
            src={spring}
            alt="Spring Logo"
            onClick={() => setStackSelected(5)}
            className={
              stackSelected === 5
                ? "stack-img-style.selected"
                : "stack-img-style"
            }
          />
          <img
            width={75}
            src={react}
            height={75}
            alt="React Logo"
            onClick={() => setStackSelected(6)}
            className={
              stackSelected === 6
                ? "stack-img-style.selected"
                : "stack-img-style"
            }
          />
          <img
            src={html}
            width={85}
            height={85}
            alt="HTML Logo"
            onClick={() => setStackSelected(7)}
            className={
              stackSelected === 7
                ? "stack-img-style.selected"
                : "stack-img-style"
            }
          />
          <img
            src={css}
            width={70}
            height={70}
            alt="CSS Logo"
            onClick={() => setStackSelected(8)}
            className={
              stackSelected === 8
                ? "stack-img-style.selected"
                : "stack-img-style"
            }
          />
          <img
            width={63}
            height={63}
            src={javaScript}
            alt="Javascript Logo"
            onClick={() => setStackSelected(9)}
            className={
              stackSelected === 9
                ? "stack-img-style.selected"
                : "stack-img-style"
            }
          />
          <img
            width={65}
            height={65}
            src={typeScript}
            alt="Typescript Logo"
            onClick={() => setStackSelected(10)}
            className={
              stackSelected === 10
                ? "stack-img-style.selected"
                : "stack-img-style"
            }
          />
          <img
            src={sql}
            height={60}
            width={100}
            alt="MySql Logo"
            onClick={() => setStackSelected(11)}
            className={
              stackSelected === 11
                ? "stack-img-style.selected"
                : "stack-img-style"
            }
          />
          <img
            width={75}
            height={75}
            src={sqlLite}
            alt="SqlLite Logo"
            onClick={() => setStackSelected(12)}
            className={
              stackSelected === 12
                ? "stack-img-style.selected"
                : "stack-img-style"
            }
          />
          <img
            width={70}
            height={70}
            src={monggo}
            alt="Monggo Logo"
            onClick={() => setStackSelected(13)}
            className={
              stackSelected === 13
                ? "stack-img-style.selected"
                : "stack-img-style"
            }
          />
        </div>
        {isBlinking && <div className="badge" />}
      </div>
      <div className="div-details-style">
        <StackDetails stackSelected={stackSelected} />
      </div>
      <div className="title-header-style">
        <Label labelSize={LabelSize.DIV_TITLE_BOLD} labelText={"Educations"} />
      </div>
      <div className="div-details-style">
        <EducationDetails
          key={1}
          image={slsu}
          imgWdth={150}
          imgHght={150}
          titleLabel={
            "Bachelor of Science in Information Technology (BSIT- Programming)"
          }
          onClick={() => {}}
          educationClass={"Tertiary Education - College"}
          secondaryTitleLabel={"Southern Leyte State University (Main Campus)"}
          details={`Southern Leyte State University allowed me to build a strong foundation in software development principles, problem-solving, and 
            algorithm design. The comprehensive curriculum and hands-on experience equipped me with essential skills needed for a 
            successful career in technology and software engineering. Additionally, the university's emphasis on practical and 
            theoretical knowledge fostered a deep understanding of industry practices and prepared me for the challenges of a 
            rapidly evolving technological landscape`}
        />
        <EducationDetails
          key={2}
          image={scnhs}
          imgHght={140}
          imgWdth={155}
          onClick={() => {}}
          educationClass={
            "Secondary Education- Senior High School (K-12 Pioneer)"
          }
          titleLabel={"Information Communication Technology (ICT - CSS & CHS)"}
          secondaryTitleLabel={"Sta. Cruz National High School"}
          details={`At Sta. Cruz National High School(Senior High), I specialized in Information and Communication Technology, 
            focusing on both Computer System Servicing (CSS) and Computer Hardware Servicing (CHS). During my time here, 
            I gained practical skills in computer assembly, maintenance, and troubleshooting, as well as network configuration 
            and software installation. This foundational training provided me with a comprehensive understanding of computer 
            systems and their components, enabling me to diagnose and repair hardware and software issues effectively.`}
        />
        <EducationDetails
          key={3}
          image={scnhs}
          imgHght={140}
          imgWdth={155}
          onClick={() => {}}
          educationClass={"Secondary Educaation- Junior High School"}
          titleLabel={"Sta. Cruz National High School"}
          details={`During my time at Sta. Cruz National High School (Junior High), I achieved academic excellence and developed a 
            strong foundation across a range of subjects. My education was enriched by diverse learning experiences 
            from different subjects fostering critical thinking, creativity, 
            and effective communication skills. I also learned the importance of good ethics, discipline, 
            and perseverance, which were instilled through both classroom instruction and extracurricular activities. 
            This holistic education helped shape my character and prepared me for the challenges of higher education and future endeavors.`}
        />
        <EducationDetails
          key={4}
          image={sces}
          imgHght={140}
          imgWdth={140}
          isCustomBg={true}
          onClick={() => {}}
          educationClass={"Primary Education- Elamentary School"}
          titleLabel={"Sta. Cruz Elemantry School"}
          details={`At Sta. Cruz Elementary School, 
            I developed a strong academic foundation and cultivated a love for learning across various subjects. 
            My education at this level emphasized essential skills in reading, writing, mathematics, and science, 
            fostering curiosity, creativity, and a positive attitude toward learning. I also learned important 
            values such as respect, responsibility, and teamwork through both classroom activities and participation 
            in school events. These early experiences were crucial in shaping my personal growth, building my confidence, 
            and preparing me for the academic and social challenges of higher education.`}
        />
      </div>
      <div className="title-header-style">
        <Label labelSize={LabelSize.DIV_TITLE_BOLD} labelText={"Interest"} />
      </div>
    </div>
  );
};
