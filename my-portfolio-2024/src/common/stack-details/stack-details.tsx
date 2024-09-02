import { getCardBackground } from "../../functions";
import { useEffect, useState } from "react";
import { useStore } from "../../store";

import typeScript from "../../assets/typescript.png";
import javaScript from "../../assets/javascript.png";
import sqlLite from "../../assets/sqlite.png";
import android from "../../assets/android.png";
import cSharp from "../../assets/csharp.png";
import python from "../../assets/python.png";
import spring from "../../assets/spring.png";
import monggo from "../../assets/mongo.png";
import react from "../../assets/react.png";
import html from "../../assets/html.png";
import java from "../../assets/java.png";
import sql from "../../assets/sql.png";
import css from "../../assets/css.png";

import "./stack-details.css";
import { Label, LabelSize } from "../label";

interface StockPropertiesInterface {
  name: string;
  image: string;
  width: number;
  height: number;
  color?: string;
  percentage?: string;
  description?: JSX.Element;
}

interface StackDetailsInterface {
  stackSelected: number;
}

export const StackDetails = (props: StackDetailsInterface) => {
  const { stackSelected } = props;

  const { mode } = useStore();

  const [cardBackground, setCardBackground] = useState<string>();

  const [stackProperties, setStackProperties] =
    useState<StockPropertiesInterface>();

  useEffect(() => {
    getCardBackground(mode, setCardBackground);
  }, [mode]);

  useEffect(() => {
    let newStackProperties: StockPropertiesInterface;
    switch (stackSelected) {
      case 1:
        newStackProperties = {
          image: java,
          height: 200,
          width: 200,
          name: "Java",
          percentage: "90%",
          color: "rgb(110, 155, 240)",
          description: (
            <div className="stack-description-style">
              I learned Java in my second year of college and have a solid
              foundation in it. My experience includes a strong understanding of
              Object-Oriented Programming (OOP), Data Structures, Algorithms,
              and basic problem-solving with real-life scenarios. My first
              project was a{" "}
              {
                <span
                  style={{
                    cursor: "pointer",
                    fontStyle: "italic",
                    color: "rgb(110, 155, 240)",
                  }}
                  onClick={() => {}}
                >{`Laundry Shop Application`}</span>
              }
              , which I developed using NetBeans as the Integrated Development
              Environment (IDE).
            </div>
          ),
        };
        setStackProperties(newStackProperties);
        break;
      case 2:
        newStackProperties = {
          image: cSharp,
          height: 200,
          width: 220,
          name: "C Sharp (C#)",
          percentage: "80%",
          color: "rgb(177, 71, 226)",
          description: (
            <div className="stack-description-style">
              I first learned C# during my first year of college, where I
              developed a solid understanding of fundamental programming
              concepts. These include variables, arrays, loops, conditions,
              functions, and methods—skills that I still apply today. My first
              project in C# was a desktop application called{" "}
              {
                <span
                  style={{
                    cursor: "pointer",
                    fontStyle: "italic",
                    color: "rgb(177, 71, 226)",
                  }}
                  onClick={() => {}}
                >{`Boarding House System `}</span>
              }
              created using Windows Forms. This project helped me gain practical
              experience in building user interfaces and managing application
              logic.
            </div>
          ),
        };
        setStackProperties(newStackProperties);
        break;
      case 3:
        newStackProperties = {
          image: python,
          height: 180,
          width: 180,
          name: "Python",
          percentage: "70%",
          color: "rgba(243, 243, 129, 0.856)",
          description: (
            <div className="stack-description-style">
              During my college years, Python was not covered, but I took the
              initiative to learn it as well during my capstone project. For
              this project, I developed Desktop Application that is built using
              PyQT5, which allowed for a robust and interactive user interface.
              I employed Convolutional Neural Networks (CNNs) using Python for
              model creation, enhancing the application's capability to identify
              and classify plants accurately. The project was titled{" "}
              {
                <span
                  style={{
                    cursor: "pointer",
                    fontStyle: "italic",
                    color: "rgba(179, 179, 54, 0.856)",
                  }}
                  onClick={() => {}}
                >{`Southern Leyte Endemic Herbal Plant Identification (Desktop)`}</span>
              }{" "}
              and it aimed to assist users in identifying local herbal plants
              using both mobile and desktop platforms and show the possible
              locations inside Southern Leyte using QGIS..
            </div>
          ),
        };
        setStackProperties(newStackProperties);
        break;
      case 4:
        newStackProperties = {
          image: android,
          height: 220,
          width: 220,
          name: "Android Studio",
          percentage: "70%",
          color: "rgba(107, 205, 50, 0.582)",
          description: (
            <div className="stack-description-style">
              Android Studio wasn't covered as well during my college years, I
              took the initiative to learn it for my capstone project. For this
              project, mobile application developed with Android Studio using
              Java Maven and I employed Convolutional Neural Networks (CNNs)
              using Python for model creation, enhancing the application's
              capability to identify and classify plants accurately. The project
              was titled{" "}
              {
                <span
                  style={{
                    cursor: "pointer",
                    fontStyle: "italic",
                    color: "rgb(28, 153, 28)",
                  }}
                  onClick={() => {}}
                >{`Southern Leyte Endemic Herbal Plant Identification (Mobile)`}</span>
              }{" "}
              and it aimed to assist users in identifying local herbal plants
              using both mobile and desktop platforms and show the possible
              locations inside Southern Leyte using QGIS.
            </div>
          ),
        };
        setStackProperties(newStackProperties);
        break;
      case 5:
        newStackProperties = {
          image: spring,
          height: 200,
          width: 200,
          name: "Spring Boot",
          percentage: "90%",
          color: "rgb(43, 182, 43)",
          description: (
            <div className="stack-description-style">
              I gained my Spring Boot knowledge through my work experience as a
              Software Developer, specifically focusing on the MVC
              (Model-View-Controller) architecture. Additionally, I utilized
              Spring Data JPA to simplify database operations, worked with
              Interceptors to manage request and response processing for tasks
              like logging and authentication, and used JDBC for direct database
              connectivity and operations. This comprehensive experience has
              enabled me to build and maintain scalable, well-structured
              applications effectively. I also create my firt project with
              Spring Boot name{" "}
              {
                <span
                  style={{
                    cursor: "pointer",
                    fontStyle: "italic",
                    color: "rgb(28, 153, 28)",
                  }}
                  onClick={() => {}}
                >{`SNZ Market Place`}</span>
              }{" "}
              an E-Commerse inpired application.
            </div>
          ),
        };
        setStackProperties(newStackProperties);
        break;
      case 6:
        newStackProperties = {
          image: react,
          height: 200,
          width: 200,
          name: "React",
          percentage: "90%",
          color: "rgb(93, 203, 247)",
        };
        setStackProperties(newStackProperties);
        break;
      case 7:
        newStackProperties = {
          image: html,
          height: 230,
          width: 230,
          name: "HTML",
          percentage: "90%",
          color: "orangered",
        };
        setStackProperties(newStackProperties);
        break;
      case 8:
        newStackProperties = {
          image: css,
          height: 200,
          width: 200,
          name: "CSS",
          percentage: "85%",
          color: "rgb(6, 149, 206)",
        };
        setStackProperties(newStackProperties);
        break;
      case 9:
        newStackProperties = {
          image: javaScript,
          height: 200,
          width: 200,
          name: "Javascript",
          percentage: "80%",
          color: "rgb(247, 247, 89)",
        };
        setStackProperties(newStackProperties);
        break;
      case 10:
        newStackProperties = {
          image: typeScript,
          height: 200,
          width: 200,
          name: "Typescript",
          percentage: "95%",
          color: "rgb(59, 132, 241)",
        };
        setStackProperties(newStackProperties);
        break;
      case 11:
        newStackProperties = {
          image: sql,
          height: 200,
          width: 200,
          name: "My SQL",
          percentage: "85%",
          color: "rgb(34, 87, 148)",
        };
        setStackProperties(newStackProperties);
        break;
      case 12:
        newStackProperties = {
          image: sqlLite,
          height: 200,
          width: 200,
          name: "SQL Lite",
          percentage: "80%",
          color: "rgb(17, 104, 202)",
        };
        setStackProperties(newStackProperties);
        break;
      case 13:
        newStackProperties = {
          image: monggo,
          height: 200,
          width: 200,
          name: "Monggo DB",
          percentage: "70%",
          color: "rgb(63, 156, 83)",
        };
        setStackProperties(newStackProperties);
        break;
      default:
        newStackProperties = {
          image: java,
          height: 200,
          width: 200,
          name: "Java",
        };
        setStackProperties(newStackProperties);
    }
  }, [stackSelected]);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        marginTop: "20px",
        justifyContent: "center",
      }}
    >
      {stackProperties && (
        <div
          className="stack-details-container-style"
          style={{ backgroundColor: cardBackground }}
        >
          <div className="stack-image-container-style">
            <img
              src={stackProperties?.image}
              width={stackProperties?.width}
              height={stackProperties?.height}
              alt="Stack Logo"
            />
          </div>
          <div className="stack-details-style">
            <Label
              labelSize={LabelSize.DIV_TITLE_BOLD}
              labelText={stackProperties?.name}
            />
            <div>
              <Label labelSize={LabelSize.LARGE_BOLD} labelText={"Experties"} />
              <div className="stack-experties-container-style">
                <div className="progress-bar-style">
                  <div
                    style={{
                      height: "10px",
                      width: stackProperties.percentage,
                      backgroundColor: stackProperties.color,
                    }}
                  />
                </div>
                <Label
                  labelSize={LabelSize.MEDIUM}
                  labelText={`${stackProperties.percentage}`}
                />
              </div>
              <div>{stackProperties.description}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
