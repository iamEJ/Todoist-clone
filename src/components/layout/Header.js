import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Brightness4Icon from "@material-ui/icons/Brightness4";

export function Header() {
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="images/logo.png" alt="Todoist Logo" />
        </div>
        <div className="settings">
          <ul>
            <li data-testid="quick-add-task-action" className="settings__add">
              <AddIcon />
            </li>
            <li data-testid="dark-mode-action" className="settings__darkmode">
              <Brightness4Icon />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
