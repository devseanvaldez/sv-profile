import { LABELS } from "@/enums/labels";
import Link from "next/link";
import React from "react";
import DarkMode from "../DarkMode";

type Props = {};

const Header: React.FC<Props> = () => {
  return (
    <header className="flex items-center justify-between">
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
