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
      className="flex items-center justify-center p-3 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 focus:outline-none"
    >
      {/* Increase icon size for better visibility on mobile */}
      <Icon name={darkMode ? "sunrise" : "moon"} size="2.5rem" />
    </button>
  );
};

export default DarkMode;
