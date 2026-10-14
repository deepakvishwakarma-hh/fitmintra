import Link from "next/link";
import { Icon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { nav, site } from "@/lib/site";

const legal = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/sitemap", label: "Sitemap" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-8xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8 lg:py-14">
        <div>
          <Link href="/" aria-label="FinMitra home">
            <Logo variant="light" />
          </Link>
          <p className="mt-5 max-w-[240px] text-sm leading-6 text-white/75">
            Finance. Compliance. Strategy.
            <br />
            For what&apos;s next.
          </p>
        </div>

        <address className="flex flex-col gap-3 text-sm not-italic text-white/85">
          <a href={site.phoneHref} className="inline-flex items-center gap-2.5 hover:text-white">
            <Icon name="phone" className="h-4 w-4 text-[#7ddec8]" />
            {site.phoneDisplay}
          </a>
          <a href={site.emailHref} className="inline-flex items-center gap-2.5 hover:text-white">
            <Icon name="mail" className="h-4 w-4 text-[#7ddec8]" />
            {site.email}
          </a>
          <p className="inline-flex items-center gap-2.5">
            <Icon name="pin" className="h-4 w-4 text-[#7ddec8]" />
            {site.city}
          </p>
        </address>

        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between lg:justify-end lg:gap-16">
          <nav className="flex flex-col gap-2.5 text-sm text-white/80" aria-label="Footer">
            {nav.map((item) => (
              <Link key={item.id} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="text-sm text-white/70">
            <div className="flex items-center gap-2.5">
              <a
                href={site.emailHref}
                aria-label="Email FinMitra"
                className="grid h-8 w-8 place-items-center rounded-full border border-white/20 hover:bg-white/10"
              >
                <Icon name="linkedin" className="h-3.5 w-3.5" />
              </a>
              <a
                href={site.emailHref}
                aria-label="Message FinMitra"
                className="grid h-8 w-8 place-items-center rounded-full border border-white/20 hover:bg-white/10"
              >
                <Icon name="facebook" className="h-3.5 w-3.5" />
              </a>
              <a
                href={site.emailHref}
                aria-label="Contact FinMitra"
                className="grid h-8 w-8 place-items-center rounded-full border border-white/20 hover:bg-white/10"
              >
                <Icon name="x" className="h-3.5 w-3.5" />
              </a>
            </div>
            <p className="mt-4 flex flex-wrap gap-x-2 gap-y-1">
              {legal.map((item, index) => (
                <span key={item.href} className="inline-flex items-center gap-2">
                  {index > 0 ? <span aria-hidden>·</span> : null}
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </span>
              ))}
            </p>
            <p className="mt-3 text-[13px] text-white/60">© 2026 FinMitra. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
