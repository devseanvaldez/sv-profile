import Header from "@/components/Header";
import BrandLogo from "@/components/BrandLogo/BrandLogo";
import Navigation from "@/components/Navigation";
import React, { ReactNode } from "react";

type Props = {
  img?: string;
  children: ReactNode;
  leftChild?: ReactNode;
};

const TwoGridWithImage = ({ img, children, leftChild }: Props) => {
  return (
    <div className="sm:min-h-screen grid sm:grid-cols-2 items-start bg-gradient-to-t xl:bg-gradient-to-l from-sagegreen-500">
      {/* Left Column - Image & Branding Section */}
      <div className="relative sm:h-screen sm:sticky top-0 z-10 order-1 overflow-hidden flex flex-col">
        {/* Background Image Layer */}
        {img && (
          <div className="absolute inset-0 z-0">
            <img
              src={img}
              className="object-cover object-right w-full h-full min-h-[355px] sm:min-h-[400px]"
              alt="Background"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 dark:bg-opacity-40"></div>
          </div>
        )}

        {/* Content Layer */}
        <div className="relative z-20 flex flex-col justify-between h-full sm:p-10 p-6">
          {/* Branding and Header (Now with Proper Spacing) */}
          <div className="flex flex-row justify-between items-center w-full sm:mb-6 mb-4">
            <BrandLogo /> {/* Brand Logo */}
            <Header className="ml-4 sm:ml-8" /> {/* Header - Adjusted margin */}
          </div>

          {/* Left Side Content - Properly Aligned & Spaced */}
          <div className="relative flex-grow flex items-center justify-center sm:mt-12 mt-16 z-30">
            {leftChild}
          </div>

          {/* Navigation - Properly Positioned */}
          <div className="w-full flex justify-center sm:justify-start pt-8 sm:pt-12">
            <Navigation />
          </div>
        </div>
      </div>

      {/* Right Column */}
      {children}
    </div>
  );
};

export default TwoGridWithImage;
