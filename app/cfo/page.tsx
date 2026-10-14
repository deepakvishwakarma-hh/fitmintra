import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Contact } from "@/components/contact";
import { Icon, type IconName } from "@/components/icons";

export const metadata: Metadata = {
  title: "FinMitra CFO",
  description:
    "Virtual CFO services for Series A and growth-stage companies that need CFO-level thinking without a full-time hire.",
};

const outcomes: Array<{
  icon: IconName;
  title: string;
  body: string;
  card: string;
  iconColor: string;
}> = [
  {
    icon: "chart",
    title: "Plan for growth",
    body: "Budgets, forecasts and scenario planning to make better decisions.",
    card: "bg-[#e7f8ef]",
    iconColor: "text-[#1f9a62]",
  },
  {
    icon: "bulb",
    title: "Understand your business",
    body: "Unit economics, margins and SKU-level profitability.",
    card: "bg-[#e7f3fc]",
    iconColor: "text-[#2f7de1]",
  },
  {
    icon: "shield",
    title: "Control and protect",
    body: "Cash management, internal controls and fund utilisation.",
    card: "bg-[#f3eefb]",
    iconColor: "text-[#7a5bd4]",
  },
  {
    icon: "users",
    title: "Communicate with confidence",
    body: "Board reporting, investor updates and clear dashboards.",
    card: "bg-[#fff4e8]",
    iconColor: "text-[#e08a28]",
  },
  {
    icon: "rocket",
    title: "Prepare for what's next",
    body: "Fundraise support, strategic analysis and expansion planning.",
    card: "bg-[#fdecee]",
    iconColor: "text-[#e15d78]",
  },
];

const services: Array<{
  icon: IconName;
  title: string;
  color: string;
  items: string[];
}> = [
  {
    icon: "clipboard",
    title: "Financial Planning & Analysis",
    color: "text-[#2f7de1]",
    items: ["Budgets & forecasting", "Scenario analysis", "Runway analysis", "Business performance dashboards"],
  },
  {
    icon: "chart",
    title: "Business & Unit Economics",
    color: "text-[#1f9a62]",
    items: ["Product/SKU profitability", "Customer profitability", "Margin analysis", "Pricing and cost optimisation"],
  },
  {
    icon: "wallet",
    title: "Cash Flow & Fund Management",
    color: "text-[#7a5bd4]",
    items: ["Cash flow forecasting", "Fund utilisation tracking", "Cost control", "Working capital management"],
  },
  {
    icon: "presentation",
    title: "Investor & Board Reporting",
    color: "text-[#2f7de1]",
    items: [
      "Monthly/quarterly MIS",
      "Board decks and financial narratives",
      "KPIs and metrics",
      "Investor communication support",
    ],
  },
  {
    icon: "users",
    title: "Fundraising Support",
    color: "text-[#e15d78]",
    items: ["Financial model and projections", "Valuation support", "Data room preparation", "Due diligence support"],
  },
  {
    icon: "shield",
    title: "Financial Controls & Governance",
    color: "text-[#e08a28]",
    items: ["Internal controls", "Process optimisation", "Risk monitoring", "Audit readiness"],
  },
];

const steps: Array<{ n: string; icon: IconName; title: string; body: string; tone: string }> = [
  {
    n: "01",
    icon: "cursor",
    title: "Understand",
    body: "We deep-dive into your business, goals and current finance setup.",
    tone: "bg-[#e7f5fc] text-[#2f9fd0]",
  },
  {
    n: "02",
    icon: "gear",
    title: "Design",
    body: "We create a tailored CFO engagement plan.",
    tone: "bg-[#e7f8ef] text-[#2ea36a]",
  },
  {
    n: "03",
    icon: "chart",
    title: "Work Together",
    body: "Your FinMitra CFO team works with you at a regular cadence (weekly/monthly).",
    tone: "bg-[#fff4e6] text-[#e39a32]",
  },
  {
    n: "04",
    icon: "rocket",
    title: "Drive Impact",
    body: "Get better insights, stronger control and be ready for your next phase.",
    tone: "bg-[#fdecee] text-[#e15d78]",
  },
];

export default function CfoPage() {
  return (
    <>
      <section className="mx-auto grid max-w-8xl items-center gap-10 px-5 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-16">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.18em] text-[#7f93a6] uppercase">FinMitra CFO</p>
          <h1 className="mt-3 max-w-xl text-[2.4rem] leading-[1.12] font-bold tracking-[-0.03em] text-ink sm:text-5xl">
            Strategic financial <span className="text-teal">leadership</span> for your next phase.
          </h1>
          <p className="mt-4 max-w-xl text-[15.5px] leading-7 text-muted">
            Virtual CFO services for Series A and growth-stage companies that need CFO-level thinking
            without the overhead of a full-time hire.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="#talk"
              className="inline-flex items-center gap-2 rounded-[10px] bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#163556]"
            >
              Talk to a CFO
              <Icon name="arrow" className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="#approach"
              className="inline-flex items-center gap-2 rounded-[10px] border border-[#c5d2df] bg-white px-5 py-2.5 text-sm font-semibold text-navy hover:bg-[#f6fafc]"
            >
              Explore Our Approach
              <Icon name="arrow" className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-[0_20px_40px_-28px_rgba(12,35,64,0.55)]">
          <Image
            src="/images/cfo-hero.jpg"
            alt="An open laptop showing finance charts on a wooden desk, with a city skyline beyond the window"
            fill
            preload
            sizes="(max-width: 1024px) 100vw, 720px"
            className="object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-8xl px-5 py-8 lg:px-8 lg:py-12" aria-labelledby="get-heading">
        <p className="text-[11px] font-semibold tracking-[0.18em] text-[#7f93a6] uppercase">What you get</p>
        <h2
          id="get-heading"
          className="mt-2 max-w-3xl text-[1.85rem] leading-[1.2] font-bold tracking-[-0.03em] text-ink sm:text-[2.15rem]"
        >
          A CFO office. Without the full-time overhead.
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-7 text-muted">
          Get strategic financial leadership, deep analysis and investor-ready reporting — tailored to
          your business, your stage and your goals.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {outcomes.map((item) => (
            <article key={item.title} className={`rounded-[18px] p-5 ${item.card}`}>
              <Icon name={item.icon} className={`h-6 w-6 ${item.iconColor}`} />
              <h3 className="mt-4 text-[15px] font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-[13px] leading-5 text-[#5c6e80]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-8xl px-5 py-12 lg:px-8 lg:py-16" aria-labelledby="services-heading">
        <p className="text-[11px] font-semibold tracking-[0.18em] text-[#7f93a6] uppercase">Our CFO services</p>
        <h2
          id="services-heading"
          className="mt-2 max-w-3xl text-[1.85rem] leading-[1.2] font-bold tracking-[-0.03em] text-ink sm:text-[2.15rem]"
        >
          End-to-end financial leadership for growth-stage companies.
        </h2>
        <div className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.title}>
              <div className="flex items-center gap-2.5">
                <Icon name={service.icon} className={`h-5 w-5 shrink-0 ${service.color}`} />
                <h3 className="text-[15px] font-bold text-ink">{service.title}</h3>
              </div>
              <ul className="mt-3 space-y-1.5">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-2 text-[13.5px] leading-6 text-[#5c6e80]">
                    <span className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-[#8ea0b0]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <div className="bg-band">
        <Contact
          id="talk"
          eyebrow="Let's talk"
          title="Share a few details and we'll connect."
          lede="Tell us about your company and we'll set up a call to understand your goals and recommend the right support."
          submitLabel="Submit"
          withArrow
        />
      </div>

      <section id="approach" className="scroll-mt-24 bg-[#f7fafc]" aria-labelledby="works-heading">
        <div className="mx-auto max-w-8xl px-5 py-16 lg:px-8">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-[#7f93a6] uppercase">How it works</p>
          <h2
            id="works-heading"
            className="mt-2 text-[1.85rem] leading-[1.2] font-bold tracking-[-0.03em] text-ink sm:text-[2.15rem]"
          >
            A simple, collaborative approach.
          </h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.n} className="relative">
                <div className="flex items-center gap-3">
                  <span className={`grid h-11 w-11 place-items-center rounded-full ${step.tone}`}>
                    <Icon name={step.icon} className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold text-[#9aafc0]">{step.n}</span>
                  {index < steps.length - 1 ? (
                    <span className="ml-auto hidden text-[#c5d3df] xl:block" aria-hidden>
                      <Icon name="arrow" className="h-4 w-4" />
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-4 text-[15px] font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-8xl px-5 py-16 lg:px-8" aria-labelledby="cases-heading">
        <p className="text-[11px] font-semibold tracking-[0.18em] text-[#7f93a6] uppercase">Case studies</p>
        <h2
          id="cases-heading"
          className="mt-2 text-[1.85rem] leading-[1.2] font-bold tracking-[-0.03em] text-ink sm:text-[2.15rem]"
        >
          Growth stories we&apos;ve supported.
        </h2>
        <p className="mt-3 text-[15px] text-muted">Real companies. Real journeys. Real outcomes.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {["One", "Two", "Three"].map((key) => (
            <article
              key={key}
              className="rounded-[20px] border border-line bg-white p-6 shadow-[0_12px_30px_-24px_rgba(12,35,64,0.5)]"
            >
              <h3 className="text-[15px] font-bold text-ink">Client name</h3>
              <p className="mt-2 text-sm leading-6 text-muted">Short case study title and outcome.</p>
              <Link href="#talk" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-teal">
                Read Case Study
                <Icon name="arrow" className="h-3.5 w-3.5" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-16 lg:px-8">
        <div className="mx-auto grid max-w-8xl overflow-hidden rounded-[28px] bg-[#e7f4fb] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-center px-7 py-10 lg:px-12">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-[#7f93a6] uppercase">
              Ready for what&apos;s next?
            </p>
            <h2 className="mt-3 max-w-md text-[2rem] leading-[1.15] font-bold tracking-[-0.03em] text-ink sm:text-[2.35rem]">
              Get CFO-level thinking. <span className="text-teal">Without the overhead.</span>
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-7 text-muted">
              From fundraising to profitability, FinMitra is your partner at every stage.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="#talk"
                className="inline-flex items-center gap-2 rounded-[10px] bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#163556]"
              >
                Talk to a CFO
                <Icon name="arrow" className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="#approach"
                className="inline-flex items-center gap-2 rounded-[10px] border border-[#c5d2df] bg-white px-5 py-2.5 text-sm font-semibold text-navy hover:bg-[#f6fafc]"
              >
                Explore Our Approach
                <Icon name="arrow" className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
          <div className="relative min-h-[260px]">
            <Image
              src="/images/summit-hiker.jpg"
              alt="A person standing on a rocky summit looking across a mountain range"
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover object-[70%_center]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
