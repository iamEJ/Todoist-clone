import React, { useState } from "react";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";
import { useProjectsValue, useSelectedProjectValue } from "../contexts";
import { firebase } from "../firebase";

export function IndividualProject({ project }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const { projects, setProjects } = useProjectsValue();
  const { setSelectedProject } = useSelectedProjectValue();

  const deleteProject = (docId) => {
    firebase
      .firestore()
      .collection("projects")
      .doc(docId)
      .delete()
      .then(() => {
        setProjects([...projects]);
        setSelectedProject("INBOX");
      });
  };

  return (
    <>
      <span className="sidebar__dot">•</span>
      <span className="sidebar__project-name">{project.name}</span>
      <span
        className="sidebar__project-delete"
        data-testid="delete-project"
        onClick={() => setShowConfirm(!showConfirm)}
      >
        <DeleteForeverRoundedIcon />
        {showConfirm && (
          <div className="project-delete-modal">
            <div className="project-delete-modal__inner">
              <p>Do you want to delete this project?</p>
              <div>
                <button
                  type="button"
                  onClick={() => deleteProject(project.docId)}
                >
                  Delete
                </button>
                <span onClick={() => setShowConfirm(!showConfirm)}>Cancel</span>
              </div>
            </div>
          </div>
        )}
      </span>
    </>
  );
}