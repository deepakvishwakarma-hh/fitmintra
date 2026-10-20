import { BarChart3, ChevronRight, Cog, Lightbulb, Rocket, Target, type LucideIcon } from "lucide-react";

const stages: Array<{
  n: string;
  title: string;
  icon: LucideIcon;
  card: string;
  iconColor: string;
  items: string[];
}> = [
  {
    n: "01",
    title: "Idea & Setup",
    icon: Lightbulb,
    card: "bg-[#e7f4fc]",
    iconColor: "text-[#3aa0d4]",
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
    icon: Cog,
    card: "bg-[#e7f8ef]",
    iconColor: "text-[#3aaa72]",
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
    icon: BarChart3,
    card: "bg-[#fff4e8]",
    iconColor: "text-[#e39a3c]",
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
    icon: Rocket,
    card: "bg-[#fdecef]",
    iconColor: "text-[#e36b86]",
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
    icon: Target,
    card: "bg-[#f3eefc]",
    iconColor: "text-[#7d62d6]",
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
      <div className="mx-auto max-w-8xl px-5 pt-5 pb-20 lg:px-8 lg:pt-10 lg:pb-24">
        <p className="text-[11px] font-semibold tracking-[0.18em] text-[#7f93a6] uppercase">
          Services mapped to your journey
        </p>
        <h2
          id="journey-heading"
          className="mt-2 text-[1.85rem] leading-[1.15] font-bold tracking-[-0.03em] text-ink sm:text-[2.15rem]"
        >
          One partner from incorporation to exit
        </h2>

        <div className="mt-8 overflow-x-auto pb-2">
          <ol className="grid min-w-[1080px] grid-cols-5 gap-x-8 xl:min-w-0">
            {stages.map((stage, index) => (
              <li key={stage.n} className={`relative flex flex-col rounded-2xl px-4 py-4 ${stage.card}`}>
                <div className="flex items-center gap-2">
                  <stage.icon className={`h-5 w-5 ${stage.iconColor}`} strokeWidth={1.75} aria-hidden />
                  <span className="text-[13px] font-semibold text-[#8aa0b3]">{stage.n}</span>
                </div>
                <h3 className="mt-3 text-[15px] leading-5 font-bold text-ink">{stage.title}</h3>
                <ul className="mt-3 space-y-1.5">
                  {stage.items.map((item) => (
                    <li key={item} className="flex gap-2 text-[12.5px] leading-5 text-[#5c6e80]">
                      <span className="mt-[8px] h-1 w-1 shrink-0 rounded-full bg-[#8ea0b0]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {index < stages.length - 1 ? (
                  <span
                    className="absolute top-1/2 left-[calc(100%+16px)] -translate-x-1/2 -translate-y-1/2 text-[#b7c6d4]"
                    aria-hidden
                  >
                    <ChevronRight className="h-4 w-4" strokeWidth={1.75} />
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
