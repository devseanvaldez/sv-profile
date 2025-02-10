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
          className="flex flex-col gap-8 text-xl lg:p-16 p-6 font-light leading-8 order-2 
                        bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-xl 
                        transition-all duration-300 will-change-transform hover:scale-[1.00]"
        >
          {/* Title & Animation */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <h1
              className="font-bold text-5xl uppercase font-heading tracking-wide 
                           bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text 
                           drop-shadow-md text-center lg:text-left"
            >
              {LABELS.about.title}
            </h1>
            <div className="w-full max-w-[300px]">
              <Lottie animationData={happyHackerAnimation} loop={true} />
            </div>
          </div>

          {/* About Text with "See More" Toggle */}
          <div className="space-y-6 transition-all duration-300">
            {LABELS.about.text
              .slice(0, expanded ? LABELS.about.text.length : 1)
              .map((label: string, index: number) => (
                <p
                  key={index}
                  className="text-lg font-light max-w-[60rem] leading-[2.5rem] text-gray-700 dark:text-gray-300"
                >
                  {label}
                </p>
              ))}
          </div>

          {/* See More / See Less Button */}
          {LABELS.about.text.length > 1 && (
            <div className="flex justify-center">
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-green-600 dark:text-green-300 font-semibold underline 
                           hover:text-green-800 dark:hover:text-green-100 transition-colors duration-300"
              >
                {expanded ? "See Less" : "See More"}
              </button>
            </div>
          )}

          {/* Technologies Section */}
          <div className="flex flex-col mt-10 gap-4">
            <p className="font-bold pb-2 text-2xl text-gray-800 dark:text-gray-200 text-center">
              Technologies
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {LABELS.about.technologies.map((label: string) => (
                <span
                  key={label}
                  className="bg-green-400 dark:bg-green-100 text-white dark:text-black 
                             px-3 py-1 rounded-md shadow hover:scale-105 transition-transform duration-300"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mt-10">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 text-center mb-6">
              Testimonials
            </h2>
            <div className="space-y-6">
              {LABELS.about.testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="testimonial-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg 
                   transition-all duration-300 will-change-transform hover:scale-105 border-l-4 
                   border-green-500 dark:border-green-300"
                >
                  <p className="text-lg italic text-gray-700 dark:text-gray-300">
                    &ldquo;{testimonial.feedback}&rdquo;
                  </p>
                  <p className="mt-4 font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {testimonial.year}
                  </p>

                  {/* 🎥 Video for TheOne Travel and Tours */}
                  {testimonial.company.includes("TheOne") && (
                    <div className="mt-4 flex justify-center">
                      <video
                        controls
                        className="w-full max-w-lg rounded-lg shadow-lg"
                      >
                        <source
                          src="/videos/TheOneTravelAndTours.webm"
                          type="video/webm"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Let's Connect Button */}
          <div className="flex justify-center mt-8">
            <Link
              href="/contact"
              className="inline-block bg-green-500 dark:bg-green-600 text-white px-6 py-3 rounded-lg 
                         shadow-lg text-lg font-bold uppercase tracking-wide hover:bg-green-600 
                         dark:hover:bg-green-700 transition-all duration-300"
            >
              Let&apos;s Connect!
            </Link>
          </div>

          <Footer />
        </div>
      </TwoGridWithImage>
    </>
  );
};

export default AboutMe;
