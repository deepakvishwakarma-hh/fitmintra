import Link from "next/link";
import { Icon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { nav, site } from "@/lib/site";

const legal = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/sitemap", label: "Sitemap" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: site.name,
  description: site.tagline,
  email: site.email,
  telephone: "+919876543210",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.streetAddress,
    addressLocality: site.address.addressLocality,
    postalCode: site.address.postalCode,
    addressCountry: site.address.addressCountry,
  },
  areaServed: "IN",
};

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-8xl px-5 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-10">
          <div className="sm:col-span-2 lg:col-span-5">
            <Link href="/" aria-label="FinMitra home" className="inline-flex">
              <Logo variant="light" />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-6 text-white/75">{site.tagline}</p>
          </div>

          <nav className="lg:col-span-3" aria-label="Footer">
            <h2 className="text-[11px] font-semibold tracking-[0.18em] text-[#7ddec8] uppercase">Explore</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-white/80">
              {nav.map((item) => (
                <li key={item.id}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <h2 className="text-[11px] font-semibold tracking-[0.18em] text-[#7ddec8] uppercase">Contact</h2>
            <address className="mt-4 space-y-3 text-sm not-italic text-white/85">
              <a href={site.phoneHref} className="grid grid-cols-[1.25rem_1fr] items-center gap-3 hover:text-white">
                <Icon name="phone" className="h-4 w-4 text-[#7ddec8]" />
                {site.phoneDisplay}
              </a>
              <a href={site.emailHref} className="grid grid-cols-[1.25rem_1fr] items-center gap-3 hover:text-white">
                <Icon name="mail" className="h-4 w-4 text-[#7ddec8]" />
                {site.email}
              </a>
              <p className="grid grid-cols-[1.25rem_1fr] items-start gap-3">
                <Icon name="pin" className="mt-0.5 h-4 w-4 text-[#7ddec8]" />
                <span>
                  {site.address.streetAddress}
                  <br />
                  {site.address.addressLocality}-{site.address.postalCode}
                </span>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p>© 2026 FinMitra. All rights reserved.</p>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </footer>
  );
}
