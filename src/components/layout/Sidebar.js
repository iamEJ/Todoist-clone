import React from "react";
import InboxIcon from "@material-ui/icons/Inbox";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import DateRangeIcon from "@material-ui/icons/DateRange";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

export function Sidebar() {
  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li>
          <span>
            <InboxIcon />
          </span>
          <span>Inbox</span>
        </li>
        <li>
          <span>
            <CalendarTodayIcon />
          </span>
          <span>Today</span>
        </li>
        <li>
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
      <ul className="sidebar__projects">Projects will be here</ul>
    </div>
  );
}
