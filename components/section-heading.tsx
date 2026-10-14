import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  headingId,
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  headingId?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="text-[11px] font-semibold tracking-[0.18em] text-[#8090a0] uppercase">{eyebrow}</p>
      <h2
        id={headingId}
        className="mt-2 max-w-[680px] text-[1.85rem] leading-[1.18] font-bold tracking-[-0.025em] text-ink sm:text-[2.15rem]"
      >
        {title}
      </h2>
    </div>
  );
}
