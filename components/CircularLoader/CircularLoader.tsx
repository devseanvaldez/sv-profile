import React from "react";

const CircularLoader = () => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin 
                      shadow-lg ring-2 ring-white/50 dark:ring-green-400 dark:border-green-300"
      ></div>
    </div>
  );
};

export default CircularLoader;
