import { LABELS } from "@/enums/labels";
import Link from "next/link";
import React from "react";
import DarkMode from "../DarkMode";

type HeaderProps = {
  className?: string;
};

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={`flex items-center justify-between ${className}`}>
      <Link className="text-3xl font-bold" href="/">
        {LABELS.header.logo}
      </Link>
      {/* Wrap DarkMode in a div with a left margin */}
      {/* <div className="ml-2">
        <DarkMode />
      </div> */}
    </header>
  );
};

export default Header;
