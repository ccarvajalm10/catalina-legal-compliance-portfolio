import type { Metadata } from "next";
import { Consultation } from "@/components/Consultation";
import { EDUCATION, CREDENTIALS, EXPERIENCE } from "@/lib/experience";

export const metadata: Metadata = {
  title: "Experience: education, credentials and roles",
  description:
    "Education (EMILDAI Master's in Law, Data & AI), credentials (CIPP/E, CIPM), and experience across privacy consulting and technology-sector legal work.",
};

export default function ExperiencePage() {
  return (
    <div data-accent="clay">
      <section className="container-x max-w-[860px] pt-14 pb-4">
        <p className="kicker on-accent">Experience</p>
        <h1 className="display mt-3 text-[clamp(2rem,4.4vw,3rem)]">Background</h1>
        <p className="mt-5 max-w-[640px] text-[16px] leading-relaxed text-[var(--ink-2)]">
          Education, credentials, and the roles behind the practice on this site.
        </p>
      </section>

      {/* education */}
      <section className="container-x max-w-[860px] py-8">
        <div className="card p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--ink-3)]">
            {EDUCATION.institution}
          </p>
          <h2 className="mt-1 font-serif text-[22px]">{EDUCATION.programme}</h2>
          <p className="mt-1 text-[13px] text-[var(--ink-3)]">{EDUCATION.route}</p>
          <p className="mt-3 max-w-[600px] text-[13.5px] leading-relaxed text-[var(--ink-2)]">
            {EDUCATION.note}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {EDUCATION.themes.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>

          <details className="mt-5 border-t border-[var(--line)] pt-4">
            <summary className="cursor-pointer text-[13px] font-semibold text-[var(--accent-deep)]">
              Modules
            </summary>
            <ul className="icon-list mt-3">
              {EDUCATION.modules.map((m) => (
                <li key={m}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </section>

      {/* credentials */}
      <section className="bg-[var(--paper-2)]">
        <div className="container-x max-w-[860px] py-10">
          <p className="kicker on-accent">Credentials</p>
          <div className="mt-5 flex flex-wrap gap-4">
            {CREDENTIALS.map((c) => (
              <div key={c.name} className="rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3">
                <div className="font-serif text-[17px]">{c.name}</div>
                <div className="mt-0.5 text-[12px] text-[var(--ink-3)]">
                  {c.issuer} · {c.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* experience timeline */}
      <section className="container-x max-w-[860px] py-10">
        <p className="kicker on-accent">Roles</p>
        <h2 className="display mt-3 text-[clamp(1.6rem,3vw,2.2rem)]">Where this comes from</h2>
        <div className="mt-8 space-y-6">
          {EXPERIENCE.map((r, i) => (
            <div key={r.org} className="relative pl-8">
              {i < EXPERIENCE.length - 1 && (
                <span className="absolute left-[7px] top-6 h-[calc(100%+0.5rem)] w-px bg-[var(--line-2)]" />
              )}
              <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-[var(--accent)] bg-[var(--surface)]" />
              <div className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--ink-3)]">
                {r.frame === "intern" ? "Internship" : "Consulting"}
              </div>
              <div className="mt-1 font-serif text-[19px]">
                {r.org}{" "}
                <span className="font-sans text-[14px] font-normal text-[var(--ink-2)]">
                  · {r.role}
                </span>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {r.themes.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
              <details className="mt-3">
                <summary className="cursor-pointer text-[13px] font-semibold text-[var(--accent-deep)]">
                  Highlights
                </summary>
                <ul className="icon-list mt-3">
                  {r.highlights.map((h) => (
                    <li key={h}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </details>
            </div>
          ))}
        </div>
      </section>

      <Consultation variant="band" />
    </div>
  );
}
