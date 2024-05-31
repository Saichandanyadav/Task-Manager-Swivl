import React from "react";
import { useSelector } from "react-redux";
import Task from "../Task/Task";
import "./TaskList.css";

const TaskList = ({ onEdit }) => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className="task-list mt-4">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onEdit={onEdit} className="task-text" />
      ))}
    </div>
  );
};

export default TaskList;
