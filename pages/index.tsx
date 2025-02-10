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
          <div
            className="xl:py-4 space-y-6 p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm 
                      rounded-xl shadow-xl hover:scale-[1.02] transition-transform duration-300"
          >
            <p
              className="uppercase font-bold text-6xl pt-10 xl:pt-0 text-sagegreen-600 font-heading 
                         bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text tracking-wide"
            >
              {LABELS.introduction.title}
            </p>
            <p className="text-3xl font-light py-6 max-w-[35rem] leading-[3rem] text-gray-700 dark:text-gray-300">
              {LABELS.introduction.text}
            </p>
            <div className="flex flex-wrap gap-4">
              {LABELS.introduction.technologies.map((label) => (
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
        }
      >
        <div className="min-h-screen order-2 sm:p-10 p-4 space-y-12">
          {/* Enhanced CONTENT headline */}
          <p
            className="uppercase font-heading text-5xl lg:text-center text-center mb-10 tracking-wider 
                       bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text 
                       drop-shadow-lg"
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
