import React from "react";
import InboxIcon from "@material-ui/icons/Inbox";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import DateRangeIcon from "@material-ui/icons/DateRange";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

export function Sidebar() {
  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li data-testid="inbox" className="sidebar__inbox">
          <span>
            <InboxIcon />
          </span>
          <span>Inbox</span>
        </li>
        <li data-testid="today" className="sidebar__today">
          <span>
            <CalendarTodayIcon />
          </span>
          <span>Today</span>
        </li>
        <li data-testid="next-seven" className="sidebar__nextSeven">
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
