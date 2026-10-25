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
        <Contact
        lede="Change from Finance health check to Complimentary Consultation."
        />
      {/* <About /> */}
    </>
  );
}
