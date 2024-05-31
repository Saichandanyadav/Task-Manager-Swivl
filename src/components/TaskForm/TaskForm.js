import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/actions";
import "./TaskForm.css";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") {
      setError("Please Enter a Task");
      return;
    }
    dispatch(addTask({ id: Date.now(), title, completed: false }));
    setTitle("");
    setError("");
  };

  return (
    <div className="add-container">
      <h1 className="add-task-title">Add You Task</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Task"
          className="mr-2 border rounded px-2 py-1 input-element"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-2 py-1 rounded add-button"
        >
          Add Task
        </button>
        {error && <p className="text-red-500 ml-2">{error}</p>}
      </form>
    </div>
  );
};

export default TaskForm;
