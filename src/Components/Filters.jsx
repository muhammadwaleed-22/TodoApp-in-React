import React from 'react'

function Filters({ filter, setFilter }) {
  const btn = (name, label) => (
    <button
      onClick={() => setFilter(name)}
      className={`px-4 py-2 ${
        filter === name
          ? "border-b-2 border-blue-600 text-blue-600"
          : "text-gray-500"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="flex gap-6 border-b mb-6">
      {btn("all", "All")}
      {btn("active", "Active")}
      {btn("completed", "Completed")}
    </div>
  );
}

export default Filters;
