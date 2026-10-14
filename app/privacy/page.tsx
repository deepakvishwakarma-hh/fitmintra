import type { Metadata } from "next";
import { PageIntro } from "@/components/page-blocks";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How FinMitra handles the details you share through this website.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Privacy"
        title="What we do with the details you share."
        lede="The enquiry form on this site prepares an email to the FinMitra team. It does not store your message in a database."
      />
      <article className="mx-auto max-w-[760px] space-y-5 px-5 py-12 text-[15px] leading-7 text-[#3e5163] lg:px-8">
        <p>
          When you submit the form, your name, designation, company, mobile number, email and city stay in
          your browser until you choose &ldquo;Send by email&rdquo;. That opens your email app with the
          message addressed to {site.email}.
        </p>
        <p>
          Phone and email links use the details published on this site. We do not run advertising trackers
          or sell contact information.
        </p>
        <p>
          Questions about a message you have already sent can go to{" "}
          <a className="font-semibold text-navy hover:text-teal" href={site.emailHref}>
            {site.email}
          </a>
          .
        </p>
      </article>
    </>
  );
}
