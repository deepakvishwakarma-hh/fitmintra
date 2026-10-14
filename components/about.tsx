import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { Logo } from "@/components/logo";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-white" aria-labelledby="about-heading">
      <div className="mx-auto grid max-w-8xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.18em] text-[#8090a0] uppercase">About FinMitra</p>
          <h2
            id="about-heading"
            className="mt-2 text-[2rem] leading-[1.15] font-bold tracking-[-0.03em] text-ink sm:text-[2.6rem]"
          >
            A Partner in
            <br />
            Your Growth Story
          </h2>
          <p className="mt-4 max-w-md text-[15.5px] leading-7 text-muted">
            We work with ambitious founders to build strong financial foundations, navigate complexity
            and create long-term value.
          </p>
          <Link
            href="/about"
            className="mt-7 inline-flex items-center gap-2 rounded-[10px] bg-navy px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#163556]"
          >
            Learn More About Us
            <Icon name="arrow" className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="relative aspect-[16/10] overflow-hidden rounded-[22px] shadow-[0_20px_40px_-28px_rgba(12,35,64,0.6)]">
          <Image
            src="/images/office.jpg"
            alt="A modern office with a glass meeting room, wood ceiling and indoor plants"
            fill
            sizes="(max-width: 1024px) 100vw, 740px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,18,32,0.08),rgba(8,18,32,0.18))]" />
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="rounded-2xl bg-white px-5 py-3 shadow-lg">
              <Logo size="lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
