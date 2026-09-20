import type { Metadata } from "next";
import Link from "next/link";
import { Consultation } from "@/components/Consultation";
import { LogTable } from "@/components/LogTable";
import {
  HOW_I_THINK,
  HOW_I_THINK_NOTE,
  CASE_SCENARIO,
  SQL_EXAMPLE,
  INVESTIGATION_QUESTIONS,
} from "@/lib/investigation";

export const metadata: Metadata = {
  title: "Investigations: methodology and a simulated privacy incident",
  description:
    "How I work through an ambiguous privacy or security question from first signal to a documented decision, walked through on a simulated incident with a fictional access-log dataset and a SQL example.",
};

export default function InvestigationsPage() {
  return (
    <div data-accent="clay">
      <section className="container-x max-w-[880px] pt-14 pb-4">
        <p className="kicker on-accent">Investigations</p>
        <h1 className="display mt-3 text-[clamp(2rem,4.4vw,3rem)]">How I think</h1>
        <p className="mt-5 max-w-[640px] text-[16px] leading-relaxed text-[var(--ink-2)]">
          A fixed way of working through a privacy or security question, from the first
          signal to a decision someone can act on.
        </p>
      </section>

      {/* how I think */}
      <section className="container-x max-w-[880px] py-8">
        <div className="flow">
          {HOW_I_THINK.map((s, i) => (
            <div key={s.n} className="contents">
              <div className="flow-node is-accent">
                <div className="n-title">
                  {s.n}. {s.title}
                </div>
                <div className="n-sub">{s.body}</div>
              </div>
              {i < HOW_I_THINK.length - 1 && <div className="flow-arrow" aria-hidden />}
            </div>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-[560px] text-center text-[14px] leading-relaxed text-[var(--ink-2)]">
          {HOW_I_THINK_NOTE}
        </p>
      </section>

      {/* simulated case */}
      <section className="bg-[var(--paper-2)]">
        <div className="container-x max-w-[880px] py-14">
          <div className="flex flex-wrap items-center gap-3">
            <p className="kicker on-accent">Walk-through</p>
            <span className="pill pill-flag">Simulated case study</span>
          </div>
          <h2 className="display mt-3 text-[clamp(1.7rem,3.2vw,2.4rem)]">
            Privacy incident investigation
          </h2>
          <p className="mt-2 text-[15px] font-semibold text-[var(--ink)]">
            From incomplete evidence to an actionable privacy finding
          </p>
          <p className="mt-4 max-w-[640px] text-[14.5px] leading-relaxed text-[var(--ink-2)]">
            {CASE_SCENARIO.intro} This is not a claim of a real incident response; it is a
            fictional scenario built to demonstrate the methodology above.
          </p>

          <h3 className="mt-8 text-[13px] font-semibold uppercase tracking-[0.1em] text-[var(--ink-3)]">
            Evidence available
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {CASE_SCENARIO.evidenceAvailable.map((e) => (
              <span key={e} className="chip">
                {e}
              </span>
            ))}
          </div>

          <h3 className="mt-8 text-[13px] font-semibold uppercase tracking-[0.1em] text-[var(--ink-3)]">
            Timeline
          </h3>
          <ol className="mt-4 space-y-4 border-l-2 border-[var(--accent-tint)] pl-5">
            {CASE_SCENARIO.timeline.map((t) => (
              <li key={t.time}>
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-[13px] font-semibold text-[var(--accent-deep)]">
                    {t.time}
                  </span>
                  <span className="text-[13.5px] font-semibold text-[var(--ink)]">{t.label}</span>
                </div>
                <p className="mt-0.5 text-[13px] leading-relaxed text-[var(--ink-2)]">{t.body}</p>
              </li>
            ))}
          </ol>

          <p className="mt-6 rounded-xl border border-dashed border-[var(--line-2)] bg-[var(--surface)] p-4 text-[13px] leading-relaxed text-[var(--ink-2)]">
            {CASE_SCENARIO.conclusion}
          </p>
        </div>
      </section>

      {/* log data view */}
      <section className="container-x max-w-[880px] py-14">
        <p className="kicker on-accent">Technical evidence</p>
        <h2 className="display mt-3 text-[clamp(1.7rem,3.2vw,2.4rem)]">
          Working the access logs
        </h2>
        <p className="mt-4 max-w-[640px] text-[14.5px] leading-relaxed text-[var(--ink-2)]">
          The fictional dataset behind the timeline above. Search it, sort any column, or
          isolate the flagged events, the way I would work through a real export.
        </p>
        <ul className="icon-list mt-5 max-w-[640px] sm:grid sm:grid-cols-2 sm:gap-x-6">
          {INVESTIGATION_QUESTIONS.map((q) => (
            <li key={q}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="4" />
              </svg>
              <span>{q}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <LogTable />
        </div>
      </section>

      {/* SQL */}
      <section className="bg-[var(--paper-2)]">
        <div className="container-x max-w-[880px] py-14">
          <p className="kicker on-accent">Currently developing</p>
          <h2 className="display mt-3 text-[clamp(1.7rem,3.2vw,2.4rem)]">
            SQL for privacy investigations
          </h2>
          <p className="mt-4 max-w-[640px] text-[14.5px] leading-relaxed text-[var(--ink-2)]">
            I&rsquo;m developing practical SQL skills for querying, filtering, aggregating
            and analysing operational data, with a focus on applications to privacy
            investigations and compliance operations. Not presenting myself as an advanced
            SQL developer: this is a query against the dataset above, run to show the
            method, not the depth.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-[var(--line)] bg-[#0d1117] p-4">
              <pre className="overflow-x-auto text-[12.5px] leading-relaxed text-[#c9d1d9]">
                <code>{SQL_EXAMPLE.query}</code>
              </pre>
            </div>
            <div>
              <table className="w-full border-collapse text-[13px]">
                <thead>
                  <tr className="border-b border-[var(--line-2)] text-left text-[var(--ink-3)]">
                    <th className="py-2 pr-4 font-semibold">user_id</th>
                    <th className="py-2 font-semibold">access_count</th>
                  </tr>
                </thead>
                <tbody>
                  {SQL_EXAMPLE.result.map((r) => (
                    <tr key={r.user_id} className="border-b border-[var(--line)]">
                      <td className="py-2 pr-4 font-mono">{r.user_id}</td>
                      <td className="py-2 font-mono">{r.access_count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-3 text-[12.5px] leading-relaxed text-[var(--ink-2)]">
                {SQL_EXAMPLE.note}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x max-w-[880px] py-10">
        <p className="text-[14px] text-[var(--ink-2)]">
          For the further work I keep outside this repository (a SQL query library, an
          NIS2 checklist and academic case work), see{" "}
          <Link href="/skills" className="font-semibold text-[var(--accent-deep)]">
            Skills →
          </Link>
        </p>
      </section>

      <Consultation variant="band" />
    </div>
  );
}
