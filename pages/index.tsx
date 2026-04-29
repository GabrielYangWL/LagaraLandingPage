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

export default function Home() {
  return (
    <>
      <Head>
        <title>Lagara Partners | Enterprise AI Adoption and Change Management</title>
        <meta
          name="description"
          content="Lagara Partners helps enterprises close the gap between AI investment and AI adoption. Strategy, change management, and execution capability for sustainable AI adoption."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Lagara Partners | Enterprise AI Adoption and Change Management" />
        <meta
          property="og:description"
          content="Lagara Partners helps enterprises close the gap between AI investment and AI adoption. Strategy, change management, and execution capability for sustainable AI adoption."
        />
        <meta property="og:site_name" content="Lagara Partners" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lagara Partners | Enterprise AI Adoption" />
        <meta
          name="twitter:description"
          content="Turn enterprise AI ambition into daily adoption. Strategy, change management, and execution capability."
        />

        {/* Robots */}
        <meta name="robots" content="index, follow" />
      </Head>

      {/* Skip to content for accessibility */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-navy focus:text-white focus:px-4 focus:py-2 focus:rounded focus:text-sm focus:font-medium"
      >
        Skip to content
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
