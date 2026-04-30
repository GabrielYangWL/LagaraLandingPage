import { useEffect } from "react";
import { useRouter } from "next/router";
import { LocaleProvider } from "@/contexts/LocaleContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

function ScrollToHashAfterRoute() {
  const router = useRouter();

  useEffect(() => {
    const scrollToHash = (url: string) => {
      const hash = url.split("#")[1];
      if (!hash) return;
      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      });
    };

    const handleComplete = (url: string) => scrollToHash(url);
    router.events.on("routeChangeComplete", handleComplete);
    return () => router.events.off("routeChangeComplete", handleComplete);
  }, [router.events]);

  return null;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LocaleProvider>
      <ScrollToHashAfterRoute />
      <Component {...pageProps} />
    </LocaleProvider>
  );
}
