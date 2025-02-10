import React, { useEffect, useState } from "react";

const BrandLogo = () => {
  const [darkMode, setDarkMode] = useState(false);

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
      aria-label="Toggle Dark Mode"
      className="focus:outline-none transition-transform duration-300 hover:scale-110"
    >
      <div className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-green-400 to-green-600 dark:from-gray-700 dark:to-gray-900 drop-shadow-lg p-2 sm:p-3">
        <span className="text-white text-4xl sm:text-5xl font-extrabold font-movie-title leading-none tracking-wide">
          SV
        </span>
      </div>
    </button>
  );
};

export default BrandLogo;
