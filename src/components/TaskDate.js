import React from "react";
import moment from "moment";
import AlarmOnIcon from "@material-ui/icons/AlarmOn";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

export const TaskDate = ({ showTaskDate, setTaskDate, setShowTaskDate }) =>
  showTaskDate && (
    <div className="task-date" data-testid="task-date-overlay">
      <ul className="task-date__list">
        <li
          data-testid="task-date-overlay"
          onClick={() => {
            setShowTaskDate(false);
            setTaskDate(moment().format("DD/MM/YYYY"));
          }}
        >
          <span>
            <AlarmOnIcon />
          </span>
          <p>Today</p>
        </li>
        <li
          data-testid="task-date-tomorrow"
          onClick={() => {
            setShowTaskDate(false);
            setTaskDate(moment().add(1, "day").format("DD/MM/YYYY"));
          }}
        >
          <span>
            <AcUnitIcon />
          </span>
          <p>Tomorrow</p>
        </li>
        <li
          data-testid="task-date-next-week"
          onClick={() => {
            setShowTaskDate(false);
            setTaskDate(moment().add(7, "days").format("DD/MM/YYYY"));
          }}
        >
          <span>
            <WbSunnyIcon />
          </span>
          <p>Next Week</p>
        </li>
      </ul>
    </div>
  );
