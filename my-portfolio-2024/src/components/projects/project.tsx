import { HeaderEnums, Label, LabelSize, ProjectDetails } from "../../common";
import "./projects.css";

import image13 from "../../assets/portfolio-v1/1.png";
import image14 from "../../assets/portfolio-v1/2.png";
import image15 from "../../assets/portfolio-v1/3.png";
import image16 from "../../assets/portfolio-v1/4.png";
import image5 from "../../assets/herbs-desktop/1.png";
import image6 from "../../assets/herbs-desktop/2.png";
import image7 from "../../assets/herbs-desktop/3.png";
import image8 from "../../assets/herbs-desktop/4.png";
import image1 from "../../assets/herbs-mobile/1.png";
import image2 from "../../assets/herbs-mobile/2.png";
import image3 from "../../assets/herbs-mobile/3.png";
import image4 from "../../assets/herbs-mobile/4.png";
import image9 from "../../assets/snz/1.png";
import image10 from "../../assets/snz/2.png";
import image11 from "../../assets/snz/3.png";
import image12 from "../../assets/snz/4.png";

import image17 from "../../assets/sirius/1.png";
import image18 from "../../assets/sirius/2.png";
import image19 from "../../assets/sirius/3.png";
import image20 from "../../assets/sirius/4.png";

import { Footer } from "../footer";
import { selectedScreenStore } from "../../store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Projects = () => {
  // SELECTED SCREEN STORE
  const { setSelectedScreen } = selectedScreenStore();

  // ROUTING NAVIGATION
  const navigate = useNavigate();

  // AUTO SCROLL ON TOP
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="projects-container-style">
      <div className="projects-text-container">
        <Label labelSize={LabelSize.PAGE_TITLE_BOLD} labelText={"Projects."} />
      </div>
      <div className="div-details-style">
        <ProjectDetails
          isPersonal={false}
          images={[image17, image18, image19, image20]}
          projectTitle={"Sirius WebPOS - Headquarter"}
          projectType={"Web Application"}
          projectDescription={`Sirius WebPOS is a comprehensive full-stack Point of Sale (POS) system complete with headquarters management capabilities. This robust solution caters to businesses of all sizes, offering a seamless and efficient way to manage transactions, inventory, and customer data. With its headquarters functionality, users can oversee multiple locations or branches, streamlining operations and enhancing productivity.
          The system integrates features such as real-time inventory tracking, sales analytics, and user management, allowing businesses to monitor performance metrics from a centralized dashboard. It also supports various payment methods, making transactions smoother for customers. Additionally, Sirius WebPOS is designed to be highly scalable, ensuring that businesses can expand their operations without needing major overhauls of their POS infrastructure.`}
        />
      </div>
      {/* SNZ MARKET PLACE WEB APPLICATION */}
      <div className="div-details-style">
        <ProjectDetails
          isPersonal
          images={[image9, image10, image11, image12]}
          projectType={"Web Application"}
          projectTitle={"SNZ Market Place"}
          projectDescription={`SNZ Market Place is a Nike-inspired marketplace application that brings the excitement of competitive shopping into a dynamic platform. Users can explore a wide range of products, much like they would in a traditional marketplace, but with a unique twist: a bidding feature. This allows users to place competing bids for specific products, creating a competitive environment where buyers can vie for the best deals.The bidding system introduces a new layer of interaction, where users actively engage in pricing battles to secure their desired items at the most favorable rates. 
          This feature not only encourages real-time competition but also enhances user engagement by offering an auction-like experience. The marketplace is designed to mimic the premium feel of Nike, ensuring an intuitive and modern user interface, while the bidding system makes it more dynamic and exciting for users to participate.`}
        />
      </div>
      {/* PORTFOLIO APPLICATION */}
      <div className="div-details-style">
        <ProjectDetails
          isPersonal
          images={[image13, image14, image15, image16]}
          projectTitle={"My Portfolio Version 1.1"}
          projectType={"Web Site"}
          projectDescription={`My Portfolio Version 1 was a simple yet personal project, showcasing my skills, experience, and goals at the time. It includes sections like a about me, educational background, and a few sample projects you worked on during my early stages as a developer. While basic, it demonstrated my early interest in web development and was built using foundational technologies like HTML, CSS, and JavaScript. The project allowed me to explore essential concepts like responsive design, navigation menus, and the importance of clear content structure.`}
        />
      </div>
      {/* HERBS DESKTOP APPLICATION */}
      <div className="div-details-style">
        <ProjectDetails
          isPersonal
          images={[image5, image6, image7, image8]}
          projectType={"Desktop Application"}
          projectTitle={"Southern Leyte Endemic Herbal Plants Identification"}
          projectDescription={`Southern Leyte Endemic Herbal Plants Identification is developed also as a desktop application designed to classify endemic herbal plants native to Southern Leyte, Philippines. Utilizing Convolutional Neural Networks (CNNs), the application enables users to identify plant species from images uploaded through the desktop interface. After classification, the application provides comprehensive details about each plant, including medicinal properties, traditional uses, and health benefits, offering users valuable insights into the significance of these plants in local herbal medicine.
            One of the key features of the desktop application is its geolocation capability, which helps users discover areas within Southern Leyte where specific herbal plants are commonly found. By integrating GPS technology with a detailed regional plant database, the application displays an interactive map that allows users to explore and locate the habitats of these plants, supporting responsible collection and conservation. This feature also fosters greater awareness of local biodiversity, while promoting sustainable practices for preserving Southern Leyte’s rich plant heritage.`}
        />
      </div>
      {/* HERBS MOBILE APPLICATION */}
      <div className="div-details-style">
        <ProjectDetails
          isPersonal
          images={[image1, image2, image3, image4]}
          projectType="Mobile Application"
          projectTitle="Southern Leyte Endemic Herbal Plants Identification"
          projectDescription={`Southern Leyte Endemic Herbal Plants Identification is a mobile application designed to classify endemic herbal plants native to Southern Leyte, Philippines. By leveraging Convolutional Neural Networks (CNNs), the app can accurately identify plant species from images uploaded by users. After classification, it provides detailed information about each plant's medicinal properties, traditional uses, and health benefits, offering valuable insights into the role of these plants in local herbal medicine.
                  A unique feature of the app is its geolocation functionality, which helps users locate areas within Southern Leyte where specific herbal plants are most likely to be found. By integrating GPS technology with regional plant data, the app offers an interactive map, making it easier for users to discover and gather these plants responsibly. This feature also promotes awareness of local biodiversity and supports conservation efforts.`}
        />
      </div>
      {/* FOOTER */}
      <Footer
        navigationMessage={"Let's Continue to my Experience"}
        onClickNavigation={() => {
          setSelectedScreen(HeaderEnums.PROJECTS);
          navigate("/projects");
        }}
      />
    </div>
  );
};
