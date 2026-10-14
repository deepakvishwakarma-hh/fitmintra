"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { nav, site } from "@/lib/site";

function isActive(id: string, pathname: string, hash: string) {
  if (id === "home") return pathname === "/" && hash !== "#contact";
  if (id === "contact") return hash === "#contact";
  if (id === "startup") return pathname.startsWith("/startup");
  if (id === "cfo") return pathname.startsWith("/cfo");
  if (id === "about") return pathname.startsWith("/about");
  return false;
}

export function HeaderFallback() {
  return <HeaderBar pathname="/" hash="" open={false} interactive={false} />;
}

export function Header() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sync = () => setHash(window.location.hash);
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [pathname]);

  useEffect(() => {
    setOpen(false);
  }, [pathname, hash]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <HeaderBar
      pathname={pathname}
      hash={hash}
      open={open}
      interactive
      onToggle={() => setOpen((value) => !value)}
      onNavigate={() => setOpen(false)}
    />
  );
}

function HeaderBar({
  pathname,
  hash,
  open,
  interactive,
  onToggle,
  onNavigate,
}: {
  pathname: string;
  hash: string;
  open: boolean;
  interactive: boolean;
  onToggle?: () => void;
  onNavigate?: () => void;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-[#eef3f7] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-[1180px] items-center gap-4 px-5 lg:px-8">
        <Link href="/" aria-label="FinMitra home" className="shrink-0" onClick={onNavigate}>
          <Logo />
        </Link>

        <nav className="ml-6 hidden items-center gap-5 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = isActive(item.id, pathname, hash);
            return (
              <Link
                key={item.id}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative text-[13.5px] font-medium transition-colors ${
                  active ? "text-navy" : "text-[#3e5163] hover:text-navy"
                }`}
              >
                {item.label}
                {active ? (
                  <span className="absolute -bottom-2 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-teal" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto hidden items-center gap-4 lg:flex">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-1.5 text-[13px] font-medium text-[#24384c] hover:text-teal min-[1280px]:inline-flex"
          >
            <Icon name="phone" className="h-4 w-4 text-teal" />
            {site.phoneDisplay}
          </a>
          <a
            href={site.emailHref}
            className="hidden items-center gap-1.5 text-[13px] font-medium text-[#24384c] hover:text-teal min-[1280px]:inline-flex"
          >
            <Icon name="mail" className="h-4 w-4 text-teal" />
            {site.email}
          </a>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-[10px] bg-navy px-4 py-2.5 text-[13.5px] font-semibold text-white transition hover:bg-[#163556]"
          >
            Get Started
            <Icon name="arrow" className="h-3.5 w-3.5" />
          </Link>
        </div>

        {interactive ? (
          <button
            type="button"
            className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-navy lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={onToggle}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
          </button>
        ) : (
          <span className="ml-auto h-10 w-10 lg:hidden" />
        )}
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-line px-5 py-4 lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {nav.map((item) => {
              const active = isActive(item.id, pathname, hash);
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={onNavigate}
                  aria-current={active ? "page" : undefined}
                  className={`border-b border-[#f2f6f9] py-3 text-[15px] font-medium ${
                    active ? "text-teal" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-4 flex flex-col gap-3 text-sm font-medium text-[#24384c]">
            <a href={site.phoneHref} className="inline-flex items-center gap-2">
              <Icon name="phone" className="h-4 w-4 text-teal" />
              {site.phoneDisplay}
            </a>
            <a href={site.emailHref} className="inline-flex items-center gap-2">
              <Icon name="mail" className="h-4 w-4 text-teal" />
              {site.email}
            </a>
          </div>
          <Link
            href="/#contact"
            onClick={onNavigate}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-navy px-4 py-3 text-sm font-semibold text-white"
          >
            Get Started
            <Icon name="arrow" className="h-3.5 w-3.5" />
          </Link>
        </div>
      ) : null}
    </header>
  );
}
