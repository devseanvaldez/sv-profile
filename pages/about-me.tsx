import React, { useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { LABELS } from "@/enums/labels";
import TwoGridWithImage from "@/layouts/TwoGridWithImage";
import happyHackerAnimation from "@/lottie/happy-hacker.json";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AboutMe = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Head>
        <title>{LABELS.meta.aboutme}</title>
        <meta name="profile" content="sv" />
      </Head>
      <TwoGridWithImage img="/images/sv.JPG">
        {/* Main container with glassmorphism effect */}
        <div
          className="flex flex-col gap-8 text-xl lg:p-20 p-4 font-extralight leading-8 order-2 
                        bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm rounded-lg shadow-xl 
                        transition-all duration-300 hover:scale-105"
        >
          {/* Title & Animation */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <h1
              className="font-bold text-5xl uppercase font-heading tracking-wide 
                           bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text 
                           drop-shadow-md"
            >
              {LABELS.about.title}
            </h1>
            <div className="w-full max-w-[300px]">
              <Lottie animationData={happyHackerAnimation} loop={true} />
            </div>
          </div>

          {/* About Text with See More Button */}
          <div className="space-y-6">
            {LABELS.about.text
              .slice(0, expanded ? LABELS.about.text.length : 1) // ✅ Show only 1 paragraph initially
              .map((label: string, index: number) => (
                <p
                  key={index}
                  className="text-xl font-light max-w-[60rem] leading-[3rem] text-gray-700 dark:text-gray-300"
                >
                  {label}
                </p>
              ))}
          </div>

          {/* See More / See Less Button (Only UI Addition) */}
          {LABELS.about.text.length > 1 && (
            <div className="flex justify-center">
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-sagegreen-600 dark:text-sagegreen-300 font-bold underline 
                           hover:text-sagegreen-800 dark:hover:text-sagegreen-100 transition-colors duration-300"
              >
                {expanded ? "See Less" : "See More"}
              </button>
            </div>
          )}

          {/* Contact Link */}
          <div>
            <Link
              href="/contact"
              className="inline-block text-sagegreen-600 dark:text-sagegreen-300 underline font-bold 
                         hover:text-sagegreen-800 dark:hover:text-sagegreen-100 transition-colors duration-300"
            >
              Let&apos;s connect!
            </Link>
          </div>

          {/* Technologies Section */}
          <div className="flex flex-col mt-10 gap-4">
            <p className="font-bold pb-1 text-2xl text-gray-800 dark:text-gray-200">
              Technologies
            </p>
            <div className="flex flex-wrap gap-4">
              {LABELS.introduction.technologies.map((label: string) => (
                <span
                  key={label}
                  className="bg-sagegreen-400 dark:bg-sagegreen-100 text-white dark:text-black 
                             px-3 py-1 rounded-md shadow hover:scale-105 transition-transform duration-300"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          <Footer />
        </div>
      </TwoGridWithImage>
    </>
  );
};

export default AboutMe;
