import React, { useState } from "react";
import Head from "next/head";
import { LABELS } from "@/enums/labels";
import TwoGridWithImage from "@/layouts/TwoGridWithImage";
import Lottie from "lottie-react";
import happyHackerAnimation from "@/lottie/happy-hacker.json";
import Link from "next/link";

type Props = {};

const AboutMe = (props: Props) => {
  return (
    <>
      <Head>
        <title>{LABELS.meta.aboutme}</title>
        <meta name="profile" content="sv" />
      </Head>
      <TwoGridWithImage img="/images/sv.JPG">
        <div className="flex flex-col flex-wrap justify-start text-xl item lg:p-20 p-4 font-extralight leading-8 order-2 dark:">
          <div className="flex items-end justify-between">
            <p className="lg:pb-10 pb-4 font-bold text-5xl uppercase font-heading text-sagegreen-600 dark:text-sagegreen-100">
              {LABELS.about.title}
            </p>
            <div className="max-w-[300px]">
              <Lottie animationData={happyHackerAnimation} loop={true} />
            </div>
          </div>
          {LABELS.about.text.map((label: string) => {
            return (
              <p
                className="text-xl font-light max-w-[60rem] leading-[3rem]"
                key={label}
              >
                {label}
              </p>
            );
          })}
          <Link
            className="text-dustyblue pt-4 underline font-bold"
            href="/contact"
          >
            Let&apos;s connect!
          </Link>
          <div className="flex flex-wrap flex-col mt-10">
            <p className="font-bold pb-1 text-2xl">technologies</p>
            <div className="flex flex-wrap justify-start items-start text-base font-extralight gap-6 pt-6 pb-6">
              {LABELS.introduction.technologies.map((label: string) => {
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
        </div>
      </TwoGridWithImage>
    </>
  );
};

export default AboutMe;
