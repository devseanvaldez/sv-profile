import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="font-footer text-sagegreen-900 dark:text-sagegreen-100 text-center text-sm lg:text-base py-6 border-t border-sagegreen-400 dark:border-sagegreen-600">
      <p>
        &copy; {new Date().getFullYear()} -{" "}
        <a
          href={`mailto:dev.seanvaldez@gmail.com`}
          className="hover:underline text-sagegreen-900 dark:text-sagegreen-100 hover:text-sagegreen-700 dark:hover:text-sagegreen-300 transition"
        >
          dev.seanvaldez@gmail.com
        </a>
      </p>
      <p className="mt-2">All rights reserved.</p>
    </footer>
  );
};

export default Footer;
