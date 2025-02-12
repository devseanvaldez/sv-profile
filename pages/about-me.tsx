import React, { useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { LABELS } from "@/enums/labels";
import TwoGridWithImage from "@/layouts/TwoGridWithImage";
import happyHackerAnimation from "@/lottie/happy-hacker.json";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";

// Importing React Icons for Technologies
import { FaReact, FaGitAlt } from "react-icons/fa6";
import {
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiAxios,
  SiMui,
  SiBootstrap,
} from "react-icons/si";

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// ⭐ Helper Function to Render Star Ratings
const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <span className="text-yellow-400 text-2xl">
      {"★".repeat(fullStars)}
      {halfStar && "☆"}
      {"☆".repeat(emptyStars)}
    </span>
  );
};

// Mapping Technologies to Icons
const technologyIcons: Record<string, JSX.Element> = {
  ReactJS: <FaReact className="text-blue-500 dark:text-blue-400 text-xl" />,
  NextJS: <SiNextdotjs className="text-gray-900 dark:text-gray-100 text-xl" />,
  "Redux Toolkit": (
    <SiRedux className="text-purple-600 dark:text-purple-400 text-xl" />
  ),
  "Tailwind CSS": (
    <SiTailwindcss className="text-blue-400 dark:text-blue-300 text-xl" />
  ),
  JavaScript: (
    <SiJavascript className="text-yellow-500 dark:text-yellow-400 text-xl" />
  ),
  TypeScript: (
    <SiTypescript className="text-blue-500 dark:text-blue-400 text-xl" />
  ),
  Git: <FaGitAlt className="text-red-600 dark:text-red-400 text-xl" />,
  Axios: <SiAxios className="text-blue-600 dark:text-blue-400 text-xl" />,
  "Material-UI": <SiMui className="text-blue-500 dark:text-blue-400 text-xl" />,
  Reactstrap: (
    <SiBootstrap className="text-blue-700 dark:text-blue-400 text-xl" />
  ),
};

const AboutMe = () => {
  const [expanded, setExpanded] = useState(false);

  // Testimonials with ratings
  const testimonialsWithRatings = [
    { ...LABELS.about.testimonials[0], rating: 5 }, // Jerome - 5 stars
    { ...LABELS.about.testimonials[1], rating: 4.5 }, // Joseph Alde - 4.5 stars
  ];

  return (
    <>
      <Head>
        <title>{LABELS.meta.aboutme}</title>
        <meta name="profile" content="sv" />
      </Head>
      <TwoGridWithImage img="/images/sv.JPG">
        {/* Main Container with Glassmorphism Effect */}
        <div
          className="flex flex-col gap-8 text-xl lg:p-16 p-6 font-light leading-8 order-2 
                     bg-white/80 dark:bg-gray-900/50 backdrop-blur-xl rounded-xl shadow-xl 
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

          {/* Technologies Section with Icons */}
          <div className="flex flex-col mt-10 gap-4">
            <p className="font-bold pb-2 text-2xl text-gray-800 dark:text-gray-200 text-center">
              Technologies
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {LABELS.about.technologies.map((tech) => (
                <span
                  key={tech}
                  className="flex items-center gap-2 px-4 py-2 rounded-2xl shadow-lg 
           bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
           border border-gray-200 dark:border-gray-700
           hover:bg-gray-50 dark:hover:bg-gray-700 
           hover:shadow-xl hover:-translate-y-1 
           transition-all duration-300 ease-in-out"
                >
                  {technologyIcons[tech] ?? <SiJavascript />} {tech}
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
              {testimonialsWithRatings.map((testimonial, index) => (
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
                  <p className="mt-2">{renderStars(testimonial.rating)}</p>

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

          {/* 📩 Reach Out Now Button */}
          <div className="flex justify-center mt-10">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-blue-600 text-white font-bold shadow-lg hover:bg-blue-700 transition-all"
            >
              📩 Reach Out Now
            </Link>
          </div>

          <Footer />
        </div>
      </TwoGridWithImage>
    </>
  );
};

export default AboutMe;
