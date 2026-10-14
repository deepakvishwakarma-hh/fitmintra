import { Icon, type IconName } from "@/components/icons";

const stages: Array<{
  n: string;
  title: string;
  icon: IconName;
  tone: string;
  items: string[];
}> = [
  {
    n: "01",
    title: "Idea & Setup",
    icon: "bulb",
    tone: "bg-[#e7f5fc] text-[#2f9fd0]",
    items: [
      "Entity structuring & setup",
      "DPIIT & tax benefits",
      "Founder agreements",
      "Tax registrations",
    ],
  },
  {
    n: "02",
    title: "Early Stage",
    icon: "gear",
    tone: "bg-[#e7f8ef] text-[#2ea36a]",
    items: [
      "Finance setup & SOPs",
      "Book-keeping, payroll & MIS",
      "GST, TDS & ROC compliance",
      "Accounting automation",
    ],
  },
  {
    n: "03",
    title: "Fundraising",
    icon: "chart",
    tone: "bg-[#fff4e6] text-[#e39a32]",
    items: [
      "Financial model & forecasts",
      "Valuation & ESOP design",
      "Due diligence & data room",
      "FEMA / FDI filings",
    ],
  },
  {
    n: "04",
    title: "Growth & Scale",
    icon: "rocket",
    tone: "bg-[#fdecee] text-[#e15d78]",
    items: [
      "Virtual CFO support",
      "Budgeting & profitability",
      "Internal controls & audit",
      "Investor / board reporting",
    ],
  },
  {
    n: "05",
    title: "Expansion & Exit",
    icon: "target",
    tone: "bg-[#f3eefb] text-[#7d5fe0]",
    items: [
      "Financial due diligence",
      "Valuation & M&A support",
      "Forensic reviews",
      "Cross-border expansion",
    ],
  },
];

export function Journey() {
  return (
    <section className="bg-white" aria-labelledby="journey-heading">
      <div className="mx-auto max-w-8xl px-5 pt-16 pb-20 lg:px-8 lg:pt-20 lg:pb-24">
        <p className="text-[11px] font-semibold tracking-[0.18em] text-[#7f93a6] uppercase">
          Services mapped to your journey
        </p>
        <h2
          id="journey-heading"
          className="mt-2 text-[1.85rem] leading-[1.15] font-bold tracking-[-0.03em] text-ink sm:text-[2.15rem]"
        >
          One partner from incorporation to exit
        </h2>

        <div className="-mx-5 mt-9 overflow-x-auto px-5 pb-2 lg:mx-0 lg:overflow-visible lg:px-0">
          <ol className="flex min-w-[1040px] items-start lg:min-w-0">
            {stages.map((stage, index) => (
              <li key={stage.n} className="flex min-w-0 flex-1 items-start">
                <div className="min-w-0 flex-1 pr-2">
                  <div className="flex items-center gap-2.5">
                    <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${stage.tone}`}>
                      <Icon name={stage.icon} className="h-[18px] w-[18px]" />
                    </span>
                    <span className="text-[13px] font-semibold text-[#9aafc0]">{stage.n}</span>
                  </div>
                  <h3 className="mt-3 text-[15px] leading-5 font-bold text-ink">{stage.title}</h3>
                  <ul className="mt-2.5 space-y-1">
                    {stage.items.map((item) => (
                      <li key={item} className="flex gap-2 text-[12.5px] leading-5 text-[#5c6e80]">
                        <span className="mt-[8px] h-1 w-1 shrink-0 rounded-full bg-[#8ea0b0]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {index < stages.length - 1 ? (
                  <span className="mt-3 shrink-0 pr-2 text-[#c5d3df]" aria-hidden>
                    <Icon name="arrow" className="h-4 w-4" />
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
