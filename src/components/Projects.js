import React from "react";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <div className="projectsSection">
      <div className="projectsHeader">
        <hr></hr>
        <h2>Projects</h2>
        <hr></hr>
      </div>
      <div className="projectsGrid">
        <ProjectItem />
      </div>
    </div>
  );
}
