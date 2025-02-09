import React, { useEffect, useState } from "react";
import Icon from "../Icon";

const DarkMode: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Initialize theme from localStorage on mount.
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("sv-theme");
      if (savedTheme) {
        setDarkMode(savedTheme === "dark");
      }
    }
  }, []);

  // Update localStorage and document body classes whenever darkMode changes.
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
      className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full 
                 bg-gray-200 dark:bg-gray-700 transition-colors duration-300 
                 focus:outline-none focus:ring-2 focus:ring-offset-2 
                 focus:ring-gray-400 dark:focus:ring-gray-600"
    >
      {/* Icon Adjustments for Better Visibility on Mobile */}
      <Icon
        name={darkMode ? "sunrise" : "moon"}
        size="2rem"
        className="text-gray-800 dark:text-yellow-400"
      />
    </button>
  );
};

export default DarkMode;
