import React, { useState } from "react";
import Head from "next/head";
import { LABELS } from "@/enums/labels";
import CircularLoader from "@/components/CircularLoader/CircularLoader";
import TwoGridWithImage from "@/layouts/TwoGridWithImage";
import Footer from "@/components/Footer/Footer";

const FORM_API_KEY = "https://api.apispreadsheets.com/data/CDINDwxFe40SISDQ/";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);

    try {
      const response = await fetch(FORM_API_KEY, {
        method: "POST",
        body: JSON.stringify({
          data: {
            email: email,
            message: message,
            full_name: fullName,
          },
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 201) {
        alert("Message sent successfully!");
        setFullName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <Head>
        <title>{LABELS.meta.contact}</title>
        <meta name="profile" content="sv" />
      </Head>
      <TwoGridWithImage img="/images/contact3.jpg">
        {/* Glassmorphism Styled Container */}
        <div
          className="flex flex-col gap-8 lg:p-16 p-6 font-light order-2 
                     bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-xl shadow-xl 
                     transition-all duration-300 will-change-transform hover:scale-[1.00]"
        >
          {/* Title */}
          <h1
            className="font-bold font-heading uppercase text-5xl sm:pb-2 text-center
                       bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text drop-shadow-md"
          >
            {LABELS.contact.title}
          </h1>

          {/* Contact Description */}
          <div className="space-y-4 text-center">
            {LABELS.contact.text.map((label, index) => (
              <p
                key={index}
                className="lg:text-xl text-gray-700 dark:text-gray-300"
              >
                {label}
              </p>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center gap-4 pt-6 lg:text-xl">
            <p className="font-bold">
              <span className="font-normal text-green-600 dark:text-green-300">
                Email:
              </span>{" "}
              {LABELS.contact.email}
            </p>
            <p className="font-bold">
              <span className="font-normal text-green-600 dark:text-green-300">
                Telephone:
              </span>{" "}
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
                className="border border-gray-300 dark:border-gray-600 rounded-md px-4 py-3 w-full 
                           text-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
                           focus:ring-2 focus:ring-green-400 dark:focus:ring-green-300 
                           transition-all duration-300"
                placeholder="John Doe"
                name="full_name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                disabled={isSending}
              />
              <input
                type="email"
                className="border border-gray-300 dark:border-gray-600 rounded-md px-4 py-3 w-full 
                           text-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
                           focus:ring-2 focus:ring-green-400 dark:focus:ring-green-300 
                           transition-all duration-300"
                placeholder="johndoe@gmail.com"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSending}
              />
            </div>
            <textarea
              className="border border-gray-300 dark:border-gray-600 rounded-md px-4 py-3 w-full 
                         text-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
                         focus:ring-2 focus:ring-green-400 dark:focus:ring-green-300 
                         transition-all duration-300 resize-none"
              placeholder="Your message..."
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isSending}
            />
            <button
              type="submit"
              className="bg-green-600 text-white font-bold p-3 rounded-md shadow-lg text-lg 
                         transition-all duration-300 hover:bg-green-700 focus:ring-2 
                         focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-green-300"
              disabled={isSending}
            >
              {isSending ? <CircularLoader /> : "Send Message"}
            </button>
          </form>

          <Footer />
        </div>
      </TwoGridWithImage>
    </>
  );
};

export default Contact;
