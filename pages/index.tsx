import Head from "next/head";
import { LABELS } from "@/enums/labels";
import TwoGridWithImage from "@/layouts/TwoGridWithImage";
import dynamic from "next/dynamic";

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import designerBuildingWebsiteAnimation from "@/lottie/designer-building-website.json";
import webDesignLayoutAnimation from "@/lottie/web-design-layout.json";
import userInterfaceResearchAnimation from "@/lottie/user-interface-research.json";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>{LABELS.meta.home}</title>
        <meta name="profile" content="sv" />
      </Head>
      <TwoGridWithImage
        leftChild={
          <div className="xl:py-4 space-y-6 p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg shadow-lg">
            <p
              className="uppercase font-bold text-6xl pt-10 xl:pt-0 text-sagegreen-600 font-heading 
                         bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text tracking-wide"
            >
              {LABELS.introduction.title}
            </p>
            <p className="text-4xl font-light py-6 max-w-[35rem] leading-[3rem] text-gray-700 dark:text-gray-300">
              {LABELS.introduction.text}
            </p>
            <div className="flex flex-wrap gap-4">
              {LABELS.introduction.technologies.map((label) => (
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
        }
      >
        <div className="min-h-screen order-2 sm:p-10 p-4 space-y-12">
          {/* Enhanced CONTENT headline */}
          <p
            className="uppercase font-heading text-5xl xl:text-left mb-8 tracking-wider 
                       bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text 
                       drop-shadow-lg"
          >
            {LABELS.content.title}
          </p>
          <div className="max-w-[1000px] space-y-12">
            {/* Content 1 */}
            <div className="grid grid-cols-1 xl:grid-cols-2 items-center bg-white dark:bg-gray-800/80 backdrop-blur-sm shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center">
                <Lottie
                  animationData={userInterfaceResearchAnimation}
                  loop={true}
                  className="w-full max-w-md"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <p className="text-sagegreen-900 lg:text-3xl dark:text-sagegreen-100 font-bold">
                  {LABELS.content["content-1"]}
                </p>
                <p className="text-lg lg:text-xl text-sagegreen-900 dark:text-white">
                  {LABELS.content.research}
                </p>
              </div>
            </div>
            {/* Content 2 */}
            <div className="grid grid-cols-1 xl:grid-cols-2 items-center bg-white dark:bg-gray-800/80 backdrop-blur-sm shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
              <div className="flex flex-col space-y-4 order-2 xl:order-1">
                <p className="text-sagegreen-900 lg:text-3xl dark:text-sagegreen-100 font-bold">
                  {LABELS.content["content-2"]}
                </p>
                <p className="text-lg lg:text-xl text-sagegreen-900 dark:text-white">
                  {LABELS.content.design}
                </p>
              </div>
              <div className="flex justify-center order-1 xl:order-2">
                <Lottie
                  animationData={webDesignLayoutAnimation}
                  loop={true}
                  className="w-full max-w-md"
                />
              </div>
            </div>
            {/* Content 3 */}
            <div className="grid grid-cols-1 xl:grid-cols-2 items-center bg-white dark:bg-gray-800/80 backdrop-blur-sm shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center">
                <Lottie
                  animationData={designerBuildingWebsiteAnimation}
                  loop={true}
                  className="w-full max-w-md"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <p className="text-sagegreen-900 lg:text-3xl dark:text-sagegreen-100 font-bold">
                  {LABELS.content["content-3"]}
                </p>
                <p className="text-lg lg:text-xl text-sagegreen-900 dark:text-white">
                  {LABELS.content.build}
                </p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </TwoGridWithImage>
    </>
  );
}
