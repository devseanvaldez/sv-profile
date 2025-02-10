import React, { useEffect, useState } from "react";

const BrandLogo = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("sv-theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.classList.toggle("dark", darkMode);
      document.body.classList.toggle("bg-texture", !darkMode);
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("sv-theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  return (
    <button
      onClick={toggleDarkMode}
      aria-label="Toggle Dark Mode"
      className="focus:outline-none transition-transform duration-300 hover:scale-110"
    >
      <div
        className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full 
                      bg-gradient-to-r from-green-400 to-green-600 dark:from-gray-700 dark:to-gray-900 
                      shadow-lg p-2 sm:p-3"
      >
        <span className="text-white text-3xl sm:text-4xl font-extrabold font-movie-title leading-none tracking-wide">
          SV
        </span>
      </div>
    </button>
  );
};

export default BrandLogo;
