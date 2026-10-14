import { useId } from "react";

type LogoProps = {
  variant?: "default" | "light";
  size?: "md" | "lg";
};

export function Logo({ variant = "default", size = "md" }: LogoProps) {
  const id = useId().replace(/:/g, "");
  const light = variant === "light";
  const markClass = size === "lg" ? "h-14 w-[4.6rem]" : "h-9 w-12";
  const wordClass =
    size === "lg"
      ? "text-[1.85rem] leading-none"
      : "text-[1.15rem] leading-none";
  const tagClass = size === "lg" ? "mt-1.5 text-[10px]" : "mt-1 text-[8px]";

  return (
    <span className="inline-flex items-center gap-2.5">
      <svg viewBox="0 0 64 36" className={`${markClass} shrink-0`} aria-hidden>
        <defs>
          <linearGradient id={`${id}-l`} x1="2" y1="4" x2="34" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7AF0E4" />
            <stop offset="0.55" stopColor="#2EC3CF" />
            <stop offset="1" stopColor="#178FB4" />
          </linearGradient>
          <linearGradient id={`${id}-r`} x1="32" y1="4" x2="62" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor={light ? "#9ED4FF" : "#3E7EC8"} />
            <stop offset="1" stopColor={light ? "#F3F9FF" : "#0B2340"} />
          </linearGradient>
        </defs>
        <path
          d="M33 18c-2.8-6.4-7.6-11-14.2-11C10.2 7 4 12 4 18s6.2 11 14.8 11c6.6 0 11.4-4.6 14.2-11Z"
          stroke={`url(#${id}-l)`}
          strokeWidth="5.4"
          fill="none"
        />
        <path
          d="M31 18c2.8 6.4 7.6 11 14.2 11C53.8 29 60 24 60 18S53.8 7 45.2 7c-6.6 0-11.4 4.6-14.2 11Z"
          stroke={`url(#${id}-r)`}
          strokeWidth="5.4"
          fill="none"
        />
      </svg>
      <span className="flex flex-col">
        <span
          className={`${wordClass} font-extrabold tracking-[-0.03em] ${light ? "text-white" : "text-navy"}`}
        >
          FinMitra
        </span>
        <span
          className={`${tagClass} font-semibold tracking-[0.16em] uppercase ${light ? "text-white/75" : "text-[#7d8da0]"}`}
        >
          Finance for what&apos;s next
        </span>
      </span>
    </span>
  );
}
