import React from "react";
import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../../store/actions";
import "./Task.css";

const Task = ({ task, onEdit }) => {
  const dispatch = useDispatch();

  return (
    <div className="task-container flex items-center justify-between my-1">
      <span
        onClick={() => dispatch(toggleTask(task.id))}
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
        className="cursor-pointer"
      >
        {task.title}
      </span>
      <div>
        <button
          className="mx-2 bg-yellow-500 text-white px-2 py-1 button"
          onClick={() => onEdit(task)}
        >
          Edit
        </button>
        <button
          className="mx-2 bg-red-500 text-white px-2 py-1 button"
          onClick={() => dispatch(deleteTask(task.id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
