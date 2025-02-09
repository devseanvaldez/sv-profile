import classNames from "classnames";
import { toLower, upperFirst } from "lodash";
import React from "react";
import * as FeatherIcons from "react-feather";

// Define the expected type for the icons object.
type FeatherIconComponents = Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
>;

type Props = {
  name: string;
  className?: string;
  size?: string;
};

const Icon: React.FC<Props> = ({ name, className = "", size = "2rem" }) => {
  // Convert the provided icon name from kebab-case to PascalCase.
  // Example: "arrow-left" becomes "ArrowLeft"
  const iconName = name
    .split("-")
    .map((item) => upperFirst(toLower(item)))
    .join("");

  // Cast FeatherIcons to our expected type.
  const icons = FeatherIcons as FeatherIconComponents;
  let IconComponent = icons[iconName];

  // If the requested icon is not found, use "HelpCircle" as the fallback.
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found. Using fallback icon "HelpCircle".`);
    IconComponent = icons["HelpCircle"];
  }

  return (
    <IconComponent
      className={classNames("stroke-current", className)}
      style={{ height: size, width: size }}
    />
  );
};

export default Icon;
