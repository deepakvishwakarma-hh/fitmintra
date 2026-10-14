import type { Metadata } from "next";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Journey } from "@/components/journey";
import { Questions } from "@/components/questions";
import { Services } from "@/components/services";

export const metadata: Metadata = {
  title: { absolute: "FinMitra — Finance for What's Next" },
  description:
    "From early ideas to global ambitions, FinMitra helps startups build strong financial foundations and scale with confidence.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Questions />
      <Journey />
      <div className="relative bg-band">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="absolute top-0 left-0 h-14 w-full -translate-y-full text-band"
          aria-hidden
        >
          <path fill="currentColor" d="M0 80h1440V36C1140 4 860 72 560 42S160 8 0 40v40Z" />
        </svg>
        <Contact />
      </div>
      <svg
        viewBox="0 0 1440 72"
        preserveAspectRatio="none"
        className="block h-14 w-full bg-white text-band"
        aria-hidden
      >
        <path fill="currentColor" d="M0 0h1440v22C1120 68 760 6 420 30S40 64 0 22V0Z" />
      </svg>
      <About />
    </>
  );
}
