import { Label, LabelSize, ProjectDetails } from "../../common";
import "./projects.css";

export const Projects = () => {
  return (
    <div className="projects-container-style">
      <div className="projects-text-container">
        <Label labelSize={LabelSize.PAGE_TITLE_BOLD} labelText={"Projects."} />
      </div>
      {/* PROJECTS AREA */}
      <div className="title-header-style">
        <Label
          labelSize={LabelSize.DIV_TITLE_BOLD}
          labelText={
            "Southern Leyte Endemic Herbal Plant Identification (Mobile)"
          }
        />
      </div>
      <div className="div-details-style">
        <ProjectDetails />
      </div>
      {/* <div className="title-header-style">
        <Label
          labelSize={LabelSize.DIV_TITLE_BOLD}
          labelText={
            "Southern Leyte Endemic Herbal Plant Identification (Desktop)"
          }
        />
      </div>
      <div className="title-header-style">
        <Label
          labelSize={LabelSize.DIV_TITLE_BOLD}
          labelText={"SNZ Market Place"}
        />
      </div>
      <div className="title-header-style">
        <Label
          labelSize={LabelSize.DIV_TITLE_BOLD}
          labelText={"Boarding House System"}
        />
      </div>
      <div className="title-header-style">
        <Label
          labelSize={LabelSize.DIV_TITLE_BOLD}
          labelText={"Sirius WebPOS-Headquarter"}
        />
      </div>
      <div className="title-header-style">
        <Label
          labelSize={LabelSize.DIV_TITLE_BOLD}
          labelText={
            "Southern Leyte Endemic Herbal Plant Identification (Mobile)"
          }
        />
      </div> */}
    </div>
  );
};
