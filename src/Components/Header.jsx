import React from 'react'

function Header({ darkMode, setDarkMode }) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
        My Tasks
      </h1>
      
    </div>
  );
}

export default Header;
