import type { ReactNode } from "react";
import Link from "next/link";
import { Icon } from "@/components/icons";

export function PageIntro({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <section className="border-b border-line bg-[linear-gradient(180deg,#f4faf8_0%,#ffffff_70%)]">
      <div className="mx-auto max-w-8xl px-5 py-14 lg:px-8 lg:py-16">
        <p className="text-[11px] font-semibold tracking-[0.18em] text-[#8090a0] uppercase">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl leading-[1.12] font-bold tracking-[-0.03em] text-ink md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{lede}</p>
      </div>
    </section>
  );
}

export function Checklist({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[22px] border border-line bg-white p-6 shadow-[0_16px_36px_-28px_rgba(12,35,64,0.5)]">
      <h2 className="text-lg font-bold text-ink">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm leading-6 text-[#3e5163]">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ContactBand({ children }: { children?: ReactNode }) {
  return (
    <section className="px-5 pb-16 lg:px-8">
      <div className="mx-auto flex max-w-8xl flex-col items-start justify-between gap-6 rounded-[22px] bg-navy px-7 py-8 text-white sm:flex-row sm:items-center sm:px-10">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Tell us about your company</h2>
          <p className="mt-2 max-w-md text-sm leading-6 text-white/75">
            {children ?? "Share a few details and we'll connect with you."}
          </p>
        </div>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 rounded-[10px] bg-white px-5 py-2.5 text-sm font-semibold text-navy hover:bg-[#f3f7fb]"
        >
          Get Started
          <Icon name="arrow" className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}
