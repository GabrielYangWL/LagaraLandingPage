import Head from "next/head";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Services from "@/components/sections/Services";
import Outcomes from "@/components/sections/Outcomes";
import Process from "@/components/sections/Process";
import Differentiators from "@/components/sections/Differentiators";
import CTASection from "@/components/sections/CTASection";
import { useLocale } from "@/contexts/LocaleContext";

export default function Home() {
  const { copy } = useLocale();

  return (
    <>
      <Head>
        <title>{copy.meta.homeTitle}</title>
        <meta name="description" content={copy.meta.homeDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={copy.meta.homeTitle} />
        <meta property="og:description" content={copy.meta.homeDescription} />
        <meta property="og:site_name" content="Lagara Partners" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={copy.meta.homeTitle} />
        <meta name="twitter:description" content={copy.meta.homeDescription} />

        <meta name="robots" content="index, follow" />
      </Head>

      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-navy focus:text-white focus:px-4 focus:py-2 focus:rounded focus:text-sm focus:font-medium"
      >
        {copy.skipToContent}
      </a>

      <Navbar />

      <main>
        <Hero />
        <Problem />
        <Services />
        <Outcomes />
        <Process />
        <Differentiators />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
