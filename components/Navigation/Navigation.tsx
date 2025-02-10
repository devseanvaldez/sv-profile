import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Navigation: React.FC = () => {
  const router = useRouter();

  // Apply white-only text for About and Contact pages
  const isWhiteOnlyPage =
    router.pathname === "/about-me" || router.pathname === "/contact";

  return (
    <nav className="text-xl">
      <ul className="flex justify-center sm:justify-start items-center gap-x-4 sm:gap-x-12 font-light text-base sm:text-lg">
        {[
          { name: "Home", path: "/" },
          { name: "About Me", path: "/about-me" },
          { name: "Contact", path: "/contact" },
        ].map((item) => (
          <li key={item.path} className="relative">
            <Link
              href={item.path}
              className={`relative px-4 py-2 transition-all duration-300 rounded-md
                ${
                  router.pathname === item.path
                    ? "text-green-700 dark:text-green-400 font-semibold bg-green-100 dark:bg-green-900"
                    : isWhiteOnlyPage
                    ? "text-white hover:text-green-400"
                    : "text-gray-900 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                }`}
            >
              {item.name}
              {router.pathname === item.path && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-green-700 dark:bg-green-400 transition-all duration-300"></span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
