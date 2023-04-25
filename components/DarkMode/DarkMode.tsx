import React, { useEffect, useRef, useState } from "react";
import Icon from "../Icon";

type Props = {};

const DarkMode = (props: Props) => {
  const [darkMode, setDarkMode] = useState(true);
  // const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const didRef = useRef(0);

  useEffect(() => {
    if (didRef.current < 2) {
      setDarkMode(localStorage["sv-theme"] === "dark");
      didRef.current += 1;

      return;
    }

    if (darkMode) {
      localStorage["sv-theme"] = "dark";
      console.log(localStorage["sv-theme"]);
      document.body.classList.add("dark");
      document.body.classList.remove("bg-texture");
    } else {
      localStorage["sv-theme"] = "light";
      document.body.classList.remove("dark");
      document.body.classList.add("bg-texture");
    }
  }, [darkMode]);

  return (
    <button onClick={toggleDarkMode}>
      <div className="flex justify-end item gap-x-4">
        <Icon name={darkMode ? "sun" : "moon"} />
      </div>
    </button>
  );
};

export default DarkMode;
