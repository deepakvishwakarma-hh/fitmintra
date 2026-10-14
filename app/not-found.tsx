import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-[720px] flex-col items-start px-5 py-24 lg:px-8">
      <p className="text-[11px] font-semibold tracking-[0.18em] text-[#8090a0] uppercase">404</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink">This page is not on the map.</h1>
      <p className="mt-3 text-[15px] leading-7 text-muted">
        The link may be out of date. Head home, or tell us what you were looking for.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex rounded-[10px] bg-navy px-5 py-2.5 text-sm font-semibold text-white"
        >
          Back home
        </Link>
        <Link
          href="/#contact"
          className="inline-flex rounded-[10px] border border-line px-5 py-2.5 text-sm font-semibold text-navy"
        >
          Contact
        </Link>
      </div>
    </section>
  );
}
