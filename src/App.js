import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import TaskList from "./components/TaskList/TaskList";
import TaskForm from "./components/TaskForm/TaskForm";
import EditTaskModal from "./components/EditTaskModal/EditTaskModal";
import "./App.css";

const App = () => {
  const [editingTask, setEditingTask] = useState(null);

  return (
    <Provider store={store}>
      <div className="App text-center p-4">
        <h1 className="main-title mb-4">Task Manager</h1>
        <div className="developer-container">
          <a
            href="https://www.linkedin.com/in/saichandanyadav/"
            target="_blank"
            className="developer"
            rel="noreferrer"
          >
            Follow Developer
          </a>
        </div>
        <TaskForm />
        <TaskList onEdit={setEditingTask} />
        {editingTask && (
          <EditTaskModal
            task={editingTask}
            onClose={() => setEditingTask(null)}
          />
        )}
      </div>
    </Provider>
  );
};

export default App;
