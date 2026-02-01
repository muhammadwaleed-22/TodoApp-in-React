import { useState } from "react";

function TaskItem({ task, toggleTask, deleteTask, editTask }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(task.text);

  return (
    <div className="flex justify-between items-center border rounded-lg p-4 dark:border-gray-700">
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          className="w-5 h-5"
        />

        {editing ? (
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border px-2"
          />
        ) : (
          <span
            className={`${
              task.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {task.text}
          </span>
        )}
      </div>

      <div className="flex gap-2">
        {editing ? (
          <button
            onClick={() => {
              editTask(task.id, text);
              setEditing(false);
            }}
            className="px-3 py-1 border rounded"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="px-3 py-1 border rounded"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => deleteTask(task.id)}
          className="px-3 py-1 bg-red-500 text-white rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
