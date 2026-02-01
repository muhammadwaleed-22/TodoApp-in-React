import { useState } from "react";

function TaskInput({ addTask }) {
  const [text, setText] = useState("");

  const submit = () => {
    if (!text.trim()) return;
    addTask(text);
    setText("");
  };

  return (
    <div className="flex gap-3 mb-6">
      <input
        className="flex-1 px-4 py-3 border rounded-lg dark:bg-gray-700 dark:text-white"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={submit}
        className="bg-blue-600 text-white px-6 rounded-lg hover:bg-blue-700"
      >
        Add Task
      </button>
    </div>
  );
}

export default TaskInput;
