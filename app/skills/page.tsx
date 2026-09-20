import type { Metadata } from "next";
import Link from "next/link";
import { Consultation } from "@/components/Consultation";
import { SKILLS, WORK_SAMPLES, WORK_SAMPLE_CATEGORIES, BUILD_TOOLS } from "@/lib/skills";

export const metadata: Metadata = {
  title: "Skills: privacy, technical evidence and cross-functional delivery",
  description:
    "How the case studies and further work on this site evidence privacy and GDPR knowledge, working with logs and technical evidence, SQL and scripting, and cross-functional delivery across legal, procurement, information security, business continuity and IT engineering.",
};

function domainOf(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export default function SkillsPage() {
  return (
    <div data-accent="clay">
      <section className="container-x max-w-[880px] pt-14 pb-4">
        <p className="kicker on-accent">Skills</p>
        <h1 className="display mt-3 text-[clamp(2rem,4.4vw,3rem)]">
          What the work on this site is evidence of
        </h1>
        <p className="mt-5 max-w-[680px] text-[16px] leading-relaxed text-[var(--ink-2)]">
          The case studies double as evidence for specific, practical skills. Each one
          below links to where it shows up: in a case study, in the live tool, or in
          further work I keep outside this repository and share for review.
        </p>
      </section>

      <section className="container-x max-w-[880px] py-8">
        <div className="grid gap-4">
          {SKILLS.map((s) => (
            <div key={s.skill} className="card p-5">
              <div className="font-semibold text-[14.5px] text-[var(--ink)]">{s.skill}</div>
              <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--ink-2)]">
                {s.evidence}
              </p>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
                {s.links.map((l) =>
                  l.href.startsWith("#") || l.href.startsWith("/") ? (
                    <Link
                      key={l.label}
                      href={l.href}
                      className="text-[13px] font-semibold text-[var(--accent-deep)] hover:underline"
                    >
                      {l.label}
                    </Link>
                  ) : (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] font-semibold text-[var(--accent-deep)] hover:underline"
                    >
                      {l.label}
                    </a>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* further work samples */}
      <section id="work-samples" className="scroll-mt-20 bg-[var(--paper-2)]">
        <div className="container-x max-w-[880px] py-14">
          <p className="kicker on-accent">Knowledge Lab</p>
          <h2 className="display mt-3 text-[clamp(1.7rem,3.2vw,2.4rem)]">
            Knowledge Lab &amp; Work Samples
          </h2>
          <p className="mt-4 max-w-[640px] text-[14.5px] leading-relaxed text-[var(--ink-2)]">
            Here you will find my Knowledge Lab &amp; Work Samples.
          </p>
          <p className="mt-3 max-w-[640px] text-[14.5px] leading-relaxed text-[var(--ink-2)]">
            They are not exhaustive references. They are personal working frameworks I
            have built to apply EU digital regulation, T&amp;S governance, data
            protection, and cybersecurity compliance in practice.
          </p>

          <div className="mt-8 space-y-10">
            {WORK_SAMPLE_CATEGORIES.map((cat) => {
              const items = WORK_SAMPLES.filter((w) => w.category === cat);
              if (items.length === 0) return null;
              return (
                <div key={cat}>
                  <h3 className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--ink-3)]">
                    {cat}
                  </h3>
                  <div className="mt-4 grid gap-5 sm:grid-cols-2">
                    {items.map((w) => (
                      <a
                        key={w.title}
                        href={w.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card group flex flex-col p-5 transition hover:border-[var(--ink-3)]"
                      >
                        <div className="flex items-center gap-2">
                          <span className="chip">{w.format}</span>
                          <span className="chip">For consultation only</span>
                        </div>
                        <div className="mt-3 text-[14.5px] font-semibold text-[var(--ink)]">
                          {w.title}
                        </div>
                        <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--ink-2)]">
                          {w.description}
                        </p>
                        <span className="mt-3 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[var(--accent-deep)] group-hover:underline">
                          {domainOf(w.href)}
                          <span aria-hidden>↗</span>
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-8 max-w-[640px] text-[13px] italic leading-relaxed text-[var(--ink-3)]">
            Each resource reflects how I connect legal knowledge to operational context.
            They are for consultation only, please verify any references independently
            before relying on them for any decision.
          </p>
        </div>
      </section>

      {/* how I build */}
      <section className="container-x max-w-[880px] py-14">
        <p className="kicker on-accent">Tools</p>
        <h2 className="display mt-3 text-[clamp(1.7rem,3.2vw,2.4rem)]">How I build</h2>
        <p className="mt-4 max-w-[640px] text-[14.5px] leading-relaxed text-[var(--ink-2)]">
          I build with AI coding agents rather than writing every line by hand, and I am
          training myself in SQL alongside the query work above.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {BUILD_TOOLS.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
        <p className="mt-4 text-[14px]">
          <Link href="/how-it-was-built" className="font-semibold text-[var(--accent-deep)]">
            How this portfolio was built →
          </Link>
        </p>
      </section>

      <Consultation variant="band" />
    </div>
  );
}
