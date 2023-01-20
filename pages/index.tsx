import Head from "next/head";
import { LABELS } from "@/enums/labels";
import TwoGridWithImage from "@/layouts/TwoGridWithImage";
import Lottie from "lottie-react";
import designerBuildingWebsiteAnimation from "@/lottie/designer-building-website.json";
import webDesignLayoutAnimation from "@/lottie/web-design-layout.json";
import userInterfaceResearchAnimation from "@/lottie/user-interface-research.json";
import Navigation from "@/components/Navigation";
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
          <div className="xl:py-4">
            <p className="uppercase font-bold text-6xl pt-10 xl:pt-0  text-sagegreen-600 font-heading dark:text-sagegreen-100">
              {LABELS.introduction.title}
            </p>
            <p className="text-4xl font-light py-6 max-w-[35rem] leading-[3rem]">
              {LABELS.introduction.text}
            </p>
            <div className="flex flex-wrap justify-start items-start text-base font-extralight mb-10 sm-mb-0 sm:mt-10 gap-6 pt-10 xl:pt-0">
              {LABELS.introduction.technologies.map((label) => {
                return (
                  <p
                    className="bg-sagegreen-400 dark:bg-sagegreen-100 text-white dark:text-black px-2 py-1 rounded-md shadow-lg"
                    key={label}
                  >
                    {label}
                  </p>
                );
              })}
            </div>
          </div>
        }
      >
        <div className="text-3xl min-h-screen order-2 sm:p-10 p-4">
          <p className="uppercase font-heading text-5xl xl:text-left text-sagegreen-900 dark:text-sagegreen-100">
            {LABELS.content.title}
          </p>
          <div className="max-w-[1000px] sm:pt-6">
            {/* Content 1  */}
            <div className="grid grid-cols-1 xl:grid xl:grid-cols-2 items-center">
              <Lottie
                animationData={userInterfaceResearchAnimation}
                loop={true}
              />
              <div className="flex flex-col flex-wrap items-start">
                <p className="text-sagegreen-900 lg:text-3xl dark:text-sagegreen-100 font-bold">
                  {LABELS.content["content-1"]}
                </p>
                <p className="text-lg lg:text-xl pt-2 text-sagegreen-900 dark:text-white">
                  {LABELS.content.research}
                </p>
              </div>
            </div>
            {/* content 2 */}
            <div className="grid grid-cols-1 xl:grid xl:grid-cols-2 items-center">
              <div className="flex flex-col flex-wrap items-start order-1 xl:order-[0]">
                <p className="text-sagegreen-900 lg:text-3xl dark:text-sagegreen-100 font-bold">
                  {LABELS.content["content-2"]}
                </p>
                <p className="text-lg lg:text-xl pt-2 text-sagegreen-900 dark:text-white ">
                  {LABELS.content.design}
                </p>
              </div>
              <Lottie animationData={webDesignLayoutAnimation} loop={true} />
            </div>
            {/* content 3 */}
            <div className="grid grid-cols-1 xl:grid xl:grid-cols-2 items-center">
              <Lottie
                animationData={designerBuildingWebsiteAnimation}
                loop={true}
              />
              <div className="flex flex-col flex-wrap items-start">
                <p className="text-sagegreen-900 lg:text-3xl dark:text-sagegreen-100 font-bold">
                  {LABELS.content["content-3"]}
                </p>
                <p className="text-lg lg:text-xl pt-2 text-sagegreen-900 dark:text-white">
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
