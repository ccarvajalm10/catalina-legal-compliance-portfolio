import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["SOFT", "opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: `${siteConfig.author.name}, ${siteConfig.author.title}`,
  description:
    "Privacy investigations grounded in technical evidence: case work on GDPR, ISO/IEC 27001 and the EU AI Act, a methodology for ambiguous privacy incidents, and the SQL and data-analysis skills behind them.",
};

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--paper)_86%,transparent)] backdrop-blur">
      <div className="container-x flex h-[60px] items-center justify-between py-3">
        <Link href="/" className="font-serif text-[19px] font-medium tracking-tight">
          {siteConfig.author.name}
        </Link>
        <div className="hidden items-center gap-2 rounded-full border border-[var(--line-2)] px-3 py-1 text-[11.5px] text-[var(--ink-2)] md:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--v-met)]" />
          {siteConfig.author.availability}
        </div>
        <nav className="flex items-center gap-1 text-[13.5px] text-[var(--ink-2)]">
          <Link href="/case-study" className="rounded-lg px-3 py-1.5 hover:bg-black/[0.04] hover:text-[var(--ink)]">
            Work
          </Link>
          <Link href="/investigations" className="rounded-lg px-3 py-1.5 hover:bg-black/[0.04] hover:text-[var(--ink)]">
            Investigations
          </Link>
          <Link href="/skills" className="rounded-lg px-3 py-1.5 hover:bg-black/[0.04] hover:text-[var(--ink)]">
            Skills
          </Link>
          <Link href="/#about" className="rounded-lg px-3 py-1.5 hover:bg-black/[0.04] hover:text-[var(--ink)]">
            About
          </Link>
          <Link href="/experience" className="rounded-lg px-3 py-1.5 hover:bg-black/[0.04] hover:text-[var(--ink)]">
            Experience
          </Link>
          <Link href="/#contact" className="rounded-lg px-3 py-1.5 hover:bg-black/[0.04] hover:text-[var(--ink)]">
            Contact
          </Link>
          <a
            href={siteConfig.links.repo}
            className="ml-1 rounded-lg border border-[var(--line-2)] px-3 py-1.5 hover:border-[var(--ink-3)] hover:text-[var(--ink)]"
          >
            Code
          </a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--line)]">
      <div className="container-x flex flex-col gap-3 py-10 text-[13.5px] text-[var(--ink-2)] sm:flex-row sm:items-center sm:justify-between">
        <p>
          {siteConfig.author.name}, {siteConfig.author.title}. {siteConfig.author.location}.
        </p>
        <div className="flex gap-4">
          <a href={`mailto:${siteConfig.author.email}`} className="hover:text-[var(--ink)]">
            Email
          </a>
          <a href={siteConfig.links.linkedin} className="hover:text-[var(--ink)]">
            LinkedIn
          </a>
          <a href={siteConfig.links.github} className="hover:text-[var(--ink)]">
            GitHub
          </a>
        </div>
      </div>
      <div className="container-x pb-10 text-[11.5px] leading-relaxed text-[var(--ink-3)]">
        The sample company, its documents and the assessment shown in the live tool are
        fictional and were written for this demonstration. ISO/IEC 27001 and 27002 are
        copyright works of ISO/IEC and their text is not reproduced here.
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
