import React, { useEffect, useState } from "react";
import Icon from "../Icon";

const DarkMode: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // On mount, initialize the theme from localStorage.
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("sv-theme");
      if (savedTheme) {
        setDarkMode(savedTheme === "dark");
      }
    }
  }, []);

  // Whenever darkMode changes, update localStorage and the document body classes.
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("sv-theme", darkMode ? "dark" : "light");
      document.body.classList.toggle("dark", darkMode);
      // When dark mode is enabled, remove the background texture;
      // otherwise, add it back.
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
      className="p-2 rounded transition-colors duration-300 focus:outline-none"
    >
      <div className="flex items-center justify-center">
        {/* Using "sunrise" when dark mode is active, otherwise "moon" */}
        <Icon name={darkMode ? "sunrise" : "moon"} />
      </div>
    </button>
  );
};

export default DarkMode;
