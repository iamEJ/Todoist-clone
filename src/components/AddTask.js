import React, { useState } from "react";
import moment from "moment";
import { firebase } from "../firebase";
import { useSelectedProjectValue } from "../contexts";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import DateRangeIcon from "@material-ui/icons/DateRange";

export const AddTask = ({
  showAddTaskMain = true,
  showShouldMain = false,
  showQuickAddTask,
  setShowQuickAddTask,
}) => {
  const [task, setTask] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [project, setProject] = useState("");
  const [showMain, setShowMain] = useState(showShouldMain);
  const [showProjectOverlay, setShowProjectOverlay] = useState(false);
  const [showTaskDate, setShowTaskDate] = useState(false);

  const { selectedProject } = useSelectedProjectValue();

  const AddTask = () => {
    const projectId = project || selectedProject;
    let collatedDate = "";

    if (collatedDate === "TODAY") {
      collatedDate = moment().format("DD/MM/YYYY");
    } else if (collatedDate === "NEXT_7") {
      collatedDate = moment().add(7, "days").format("DD/MM/YYYY");
    }
    return (
      task &&
      projectId &&
      firebase
        .firestore()
        .collection("tasks")
        .add({
          archved: false,
          projectId,
          task,
          date: collatedDate || taskDate,
          userId: "abc123",
        })
        .then(() => {
          setTask("");
          setProject("");
          setShowMain("");
          setShowProjectOverlay(false);
        })
    );
  };

  return (
    <div
      className={showQuickAddTask ? "add-task add-task__overlay" : "add-task"}
      data-testid="add-task-comp"
    >
      {showAddTaskMain && (
        <div
          className="add-task__shallow"
          data-testid="show-main-action"
          onClick={() => setShowMain(!showMain)}
        >
          <span className="add-task__plus">+</span>
          <span className="add-task__text">Add Task</span>
        </div>
      )}
    </div>
  );
};
