import React, { useState } from "react";
import InboxIcon from "@material-ui/icons/Inbox";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import DateRangeIcon from "@material-ui/icons/DateRange";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { useSelectedProjectValue } from "../../contexts";
import { Projects } from "../Projects";
import { AddProject } from "../AddProject";

export function Sidebar() {
  const { selectedProject } = useSelectedProjectValue();
  const [active, setActive] = useState("inbox");
  const [showProjects, setShowProjects] = useState(true);

  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li data-testid="inbox" className="inbox">
          <span>
            <InboxIcon />
          </span>
          <span>Inbox</span>
        </li>
        <li data-testid="today" className="today">
          <span>
            <CalendarTodayIcon />
          </span>
          <span>Today</span>
        </li>
        <li data-testid="next_7" className="next_7">
          <span>
            <DateRangeIcon />
          </span>
          <span>Next 7 days</span>
        </li>
      </ul>
      <div className="sidebar__middle">
        <span>
          <KeyboardArrowDownIcon />
        </span>
        <h2>Projects</h2>
      </div>
      <ul className="sidebar__projects">{showProjects && <Projects />}</ul>
      {showProjects && <AddProject />}
    </div>
  );
}
