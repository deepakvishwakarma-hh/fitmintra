"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "@/components/icons";
import { site } from "@/lib/site";

type Fields = {
  name: string;
  designation: string;
  company: string;
  mobile: string;
  email: string;
  city: string;
};

const empty: Fields = {
  name: "",
  designation: "",
  company: "",
  mobile: "",
  email: "",
  city: "",
};

const fields: Array<{
  name: keyof Fields;
  label: string;
  type?: string;
  autoComplete: string;
  inputMode?: "text" | "email" | "tel";
}> = [
  { name: "name", label: "Your Name *", autoComplete: "name" },
  { name: "designation", label: "Designation *", autoComplete: "organization-title" },
  { name: "company", label: "Company Name *", autoComplete: "organization" },
  { name: "mobile", label: "Mobile Number *", type: "tel", autoComplete: "tel", inputMode: "tel" },
  { name: "email", label: "Email Address *", type: "email", autoComplete: "email", inputMode: "email" },
  { name: "city", label: "City *", autoComplete: "address-level2" },
];

function validate(values: Fields) {
  const errors: Partial<Record<keyof Fields, string>> = {};
  if (values.name.trim().length < 2) errors.name = "Enter your name.";
  if (values.designation.trim().length < 2) errors.designation = "Enter your designation.";
  if (values.company.trim().length < 2) errors.company = "Enter your company name.";
  const digits = values.mobile.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15) errors.mobile = "Enter a valid mobile number.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (values.city.trim().length < 2) errors.city = "Enter your city.";
  return errors;
}

function mailtoFor(values: Fields) {
  const subject = encodeURIComponent(
    `Enquiry from ${values.name.trim()} at ${values.company.trim()}`,
  );
  const body = encodeURIComponent(
    [
      `Name: ${values.name.trim()}`,
      `Designation: ${values.designation.trim()}`,
      `Company: ${values.company.trim()}`,
      `Mobile: ${values.mobile.trim()}`,
      `Email: ${values.email.trim()}`,
      `City: ${values.city.trim()}`,
    ].join("\n"),
  );
  return `mailto:${site.email}?subject=${subject}&body=${body}`;
}

export function Contact({
  id = "contact",
  eyebrow = "Let's build together",
  title = "Tell us about your company",
  lede = "Share a few details and we'll connect with you.",
  submitLabel = "Submit",
  withArrow = false,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  lede?: string;
  submitLabel?: string;
  withArrow?: boolean;
} = {}) {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState<Fields | null>(null);

  function update(name: keyof Fields, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const first = Object.keys(nextErrors)[0] as keyof Fields;
      document.getElementById(`${id}-${first}`)?.focus();
      return;
    }
    setSent(values);
  }

  return (
    <section id={id} className="scroll-mt-24 px-5 py-14 lg:px-8 lg:py-16" aria-labelledby={`${id}-heading`}>
      <div className="mx-auto grid max-w-8xl items-center gap-10 lg:grid-cols-[0.86fr_1.14fr]">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.18em] text-[#8090a0] uppercase">{eyebrow}</p>
          <h2
            id={`${id}-heading`}
            className="mt-2 max-w-sm text-[2rem] leading-[1.15] font-bold tracking-[-0.03em] text-ink sm:text-[2.5rem]"
          >
            {title}
          </h2>
          <p className="mt-4 max-w-sm text-[15px] leading-7 text-muted">{lede}</p>
        </div>

        <div className="rounded-[22px] border border-white/80 bg-white p-5 shadow-[0_24px_50px_-28px_rgba(12,35,64,0.45)] sm:p-7">
          {sent ? (
            <div role="status" className="py-6">
              <h3 className="text-xl font-bold text-ink">Thanks, {sent.name.trim().split(" ")[0]}.</h3>
              <p className="mt-2 max-w-md text-sm leading-6 text-muted">
                Your enquiry is ready. Send it from your email app and the FinMitra team will follow up
                at {sent.email.trim()}.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={mailtoFor(sent)}
                  className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-navy px-5 py-3 text-sm font-semibold text-white hover:bg-[#163556]"
                >
                  Send by email
                  <Icon name="arrow" className="h-3.5 w-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSent(null);
                    setValues(empty);
                  }}
                  className="inline-flex items-center justify-center rounded-[10px] border border-line px-5 py-3 text-sm font-semibold text-navy hover:bg-[#f6fafc]"
                >
                  Submit another
                </button>
              </div>
            </div>
          ) : (
            <form className="grid gap-3 sm:grid-cols-2" onSubmit={onSubmit} noValidate>
              {fields.map((field) => {
                const error = errors[field.name];
                return (
                  <div key={field.name}>
                    <label htmlFor={`${id}-${field.name}`} className="sr-only">
                      {field.label.replace(" *", "")}
                    </label>
                    <input
                      id={`${id}-${field.name}`}
                      name={field.name}
                      type={field.type ?? "text"}
                      inputMode={field.inputMode}
                      autoComplete={field.autoComplete}
                      placeholder={field.label}
                      value={values[field.name]}
                      onChange={(event) => update(field.name, event.target.value)}
                      aria-invalid={error ? true : undefined}
                      aria-describedby={error ? `${id}-${field.name}-error` : undefined}
                      className={`w-full rounded-[10px] border bg-white px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-[#93a3b3] focus:ring-2 ${
                        error
                          ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                          : "border-[#e3ebf2] focus:border-teal focus:ring-teal/15"
                      }`}
                    />
                    {error ? (
                      <p id={`${id}-${field.name}-error`} className="mt-1 text-xs text-red-600">
                        {error}
                      </p>
                    ) : null}
                  </div>
                );
              })}
              <button
                type="submit"
                className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-navy py-3 text-sm font-semibold text-white transition hover:bg-[#163556] sm:col-span-2"
              >
                {submitLabel}
                {withArrow ? <Icon name="arrow" className="h-3.5 w-3.5" /> : null}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
