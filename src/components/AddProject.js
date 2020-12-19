import React, { useState } from "react";
import { firebase } from "../firebase";
import { generatePushId } from "../helpers";
import { useProjectsValue } from "../contexts";

export function AddProject({ shouldShow = false }) {
  const [show, setShow] = useState(shouldShow);
  const [projectName, setProjectName] = useState("");

  const projectId = generatePushId();
  const { setProjects } = useProjectsValue();

  const AddProject = () =>
    projectName &&
    firebase
      .firestore()
      .collection("projects")
      .add({ projectId, name: projectName, userId: "abc123" })
      .then(() => {
        setProjects([]);
        setProjectName("");
        setShow(false);
      });

  return (
    <div className="add-project" data-testid="add-project">
      {show && (
        <div className="add-project__input">
          <input
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="add-project__name"
            data-testid="project-name"
            type="text"
            placeholder="Name you project"
          />
          <button
            className="add-project__submit"
            type="button"
            onClick={() => AddProject()}
            data-testid="add-project-submit"
          >
            Add Project
          </button>
          <span
            data-testid="hide-project-overlay"
            className="add-project__cancel"
            onClick={() => setShow(false)}
            onKeyDown={() => setShow(false)}
            role="button"
            tabIndex={0}
          >
            Cancel
          </span>
        </div>
      )}
      <div className="add-project__hover">
        <span className="add-project__plus">+</span>
        <span
          data-testid="add-project__action"
          className="add-project__text"
          onClick={() => setShow(!show)}
          onKeyDown={() => setShow(!show)}
          role="button"
          tabIndex={0}
        >
          Add Project
        </span>
      </div>
    </div>
  );
}
