import { HeaderEnums, Label, LabelSize, ProjectDetails } from "../../common";
import { notification } from "antd";

import reactrouter from "../../assets/reactrouter.png";
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
import typeScript from "../../assets/typescript.png";
import tensorflow from "../../assets/tensorflow.png";
import javaScript from "../../assets/javascript.png";

import websocket from "../../assets/websocket.png";
import image17 from "../../assets/sirius/1.png";
import image18 from "../../assets/sirius/2.png";
import image19 from "../../assets/sirius/3.png";
import image20 from "../../assets/sirius/4.png";
import android from "../../assets/android.png";
import zustand from "../../assets/zustand.png";
import jupiter from "../../assets/jupiter.png";
import sqlLite from "../../assets/sqlite.png";

import image10 from "../../assets/snz/2.png";
import image11 from "../../assets/snz/3.png";
import image12 from "../../assets/snz/4.png";
import python from "../../assets/python.png";
import image21 from "../../assets/bmo/1.png";
import image22 from "../../assets/bmo/2.png";
import image23 from "../../assets/bmo/3.png";
import image24 from "../../assets/bmo/4.png";
import spring from "../../assets/spring.png";
import image9 from "../../assets/snz/1.png";
import nextui from "../../assets/nxtui.png";
import react from "../../assets/react.png";
import keras from "../../assets/keras.png";
import mysql from "../../assets/mysql.png";

import mobx from "../../assets/mobx.png";
import qgis from "../../assets/qgis.png";
import vite from "../../assets/vite.png";
import html from "../../assets/html.png";
import java from "../../assets/java.png";

import aes from "../../assets/aes.png";
import apis from "../../assets/api.png";
import ant from "../../assets/ant.png";
import nxt from "../../assets/nxt.png";
import css from "../../assets/css.png";
import qt from "../../assets/qt.png";

import { selectedScreenStore } from "../../store";
import { useNavigate } from "react-router-dom";
import { Fragment, useEffect } from "react";
import { Footer } from "../footer";

import "./projects.css";
import { ProjectStatus } from "../../common/project-details";

import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

export const Projects = () => {
  // SELECTED SCREEN STORE
  const { setSelectedScreen } = selectedScreenStore();

  // ROUTING NAVIGATION
  const navigate = useNavigate();

  // AUTO SCROLL ON TOP
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [api, contextHolder] = notification.useNotification();

  type NotificationType = "success" | "info" | "warning" | "error";

  const openNotificationWithIcon = (
    type: NotificationType,
    title: string,
    description: string
  ) => {
    api[type]({
      description: description,
      message: title,
      placement: "bottomRight",
    });
  };

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const elementClass = `.project-1`;
    gsap.fromTo(
      elementClass,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: elementClass,
          start: "top center",
          toggleActions: "play reverse play reverse",
        },
        stagger: 0.3,
      }
    );
  }, []);

  useEffect(() => {
    const elementClass = `.project-2`;
    gsap.fromTo(
      elementClass,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: elementClass,
          start: "top center",
          toggleActions: "play reverse play reverse",
        },
        stagger: 0.3,
      }
    );
  }, []);

  useEffect(() => {
    const elementClass = `.project-3`;
    gsap.fromTo(
      elementClass,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: elementClass,
          start: "top center",
          toggleActions: "play reverse play reverse",
        },
        stagger: 0.3,
      }
    );
  }, []);

  useEffect(() => {
    const elementClass = `.project-4`;
    gsap.fromTo(
      elementClass,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: elementClass,
          start: "top center",
          toggleActions: "play reverse play reverse",
        },
        stagger: 0.3,
      }
    );
  }, []);

  useEffect(() => {
    const elementClass = `.project-5`;
    gsap.fromTo(
      elementClass,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: elementClass,
          start: "top center",
          toggleActions: "play reverse play reverse",
        },
        stagger: 0.3,
      }
    );
  }, []);

  useEffect(() => {
    const elementClass = `.project-6`;
    gsap.fromTo(
      elementClass,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: elementClass,
          start: "top center",
          toggleActions: "play reverse play reverse",
        },
        stagger: 0.3,
      }
    );
  }, []);

  return (
    <div className="projects-container-style">
      <div className="projects-text-container">
        <Label labelSize={LabelSize.PAGE_TITLE_BOLD} labelText={"Projects."} />
      </div>
      {contextHolder}
      <div className="project-1">
        <ProjectDetails
          status={ProjectStatus.PROTECTED}
          images={[image17, image18, image19, image20]}
          projectTitle={"Sirius WebPOS - Headquarter"}
          projectType={"Web Application"}
          projectDescription={`Sirius WebPOS is a comprehensive full-stack Point of Sale (POS) system complete with headquarters management capabilities. This robust solution caters to businesses of all sizes, offering a seamless and efficient way to manage transactions, inventory, and customer data. With its headquarters functionality, users can oversee multiple locations or branches, streamlining operations and enhancing productivity.
            The system integrates features such as real-time inventory tracking, sales analytics, and user management, allowing businesses to monitor performance metrics from a centralized dashboard. It also supports various payment methods, making transactions smoother for customers. Additionally, Sirius WebPOS is designed to be highly scalable, ensuring that businesses can expand their operations without needing major overhauls of their POS infrastructure.`}
          onClickDiscover={() =>
            openNotificationWithIcon(
              "warning",
              "Access Restricted",
              "You do not have permission to view this project (Sirius WebPOS - Headquarter)."
            )
          }
          projectStacks={
            <Fragment>
              <img
                width={20}
                height={20}
                src={typeScript}
                alt="TypeScript Logo"
                className="project-stack-style"
                onClick={() =>
                  window.open("https://www.typescriptlang.org/", "_blank")
                }
              />
              <img
                src={react}
                width={24}
                height={24}
                alt="React Logo"
                className="project-stack-style"
                onClick={() => window.open("https://react.dev/", "_blank")}
              />
              <img
                src={vite}
                width={18}
                height={18}
                alt="Vite Logo"
                className="project-stack-style"
                onClick={() => window.open("https://vitejs.dev/", "_blank")}
              />
              <img
                src={mobx}
                width={18}
                height={18}
                alt="Mobx Logo"
                className="project-stack-style"
                onClick={() =>
                  window.open("https://mobx.js.org/README.html", "_blank")
                }
              />
              <img
                src={java}
                width={19}
                height={19}
                alt="Stack Logo"
                className="project-stack-style"
                onClick={() =>
                  window.open("https://mobx.js.org/README.html", "_blank")
                }
              />
              <img
                src={spring}
                width={18}
                height={18}
                alt="Spring Boot Logo"
                className="project-stack-style"
                onClick={() =>
                  window.open(
                    "https://spring.io/projects/spring-boot/",
                    "_blank"
                  )
                }
              />
              <img
                src={aes}
                width={23}
                height={23}
                alt="AES Logo"
                className="project-stack-style"
                onClick={() =>
                  window.open(
                    "https://www.baeldung.com/java-aes-encryption-decryption",
                    "_blank"
                  )
                }
              />
              <img
                src={reactrouter}
                width={20}
                height={20}
                alt="React Router Logo"
                className="project-stack-style"
                onClick={() =>
                  window.open("https://reactrouter.com/en/main", "_blank")
                }
              />
              <img
                src={apis}
                width={20}
                height={20}
                alt="Rest API Logo"
                className="project-stack-style"
                onClick={() =>
                  window.open(
                    "https://spring.io/guides/tutorials/rest",
                    "_blank"
                  )
                }
              />
              <img
                src={ant}
                width={20}
                height={20}
                alt="And Design Logo"
                className="project-stack-style"
                onClick={() =>
                  window.open("https://ant.design/components/image/", "_blank")
                }
              />
              <img
                src={mysql}
                width={23}
                height={20}
                alt="My Sql Logo"
                className="project-stack-style"
                onClick={() => window.open("https://www.mysql.com/", "_blank")}
              />
            </Fragment>
          }
        />
      </div>
      {/* SNZ MARKET PLACE WEB APPLICATION */}
      <div className="project-2">
        <ProjectDetails
          status={ProjectStatus.PERSONAL}
          images={[image9, image10, image11, image12]}
          projectType={"Web Application"}
          projectTitle={"SNZ Marketplace"}
          projectDescription={`SNZ Market Place is a Nike-inspired marketplace application that brings the excitement of competitive shopping into a dynamic platform. Users can explore a wide range of products, much like they would in a traditional marketplace, but with a unique twist: a bidding feature. This allows users to place competing bids for specific products, creating a competitive environment where buyers can vie for the best deals.The bidding system introduces a new layer of interaction, where users actively engage in pricing battles to secure their desired items at the most favorable rates. 
          This feature not only encourages real-time competition but also enhances user engagement by offering an auction-like experience. The marketplace is designed to mimic the premium feel of Nike, ensuring an intuitive and modern user interface, while the bidding system makes it more dynamic and exciting for users to participate.`}
          onClickDiscover={() =>
            window.open(
              "http://snzwebbucket.s3-website-ap-southeast-2.amazonaws.com/login.html",
              "_blank"
            )
          }
          projectStacks={
            <Fragment>
              <img
                width={20}
                height={20}
                src={typeScript}
                alt="TypeScript Logo"
                className="project-stack-style"
                onClick={() =>
                  window.open("https://www.typescriptlang.org/", "_blank")
                }
              />
              <img
                src={nxt}
                width={20}
                height={20}
                alt="NextJS Logo"
                className="project-stack-style"
                onClick={() => window.open("https://nextjs.org/", "_blank")}
              />
              <img
                width={20}
                height={20}
                src={nextui}
                alt="Next UI Logo"
                className="project-stack-style"
                onClick={() => window.open("https://nextui.org/", "_blank")}
              />
              <img
                width={21}
                height={21}
                src={zustand}
                alt="Stack Logo"
                className="project-stack-style"
                onClick={() =>
                  window.open("https://zustand-demo.pmnd.rs/", "_blank")
                }
              />
              <img
                src={java}
                width={19}
                height={19}
                alt="Java Logo"
                className="project-stack-style"
                onClick={() =>
                  window.open("https://mobx.js.org/README.html", "_blank")
                }
              />
              <img
                width={18}
                height={18}
                src={spring}
                alt="Spring Boot Logo"
                className="project-stack-style"
                onClick={() =>
                  window.open(
                    "https://spring.io/projects/spring-boot/",
                    "_blank"
                  )
                }
              />
              <img
                src={apis}
                width={20}
                height={20}
                alt="Rest API Logo"
                className="project-stack-style"
                onClick={() =>
                  window.open(
                    "https://spring.io/guides/tutorials/rest",
                    "_blank"
                  )
                }
              />
              <img
                width={20}
                height={20}
                src={websocket}
                alt="Web Socket Logo"
                className="project-stack-style"
                onClick={() =>
                  window.open(
                    "https://fastapi.tiangolo.com/advanced/websockets/",
                    "_blank"
                  )
                }
              />
              <img
                src={mysql}
                width={23}
                height={20}
                alt="My Sql Logo"
                className="project-stack-style"
                onClick={() => window.open("https://www.mysql.com/", "_blank")}
              />
            </Fragment>
          }
        />
      </div>
      {/* PORTFOLIO APPLICATION */}
      <div className="project-3">
        <ProjectDetails
          status={ProjectStatus.PERSONAL}
          images={[image13, image14, image15, image16]}
          projectTitle={"My Portfolio Version 1.0"}
          projectType={"Web Site"}
          projectDescription={`My Portfolio Version 1.0 was a simple yet personal project, showcasing my skills, experience, and goals at the time. It included key sections such as an About Me, Educational Background, and a few sample projects I worked on during my early stages as a developer. The primary goal was to establish an online presence and create a space to document my journey as a software engineer. While basic, it served as an essential stepping stone in my web development path. The project was built using foundational technologies like HTML, CSS, and JavaScript, giving me hands-on experience with core web concepts. I focused heavily on responsive design, ensuring that the portfolio was accessible across various devices. This helped me understand how to structure content for both desktop and mobile views, improving the overall user experience.`}
          onClickDiscover={() =>
            window.open("https://dan2xsanz.github.io/Portfolio/", "_blank")
          }
          projectStacks={
            <Fragment>
              <img
                src={javaScript}
                width={18}
                height={18}
                alt="Javascript Logo"
                className="project-stack-style"
                onClick={() =>
                  window.open(
                    "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                    "_blank"
                  )
                }
              />
              <img
                src={html}
                width={27}
                height={27}
                alt="HTML Logo"
                style={{ marginLeft: "-4px" }}
                className="project-stack-style"
                onClick={() =>
                  window.open(
                    "https://developer.mozilla.org/en-US/docs/Web/HTML",
                    "_blank"
                  )
                }
              />
              <img
                src={css}
                width={23}
                height={23}
                alt="CSS Logo"
                style={{ marginLeft: "-5px" }}
                className="project-stack-style"
                onClick={() =>
                  window.open(
                    "https://developer.mozilla.org/en-US/docs/Web/CSS",
                    "_blank"
                  )
                }
              />
            </Fragment>
          }
        />
      </div>
      {/* HERBS DESKTOP APPLICATION */}
      <div className="project-4">
        <ProjectDetails
          status={ProjectStatus.PROTECTED}
          images={[image5, image6, image7, image8]}
          projectType={"Desktop Application"}
          projectTitle={"Southern Leyte Endemic Herbal Plants Identification"}
          projectDescription={`Southern Leyte Endemic Herbal Plants Identification is developed also as a desktop application designed to classify endemic herbal plants native to Southern Leyte, Philippines. Utilizing Convolutional Neural Networks (CNNs), the application enables users to identify plant species from images uploaded through the desktop interface. After classification, the application provides comprehensive details about each plant, including medicinal properties, traditional uses, and health benefits, offering users valuable insights into the significance of these plants in local herbal medicine.
            One of the key features of the desktop application is its geolocation capability, which helps users discover areas within Southern Leyte where specific herbal plants are commonly found. By integrating GPS technology with a detailed regional plant database, the application displays an interactive map that allows users to explore and locate the habitats of these plants, supporting responsible collection and conservation. This feature also fosters greater awareness of local biodiversity, while promoting sustainable practices for preserving Southern Leyte’s rich plant heritage.`}
          onClickDiscover={() =>
            openNotificationWithIcon(
              "warning",
              "Access Restricted",
              "You do not have permission to view this project (Southern Leyte Endemic Herbal Plants Identification)."
            )
          }
          projectStacks={
            <Fragment>
              <img
                src={python}
                width={18}
                height={18}
                alt="Python Logo"
                className="project-stack-style"
                onClick={() => window.open("https://www.python.org/", "_blank")}
              />
              <img
                src={qt}
                width={18}
                height={18}
                alt="QT Designer Logo"
                className="project-stack-style"
                onClick={() =>
                  window.open(
                    "https://doc.qt.io/qt-6/qtdesigner-manual.html",
                    "_blank"
                  )
                }
              />
              <img
                width={22}
                height={22}
                src={tensorflow}
                alt="Tensorflow Logo"
                className="project-stack-style"
                onClick={() =>
                  window.open("https://www.tensorflow.org/", "_blank")
                }
              />
              <img
                src={keras}
                width={18}
                height={18}
                alt="Keras Logo"
                className="project-stack-style"
                onClick={() => window.open("https://keras.io/", "_blank")}
              />
              <img
                width={20}
                height={20}
                src={jupiter}
                alt="Jupiter Notebook Logo"
                className="project-stack-style"
                onClick={() => window.open("https://jupyter.org/", "_blank")}
              />
              <img
                src={qgis}
                width={17}
                height={19}
                alt="QT Designer Logo"
                className="project-stack-style"
                onClick={() => window.open("https://www.qgis.org/", "_blank")}
              />
              <img
                width={19}
                height={19}
                src={sqlLite}
                alt="QGIS Logo"
                className="project-stack-style"
                onClick={() => window.open("https://www.sqlite.org/", "_blank")}
              />
            </Fragment>
          }
        />
      </div>
      {/* HERBS MOBILE APPLICATION */}
      <div className="project-5">
        <ProjectDetails
          status={ProjectStatus.PROTECTED}
          images={[image1, image2, image3, image4]}
          projectType="Mobile Application"
          projectTitle="Southern Leyte Endemic Herbal Plants Identification"
          projectDescription={`Southern Leyte Endemic Herbal Plants Identification is a mobile application designed to classify endemic herbal plants native to Southern Leyte, Philippines. By leveraging Convolutional Neural Networks (CNNs), the app can accurately identify plant species from images uploaded by users. After classification, it provides detailed information about each plant's medicinal properties, traditional uses, and health benefits, offering valuable insights into the role of these plants in local herbal medicine.
                  A unique feature of the app is its geolocation functionality, which helps users locate areas within Southern Leyte where specific herbal plants are most likely to be found. By integrating GPS technology with regional plant data, the app offers an interactive map, making it easier for users to discover and gather these plants responsibly. This feature also promotes awareness of local biodiversity and supports conservation efforts.`}
          onClickDiscover={() =>
            openNotificationWithIcon(
              "warning",
              "Access Restricted",
              "You do not have permission to view this project (Southern Leyte Endemic Herbal Plants Identification)."
            )
          }
          projectStacks={
            <Fragment>
              <img
                src={android}
                width={22}
                height={22}
                alt="Android Studio Logo"
                className="project-stack-style"
                onClick={() =>
                  window.open("https://developer.android.com/", "_blank")
                }
              />
              <img
                src={java}
                width={19}
                height={19}
                alt="Java Logo"
                className="project-stack-style"
                onClick={() =>
                  window.open("https://mobx.js.org/README.html", "_blank")
                }
              />
              <img
                src={python}
                width={18}
                height={18}
                alt="Python Logo"
                className="project-stack-style"
                onClick={() => window.open("https://www.python.org/", "_blank")}
              />
              <img
                src={qt}
                width={18}
                height={18}
                alt="QT Designer Logo"
                className="project-stack-style"
                onClick={() =>
                  window.open(
                    "https://doc.qt.io/qt-6/qtdesigner-manual.html",
                    "_blank"
                  )
                }
              />
              <img
                width={22}
                height={22}
                src={tensorflow}
                alt="Tensorflow Logo"
                className="project-stack-style"
                onClick={() =>
                  window.open("https://www.tensorflow.org/", "_blank")
                }
              />
              <img
                src={keras}
                width={18}
                height={18}
                alt="Keras Logo"
                className="project-stack-style"
                onClick={() => window.open("https://keras.io/", "_blank")}
              />
              <img
                width={20}
                height={20}
                src={jupiter}
                alt="Jupiter Notebook Logo"
                className="project-stack-style"
                onClick={() => window.open("https://jupyter.org/", "_blank")}
              />
              <img
                src={qgis}
                width={17}
                height={19}
                alt="QT Designer Logo"
                className="project-stack-style"
                onClick={() => window.open("https://www.qgis.org/", "_blank")}
              />
              <img
                width={19}
                height={19}
                src={sqlLite}
                alt="QGIS Logo"
                className="project-stack-style"
                onClick={() => window.open("https://www.sqlite.org/", "_blank")}
              />
            </Fragment>
          }
        />
      </div>
      {/* BMO MOBILE APPLICATION */}
      <div className="project-6">
        <ProjectDetails
          status={ProjectStatus.ONGOING}
          images={[image21, image22, image23, image24]}
          projectType="Mobile Application"
          projectTitle="BMO Expence Tracker Chat Bot AI"
          projectDescription={`BMO is a smart expense tracker inspired by the beloved character BMO from the Adventure Time movie, designed to make financial management more engaging and efficient. With an AI-powered chat tool, users can interact naturally, ask questions about their spending, and receive personalized insights and budgeting recommendations. BMO simplifies expense tracking by categorizing transactions, analyzing financial trends, and providing real-time summaries to help users stay on top of their finances. Whether setting savings goals, identifying spending patterns, or getting friendly financial advice, BMO transforms budgeting into a seamless and interactive experience. By combining AI-driven assistance with an intuitive interface, BMO empowers users to take control of their financial well-being while adding a touch of fun and intelligence to money management.`}
          onClickDiscover={() =>
            openNotificationWithIcon(
              "warning",
              "Access Restricted",
              "Application is still ongoing. (BMO Expence Tracker Chat Bot AI)."
            )
          }
          projectStacks={
            <Fragment>
              <img
                src={react}
                width={22}
                height={22}
                alt="React Native Logo"
                className="project-stack-style"
                onClick={() =>
                  window.open("https://reactnative.dev/", "_blank")
                }
              />
              <img
                src={android}
                width={22}
                height={22}
                alt="Android Studio Logo"
                className="project-stack-style"
                onClick={() =>
                  window.open("https://developer.android.com/", "_blank")
                }
              />
              <img
                src={java}
                width={19}
                height={19}
                alt="Java Logo"
                className="project-stack-style"
                onClick={() =>
                  window.open("https://mobx.js.org/README.html", "_blank")
                }
              />
              <img
                src={python}
                width={18}
                height={18}
                alt="Python Logo"
                className="project-stack-style"
                onClick={() => window.open("https://www.python.org/", "_blank")}
              />
              <img
                width={20}
                height={20}
                src={typeScript}
                alt="TypeScript Logo"
                className="project-stack-style"
                onClick={() =>
                  window.open("https://www.typescriptlang.org/", "_blank")
                }
              />
              <img
                width={21}
                height={21}
                src={zustand}
                alt="Stack Logo"
                className="project-stack-style"
                onClick={() =>
                  window.open("https://zustand-demo.pmnd.rs/", "_blank")
                }
              />
              <img
                src={mysql}
                width={23}
                height={20}
                alt="My Sql Logo"
                className="project-stack-style"
                onClick={() => window.open("https://www.mysql.com/", "_blank")}
              />
              <img
                width={18}
                height={18}
                src={spring}
                alt="Spring Boot Logo"
                className="project-stack-style"
                onClick={() =>
                  window.open(
                    "https://spring.io/projects/spring-boot/",
                    "_blank"
                  )
                }
              />
              <img
                src={apis}
                width={20}
                height={20}
                alt="Rest API Logo"
                className="project-stack-style"
                onClick={() =>
                  window.open(
                    "https://spring.io/guides/tutorials/rest",
                    "_blank"
                  )
                }
              />
            </Fragment>
          }
        />
      </div>
      {/* FOOTER */}
      <Footer
        navigationMessage={"Continue to my experience"}
        onClickNavigation={() => {
          setSelectedScreen(HeaderEnums.EXPERIENCE);
          navigate("/experience");
        }}
      />
    </div>
  );
};
