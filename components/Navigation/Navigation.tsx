import Link from "next/link";
import React from "react";

type Props = {};

const Navigation: React.FC<Props> = () => {
  return (
    <nav className="text-xl">
      <ul className="flex items-center gap-x-10 font-extralight">
        <li>
          <Link
            href="/"
            className="transition-colors duration-300 hover:text-sagegreen-500"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about-me"
            className="transition-colors duration-300 hover:text-sagegreen-500"
          >
            About me
          </Link>
        </li>
        {/* Uncomment and update the Career link as needed */}
        {/* <li>
          <Link 
            href="/career" 
            className="transition-colors duration-300 hover:text-sagegreen-500"
          >
            Career
          </Link>
        </li> */}
        <li>
          <Link
            href="/contact"
            className="transition-colors duration-300 hover:text-sagegreen-500"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
