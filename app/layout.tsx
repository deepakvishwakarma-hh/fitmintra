import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Suspense } from "react";
import { Footer } from "@/components/footer";
import { Header, HeaderFallback } from "@/components/header";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: {
    default: "FinMitra — Finance for What's Next",
    template: "%s · FinMitra",
  },
  description:
    "From early ideas to global ambitions, FinMitra helps startups build strong financial foundations and scale with confidence.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`} data-scroll-behavior="smooth">
      <body className="flex min-h-full flex-col font-sans text-ink">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:shadow"
        >
          Skip to content
        </a>
        <Suspense fallback={<HeaderFallback />}>
          <Header />
        </Suspense>
        <main id="content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
