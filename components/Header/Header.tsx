import { LABELS } from "@/enums/labels";
import Link from "next/link";
import React from "react";
import DarkMode from "../DarkMode";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex items-center justify-between">
      <Link className="text-3xl font-bold" href="/">
        {LABELS.header.logo}
      </Link>
      <DarkMode />
    </div>
  );
};

export default Header;
