import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { AddTask } from "../AddTask";

export function Header({ darkMode, setDarkMode }) {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);

  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="images/logo.png" alt="Todoist Logo" />
        </div>
        <div className="settings">
          <ul>
            <li data-testid="quick-add-task-action" className="settings__add">
              <div
                aria-label="Quick Add Task"
                onClick={() => {
                  setShowQuickAddTask(true);
                  setShouldShowMain(true);
                }}
                onKeyPress={() => {
                  setShowQuickAddTask(true);
                  setShouldShowMain(true);
                }}
                role="button"
                tabIndex={0}
              >
                <AddIcon />
              </div>
            </li>
            <li data-testid="dark-mode-action" className="settings__darkmode">
              <div
                aria-label="Darkmode"
                onClick={() => setDarkMode(!darkMode)}
                onKeyPress={() => setDarkMode(!darkMode)}
                role="button"
                tabIndex={0}
              >
                <Brightness4Icon />
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <AddTask
        showAddTaskMain={false}
        shouldShowMain={shouldShowMain}
        showQuickAddTask={showQuickAddTask}
        setShowQuickAddTask={setShowQuickAddTask}
      />
    </header>
  );
}
