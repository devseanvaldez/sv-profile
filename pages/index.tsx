import Head from "next/head";
import { LABELS } from "@/enums/labels";
import TwoGridWithImage from "@/layouts/TwoGridWithImage";
import Lottie from "lottie-react";
import designerBuildingWebsiteAnimation from "@/lottie/designer-building-website.json";
import webDesignLayoutAnimation from "@/lottie/web-design-layout.json";
import userInterfaceResearchAnimation from "@/lottie/user-interface-research.json";
export default function Home() {
  return (
    <>
      <Head>
        <title>{LABELS.meta.home}</title>
        <meta name="profile" content="sv" />
      </Head>
      <TwoGridWithImage
        leftChild={
          <div className="container sm:py-4">
            <p className="uppercase font-bold text-6xl text-sagegreen-600 font-heading dark:text-sagegreen-100">
              {LABELS.introduction.title}
            </p>
            <p className="text-4xl font-light py-6 max-w-[35rem] leading-[3rem]">
              {LABELS.introduction.text}
            </p>
            <div className="flex flex-wrap justify-start items-start text-base font-extralight mb-10 sm-mb-0 sm:mt-10 gap-6">
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
        <div className="bg-sagegreen-100 text-white text-3xl min-h-screen order-2 lg:p-20 px-2 py-4 dark:bg-black">
          <p className="uppercase font-heading text-5xl">
            {LABELS.content.title}
          </p>
          <div className="max-w-[1000px] pt-6">
            {/* Content 1  */}
            <div className="grid grid-cols-2 items-center">
              <Lottie
                animationData={userInterfaceResearchAnimation}
                loop={true}
              />
              <div className="flex flex-col flex-wrap items-start">
                <p>{LABELS.content["content-1"]}</p>
                <p className="text-lg pt-2">{LABELS.content.research}</p>
              </div>
            </div>
            {/* content 2 */}
            <div className="grid grid-cols-2 items-center pt-4">
              <div className="flex flex-col flex-wrap items-start">
                <p>{LABELS.content["content-2"]}</p>
                <p className="text-lg pt-2">{LABELS.content.design}</p>
              </div>
              <Lottie animationData={webDesignLayoutAnimation} loop={true} />
            </div>
            {/* content 3 */}
            <div className="grid grid-cols-2 items-center pt-4">
              <Lottie
                animationData={designerBuildingWebsiteAnimation}
                loop={true}
              />
              <div className="flex flex-col flex-wrap items-start">
                <p>{LABELS.content["content-3"]}</p>
                <p className="text-lg pt-2">{LABELS.content.build}</p>
              </div>
            </div>
          </div>
        </div>
      </TwoGridWithImage>
    </>
  );
}
