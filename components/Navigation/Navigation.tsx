import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Navigation: React.FC = () => {
  const router = useRouter(); // Get the current route

  // Check if we are on the About Me or Contact page
  const isWhiteOnlyPage =
    router.pathname === "/about-me" || router.pathname === "/contact";

  return (
    <nav className="text-xl">
      <ul className="flex items-center gap-x-10 font-light">
        {[
          { name: "Home", path: "/" },
          { name: "About Me", path: "/about-me" },
          { name: "Contact", path: "/contact" },
        ].map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className={`relative px-3 py-1 transition-all duration-300 rounded-md
                ${
                  router.pathname === item.path
                    ? "text-green-700 dark:text-green-400 font-semibold bg-green-100 dark:bg-green-900"
                    : isWhiteOnlyPage
                    ? "text-white hover:text-green-400" // White text but green on hover
                    : "text-gray-800 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-gray-200 dark:hover:bg-gray-700"
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
