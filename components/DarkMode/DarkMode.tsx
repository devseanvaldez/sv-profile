import React, { useEffect, useState } from "react";
import Icon from "../Icon";

const DarkMode: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("sv-theme") === "dark";
    }
    return false; // Default to light mode
  });

  // Apply theme to the document immediately on every render
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.classList.toggle("dark", darkMode);
      document.body.classList.toggle("bg-texture", !darkMode);
    }
  }, []);

  // Update theme whenever darkMode state changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("sv-theme", darkMode ? "dark" : "light");
      document.body.classList.toggle("dark", darkMode);
      document.body.classList.toggle("bg-texture", !darkMode);
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
      role="switch"
      aria-checked={darkMode}
      className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full 
                 bg-gray-200 dark:bg-gray-700 transition-all duration-300 ease-in-out 
                 focus:outline-none focus:ring-2 focus:ring-offset-2 
                 focus:ring-gray-400 dark:focus:ring-gray-600 
                 hover:scale-105 active:scale-95"
    >
      {/* Smooth Icon Transition */}
      <Icon
        name={darkMode ? "sunrise" : "moon"}
        size="2rem"
        className="text-gray-800 dark:text-yellow-400 transition-colors duration-300 ease-in-out"
      />
    </button>
  );
};

export default DarkMode;
