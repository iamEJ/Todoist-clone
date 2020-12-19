import React, { useState } from "react";
import InboxIcon from "@material-ui/icons/Inbox";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import DateRangeIcon from "@material-ui/icons/DateRange";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { useSelectedProjectValue } from "../../contexts";
import { Projects } from "../Projects";
import { AddProject } from "../AddProject";

export function Sidebar() {
  const { setSelectedProject } = useSelectedProjectValue();
  const [active, setActive] = useState("inbox");
  const [showProjects, setShowProjects] = useState(true);

  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li
          data-testid="inbox"
          className={active === "inbox" ? "active" : undefined}
        >
          <div
            onClick={() => {
              setActive("inbox");
              setSelectedProject("INBOX");
            }}
            onKeyDown={() => {
              setActive("inbox");
              setSelectedProject("INBOX");
            }}
            role="button"
            tabIndex={0}
          >
            <span>
              <InboxIcon />
            </span>
            <span>Inbox</span>
          </div>
        </li>
        <li
          data-testid="today"
          className={active === "today" ? "active" : undefined}
          onClick={() => {
            setActive("today");
            setSelectedProject("TODAY");
          }}
        >
          <div
            onClick={() => {
              setActive("today");
              setSelectedProject("TODAY");
            }}
            onKeyDown={() => {
              setActive("today");
              setSelectedProject("TODAY");
            }}
            role="button"
            tabIndex={0}
          >
            <span>
              <CalendarTodayIcon />
            </span>
            <span>Today</span>
          </div>
        </li>
        <li
          data-testid="next_7"
          className={active === "next_7" ? "active" : undefined}
        >
          <div
            onClick={() => {
              setActive("next_7");
              setSelectedProject("NEXT_7");
            }}
            onKeyDown={() => {
              setActive("next_7");
              setSelectedProject("NEXT_7");
            }}
            role="button"
            tabIndex={0}
          >
            <span>
              <DateRangeIcon />
            </span>
            <span>Next 7 days</span>
          </div>
        </li>
      </ul>
      <div
        className="sidebar__middle"
        onClick={() => setShowProjects(!showProjects)}
        onKeyDown={() => setShowProjects(!showProjects)}
        role="button"
        tabIndex={0}
      >
        <span>
          <KeyboardArrowDownIcon
            className={!showProjects ? "hidden-projects" : undefined}
          />
        </span>
        <h2>Projects</h2>
      </div>
      <ul className="sidebar__projects">{showProjects && <Projects />}</ul>
      {showProjects && <AddProject />}
    </div>
  );
}
