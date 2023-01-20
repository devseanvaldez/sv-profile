import classNames from "classnames";
import { toLower, upperFirst } from "lodash";
import React from "react";
import * as SeanIcons from "react-feather";

type Props = {
  name: string;
  className?: string;
  size?: string;
};

const Icon = ({ name, className = "", size = "2rem" }: Props) => {
  const IconComponent =
    // @ts-ignore
    SeanIcons?.[
      name
        ?.split("-")
        ?.map((item) => {
          return upperFirst(toLower(item));
        })
        ?.join("")
    ];

  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      className={classNames("stroke-current", className)}
      style={{
        height: size,
        width: size,
      }}
    />
  );
};

export default Icon;
