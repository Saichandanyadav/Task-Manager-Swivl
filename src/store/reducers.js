import {
  ADD_TASK,
  TOGGLE_TASK,
  EDIT_TASK,
  DELETE_TASK,
  LOAD_TASKS,
} from "./actions";

const initialState = {
  tasks: [],
};

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("tasks", serializedState);
  } catch (e) {
    console.warn("Could not save state", e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("tasks");
    if (serializedState === null) return initialState;
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Could not load state", e);
    return initialState;
  }
};

const reducer = (state = loadFromLocalStorage(), action) => {
  let newState;
  switch (action.type) {
    case ADD_TASK:
      newState = { ...state, tasks: [...state.tasks, action.payload] };
      break;
    case TOGGLE_TASK:
      newState = {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
      break;
    case EDIT_TASK:
      newState = {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, title: action.payload.title }
            : task
        ),
      };
      break;
    case DELETE_TASK:
      newState = {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
      break;
    case LOAD_TASKS:
      newState = { ...state, tasks: action.payload };
      break;
    default:
      newState = state;
  }

  saveToLocalStorage(newState);
  return newState;
};

export default reducer;
