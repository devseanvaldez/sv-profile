import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="font-footer text-sagegreen-900 dark:text-sagegreen-100 text-center text-sm lg:text-base py-6 border-t border-sagegreen-400 dark:border-sagegreen-600">
      <p>
        &copy; {new Date().getFullYear()} -{" "}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=dev.seanvaldez@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline transition-colors duration-300"
        >
          dev.seanvaldez@gmail.com
        </a>
      </p>
      <p className="mt-2">All rights reserved.</p>
    </footer>
  );
};

export default Footer;
