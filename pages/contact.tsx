import React, { useEffect, useState } from "react";
import Head from "next/head";
import { LABELS } from "@/enums/labels";
import CircularLoader from "@/components/CircularLoader/CircularLoader";
import TwoGridWithImage from "@/layouts/TwoGridWithImage";
import Footer from "@/components/Footer/Footer";

type Props = {};

const FORM_API_KEY = "https://api.apispreadsheets.com/data/CDINDwxFe40SISDQ/";

const Contact = (props: Props) => {
  const [isSending, setIsSending] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: any) => {
    e.preventDefault();

    if (isSending) {
      return;
    }

    setIsSending(true);

    fetch("https://api.apispreadsheets.com/data/CDINDwxFe40SISDQ/", {
      method: "POST",
      body: JSON.stringify({
        data: {
          email: email,
          message: message,
          full_name: fullName,
        },
      }),
    }).then((res) => {
      if (res.status === 201) {
        // SUCCESS
      } else {
        // ERROR
      }
      setIsSending(false);
    });
  };

  return (
    <>
      <Head>
        <title>{LABELS.meta.contact}</title>
        <meta name="profile" content="sv" />
      </Head>
      <TwoGridWithImage img="/images/contact3.jpg">
        <div className="flex flex-col flex-wrap justify-start gap-8 lg:p-20 pt-6 pb-20 p-4 font-extralight order-2">
          <p className="font-bold font-heading uppercase text-5xl sm:pb-2 text-sagegreen-600 dark:text-sagegreen-100">
            {LABELS.contact.title}
          </p>
          {LABELS.contact.text.map((label: string) => {
            return (
              <p className="lg:text-xl" key={label}>
                {label}
              </p>
            );
          })}
          <div className="flex flex-col flex-wrap gap-y-4 pt-6 lg:text-xl ">
            <p className="font-bold lg:text-xl">
              <span className="font-normal  text-sagegreen-600 dark:text-sagegreen-100  inline-block w-[8rem]">
                Email:
              </span>
              {LABELS.contact.email}
            </p>
            <p className="font-bold inline-block">
              <span className="font-normal text-sagegreen-600 dark:text-sagegreen-100  inline-block w-[8rem]">
                Telephone:
              </span>
              {LABELS.contact.number}
            </p>
          </div>
          {/* form */}
          <form
            className="flex flex-col gap-y-4 mt-10 lg:text-xl"
            onSubmit={onSubmit}
          >
            <div className="grid grid-cols-2 gap-x-4">
              <input
                className="border rounded-md px-4 py-2 w-full lg:text-xl dark:bg-custom-gray-900 dark:border-transparent dark:text-white dark:bg-opacity-30"
                placeholder="John Doe"
                name="full_name"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
                disabled={isSending}
              />
              <input
                className="border rounded-md px-4 py-2 w-full lg:text-xl dark:bg-custom-gray-900 dark:border-transparent dark:text-white dark:bg-opacity-30"
                placeholder="johndoe@gmail.com"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                disabled={isSending}
              />
            </div>
            <textarea
              className="border rounded-md px-4 py-2 w-full lg:text-xl dark:bg-custom-gray-900 dark:border-transparent dark:text-white dark:bg-opacity-30 resize-none"
              placeholder="Message..."
              rows={4}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              disabled={isSending}
            />
            <button
              className="bg-sagegreen-600 text-white font-heading p-2 rounded-md shadow-lg lg:text-xl"
              disabled={isSending}
            >
              {isSending ? <CircularLoader /> : "Submit"}
            </button>
          </form>
          <Footer />
        </div>
      </TwoGridWithImage>
    </>
  );
};

export default Contact;
