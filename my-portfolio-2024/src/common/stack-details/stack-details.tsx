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
              learned Java in my second year of college and have built a solid
              foundation in it. My expertise includes a strong grasp of
              Object-Oriented Programming (OOP), Data Structures, Algorithms,
              and problem-solving within real-life scenarios. My practical
              experience includes developing a{" "}
              {
                <span
                  style={{
                    cursor: "pointer",
                    fontStyle: "italic",
                    color: "rgb(110, 155, 240)"
                  }}
                  onClick={() => {}}
                >{`Laundry Shop Application`}</span>
              }{" "}
              as my first project, using NetBeans as the Integrated Development
              Environment (IDE). This project honed my skills in Java and
              provided valuable insights into application development. .
            </div>
          )
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
                    color: "rgb(177, 71, 226)"
                  }}
                  onClick={() => {}}
                >{`Boarding House System `}</span>
              }
              created using Windows Forms. This project helped me gain practical
              experience in building user interfaces and managing application
              logic.
            </div>
          )
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
                    color: "rgba(179, 179, 54, 0.856)"
                  }}
                  onClick={() => {}}
                >{`Southern Leyte Endemic Herbal Plant Identification (Desktop)`}</span>
              }{" "}
              and it aimed to assist users in identifying local herbal plants
              using both mobile and desktop platforms and show the possible
              locations inside Southern Leyte using QGIS..
            </div>
          )
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
                    color: "rgb(28, 153, 28)"
                  }}
                  onClick={() => {}}
                >{`Southern Leyte Endemic Herbal Plant Identification (Mobile)`}</span>
              }{" "}
              and it aimed to assist users in identifying local herbal plants
              using both mobile and desktop platforms and show the possible
              locations inside Southern Leyte using QGIS.
            </div>
          )
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
                    color: "rgb(28, 153, 28)"
                  }}
                  onClick={() => {}}
                >{`SNZ Market Place`}</span>
              }{" "}
              an E-Commerse inpired application.
            </div>
          )
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
          description: (
            <div className="stack-description-style">
              React is a powerful library for building dynamic and interactive
              user interfaces. With my advanced expertise in React, I excel at
              creating scalable and efficient single-page applications using
              component-based architecture. I leverage React’s features, such as
              the Virtual DOM, hooks, and context, to manage state and optimize
              performance. My deep understanding of React enables me to deliver
              high-quality, responsive, and maintainable web applications. This{" "}
              {
                <span
                  style={{
                    cursor: "pointer",
                    fontStyle: "italic",
                    color: "rgb(93, 203, 247)"
                  }}
                  onClick={() => {}}
                >{`Portfolio`}</span>
              }{" "}
              is actually made using React.
            </div>
          )
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
          description: (
            <div className="stack-description-style">
              HTML (HyperText Markup Language) is the fundamental building block
              of web development, and with my advanced expertise, I leverage
              HTML to create well-structured, semantic web content. HTML
              provides the essential framework for organizing and displaying
              content on the web, using a variety of elements and tags to define
              headings, paragraphs, links, images, and multimedia. My deep
              understanding of HTML allows me to craft clean, accessible, and
              optimized code that ensures cross-browser compatibility and
              enhances the user experience.
            </div>
          )
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
          description: (
            <div className="stack-description-style">
              CSS (Cascading Style Sheets) is essential for designing visually
              appealing and responsive web pages. With my strong expertise in
              CSS, I skillfully apply styles to enhance layout, typography, and
              overall aesthetics. I utilize advanced CSS techniques and
              frameworks to ensure designs are both modern and adaptive across
              various devices. My proficiency includes working with CSS Grid,
              Flexbox, and animations to create dynamic and user-friendly
              interfaces.
            </div>
          )
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
          description: (
            <div className="stack-description-style">
              JavaScript is the cornerstone of modern web development, and with
              my advanced proficiency, I effectively use it to create dynamic
              and interactive web applications. My expertise includes mastering
              core JavaScript concepts, as well as modern ES6+ features, to
              write efficient and maintainable code. I am skilled in leveraging
              JavaScript for both client-side and server-side development, and I
              excel at integrating it with frameworks and libraries to enhance
              functionality and user experience. My first project using
              javascript is{" "}
              {
                <span
                  style={{
                    cursor: "pointer",
                    fontStyle: "italic",
                    color: "rgb(247, 247, 89)"
                  }}
                  onClick={() => {}}
                >{`Portfolio Version-1`}</span>
              }{" "}
              is actually made using React.
            </div>
          )
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
          description: (
            <div className="stack-description-style">
              TypeScript is a powerful superset of JavaScript that adds static
              types to enhance development efficiency and code quality. With my
              advanced expertise in TypeScript, I effectively leverage its
              strong typing system and advanced features to build robust and
              scalable applications. I utilize TypeScript to catch errors early,
              improve code readability, and facilitate better collaboration
              through clear type definitions. My proficiency includes
              integrating TypeScript with modern frameworks and tools to ensure
              high-quality, maintainable code.
            </div>
          )
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
          description: (
            <div className="stack-description-style">
              MySQL is a leading relational database management system, and with
              my strong expertise in MySQL, I efficiently design, implement, and
              manage robust database solutions. I excel at writing complex
              queries, optimizing performance, and ensuring data integrity
              through advanced indexing and normalization techniques. My
              proficiency includes creating and maintaining schemas, performing
              backups, and integrating MySQL with various applications to
              support reliable and scalable data management.
            </div>
          )
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
          description: (
            <div className="stack-description-style">
              SQLite is a lightweight, serverless database engine that is ideal
              for embedded and local applications. With my expertise in SQLite,
              I efficiently design and manage compact and high-performance
              databases. I am skilled at writing and optimizing SQL queries,
              handling database migrations, and integrating SQLite with various
              platforms and applications. My proficiency ensures reliable data
              management and seamless performance in environments where a
              full-scale database server is not required.
            </div>
          )
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
          description: (
            <div className="stack-description-style">
              MongoDB is a leading NoSQL database that excels in handling
              flexible, schema-less data models. With my expertise in MongoDB, I
              adeptly design and manage scalable and high-performance databases
              using its document-oriented structure. I am proficient in writing
              and optimizing queries, managing indexes, and leveraging MongoDB’s
              aggregation framework to extract and analyze data efficiently. My
              skills include integrating MongoDB with various applications to
              support dynamic and data-driven solutions.
            </div>
          )
        };
        setStackProperties(newStackProperties);
        break;
      default:
        newStackProperties = {
          image: java,
          height: 200,
          width: 200,
          name: "Java"
        };
        setStackProperties(newStackProperties);
    }
  }, [stackSelected]);

  return (
    <div className="stack-details-main-container-style">
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
            <div
            // style={{
            //   marginTop: "5px",
            //   paddingTop: "5px",
            //   borderTopWidth: "0.3px",
            //   borderTopStyle: "solid",
            //   borderColor: stackProperties.color
            // }}
            >
              <Label labelSize={LabelSize.LARGE_BOLD} labelText={"Experties"} />
              <div className="stack-experties-container-style">
                <div className="progress-bar-style">
                  <div
                    style={{
                      height: "10px",
                      width: stackProperties.percentage,
                      backgroundColor: stackProperties.color
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

// MAGIC UI
