import type { Metadata } from "next";
import { PageIntro } from "@/components/page-blocks";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms for using the FinMitra website.",
};

export default function TermsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Terms"
        title="Using this website."
        lede="The pages on this site describe FinMitra's services. Sending an enquiry starts a conversation — it is not yet an engagement."
      />
      <article className="mx-auto max-w-[760px] space-y-5 px-5 py-12 text-[15px] leading-7 text-[#3e5163] lg:px-8">
        <p>
          Service descriptions are a guide to how we work with startups. Scope, fees and timelines are
          confirmed separately once we understand your company.
        </p>
        <p>
          You are responsible for the accuracy of the details you send. Please don&apos;t include passwords,
          bank OTPs or other secrets in the enquiry.
        </p>
        <p>
          The site is provided from {site.city}. For anything about these terms, write to{" "}
          <a className="font-semibold text-navy hover:text-teal" href={site.emailHref}>
            {site.email}
          </a>
          .
        </p>
      </article>
    </>
  );
}
