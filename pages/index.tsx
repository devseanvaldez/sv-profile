import Head from "next/head";
import { LABELS } from "@/enums/labels";
import TwoGridWithImage from "@/layouts/TwoGridWithImage";
import dynamic from "next/dynamic";

// Importing React Icons for Technologies
import { FaReact, FaGitAlt } from "react-icons/fa6";
import {
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiJavascript,
  SiTypescript, // ✅ Added TypeScript
  SiAxios,
  SiMui,
  SiBootstrap,
} from "react-icons/si";

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import designerBuildingWebsiteAnimation from "@/lottie/designer-building-website.json";
import webDesignLayoutAnimation from "@/lottie/web-design-layout.json";
import userInterfaceResearchAnimation from "@/lottie/user-interface-research.json";
import Footer from "@/components/Footer/Footer";

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
  ), // ✅ Added TypeScript
  Git: <FaGitAlt className="text-red-600 dark:text-red-400 text-xl" />,
  Axios: <SiAxios className="text-blue-600 dark:text-blue-400 text-xl" />,
  "Material-UI": <SiMui className="text-blue-500 dark:text-blue-400 text-xl" />,
  Reactstrap: (
    <SiBootstrap className="text-blue-700 dark:text-blue-400 text-xl" />
  ),
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{LABELS.meta.home}</title>
        <meta name="profile" content="sv" />
      </Head>
      <TwoGridWithImage
        leftChild={
          <div
            className="xl:py-4 space-y-4 p-4 sm:p-6 bg-white/80 dark:bg-gray-900/50 backdrop-blur-xl 
          rounded-xl shadow-xl opacity-0 animate-fade-in transition-all duration-500"
          >
            <p
              className="uppercase font-extrabold text-6xl font-heading 
             tracking-wide animate-pulse transition-all duration-700
             bg-gradient-to-br from-green-400 via-emerald-500 to-green-600
             dark:from-lime-300 dark:via-green-400 dark:to-emerald-500
             text-transparent bg-clip-text
             drop-shadow-md dark:drop-shadow-lg"
            >
              {LABELS.introduction.title}
            </p>
            <p className="text-3xl font-light py-6 max-w-[35rem] leading-[3rem] text-gray-700 dark:text-gray-300">
              {LABELS.introduction.text}
            </p>

            {/* Technologies with Icons */}
            <div className="flex flex-wrap gap-4">
              {LABELS.introduction.technologies.map((tech) => (
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
        }
      >
        <div className="min-h-screen order-2 p-4 sm:p-10 space-y-6 sm:space-y-12">
          {/* Enhanced CONTENT headline */}
          <p
            className="uppercase font-heading text-4xl sm:text-5xl text-center mb-6 sm:mb-10 tracking-wide 
             bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text 
             drop-shadow-md"
          >
            {LABELS.content.title}
          </p>
          <div className="max-w-[1000px] space-y-12">
            {/* Content Cards */}
            {[
              {
                title: LABELS.content["content-1"],
                description: LABELS.content.research,
                animation: userInterfaceResearchAnimation,
              },
              {
                title: LABELS.content["content-2"],
                description: LABELS.content.design,
                animation: webDesignLayoutAnimation,
                reversed: true, // ✅ This will flip the order for alternating design
              },
              {
                title: LABELS.content["content-3"],
                description: LABELS.content.build,
                animation: designerBuildingWebsiteAnimation,
              },
            ].map((content, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 xl:grid-cols-2 items-center bg-white dark:bg-gray-800/80 
                            backdrop-blur-sm shadow-lg rounded-xl p-6 hover:scale-[1.02] transition-transform duration-300 
                            ${content.reversed ? "xl:flex-row-reverse" : ""}`}
              >
                <div className="flex justify-center">
                  <Lottie
                    animationData={content.animation}
                    loop={true}
                    className="w-full max-w-md"
                  />
                </div>
                <div className="flex flex-col space-y-4">
                  <p className="text-green-900 lg:text-3xl dark:text-green-100 font-bold">
                    {content.title}
                  </p>
                  <p className="text-lg lg:text-xl text-gray-700 dark:text-white">
                    {content.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Footer />
        </div>
      </TwoGridWithImage>
    </>
  );
}
