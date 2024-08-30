import { EducationDetails } from "../../common";

import slsu from "../../assets/SLSU.png";
import scnhs from "../../assets/scnhs.png";
import sces from "../../assets/sces.png";

import "./about-style.css";

export const About = () => {
  // useEffect(() => {
  //   gsap.to(".about-container-style", {
  //     y: -30,
  //     duration: 8,
  //     ease: "elastic",
  //     scrollTrigger: {
  //       trigger: ".about-container-style",
  //     },
  //   });
  // }, []);

  return (
    <div className="about-container-style">
      <div className="about-text-container">About Me.</div>
      <div className="title-header-style">Who I am</div>
      <div className="details-style">
        <div className="more-details-style">
          I'm a passionate Software Engineer with a strong background in
          developing robust and scalable software applications. With a deep
          understanding of both frontend and backend technologies, I specialize
          in creating seamless user experiences and efficient systems that solve
          complex problems. My journey in tech began with a fascination for how
          things work, which quickly grew into a love for coding and
          problem-solving.
        </div>
        <div className="more-details-2-style">
          I possess persistent problem-solving skills and have a knack for
          writing clean, reusable code that is easy to read and test. I
          understand how code drives overall business goals and love designing
          user interfaces and creating purposeful systems that contribute to
          industry innovation. I pride myself on my ability to "listen more than
          I speak," staying disciplined and focused on the right things. I am
          always open to new ideas and constantly think outside the box, as I
          believe in the saying,
          {
            <span className="quotes-style">
              "Those who do not think outside the box are easily contained." -
              Nicolas Manetta
            </span>
          }
        </div>
      </div>
      <div className="title-header-style">Educations</div>
      <div className="educations-details-style">
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
      <div className="title-header-style">Tech Stacks</div>
      <div className="title-header-style">Hobbies</div>
    </div>
  );
};
