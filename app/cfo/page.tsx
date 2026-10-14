import type { Metadata } from "next";
import Image from "next/image";
import { Checklist, ContactBand, PageIntro } from "@/components/page-blocks";

export const metadata: Metadata = {
  title: "FinMitra CFO",
  description:
    "Customised CFO support for Series A and growth-stage startups, from fundraising through expansion.",
};

const included = [
  "Investor-grade financial model and forecasts",
  "Valuation, ESOP design and a clean data room",
  "Due diligence support and FEMA / FDI filings",
  "Virtual CFO support, budgeting and profitability",
  "Internal controls, audit and board reporting",
  "Financial due diligence and M&A support",
  "Investor relations and cross-border expansion",
];

export default function CfoPage() {
  return (
    <>
      <PageIntro
        eyebrow="FinMitra CFO"
        title="A CFO office for the stage you are in."
        lede="Customised CFO support for Series A and growth-stage startups — runway, controls and investor reporting without hiring the full office too early."
      />
      <section className="mx-auto grid max-w-8xl items-center gap-10 px-5 py-14 lg:grid-cols-2 lg:px-8">
        <div className="relative order-1 aspect-[16/10] overflow-hidden rounded-[22px] lg:order-2">
          <Image
            src="/images/bonsai.jpg"
            alt="A bonsai pine rooted on a rock in still water at sunrise"
            fill
            sizes="(max-width: 1024px) 100vw, 740px"
            className="object-cover object-right"
          />
        </div>
        <div className="order-2 lg:order-1">
          <Checklist title="Where a FinMitra CFO steps in" items={included} />
        </div>
      </section>
      <ContactBand>
        Share your last round, headcount and what the board asks for every month.
      </ContactBand>
    </>
  );
}
