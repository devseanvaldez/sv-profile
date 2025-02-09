// components/BrandLogo.tsx
import React from "react";

const BrandLogo = () => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-lg" // Tailwind drop shadow, optional
    >
      <defs>
        <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#34d399" /> {/* Light SageGreen */}
          <stop offset="100%" stopColor="#059669" /> {/* Darker SageGreen */}
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="45" fill="url(#logoGradient)" />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        fill="white"
        fontSize="40"
        fontFamily="Montserrat, sans-serif"
        dy=".35em"
      >
        SV
      </text>
    </svg>
  );
};

export default BrandLogo;
