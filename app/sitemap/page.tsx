import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-blocks";
import { nav } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "All pages on the FinMitra website.",
};

const pages = [
  ...nav.map((item) => ({ href: item.href, label: item.label })),
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export default function SitemapPage() {
  return (
    <>
      <PageIntro
        eyebrow="Sitemap"
        title="Every page, in one list."
        lede="Jump to a service, the company story, or the enquiry form."
      />
      <ul className="mx-auto grid max-w-8xl gap-3 px-5 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {pages.map((page) => (
          <li key={page.href}>
            <Link
              href={page.href}
              className="block rounded-2xl border border-line px-5 py-4 text-sm font-semibold text-navy hover:border-[#cfe3dc] hover:text-teal"
            >
              {page.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
