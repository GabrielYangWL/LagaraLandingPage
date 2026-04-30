import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/ui/SectionHeader";
import ServiceCard from "@/components/ui/ServiceCard";
import FadeIn from "@/components/ui/FadeIn";
import { useLocale } from "@/contexts/LocaleContext";
import { getServices } from "@/data/services";

export default function ServicesPage() {
  const { locale, copy } = useLocale();
  const si = copy.servicesIndex;
  const services = getServices(locale);

  return (
    <>
      <Head>
        <title>{si.metaTitle}</title>
        <meta name="description" content={si.metaDescription} />
        <meta property="og:title" content={si.metaTitle} />
        <meta property="og:description" content={si.metaDescription} />
        <meta property="og:type" content="website" />
      </Head>

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-navy focus:text-white focus:px-4 focus:py-2 focus:rounded focus:text-sm focus:font-medium"
      >
        {si.skipToContent}
      </a>

      <Navbar />

      <main id="main">
        <section className="bg-navy pt-28 pb-16 md:pt-32 md:pb-20">
          <div className="content-container section-padding !pt-0 !pb-0 px-6 md:px-12">
            <p className="text-white/60 text-sm font-medium mb-4">
              <Link href="/" className="hover:text-white transition-colors">
                {si.breadcrumbHome}
              </Link>
              <span aria-hidden="true" className="mx-2">
                /
              </span>
              <span className="text-white">{si.breadcrumbCurrent}</span>
            </p>
            <h1 className="text-white text-3xl md:text-4xl font-semibold tracking-tight max-w-2xl">
              {si.heroTitle}
            </h1>
            <p className="text-white/70 text-base mt-4 max-w-2xl leading-relaxed">
              {si.heroSub.replace("{count}", String(services.length))}
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="content-container section-padding">
            <FadeIn direction="up">
              <SectionHeader
                eyebrow={si.sectionEyebrow}
                heading={si.sectionHeading}
                subheading={si.sectionSub}
              />
            </FadeIn>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {services.map((service, i) => (
                <FadeIn key={service.slug} delay={i * 75} direction="up">
                  <ServiceCard {...service} />
                </FadeIn>
              ))}
            </div>

            <p className="mt-16 text-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center bg-muted-blue hover:bg-teal text-white px-6 py-3.5 rounded-lg text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
              >
                {si.ctaBook}
              </Link>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
