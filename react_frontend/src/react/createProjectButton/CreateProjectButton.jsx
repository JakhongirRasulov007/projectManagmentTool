import React from "react";
import { Link } from "react-router-dom";
import "./createProjectButton.scss";

const CreateProjectButton = () => {
  return (
    <div className="createProjectButton">
      <Link to="/addproject" className="createProjectButton__link">
        Create a project
      </Link>
    </div>
  );
};

export default CreateProjectButton;
