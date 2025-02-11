import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the homepage on refresh
    if (typeof window !== "undefined") {
      router.replace("/");
    }
  }, []);

  return (
    <ThemeProvider attribute="class">
      <div className="dark:bg-black text-black dark:text-white">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
