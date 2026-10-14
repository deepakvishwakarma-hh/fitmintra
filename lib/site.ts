export const site = {
  name: "FinMitra",
  phoneDisplay: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  email: "hello@finmitra.in",
  emailHref: "mailto:hello@finmitra.in",
  city: "Bengaluru, India",
  tagline: "Finance. Compliance. Strategy. For what's next.",
} as const;

export const nav = [
  { href: "/", label: "Home", id: "home" },
  { href: "/startup", label: "Startup FinMitra", id: "startup" },
  { href: "/cfo", label: "FinMitra CFO", id: "cfo" },
  { href: "/about", label: "About", id: "about" },
  { href: "/#contact", label: "Contact", id: "contact" },
] as const;
