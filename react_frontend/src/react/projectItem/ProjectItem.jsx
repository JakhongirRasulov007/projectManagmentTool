import React from "react";
import "./projectItem.scss";
import DashboardIcon from "@material-ui/icons/Dashboard";
import UpdateIcon from "@material-ui/icons/Update";
import DeleteIcon from "@material-ui/icons/Delete";

const ProjectItem = () => {
  return (
    <div className="projectItem">
      <div className="projectItem__tool">React</div>
      <div className="projectItem__data">
        <div className="projectItem__title">Spring-React project</div>
        <div className="projectItem__description">
          this project is bootstrapped by Spring bootstrapped and react
        </div>
      </div>
      <div className="projectItem__settings">
        <div className="projectItem__board">
          <DashboardIcon className="projectItem__icon projectItem__icon--board" />
          Project board
        </div>
        <div className="projectItem__update">
          <UpdateIcon className="projectItem__icon projectItem__icon--update" />
          Update project info
        </div>
        <div className="projectItem__delete">
          <DeleteIcon className="projectItem__icon projectItem__icon--delete" />
          Delete project
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
