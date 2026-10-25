import Image from "next/image";

export type CaseStudy = {
  company: string;
  founder: string;
  text: string;
  logo: string;
  logoDark?: boolean;
};

function initials(company: string) {
  return company
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join("");
}

export function CaseStudyGrid({ studies }: { studies: CaseStudy[] }) {
  return (
    <div className="mt-8 grid items-stretch gap-5 md:grid-cols-3">
      {studies.map((study, index) => (
        <article
          key={`${study.company}-${index}`}
          className="flex h-full flex-col rounded-[22px] border border-line bg-[#f8fbfd] p-6 shadow-[0_12px_30px_-24px_rgba(12,35,64,0.5)]"
        >
          <span className="font-serif text-[3.5rem] leading-none font-bold text-teal" aria-hidden>
            “
          </span>
          <p className="mt-2 text-base leading-7 font-bold tracking-[-0.01em] text-ink">{study.text}</p>
          <div className="mt-auto flex items-center gap-3.5 pt-6">
            {study.logo ? (
              <div
                className={`relative h-14 w-24 shrink-0 overflow-hidden rounded-xl border border-line ${
                  study.logoDark ? "bg-black" : "bg-white"
                }`}
              >
                <Image
                  src={study.logo}
                  alt={`${study.company} logo`}
                  fill
                  sizes="96px"
                  className="object-contain p-1"
                />
              </div>
            ) : (
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#e7f3fc] text-[13px] font-bold text-navy">
                {initials(study.company)}
              </span>
            )}
            <div>
              <p className="text-[14px] font-bold text-ink">{study.founder}</p>
              <p className="text-[13px] text-muted">{study.company}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
