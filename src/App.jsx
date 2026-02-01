import { useEffect, useState } from "react";
import Header from "./Components/Header";
import TaskInput from "./Components/TaskInput";
import Filters from "./Components/Filters";
import TaskList from "./Components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks"));
    if (saved) setTasks(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, text: newText } : t))
    );
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((t) => !t.completed));
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  const remaining = tasks.filter((t) => !t.completed).length;

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex justify-center p-6">
        <div className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />

          <TaskInput addTask={addTask} />

          <Filters filter={filter} setFilter={setFilter} />

          <TaskList
            tasks={filteredTasks}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            editTask={editTask}
          />

          <div className="flex justify-between items-center mt-6 text-gray-600 dark:text-gray-300">
            <span>{remaining} tasks left</span>
            <button
              onClick={clearCompleted}
              className="border px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Clear Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
