import React, { useState } from "react";
import { useSelectedProjectValue, useProjectsValue } from "../contexts";
import { IndividualProject } from "./IndividualProject";

export function Projects({ activeValue = null }) {
  const [active, setActive] = useState(activeValue);
  const { setSelectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();

  return (
    projects &&
    projects.map((project) => (
      <li
        key={project.projectId}
        data-doc-id={project.docId}
        data-testid="project-action"
        className={
          active === project.projectId
            ? "active sidebar__project"
            : "sidebar__project"
        }
      >
        <div
          role="button"
          tabIndex={0}
          aria-label={`Select ${project.name} as the Task Project`}
          onClick={() => {
            setActive(project.projectId);
            setSelectedProject(project.projectId);
          }}
          onKeyDown={() => {
            setActive(project.projectId);
            setSelectedProject(project.projectId);
          }}
        >
          <IndividualProject project={project} />
        </div>
      </li>
    ))
  );
}
