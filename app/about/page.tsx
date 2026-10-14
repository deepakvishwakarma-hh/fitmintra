import type { Metadata } from "next";
import Image from "next/image";
import { ContactBand, PageIntro } from "@/components/page-blocks";
import { Logo } from "@/components/logo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "FinMitra works with ambitious founders to build strong financial foundations, navigate complexity and create long-term value.",
};

const points = [
  {
    title: "Foundations first",
    body: "Clean books, the right entity and a compliance calendar before the complexity arrives.",
  },
  {
    title: "One partner, every stage",
    body: "From incorporation to exit, the same team stays with the model, the filings and the board pack.",
  },
  {
    title: "Built for founders",
    body: "Advice in plain language, with the numbers investors and auditors expect underneath.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About FinMitra"
        title="A partner in your growth story."
        lede="We work with ambitious founders to build strong financial foundations, navigate complexity and create long-term value."
      />
      <section className="mx-auto grid max-w-[1180px] items-center gap-10 px-5 py-14 lg:grid-cols-2 lg:px-8">
        <div className="grid gap-4">
          {points.map((point) => (
            <article key={point.title} className="rounded-[18px] border border-line bg-white p-5">
              <h2 className="text-lg font-bold text-ink">{point.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{point.body}</p>
            </article>
          ))}
          <p className="text-sm text-muted">
            Based in {site.city}. Reach us at{" "}
            <a className="font-semibold text-navy hover:text-teal" href={site.emailHref}>
              {site.email}
            </a>{" "}
            or{" "}
            <a className="font-semibold text-navy hover:text-teal" href={site.phoneHref}>
              {site.phoneDisplay}
            </a>
            .
          </p>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-[22px]">
          <Image
            src="/images/office.jpg"
            alt="A modern office with a glass meeting room, wood ceiling and indoor plants"
            fill
            sizes="(max-width: 1024px) 100vw, 560px"
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-[#0c2340]/10 p-6">
            <div className="rounded-2xl bg-[#0c2340]/40 px-6 py-4 backdrop-blur-[2px]">
              <Logo variant="light" size="lg" />
            </div>
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
