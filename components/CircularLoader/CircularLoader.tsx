import React from "react";

type Props = {};

const CircularLoader = (props: Props) => {
  return (
    <div id="outerContainer">
      <div id="innerContainer">
        <div id="innerCircle"></div>
      </div>
      <div id="revolver"></div>
    </div>
  );
};

export default CircularLoader;
