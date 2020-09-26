import React from "react";
import CreateProjectButton from "../createProjectButton/CreateProjectButton";
import ProjectItem from "../projectItem/ProjectItem";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Project</h1>
      <CreateProjectButton />
      <div className="dashboard__projects">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </div>
  );
};

export default Dashboard;
