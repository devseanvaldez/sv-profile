import Header from "@/components/Header";
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
      <div className="min-h-[30rem] lg:min-h-[10rem] sm:h-screen dark:grayscale relative sm:sticky top-0 z-10 overflow-hidden order-1">
        <div className="absolute -inset-0 z-10">
          <div className="absolute inset-0 dark:bg-opacity-20"></div>
          {img && (
            <img
              src={img}
              className="object-cover object-right w-full h-full"
              alt=""
            />
          )}
        </div>
        <div className="flex flex-col h-full relative justify-between z-30 sm:p-10 p-4">
          <Header />
          {leftChild}
          <Navigation />
        </div>
      </div>
      {children}
    </div>
  );
};

export default TwoGridWithImage;
