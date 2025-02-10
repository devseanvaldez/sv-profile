import { LABELS } from "@/enums/labels";
import Link from "next/link";
import React from "react";

type HeaderProps = {
  className?: string;
};

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={`flex items-center justify-between ${className}`}>
      <Link
        className="text-[3rem] sm:text-[4rem] font-signature tracking-wide text-gray-900 dark:text-white leading-none"
        href="/"
      >
        {LABELS.header.logo}
      </Link>
    </header>
  );
};

export default Header;
