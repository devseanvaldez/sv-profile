import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="dark:bg-black text-black dark:text-white">
      <Component {...pageProps} />
    </div>
  );
}
