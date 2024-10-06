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
import slsu from "../../assets/slsu.png";
import sces from "../../assets/sces.png";
import html from "../../assets/html.png";
import java from "../../assets/java.png";
import sql from "../../assets/sql.png";
import css from "../../assets/css.png";

// TECH STACK DETAILS
export const TechStacks = [
  { src: java, width: 75, height: 75, alt: "Java Logo", stackId: 1 },
  { src: cSharp, width: 90, height: 80, alt: "C# Logo", stackId: 2 },
  { src: python, width: 70, height: 70, alt: "Python Logo", stackId: 3 },
  { src: android, width: 80, height: 80, alt: "Android Logo", stackId: 4 },
  { src: spring, width: 60, height: 60, alt: "Spring Logo", stackId: 5 },
  { src: react, width: 75, height: 75, alt: "React Logo", stackId: 6 },
  { src: html, width: 85, height: 85, alt: "HTML Logo", stackId: 7 },
  { src: css, width: 70, height: 70, alt: "CSS Logo", stackId: 8 },
  {
    src: javaScript,
    width: 63,
    height: 63,
    alt: "JavaScript Logo",
    stackId: 9,
  },
  {
    src: typeScript,
    width: 65,
    height: 65,
    alt: "TypeScript Logo",
    stackId: 10,
  },
  { src: sql, width: 100, height: 60, alt: "MySQL Logo", stackId: 11 },
  { src: sqlLite, width: 75, height: 75, alt: "SQLite Logo", stackId: 12 },
  { src: monggo, width: 70, height: 70, alt: "MongoDB Logo", stackId: 13 },
];

// EDUCATIONS DETAILS
export const EducationInfoDetails = [
  {
    key: 1,
    image: slsu,
    imgWdth: 150,
    imgHght: 150,
    titleLabel:
      "Bachelor of Science in Information Technology (BSIT- Programming)",
    onClick: () => {},
    educationClass: "Tertiary Education - College",
    secondaryTitleLabel: "Southern Leyte State University (Main Campus)",
    details: `Southern Leyte State University allowed me to build a strong foundation in software development principles, problem-solving, and 
        algorithm design. The comprehensive curriculum and hands-on experience equipped me with essential skills needed for a 
        successful career in technology and software engineering. Additionally, the university's emphasis on practical and 
        theoretical knowledge fostered a deep understanding of industry practices and prepared me for the challenges of a 
        rapidly evolving technological landscape.`,
  },
  {
    key: 2,
    image: scnhs,
    imgHght: 140,
    imgWdth: 155,
    onClick: () => {},
    educationClass: "Secondary Education- Senior High School (K-12 Pioneer)",
    titleLabel: "Information Communication Technology (ICT - CSS & CHS)",
    secondaryTitleLabel: "Sta. Cruz National High School",
    details: `At Sta. Cruz National High School(Senior High), I specialized in Information and Communication Technology, 
        focusing on both Computer System Servicing (CSS) and Computer Hardware Servicing (CHS). During my time here, 
        I gained practical skills in computer assembly, maintenance, and troubleshooting, as well as network configuration 
        and software installation. This foundational training provided me with a comprehensive understanding of computer 
        systems and their components, enabling me to diagnose and repair hardware and software issues effectively.`,
  },
  {
    key: 3,
    image: scnhs,
    imgHght: 140,
    imgWdth: 155,
    onClick: () => {},
    educationClass: "Secondary Education- Junior High School",
    titleLabel: "Sta. Cruz National High School",
    details: `During my time at Sta. Cruz National High School (Junior High), I achieved academic excellence and developed a 
        strong foundation across a range of subjects. My education was enriched by diverse learning experiences 
        from different subjects fostering critical thinking, creativity, 
        and effective communication skills. I also learned the importance of good ethics, discipline, 
        and perseverance, which were instilled through both classroom instruction and extracurricular activities. 
        This holistic education helped shape my character and prepared me for the challenges of higher education and future endeavors.`,
  },
  {
    key: 4,
    image: sces,
    imgHght: 140,
    imgWdth: 140,
    isCustomBg: true,
    onClick: () => {},
    educationClass: "Primary Education- Elementary School",
    titleLabel: "Sta. Cruz Elementary School",
    details: `At Sta. Cruz Elementary School, 
        I developed a strong academic foundation and cultivated a love for learning across various subjects. 
        My education at this level emphasized essential skills in reading, writing, mathematics, and science, 
        fostering curiosity, creativity, and a positive attitude toward learning. I also learned important 
        values such as respect, responsibility, and teamwork through both classroom activities and participation 
        in school events. These early experiences were crucial in shaping my personal growth, building my confidence, 
        and preparing me for the academic and social challenges of higher education.`,
  },
];

// RECOMMENDATIONS DETAILS
export const Recommendations = [
  {
    name: "Gene Paul Mar Javier",
    profession: "Senior Software Engineer",
    description: `I had the pleasure of working with Dan Lester Sanz on several projects, where he consistently exceeded expectations. 
              Dan meets deadlines with high-quality work and demonstrates a strong ability to learn new technologies quickly. 
              His proactive approach and positive attitude make him a valuable asset to any team. Dan's dedication to excellence 
              and collaborative spirit would make him a great addition to any organization.`,
  },
  {
    name: "Celmar John Ortiz",
    profession: "Senior Software Engineer",
    description: `Dan Lester Sanz has been an invaluable team member on our projects, consistently delivering exceptional results. 
              His ability to meet deadlines without compromising quality, combined with his enthusiasm for learning new technologies, 
              sets him apart. Dan’s proactive mindset and collaborative nature make him a strong asset to any team.`,
  },
  {
    name: "Mark Le John Casalta",
    profession: "Senior Software Engineer",
    description: `I have had the pleasure of working with Dan Lester Sanz on multiple projects, and his performance has been 
              outstanding. Dan excels at meeting deadlines while producing high-quality work and is quick to adapt to new technologies. 
              His commitment to his craft and eagerness to contribute make him a highly valuable team member.`,
  },
  {
    name: "John Dennis  Burgos",
    profession: "Senior Software Engineer",
    description: `It has been a privilege to work with Dan Lester Sanz on various projects. Dan consistently brings a strong technical skillset 
      and a proactive attitude to the table. His ability to tackle complex challenges with innovative solutions is impressive, 
      and he always strives for excellence in every task he undertakes.`,
  },
];
