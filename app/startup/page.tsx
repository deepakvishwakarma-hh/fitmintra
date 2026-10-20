import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Contact } from "@/components/contact";
import { CaseStudyGrid } from "@/components/case-studies";
import startupCaseStudies from "@/data/startup-case-studies.json";
import { Icon, type IconName } from "@/components/icons";

export const metadata: Metadata = {
  title: "Startup FinMitra",
  description:
    "Monthly finance, compliance and advisory support for bootstrapped and pre-seed startups.",
};

const features: Array<{ icon: IconName; title: string; body: string }> = [
  {
    icon: "clipboard",
    title: "Clean, up-to-date books",
    body: "Accounting, bookkeeping and monthly MIS.",
  },
  {
    icon: "fileCheck",
    title: "Stay compliant, always",
    body: "GST, TDS, income tax, ROC and regulatory support.",
  },
  {
    icon: "chart",
    title: "Clear financial insights",
    body: "Dashboards and reports to track your runway and performance.",
  },
  {
    icon: "users",
    title: "On-demand support",
    body: "Access to experts for your day-to-day queries.",
  },
];

const plans: Array<{
  name: string;
  audience: string;
  items: string[];
  tone: string;
  button: string;
  check: string;
  price: string;
  popular?: boolean;
}> = [
  {
    name: "Starter",
    audience: "For early / bootstrapped businesses",
    items: [
      "Accounting & bookkeeping",
      "GST, TDS & basic compliance",
      "Monthly MIS basics",
      "Regular support",
    ],
    tone: "border-[#d7e8f5]",
    button: "bg-[#2f7de1] hover:bg-[#2469c4]",
    check: "text-[#2f7de1]",
    price: "₹ 29,000 / month",
  },
  {
    name: "Growth",
    audience: "For growing SMEs & startups",
    items: [
      "Everything in Starter",
      "Advanced MIS & reporting",
      "Full compliance support",
      "Finance processes & controls",
      "Management dashboards",
    ],
    tone: "border-[#8fd9b0]",
    button: "bg-[#1f9a62] hover:bg-[#188454]",
    check: "text-[#1f9a62]",
    price: "₹ 49,000 / month",
    popular: true,
  },
  {
    name: "Investor Ready",
    audience: "For angel / pre-seed startups",
    items: [
      "Everything in Growth",
      "Investor-grade financial model",
      "Projections & scenario analysis",
      "Cap table support",
      "Data room preparation",
      "Due diligence readiness",
    ],
    tone: "border-[#ddd4f5]",
    button: "bg-[#7a5bd4] hover:bg-[#6848c4]",
    check: "text-[#7a5bd4]",
    price: "₹ 99,000 / month",
  },
];

const steps: Array<{ n: string; icon: IconName; title: string; body: string; tone: string }> = [
  {
    n: "01",
    icon: "cursor",
    title: "Choose your plan",
    body: "Select the level of monthly support you need.",
    tone: "bg-[#e7f5fc] text-[#2f9fd0]",
  },
  {
    n: "02",
    icon: "gear",
    title: "We set up your finance function",
    body: "Books, compliance calendar, processes and reporting.",
    tone: "bg-[#e7f8ef] text-[#2ea36a]",
  },
  {
    n: "03",
    icon: "chart",
    title: "Monthly support",
    body: "Your FinMitra team keeps everything current.",
    tone: "bg-[#fff4e6] text-[#e39a32]",
  },
  {
    n: "04",
    icon: "rocket",
    title: "Grow with confidence",
    body: "When you're ready to raise, we help prepare your numbers and financial story.",
    tone: "bg-[#fdecee] text-[#e15d78]",
  },
];

export default function StartupPage() {
  return (
    <>
      <section className="mx-auto grid max-w-8xl items-center gap-10 px-5 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-16">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.18em] text-[#7f93a6] uppercase">
            Startup FinMitra
          </p>
          <h1 className="mt-3 max-w-xl text-[2.4rem] leading-[1.12] font-bold tracking-[-0.03em] text-ink sm:text-5xl">
            Simple finance support{" "}
            <span className="text-teal">for early-stage startups.</span>
          </h1>
          <p className="mt-4 max-w-xl text-[15.5px] leading-7 text-muted">
            Monthly finance, compliance and advisory support designed for bootstrapped and pre-seed
            startups so you can focus on building.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="#plans"
              className="inline-flex items-center gap-2 rounded-[10px] bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#163556]"
            >
              View Plans
              <Icon name="arrow" className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="#talk"
              className="inline-flex items-center gap-2 rounded-[10px] border border-[#c5d2df] bg-white px-5 py-2.5 text-sm font-semibold text-navy hover:bg-[#f6fafc]"
            >
              Talk to Us
              <Icon name="arrow" className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
        <div className="relative aspect-square overflow-hidden rounded-[28px] shadow-[0_20px_40px_-28px_rgba(12,35,64,0.55)]">
          <Image
            src="/images/startup-hero.jpg"
            alt="A seedling growing from rock with snow-capped mountains behind it"
            fill
            preload
            sizes="(max-width: 1024px) 100vw, 540px"
            className="object-cover object-[70%_70%]"
          />
        </div>
      </section>

      <section className="mx-auto max-w-8xl px-5 py-8 lg:px-8 lg:py-12" aria-labelledby="get-heading">
        <p className="text-[11px] font-semibold tracking-[0.18em] text-[#7f93a6] uppercase">What you get</p>
        <h2
          id="get-heading"
          className="mt-2 max-w-2xl text-[1.85rem] leading-[1.2] font-bold tracking-[-0.03em] text-ink sm:text-[2.15rem]"
        >
          Everything you need to keep your finance and compliance in control.
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article key={feature.title}>
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#eef6f8] text-[#1c7f8c]">
                <Icon name={feature.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-[15px] font-bold text-ink">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="bg-band">
        <Contact
          id="talk"
          eyebrow="Let's talk"
          title="Tell us about your startup."
          lede="Share a few details and we'll connect with you to recommend the right plan for your stage and needs."
          submitLabel="Submit"
          withArrow
        />
      </div>

      <section id="plans" className="scroll-mt-24 bg-white" aria-labelledby="plans-heading">
        <div className="mx-auto max-w-8xl px-5 py-16 lg:px-8">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-[#7f93a6] uppercase">
            Subscription plans
          </p>
          <h2
            id="plans-heading"
            className="mt-2 text-[1.85rem] leading-[1.2] font-bold tracking-[-0.03em] text-ink sm:text-[2.15rem]"
          >
            Choose the support you need.
          </h2>
          <p className="mt-3 max-w-xl text-[15px] leading-7 text-muted">
            Simple monthly plans designed for different stages of your journey.
          </p>
          <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex flex-col rounded-[22px] border-2 bg-white p-6 shadow-[0_16px_36px_-28px_rgba(12,35,64,0.45)] ${plan.tone}`}
              >
                {plan.popular ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#1f9a62] px-3 py-1 text-[11px] font-semibold text-white">
                    Most Popular
                  </span>
                ) : null}
                <h3 className="text-lg font-bold text-ink">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted">{plan.audience}</p>
                <ul className="mt-5 space-y-2.5">
                  {plan.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-5 text-[#3e5163]">
                      <span className={`mt-0.5 font-bold ${plan.check}`} aria-hidden>
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6">
                  <p className="text-xs text-[#8aa0b3]">Starting at</p>
                  <p className="text-lg font-bold text-ink">{plan.price}</p>
                  <Link
                    href="#talk"
                    className={`mt-4 inline-flex w-full items-center justify-center gap-2 rounded-[10px] px-4 py-2.5 text-sm font-semibold text-white ${plan.button}`}
                  >
                    Further Details
                    <Icon name="arrow" className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7fafc]" aria-labelledby="works-heading">
        <div className="mx-auto max-w-8xl px-5 py-16 lg:px-8">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-[#7f93a6] uppercase">How it works</p>
          <h2
            id="works-heading"
            className="mt-2 text-[1.85rem] leading-[1.2] font-bold tracking-[-0.03em] text-ink sm:text-[2.15rem]"
          >
            Get started in four simple steps.
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
          Startups we&apos;ve supported.
        </h2>
        <p className="mt-3 text-[15px] text-muted">Real founders. Real journeys. Real outcomes.</p>
        <CaseStudyGrid studies={startupCaseStudies} />
      </section>

      <section className="px-5 pb-16 lg:px-8">
        <div className="mx-auto grid max-w-8xl overflow-hidden rounded-[28px] bg-[#e7f4fb] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-center px-7 py-10 lg:px-12">
            <h2 className="max-w-md text-[2rem] leading-[1.15] font-bold tracking-[-0.03em] text-ink sm:text-[2.4rem]">
              Ready to simplify your <span className="text-teal">startup finances?</span>
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-7 text-muted">
              Join founders who trust FinMitra to keep their finance and compliance in control.
            </p>
            <Link
              href="#plans"
              className="mt-7 inline-flex w-fit items-center gap-2 rounded-[10px] bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#163556]"
            >
              View Plans
              <Icon name="arrow" className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="relative min-h-[260px]">
            <Image
              src="/images/summit-hiker.jpg"
              alt="A person standing on a rocky summit looking across a mountain range"
              fill
              sizes="(max-width: 1024px) 100vw, 640px"
              className="object-cover object-[70%_center]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
