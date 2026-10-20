import Link from "next/link";
import { Icon, type IconName } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";

const questions: Array<{
  icon: IconName;
  question: string;
  answer: string;
  href: string;
  label: string;
}> = [
  {
    icon: "book",
    question: "How do I keep my books clean from day one?",
    answer: "We set up your books, book-keeping and monthly close.",
    href: "/startup",
    label: "Finance Setup",
  },
  {
    icon: "chart",
    question: "How much runway do we really have?",
    answer: "Cash-flow forecasts and product-level profitability.",
    href: "/cfo",
    label: "Virtual CFO",
  },
  {
    icon: "users",
    question: "Are we ready for investors?",
    answer: "Investor-grade model and clean data room.",
    href: "/cfo",
    label: "Fundraising",
  },
  {
    icon: "clipboard",
    question: "How do we stay compliant while we scale?",
    answer: "One compliance calendar — tracked and never missed.",
    href: "/startup",
    label: "Tax & Regulatory",
  },
  {
    icon: "shield",
    question: "Is money leaking?",
    answer: "Controls, process reviews and risk checks.",
    href: "/cfo",
    label: "Controls & Risk",
  },
  {
    icon: "user",
    question: "When do we need a CFO?",
    answer: "Right when financial complexity starts slowing you down.",
    href: "/cfo",
    label: "Virtual CFO",
  },
];

export function Questions() {
  return (
    <section className="mx-auto max-w-8xl px-5 pb-5 lg:px-8 lg:pb-10" aria-labelledby="questions-heading">
      <SectionHeading
        eyebrow="What founders ask us"
        title="Six founder questions — and how we answer them"
        headingId="questions-heading"
      />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {questions.map((item) => (
          <article
            key={item.question}
            className="flex flex-col rounded-2xl border border-line bg-white p-5 shadow-[0_10px_28px_-22px_rgba(12,35,64,0.7)] transition motion-safe:hover:-translate-y-0.5 hover:border-[#d5e6df]"
          >
            <Icon name={item.icon} className="h-7 w-7 text-[#1c7f8c]" />
            <h3 className="mt-4 text-[15px] leading-snug font-semibold text-ink">{item.question}</h3>
            <p className="mt-2 text-[13px] leading-5 text-muted">{item.answer}</p>
            <br />
            <Link
              href={item.href}
              className="mt-auto inline-flex items-center gap-1 text-[13px] font-semibold text-navy hover:text-teal"
            >
              {item.label}
              <Icon name="arrow" className="h-3.5 w-3.5" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
