import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Contact } from "@/components/contact";
import { Icon, type IconName } from "@/components/icons";

const script = Caveat({ subsets: ["latin"], weight: "700" });

export const metadata: Metadata = {
  title: "About",
  description:
    "FinMitra works with ambitious founders to build strong financial foundations, navigate complexity and create long-term value.",
};

const qualities: Array<{ icon: IconName; title: string; body: string; card: string; iconColor: string }> = [
  {
    icon: "sprout",
    title: "Startup focused",
    body: "We understand the unique challenges of early-stage and growth-stage companies.",
    card: "bg-[#e7f8ef]",
    iconColor: "text-[#1f9a62]",
  },
  {
    icon: "users",
    title: "Practical and hands-on",
    body: "Real-world experience, not just theory.",
    card: "bg-[#e7f3fc]",
    iconColor: "text-[#2f7de1]",
  },
  {
    icon: "chart",
    title: "End-to-end support",
    body: "From bookkeeping to investor-ready reporting.",
    card: "bg-[#fff4e8]",
    iconColor: "text-[#e08a28]",
  },
  {
    icon: "shield",
    title: "Your long-term partner",
    body: "We grow with you, at every stage.",
    card: "bg-[#f3eefb]",
    iconColor: "text-[#7a5bd4]",
  },
];

const partners = [
  {
    name: "Vineet Suri",
    credentials: "CA, MBA, 22+ years",
    image: "/images/partner-vineet.jpg",
    title: "CFO Advisory, Financial Planning & Growth Strategy",
  },
  {
    name: "Mahesh Singhal",
    credentials: "CA, 25+ years",
    image: "/images/partner-mahesh.jpg",
    title: "Fund Raising & Investor Support",
  },
  {
    name: "Kalashree Thaliyath",
    credentials: "CA, CS, 18+ years",
    image: "/images/partner-kalashree.jpg",
    title: "Entity Structuring, Tax and Compliances",
  },
  {
    name: "Gaurav Saxena",
    credentials: "CA, MBA, 20+ years",
    image: "/images/partner-gaurav.jpg",
    title: "Finance Set-up, Accounting & Bookkeeping",
  },
  {
    name: "Umesh Makkar",
    credentials: "CA, CPA, 27+ years",
    image: "/images/partner-umesh.jpg",
    title: "Automation, Internal Controls & Due Diligence",
  },
];

const approach: Array<{ icon: IconName; title: string; body: string; card: string; iconColor: string }> = [
  {
    icon: "target",
    title: "Understand your goals",
    body: "We take the time to understand your business, stage and priorities.",
    card: "bg-[#e7f3fc]",
    iconColor: "text-[#2f7de1]",
  },
  {
    icon: "gear",
    title: "Build the right systems",
    body: "Processes, reporting and controls tailored to your needs.",
    card: "bg-[#e7f8ef]",
    iconColor: "text-[#1f9a62]",
  },
  {
    icon: "chart",
    title: "Support your next milestone",
    body: "Ongoing advisory and investor-ready preparation as you grow.",
    card: "bg-[#fff4e8]",
    iconColor: "text-[#e08a28]",
  },
];

function PhotoCaption({
  lead,
  accent,
  className,
}: {
  lead: string;
  accent: string;
  className?: string;
}) {
  return (
    <p className={`${script.className} text-right text-[1.65rem] leading-tight ${className ?? ""}`}>
      <span className="text-navy">{lead}</span>
      <br />
      <span className="text-teal">{accent}</span>
    </p>
  );
}

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto grid max-w-8xl items-center gap-10 px-5 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-16">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.18em] text-[#7f93a6] uppercase">About FinMitra</p>
          <h1 className="mt-3 max-w-xl text-[2.5rem] leading-[1.1] font-bold tracking-[-0.03em] text-ink sm:text-5xl">
            A partner in <span className="text-teal">your growth story.</span>
          </h1>
          <p className="mt-4 max-w-xl text-[15.5px] leading-7 text-muted">
            We work with ambitious founders to build strong financial foundations, navigate complexity
            and create long-term value.
          </p>
          <Link
            href="#approach"
            className="mt-7 inline-flex items-center gap-2 rounded-[10px] bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#163556]"
          >
            Our Approach
            <Icon name="arrow" className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] shadow-[0_20px_40px_-28px_rgba(12,35,64,0.55)]">
          <Image
            src="/images/about-hero.jpg"
            alt="Three hikers standing on a rocky summit at sunrise, looking across the mountains"
            fill
            preload
            sizes="(max-width: 1024px) 100vw, 720px"
            className="object-cover object-[center_40%]"
          />
          <PhotoCaption
            lead="Founders build tomorrow."
            accent="We help you get there."
            className="absolute top-5 right-5 max-w-[220px] drop-shadow-[0_1px_0_rgba(255,255,255,0.35)] sm:top-7 sm:right-7"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-8xl items-center gap-10 px-5 py-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-12" aria-labelledby="who-heading">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.18em] text-[#7f93a6] uppercase">Who we are</p>
          <h2
            id="who-heading"
            className="mt-2 max-w-md text-[1.85rem] leading-[1.2] font-bold tracking-[-0.03em] text-ink sm:text-[2.15rem]"
          >
            Finance expertise for ambitious founders.
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-7 text-muted">
            FinMitra is a specialized finance partner for startups and growth-stage companies, offering
            ongoing finance, compliance and strategic advisory support through flexible models.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {qualities.map((item) => (
            <article key={item.title} className={`rounded-[18px] p-5 ${item.card}`}>
              <Icon name={item.icon} className={`h-6 w-6 ${item.iconColor}`} />
              <h3 className="mt-3 text-[15px] font-bold text-ink">{item.title}</h3>
              <p className="mt-1.5 text-[13.5px] leading-6 text-[#5c6e80]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="partners" className="scroll-mt-24 mx-auto max-w-8xl px-5 py-14 lg:px-8" aria-labelledby="partners-heading">
        <p className="text-[11px] font-semibold tracking-[0.18em] text-[#7f93a6] uppercase">Our partners</p>
        <h2
          id="partners-heading"
          className="mt-2 text-[1.85rem] leading-[1.2] font-bold tracking-[-0.03em] text-ink sm:text-[2.15rem]"
        >
          Five partners. A shared commitment.
        </h2>
        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {partners.map((partner) => (
            <li key={partner.name} className="text-center">
              <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full bg-[#eef3f7]">
                <Image
                  src={partner.image}
                  alt=""
                  fill
                  sizes="112px"
                  className="object-cover object-[center_18%]"
                />
              </div>
              <h3 className="mt-4 text-[15px] font-bold text-ink">{partner.name}</h3>
              <p className="text-sm font-semibold text-teal">Partner</p>
              <p className="mt-1 text-[13px] text-muted">{partner.credentials}</p>
              <p className="mt-2 text-[13.5px] leading-5 font-medium text-[#3e5163]">{partner.title}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="approach" className="scroll-mt-24 bg-[#f7fafc]" aria-labelledby="approach-heading">
        <div className="mx-auto grid max-w-8xl items-center gap-10 px-5 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] text-[#7f93a6] uppercase">Our approach</p>
            <h2
              id="approach-heading"
              className="mt-2 max-w-sm text-[1.85rem] leading-[1.2] font-bold tracking-[-0.03em] text-ink sm:text-[2.15rem]"
            >
              Clarity, control and confidence.
            </h2>
            <p className="mt-4 max-w-sm text-[15px] leading-7 text-muted">
              We combine deep finance expertise with a practical, founder-first approach to help you make
              better decisions, stay compliant and be ready for what&apos;s next.
            </p>
          </div>
          <div className="grid gap-4">
            {approach.map((item) => (
              <article key={item.title} className={`flex gap-4 rounded-[18px] p-5 ${item.card}`}>
                <Icon name={item.icon} className={`mt-0.5 h-6 w-6 shrink-0 ${item.iconColor}`} />
                <div>
                  <h3 className="text-[15px] font-bold text-ink">{item.title}</h3>
                  <p className="mt-1 text-[13.5px] leading-6 text-[#5c6e80]">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-band">
        <Contact
          id="connect"
          eyebrow="Let's connect"
          title="Tell us about your company."
          lede="Share a few details and we'll connect with you to explore how we can support your journey."
          submitLabel="Submit"
          withArrow
        />
      </div>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-8xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] text-[#7f93a6] uppercase">Our commitment</p>
            <h2 className="mt-2 max-w-md text-[2rem] leading-[1.15] font-bold tracking-[-0.03em] text-ink sm:text-[2.35rem]">
              Your next chapter starts with a strong foundation.
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-7 text-muted">
              Whether you&apos;re just starting out or preparing for your next funding round, FinMitra is
              here to support you at every step.
            </p>
            <Link
              href="#connect"
              className="mt-7 inline-flex items-center gap-2 rounded-[10px] bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#163556]"
            >
              Get in Touch
              <Icon name="arrow" className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[28px]">
            <Image
              src="/images/about-trail.jpg"
              alt="A mountain trail climbing toward a sunlit ridge at sunrise"
              fill
              sizes="(max-width: 1024px) 100vw, 760px"
              className="object-cover object-[center_60%]"
            />
            <PhotoCaption
              lead="Stronger foundations."
              accent="Brighter tomorrows."
              className="absolute top-5 right-5 max-w-[220px] sm:top-7 sm:right-7"
            />
          </div>
        </div>
      </section>
    </>
  );
}
