import type { ReactNode } from "react";

export type IconName =
  | "phone"
  | "mail"
  | "pin"
  | "menu"
  | "close"
  | "arrow"
  | "arrowDown"
  | "book"
  | "chart"
  | "users"
  | "clipboard"
  | "shield"
  | "user"
  | "bulb"
  | "gear"
  | "coins"
  | "rocket"
  | "globe"
  | "target"
  | "fileCheck"
  | "cursor"
  | "wallet"
  | "presentation"
  | "sprout"
  | "flag"
  | "linkedin"
  | "x"
  | "facebook";

const paths: Record<IconName, ReactNode> = {
  phone: (
    <path d="M7.2 4.8h2.2l1.2 2.8-1.6 1a11.2 11.2 0 0 0 5.4 5.4l1-1.6 2.8 1.2v2.2a1.6 1.6 0 0 1-1.7 1.6A14.4 14.4 0 0 1 5.6 6.5a1.6 1.6 0 0 1 1.6-1.7Z" />
  ),
  mail: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" />
      <circle cx="12" cy="11" r="2.2" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </>
  ),
  arrow: (
    <>
      <path d="M4 12h16" />
      <path d="M14 6l6 6-6 6" />
    </>
  ),
  arrowDown: (
    <>
      <path d="M12 4v16" />
      <path d="M6 14l6 6 6-6" />
    </>
  ),
  book: (
    <>
      <path d="M5 5.2A2.2 2.2 0 0 1 7.2 3H20v16H7.2A2.2 2.2 0 0 0 5 21.2Z" />
      <path d="M5 5.2A2.2 2.2 0 0 1 7.2 7.5H20" />
    </>
  ),
  chart: (
    <>
      <path d="M4 19h16" />
      <path d="M7 16V11" />
      <path d="M12 16V7" />
      <path d="M17 16V4" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="9" r="2.4" />
      <circle cx="16" cy="9.5" r="2" />
      <path d="M4.8 18.2c.6-2.4 2.4-3.7 4.2-3.7s3.6 1.3 4.2 3.7" />
      <path d="M14 14.6c1.3-.4 2.6-.2 3.5.6 1 .8 1.5 2 1.7 3" />
    </>
  ),
  clipboard: (
    <>
      <rect x="6" y="4.5" width="12" height="15.5" rx="2" />
      <path d="M9 4.5h6v2.2H9z" />
      <path d="M9 11h6" />
      <path d="M9 14.5h4" />
    </>
  ),
  shield: (
    <path d="M12 3.5 19 6.2v5.3c0 4-2.8 6.8-7 8.5-4.2-1.7-7-4.5-7-8.5V6.2L12 3.5Z" />
  ),
  user: (
    <>
      <circle cx="12" cy="8.2" r="3" />
      <path d="M5.5 19.2c1-3 3.2-4.5 6.5-4.5s5.5 1.5 6.5 4.5" />
    </>
  ),
  bulb: (
    <>
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      <path d="M8.2 14a5 5 0 1 1 7.6 0c-.8.8-1.3 1.6-1.5 2.6h-4.6c-.2-1-.7-1.8-1.5-2.6Z" />
    </>
  ),
  gear: (
    <>
      <path d="M10.1 3h3.8l.5 2.1a7 7 0 0 1 1.7.9l2-1.1 1.9 1.9-1.1 2c.4.5.7 1.1.9 1.7l2.1.5v3.8l-2.1.5a7 7 0 0 1-.9 1.7l1.1 2-1.9 1.9-2-1.1a7 7 0 0 1-1.7.9l-.5 2.1h-3.8l-.5-2.1a7 7 0 0 1-1.7-.9l-2 1.1-1.9-1.9 1.1-2a7 7 0 0 1-.9-1.7L3 14.4v-3.8l2.1-.5a7 7 0 0 1 .9-1.7l-1.1-2 1.9-1.9 2 1.1a7 7 0 0 1 1.7-.9L10.1 3Z" />
      <circle cx="12" cy="12" r="2.3" />
    </>
  ),
  coins: (
    <>
      <ellipse cx="12" cy="7" rx="6.5" ry="2.6" />
      <path d="M5.5 7v4.2c0 1.4 2.9 2.6 6.5 2.6s6.5-1.2 6.5-2.6V7" />
      <path d="M5.5 11.2v4.3c0 1.4 2.9 2.6 6.5 2.6s6.5-1.2 6.5-2.6v-4.3" />
    </>
  ),
  rocket: (
    <>
      <path d="M14.5 9.5 19 5c-4 .2-6.4 1.4-8.2 3.2S8 12.6 8 16l4.5-1.5" />
      <path d="M9 14c-1.6.3-3.2 1.6-4 3.2 1.8-.2 3.4-.8 4.6-1.8" />
      <path d="M14 9.2c.8 1.4 1.2 3 1.2 4.8L12 15.5" />
      <circle cx="14.2" cy="9.8" r="1" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="7.2" />
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 3.2v2.2M12 18.6v2.2M3.2 12h2.2M18.6 12h2.2" />
    </>
  ),
  fileCheck: (
    <>
      <path d="M7 3.5h7l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-9.5A1.5 1.5 0 0 1 5.5 20V5A1.5 1.5 0 0 1 7 3.5Z" />
      <path d="M14 3.5V8h4" />
      <path d="m8.5 14 2 2 4-4" />
    </>
  ),
  cursor: (
    <path d="M6 4.2 6 16.2l3.1-3 2.6 5.2 1.8-.9-2.6-5.1H16L6 4.2Z" />
  ),
  wallet: (
    <>
      <rect x="3.5" y="6.5" width="17" height="12" rx="2" />
      <path d="M3.5 10.5h17" />
      <circle cx="16.2" cy="14.2" r="0.8" fill="currentColor" stroke="none" />
    </>
  ),
  sprout: (
    <>
      <path d="M12 21V11" />
      <path d="M12 15c0-3.6 2.8-6 6.4-6.6-.8 3.6-2.8 5.6-6.4 6.6Z" />
      <path d="M12 17c0-2.8-2.2-4.8-5.2-5.4.8 3 2.4 4.6 5.2 5.4Z" />
    </>
  ),
  presentation: (
    <>
      <rect x="4" y="3.5" width="16" height="11" rx="1.6" />
      <path d="M12 14.5V19" />
      <path d="M8.5 19.5h7" />
      <path d="M8 11V8.2" />
      <path d="M12 11V6.8" />
      <path d="M16 11V9.2" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16" />
      <path d="M12 4c2.2 2.3 3.3 5 3.3 8s-1.1 5.7-3.3 8c-2.2-2.3-3.3-5-3.3-8S9.8 6.3 12 4Z" />
    </>
  ),
  flag: (
    <>
      <path d="M6.5 21V3.5" />
      <path d="M6.5 4.2h11L14 8.4l3.5 4.2h-11Z" fill="currentColor" stroke="none" />
    </>
  ),
  linkedin: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 10.5V16" />
      <path d="M8 7.5h.01" />
      <path d="M12 16v-3.2a1.8 1.8 0 0 1 3.2-1.1c.2.3.3.8.3 1.2V16" />
    </>
  ),
  x: (
    <path d="M6 6l12 12M18 6 6 18" />
  ),
  facebook: (
    <path d="M14 8h2V5h-2c-2.2 0-3.5 1.4-3.5 3.6V11H8v3h2.5v6H14v-6h2.2l.5-3H14V9c0-.6.2-1 .9-1Z" />
  ),
};

export function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {paths[name]}
    </svg>
  );
}
