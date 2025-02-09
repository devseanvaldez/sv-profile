import React, { useState } from "react";
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

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSending) {
      return;
    }

    setIsSending(true);

    fetch(FORM_API_KEY, {
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
        // SUCCESS: Optionally clear fields or show a success message.
      } else {
        // ERROR: Optionally display an error message.
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
        {/* Outer container with glassmorphism, rounded corners, shadow, and a hover scale effect */}
        <div
          className="flex flex-col gap-8 lg:p-20 pt-6 pb-20 p-4 font-extralight order-2
                     bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm rounded-lg shadow-xl
                     transition-transform duration-300 hover:scale-105"
        >
          {/* Gradient Title with drop shadow */}
          <h1
            className="font-bold font-heading uppercase text-5xl sm:pb-2
                       bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text drop-shadow-md"
          >
            {LABELS.contact.title}
          </h1>

          {/* Introductory Text */}
          <div className="space-y-4">
            {LABELS.contact.text.map((label: string, index: number) => (
              <p
                key={index}
                className="lg:text-xl text-gray-700 dark:text-gray-300"
              >
                {label}
              </p>
            ))}
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-4 pt-6 lg:text-xl">
            <p className="font-bold lg:text-xl">
              <span className="font-normal text-sagegreen-600 dark:text-sagegreen-100 inline-block w-32">
                Email:
              </span>
              {LABELS.contact.email}
            </p>
            <p className="font-bold inline-block">
              <span className="font-normal text-sagegreen-600 dark:text-sagegreen-100 inline-block w-32">
                Telephone:
              </span>
              {LABELS.contact.number}
            </p>
          </div>

          {/* Contact Form */}
          <form
            className="flex flex-col gap-y-4 mt-10 lg:text-xl"
            onSubmit={onSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                className="border rounded-md px-4 py-2 w-full lg:text-xl dark:bg-custom-gray-900 dark:border-transparent dark:text-white dark:bg-opacity-30"
                placeholder="John Doe"
                name="full_name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                disabled={isSending}
              />
              <input
                type="email"
                className="border rounded-md px-4 py-2 w-full lg:text-xl dark:bg-custom-gray-900 dark:border-transparent dark:text-white dark:bg-opacity-30"
                placeholder="johndoe@gmail.com"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSending}
              />
            </div>
            <textarea
              className="border rounded-md px-4 py-2 w-full lg:text-xl dark:bg-custom-gray-900 dark:border-transparent dark:text-white dark:bg-opacity-30 resize-none"
              placeholder="Message..."
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isSending}
            />
            <button
              type="submit"
              className="bg-sagegreen-600 text-white font-heading p-2 rounded-md shadow-lg lg:text-xl transition-colors duration-300 hover:bg-sagegreen-700"
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
