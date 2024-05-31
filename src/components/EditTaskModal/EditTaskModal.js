import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../../store/actions";
import "./EditTaskModal.css";

const EditTaskModal = ({ task, onClose }) => {
  const [title, setTitle] = useState(task.title);
  const dispatch = useDispatch();

  useEffect(() => {
    setTitle(task.title);
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTask({ ...task, title }));
    onClose();
  };

  return (
    <div className="modal fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded shadow-md modal-container"
      >
        <h1 className="modal-title">Update Here</h1>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mr-2 border rounded px-2 py-1"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-2 py-1 mr-2 rounded"
        >
          Update Task
        </button>
        <button
          type="button"
          onClick={onClose}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditTaskModal;
