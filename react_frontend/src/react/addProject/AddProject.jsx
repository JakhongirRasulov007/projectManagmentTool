import React, { useState } from "react";
import "./addProject.scss";

const AddProject = () => {
  const [projectName, setProjectName] = useState("");
  const [projectIdentifier, setProjectIdentifier] = useState("");
  const [description, setDescription] = useState("");
  const [startAt, setStartAt] = useState(null);
  const [endAt, setEndAt] = useState(null);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    let project = {
      projectName,
      projectIdentifier,
      description,
      startAt,
      endAt,
    };
    console.log(project);
    setProjectName("");
    setProjectIdentifier("");
    setDescription("");
    setStartAt(null);
    setEndAt(null);
  };

  return (
    <div className="addProject">
      <h1 className="addProject__title">Add a new project</h1>

      <form onSubmit={onHandleSubmit} className="addProject__form">
        <input
          type="text"
          className="addProject__projectName addProject__input"
          placeholder="project name"
          name="projectName"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <input
          type="text"
          className="addProject__projectIdentifier addProject__input"
          placeholder="project identifier"
          name="projectIdentifier"
          value={projectIdentifier}
          onChange={(e) => setProjectIdentifier(e.target.value)}
        />

        <textarea
          type="text"
          className="addProject__description addProject__input"
          placeholder="project description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="date"
          className="addProject__startAt addProject__input"
          placeholder="start date"
          name="startAt"
          value={startAt}
          onChange={(e) => setStartAt(e.target.value)}
        />
        <input
          type="date"
          className="addProject__endAt addProject__input"
          placeholder="end date"
          name="endAt"
          value={endAt}
          onChange={(e) => setEndAt(e.target.value)}
        />
        <input
          type="submit"
          value="submit"
          className="addProject__submit addProject__input"
        />
      </form>
    </div>
  );
};

export default AddProject;
