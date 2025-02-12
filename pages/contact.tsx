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
  const [copied, setCopied] = useState(false);

  // Copy phone number to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(LABELS.contact.number);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset "Copied!" after 2 seconds
  };

  // Handle form submission
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);

    // Get current date and time in ISO format
    const dateTime = new Date().toISOString(); // Ensures API compatibility

    try {
      const response = await fetch(FORM_API_KEY, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: [
            {
              full_name: fullName || "Anonymous",
              email: email || "No Email",
              message: message || "No Message",
              dateTime: dateTime, // Store date and time in the API Spreadsheet
            },
          ],
        }),
      });

      if (response.ok) {
        alert(
          `✅ Message Sent Successfully!\n\n📅 Date: ${new Date(
            dateTime
          ).toLocaleString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })}\n📝 ${
            fullName
              ? `Thank you, ${fullName}! Looking forward to chatting with you soon!`
              : "Thank you! Looking forward to chatting with you soon!"
          }`
        );
        setFullName("");
        setEmail("");
        setMessage("");
      } else {
        alert("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("⚠️ An error occurred. Please try again later.");
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
                     bg-white/80 dark:bg-gray-900/50 backdrop-blur-xl rounded-xl shadow-xl 
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
            <p className="font-bold flex items-center gap-2">
              <span className="font-normal text-green-600 dark:text-green-300">
                Email:
              </span>{" "}
              <a
                href={`mailto:${LABELS.contact.email}`}
                className="text-blue-600 dark:text-[#60a5fa] hover:text-blue-500 dark:hover:text-[#93c5fd] 
               transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                {LABELS.contact.email}
              </a>
            </p>

            <p
              className="font-bold flex items-center gap-2 cursor-pointer"
              onClick={copyToClipboard}
            >
              <span className="font-normal text-green-600 dark:text-green-300">
                Telephone:
              </span>{" "}
              <span className="text-black dark:text-white hover:text-green-500 dark:hover:text-[#FACC15] transition">
                {LABELS.contact.number}
              </span>
              {copied && (
                <span className="text-green-600 dark:text-green-400 text-sm ml-2 transition-opacity duration-500">
                  Copied!
                </span>
              )}
            </p>
          </div>

          {/* Contact Form */}
          <form
            className="flex flex-col gap-y-6 mt-10 lg:text-xl bg-white/80 dark:bg-gray-900/50 backdrop-blur-xl 
             shadow-xl rounded-xl p-6 lg:p-10 border border-gray-200 dark:border-gray-700"
            onSubmit={onSubmit}
          >
            {/* Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                className="border border-gray-300 dark:border-gray-600 rounded-lg px-5 py-4 w-full 
                 text-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
                 focus:ring-4 focus:ring-green-400 dark:focus:ring-green-300 transition-all 
                 placeholder-gray-400 dark:placeholder-gray-500 shadow-md"
                placeholder="Enter your full name"
                name="full_name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                disabled={isSending}
              />
              <input
                type="email"
                className="border border-gray-300 dark:border-gray-600 rounded-lg px-5 py-4 w-full 
                 text-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
                 focus:ring-4 focus:ring-green-400 dark:focus:ring-green-300 transition-all 
                 placeholder-gray-400 dark:placeholder-gray-500 shadow-md"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSending}
              />
            </div>

            {/* Message Field */}
            <textarea
              className="border border-gray-300 dark:border-gray-600 rounded-lg px-5 py-4 w-full 
               text-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
               focus:ring-4 focus:ring-green-400 dark:focus:ring-green-300 transition-all 
               placeholder-gray-400 dark:placeholder-gray-500 shadow-md resize-none"
              placeholder="How can I help you today?"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isSending}
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-green-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg text-lg 
               transition-all duration-300 hover:bg-green-700 hover:scale-105 
               focus:ring-4 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-green-300
               flex justify-center items-center"
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
