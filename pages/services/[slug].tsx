import Head from "next/head";
import Link from "next/link";
import type { GetStaticPaths, GetStaticProps } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Service } from "@/data/service-types";
import { getAllServiceSlugs, getServiceBySlug } from "@/data/services";
import { useLocale } from "@/contexts/LocaleContext";

interface ServiceDetailProps {
  serviceEn: Service;
  serviceId: Service;
}

export default function ServiceDetailPage({ serviceEn, serviceId }: ServiceDetailProps) {
  const { locale, copy } = useLocale();
  const service = locale === "id" ? serviceId : serviceEn;
  const sp = copy.servicePage;

  return (
    <>
      <Head>
        <title>{`${service.title} | Lagara Partners`}</title>
        <meta name="description" content={service.description} />
        <meta property="og:title" content={`${service.title} | Lagara Partners`} />
        <meta property="og:description" content={service.description} />
        <meta property="og:type" content="website" />
      </Head>

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-navy focus:text-white focus:px-4 focus:py-2 focus:rounded focus:text-sm focus:font-medium"
      >
        {copy.servicesIndex.skipToContent}
      </a>

      <Navbar />

      <main id="main">
        <article className="bg-white">
          <header className="bg-navy pt-28 pb-16 md:pt-32 md:pb-20">
            <div className="content-container px-6 md:px-12 max-w-[800px]">
              <p className="text-white/60 text-sm font-medium mb-4">
                <Link href="/" className="hover:text-white transition-colors">
                  {sp.breadcrumbHome}
                </Link>
                <span aria-hidden="true" className="mx-2">
                  /
                </span>
                <Link href="/services" className="hover:text-white transition-colors">
                  {sp.breadcrumbServices}
                </Link>
                <span aria-hidden="true" className="mx-2">
                  /
                </span>
                <span className="text-white">{service.title}</span>
              </p>
              <div className="border-t-2 border-muted-blue w-10 mb-6" />
              <h1 className="text-white text-3xl md:text-4xl font-semibold tracking-tight">
                {service.title}
              </h1>
              <p className="text-white/75 text-base mt-5 leading-relaxed">{service.description}</p>
            </div>
          </header>

          <div className="content-container section-padding max-w-[800px]">
            <p className="text-grey-text text-base leading-relaxed whitespace-pre-line">{service.detail}</p>

            <h2 className="text-navy font-semibold text-lg mt-12 mb-4">{sp.howWeHelp}</h2>
            <ul className="space-y-3">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="text-grey-text text-sm leading-relaxed flex gap-3">
                  <span className="text-teal shrink-0 mt-0.5">·</span>
                  {bullet}
                </li>
              ))}
            </ul>

            <h2 className="text-navy font-semibold text-lg mt-12 mb-4">{sp.outcomesHeading}</h2>
            <ul className="space-y-3">
              {service.outcomes.map((item) => (
                <li key={item} className="text-grey-text text-sm leading-relaxed flex gap-3">
                  <span className="text-teal shrink-0 mt-0.5">·</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-12 rounded-xl border border-slate-200 bg-off-white p-6 md:p-7">
              <h2 className="text-navy font-semibold text-base mb-3">{sp.engagementHeading}</h2>
              <p className="text-grey-text text-sm leading-relaxed">{service.engagementSnapshot}</p>
            </div>

            <h2 className="text-navy font-semibold text-lg mt-12 mb-4">{sp.clientExamplesHeading}</h2>
            <p className="text-grey-text text-sm leading-relaxed mb-4">{sp.clientExamplesIntro}</p>
            <ul className="space-y-3">
              {service.clientExamples.map((example) => (
                <li key={example} className="text-grey-text text-sm leading-relaxed flex gap-3">
                  <span className="text-teal shrink-0 mt-0.5">·</span>
                  {example}
                </li>
              ))}
            </ul>

            <div className="mt-12 rounded-xl border border-muted-blue/25 bg-navy/[0.03] p-6 md:p-7">
              <p className="text-muted-blue text-xs font-semibold uppercase tracking-widest mb-2">
                {sp.indonesiaHeading}
              </p>
              <h2 className="text-navy font-semibold text-base mb-3">{service.indonesiaExample.label}</h2>
              <p className="text-grey-text text-sm leading-relaxed whitespace-pre-line">
                {service.indonesiaExample.description}
              </p>
            </div>

            <div className="mt-14 flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="inline-flex justify-center bg-muted-blue hover:bg-teal text-white px-6 py-3.5 rounded-lg text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
              >
                {sp.discussService}
              </Link>
              <Link
                href="/services"
                className="inline-flex justify-center border border-navy/20 text-navy hover:bg-off-white px-6 py-3.5 rounded-lg text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-muted-blue focus-visible:ring-offset-2"
              >
                {sp.allServices}
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllServiceSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ServiceDetailProps> = async ({ params }) => {
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const serviceEn = getServiceBySlug(slug, "en");
  const serviceId = getServiceBySlug(slug, "id");

  if (!serviceEn || !serviceId) {
    return { notFound: true };
  }

  return {
    props: { serviceEn, serviceId },
  };
};
