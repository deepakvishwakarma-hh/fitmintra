import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";

const markers = [
  { label: "Idea", left: "54%", top: "76%" },
  { label: "Build", left: "60%", top: "62%" },
  { label: "Raise", left: "66%", top: "48%" },
  { label: "Scale", left: "72%", top: "33%" },
];

function HeroCopy() {
  return (
    <div className="max-w-[440px]">
      <h1 id="hero-heading">
        <span className="block text-[11px] font-semibold tracking-[0.18em] text-[#6d7e90] uppercase">
          Your finance partner for
        </span>
        <span className="mt-2 block text-[3.15rem] leading-[1.02] font-extrabold tracking-[-0.035em] text-teal sm:text-6xl">
          What&apos;s Next
        </span>
      </h1>
      <p className="mt-4 text-[15.5px] leading-7 text-[#3e5163]">
        From early ideas to global ambitions, we help startups build strong financial foundations
        and scale with confidence.
      </p>
      <div className="mt-7 flex flex-wrap gap-3">
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 rounded-[10px] bg-navy px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#163556]"
        >
          Get Started
          <Icon name="arrow" className="h-3.5 w-3.5" />
        </Link>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 rounded-[10px] border border-[#c5d2df] bg-white/85 px-5 py-2.5 text-sm font-semibold text-navy backdrop-blur-sm transition hover:bg-white"
        >
          Learn About Us
          <Icon name="arrow" className="h-3.5 w-3.5" />

        </Link>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="mx-auto max-w-8xl px-5 pt-6 pb-4 lg:px-8 lg:pt-8" aria-labelledby="hero-heading">
      <div className="lg:relative">
        <div className="relative z-10 mb-6 lg:absolute lg:inset-0 lg:mb-0 lg:flex lg:items-center lg:px-12 xl:px-14">
          <HeroCopy />
        </div>
        <div className="relative h-[280px] overflow-hidden rounded-[28px] sm:h-[360px] lg:h-[520px]">
        <Image
          src="/banner3.png"
          alt="Sunrise over snow-covered peaks, with a forest trail climbing toward the summit"
          fill
          preload
          sizes="(max-width: 1536px) 100vw, 1536px"
          className="object-cover object-[72%_58%]"
        />
        <div className="absolute inset-y-0 left-0 hidden w-[58%] bg-gradient-to-r from-blue-50 via-white/80 to-transparent lg:block" />


      </div>
      </div>
    </section>
  );
}
