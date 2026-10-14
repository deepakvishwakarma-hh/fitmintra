import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";

const services = [
  {
    id: "startup",
    title: "Startup FinMitra",
    body: "Ongoing finance, compliance and advisory support through a simple monthly subscription.",
    href: "/startup",
    cta: "Explore Startup FinMitra",
    image: "/images/sprout.jpg",
    alt: "A young green seedling growing from dark soil",
    position: "object-[72%_28%]",
  },
  {
    id: "cfo",
    title: "FinMitra CFO",
    body: "Customised CFO support for Series A and growth-stage startups.",
    href: "/cfo",
    cta: "Explore FinMitra CFO",
    image: "/images/bonsai.jpg",
    alt: "A bonsai pine rooted on a rock in still water at sunrise",
    position: "object-[88%_center]",
  },
];

export function Services() {
  return (
    <section className="mx-auto max-w-[1180px] px-5 py-16 lg:px-8 lg:py-20" aria-labelledby="services-heading">
      <SectionHeading
        eyebrow="Our services"
        title={
          <>
            <span className="text-teal">Finance Support</span> for Every Stage of Your Journey
          </>
        }
        headingId="services-heading"
      />

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.id}
            id={service.id}
            className="scroll-mt-28 overflow-hidden rounded-[22px] border border-line bg-white shadow-[0_18px_40px_-28px_rgba(12,35,64,0.55)]"
          >
            <div className="grid sm:grid-cols-[1.2fr_0.8fr]">
              <div className="flex flex-col p-6 sm:p-7">
                <h3 className="text-[1.4rem] font-bold tracking-[-0.02em] text-teal">{service.title}</h3>
                <p className="mt-3 text-[15px] leading-6 text-muted">{service.body}</p>
                <Link
                  href={service.href}
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-[10px] bg-navy px-3.5 py-2.5 text-[13px] font-semibold whitespace-nowrap text-white transition hover:bg-[#163556]"
                >
                  {service.cta}
                  <Icon name="arrow" className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="relative h-48 sm:h-auto sm:min-h-[230px]">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 420px"
                  className={`object-cover ${service.position}`}
                />
                <div className="absolute inset-y-0 left-0 hidden w-16 bg-gradient-to-r from-white to-transparent sm:block" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
