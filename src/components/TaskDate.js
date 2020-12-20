import React from "react";
import moment from "moment";
import AlarmOnIcon from "@material-ui/icons/AlarmOn";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

export const TaskDate = ({ showTaskDate, setTaskDate, setShowTaskDate }) =>
  showTaskDate && (
    <div className="task-date" data-testid="task-date-overlay">
      <ul className="task-date__list">
        <li data-testid="task-date-overlay">
          <div
            onClick={() => {
              setShowTaskDate(false);
              setTaskDate(moment().format("DD/MM/YYYY"));
            }}
            onKeyDown={() => {
              setShowTaskDate(false);
              setTaskDate(moment().format("DD/MM/YYYY"));
            }}
            role="button"
            tabIndex={0}
            aria-label="Select Today as a Task Date"
          >
            <span>
              <AlarmOnIcon />
            </span>
            <p>Today</p>
          </div>
        </li>
        <li data-testid="task-date-tomorrow">
          <div
            onClick={() => {
              setShowTaskDate(false);
              setTaskDate(moment().add(1, "day").format("DD/MM/YYYY"));
            }}
            onKeyDown={() => {
              setShowTaskDate(false);
              setTaskDate(moment().add(1, "day").format("DD/MM/YYYY"));
            }}
            role="button"
            tabIndex={0}
            aria-label="Select Tomorrow as a Task Date"
          >
            <span>
              <AcUnitIcon />
            </span>
            <p>Tomorrow</p>
          </div>
        </li>
        <li data-testid="task-date-next-week">
          <div
            onClick={() => {
              setShowTaskDate(false);
              setTaskDate(moment().add(7, "days").format("DD/MM/YYYY"));
            }}
            onKeyDown={() => {
              setShowTaskDate(false);
              setTaskDate(moment().add(7, "days").format("DD/MM/YYYY"));
            }}
            role="button"
            tabIndex={0}
            aria-label="Select Next Week as a Task Date"
          >
            <span>
              <WbSunnyIcon />
            </span>
            <p>Next Week</p>
          </div>
        </li>
      </ul>
    </div>
  );
