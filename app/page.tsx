import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { HeroArt } from "@/components/HeroArt";
import { Consultation } from "@/components/Consultation";
import { WORK_SAMPLES, WORK_SAMPLE_CATEGORIES } from "@/lib/skills";
import { EDUCATION, CREDENTIALS, EXPERIENCE } from "@/lib/experience";
import { HOW_I_THINK } from "@/lib/investigation";

export default function Home() {
  const cases = siteConfig.caseStudies;

  return (
    <>
      {/* ================= dark gradient hero ================= */}
      <section className="gradient-hero">
        <span className="gradient-grain" aria-hidden />
        <div className="container-x grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8">
          <div>
            <p className="kicker">{siteConfig.portfolio.kicker}</p>
            <h1 className="hero-title mt-4 text-[clamp(2.4rem,5.4vw,4rem)]">
              {siteConfig.portfolio.tagline}
            </h1>
            <p className="hero-lede mt-6 max-w-xl text-[16.5px] leading-relaxed">
              I&rsquo;m a <strong>CIPP/E and CIPM-certified privacy professional</strong> with
              a <strong>Master&rsquo;s in Law, Data &amp; AI</strong> and three years of
              experience solving privacy and compliance problems across{" "}
              <strong>EU, US and LATAM frameworks</strong>. I&rsquo;m particularly
              interested in how{" "}
              <strong>
                data, technical evidence and regulation come together to investigate and
                solve real privacy and operational problems.
              </strong>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/#knowledge-lab" className="btn btn-onhero">
                Explore the Knowledge Lab ↓
              </Link>
              <a
                href={siteConfig.links.sqlLibrary}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-hero-ghost"
              >
                SQL Library
              </a>
              <a
                href={siteConfig.links.certifications}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-hero-ghost"
              >
                Certifications
              </a>
              <Link href="/#about" className="btn btn-hero-ghost">
                About me
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-2">
              {siteConfig.portfolio.areas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-[#ffffff2e] px-3 py-1 text-[12px] text-[#d9d3f2]"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-art p-3 sm:p-6" style={{ background: "transparent", border: "none", boxShadow: "none" }}>
            <HeroArt className="w-full" />
          </div>
        </div>
      </section>

      {/* ================= knowledge lab ================= */}
      <section id="knowledge-lab" className="scroll-mt-16">
        <div className="container-x py-16 sm:py-20">
          <p className="kicker">Knowledge Lab</p>
          <h2 className="display mt-3 max-w-[26ch] text-[clamp(1.8rem,3.4vw,2.6rem)]">
            Knowledge Lab &amp; Work Samples
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[var(--ink-2)]">
            Everything in one place: case studies that put a governed AI workflow through a
            slow legal-compliance process, the methodology behind an investigation, and the
            personal working frameworks and templates I have built along the way. Not
            exhaustive references, personal working frameworks I have built to apply EU
            digital regulation, T&amp;S governance, data protection, and cybersecurity
            compliance in practice.
          </p>

          {/* case studies */}
          <h3 className="mt-12 text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--ink-3)]">
            Case studies
          </h3>
          <div className="mt-4 grid gap-5">
            {cases.map((c) => (
              <Link
                key={c.slug}
                href={`/case-study/${c.slug}`}
                data-accent={c.accent}
                className="group grid gap-5 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 transition hover:border-[color-mix(in_srgb,var(--accent)_45%,transparent)] hover:shadow-[var(--shadow-md)] sm:grid-cols-[auto_1fr_auto] sm:items-center"
              >
                <div className="font-serif text-[40px] leading-none text-[var(--accent)]">
                  {c.number}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="area-tag">{c.area}</span>
                    <span className="chip">{c.liveTool ? "Live tool" : "Worked example"}</span>
                  </div>
                  <h4 className="mt-2 font-serif text-[21px] text-[var(--ink)]">{c.title}</h4>
                  <p className="mt-1.5 max-w-[560px] text-[13.5px] leading-relaxed text-[var(--ink-2)]">
                    {c.summary}
                  </p>
                </div>
                <div className="sm:text-right">
                  <div className="metric-flow sm:flex-col sm:items-end">
                    <s>{c.metric.before}</s>
                    <b>{c.metric.after}</b>
                  </div>
                  <span className="mt-3 inline-block text-[13px] font-semibold text-[var(--accent-deep)] group-hover:underline">
                    Read case study {c.number} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-4 max-w-2xl text-[12px] leading-relaxed text-[var(--ink-3)]">
            {siteConfig.metricsDisclaimer}
          </p>

          {/* investigation methodology */}
          <h3 className="mt-12 text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--ink-3)]">
            Investigation methodology
          </h3>
          <Link
            href="/investigations"
            data-accent="clay"
            className="group mt-4 block rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 transition hover:border-[color-mix(in_srgb,var(--accent)_45%,transparent)]"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="area-tag">Privacy &amp; Data Protection</span>
              <span className="pill pill-flag">Simulated case study</span>
            </div>
            <h4 className="mt-2 font-serif text-[21px] text-[var(--ink)]">
              How I think, walked through on a simulated privacy incident
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {HOW_I_THINK.map((s) => (
                <span key={s.n} className="chip">
                  {s.n}. {s.title}
                </span>
              ))}
            </div>
            <p className="mt-3 max-w-[640px] text-[13.5px] leading-relaxed text-[var(--ink-2)]">
              An interactive fictional access-log dataset, a SQL example over it, and an
              eight-step timeline from first signal to a documented decision.
            </p>
            <span className="mt-3 inline-block text-[13px] font-semibold text-[var(--accent-deep)] group-hover:underline">
              Open the investigation →
            </span>
          </Link>

          {/* work samples, by category */}
          <h3 className="mt-12 text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--ink-3)]">
            Work samples
          </h3>
          <div className="mt-4 space-y-8">
            {WORK_SAMPLE_CATEGORIES.map((cat) => {
              const items = WORK_SAMPLES.filter((w) => w.category === cat);
              if (items.length === 0) return null;
              return (
                <div key={cat}>
                  <div className="text-[13px] font-semibold text-[var(--ink)]">{cat}</div>
                  <div className="mt-3 grid gap-4 sm:grid-cols-2">
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
                        <div className="mt-3 text-[14px] font-semibold text-[var(--ink)]">
                          {w.title}
                        </div>
                        <p className="mt-1.5 text-[12.5px] leading-relaxed text-[var(--ink-2)]">
                          {w.description}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* templates as a work-sample category, kept together */}
            <div>
              <div className="text-[13px] font-semibold text-[var(--ink)]">
                ISO 27001 Templates
              </div>
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                {siteConfig.templates.map((t) => (
                  <a
                    key={t.file}
                    href={t.file}
                    download
                    className="card group flex flex-col p-5 transition hover:border-[var(--ink-3)]"
                  >
                    <div className="flex items-center gap-2">
                      <span className="chip">XLSX</span>
                      <span className="chip">Download</span>
                    </div>
                    <div className="mt-3 text-[14px] font-semibold text-[var(--ink)]">
                      {t.name}
                    </div>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-[var(--ink-2)]">
                      {t.note}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-8 max-w-2xl text-[13px] italic leading-relaxed text-[var(--ink-3)]">
            Each resource reflects how I connect legal knowledge to operational context.
            They are for consultation only, please verify any references independently
            before relying on them for any decision.
          </p>
          <p className="mt-3 text-[13px] text-[var(--ink-2)]">
            For the full skill-to-evidence breakdown, see{" "}
            <Link href="/skills" className="font-semibold text-[var(--forest)]">
              Skills →
            </Link>{" "}
            and for how this site itself was built, see{" "}
            <Link href="/how-it-was-built" className="font-semibold text-[var(--forest)]">
              Method →
            </Link>
          </p>
        </div>
      </section>

      {/* ================= about & experience ================= */}
      <section id="about" className="scroll-mt-16 bg-[var(--paper-2)]">
        <div className="container-x py-16 sm:py-20">
          <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:gap-10">
            <div className="sm:w-[150px]">
              {siteConfig.author.photo && (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={siteConfig.author.photo}
                  alt={siteConfig.author.name}
                  width={150}
                  height={150}
                  className="h-[150px] w-[150px] rounded-full object-cover object-[center_20%] ring-1 ring-[var(--line-2)]"
                />
              )}
            </div>
            <div>
              <p className="kicker">About &amp; Experience</p>
              <h2 className="display mt-2 text-[clamp(1.6rem,3vw,2.2rem)]">
                {siteConfig.author.name}
              </h2>
              <p className="mt-1 text-[14px] text-[var(--ink-3)]">
                {siteConfig.author.title}, {siteConfig.author.location}
              </p>
              <div className="mt-4 space-y-3 text-[14.5px] leading-relaxed text-[var(--ink-2)]">
                <p>
                  I&rsquo;m a <strong className="text-[var(--ink)]">CIPP/E and CIPM-certified privacy professional</strong> with
                  a <strong className="text-[var(--ink)]">Master&rsquo;s in Law, Data &amp; AI</strong> and three years of
                  legal-services experience across{" "}
                  <strong className="text-[var(--ink)]">
                    privacy, technology, corporate governance and compliance
                  </strong>
                  , working with EU, US and LATAM privacy frameworks.
                </p>
                <p>
                  I have managed{" "}
                  <strong className="text-[var(--ink)]">25+ concurrent legal and compliance matters weekly</strong>,
                  collaborating with cross-functional teams and senior stakeholders to
                  translate regulatory requirements into practical actions, communicate
                  findings and keep complex projects moving across multiple jurisdictions.
                </p>
                <p>
                  I&rsquo;m now building deeper technical capabilities in{" "}
                  <strong className="text-[var(--ink)]">data analysis, SQL and AI workflows</strong>, with a
                  particular interest in how technology and evidence can improve privacy
                  and compliance operations.
                </p>
                <p>
                  This portfolio brings together work and resources developed over the
                  past two years through my{" "}
                  <strong className="text-[var(--ink)]">
                    Master&rsquo;s, professional experience, certifications and independent
                    research
                  </strong>
                  .
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-4 text-[14px] font-semibold text-[var(--forest)]">
                <a href={siteConfig.links.linkedin}>LinkedIn</a>
                <a href={siteConfig.links.github}>GitHub</a>
                <a href={`mailto:${siteConfig.author.email}`}>Email</a>
              </div>
            </div>
          </div>

          {/* credentials */}
          <div className="mt-8 flex flex-wrap gap-2">
            {siteConfig.about.expertise.map((e) => (
              <span key={e} className="chip">
                {e}
              </span>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {CREDENTIALS.map((c) => (
              <div key={c.name} className="rounded-lg border border-[var(--line)] bg-[var(--surface)] px-3 py-2">
                <span className="font-serif text-[14px]">{c.name}</span>
                <span className="ml-2 text-[11px] text-[var(--ink-3)]">
                  {c.issuer} · {c.status}
                </span>
              </div>
            ))}
          </div>

          {/* education, condensed */}
          <div className="mt-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--ink-3)]">
              {EDUCATION.institution}
            </p>
            <h3 className="mt-1 font-serif text-[19px]">{EDUCATION.programme}</h3>
            <p className="mt-1 text-[12.5px] text-[var(--ink-3)]">{EDUCATION.route}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {EDUCATION.themes.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* experience, condensed */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {EXPERIENCE.map((r) => (
              <div key={r.org} className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5">
                <div className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--ink-3)]">
                  {r.frame === "intern" ? "Internship" : "Consulting"}
                </div>
                <div className="mt-1 font-serif text-[17px]">{r.org}</div>
                <p className="mt-0.5 text-[13px] text-[var(--ink-2)]">{r.role}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {r.themes.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="icon-list mt-3">
                  {r.highlights.map((h) => (
                    <li key={h}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-[12.5px]">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[13px] text-[var(--ink-2)]">
            Full role highlights and education modules on{" "}
            <Link href="/experience" className="font-semibold text-[var(--forest)]">
              Experience →
            </Link>
          </p>

          {/* thesis, folded in */}
          <div className="mt-10 rounded-2xl border border-dashed border-[var(--line-2)] p-5">
            <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--ink-3)]">
              {siteConfig.thesis.degree} · thesis
            </div>
            <p className="mt-2 font-serif text-[16px] leading-snug">{siteConfig.thesis.title}</p>
            <p className="mt-2 text-[13px] leading-relaxed text-[var(--ink-2)]">
              {siteConfig.thesis.argument}
            </p>
          </div>
        </div>
      </section>

      {/* ================= contact ================= */}
      <Consultation variant="band" />
    </>
  );
}
