"use client";

import { useMemo, useState } from "react";
import { ACCESS_LOGS, type LogRow } from "@/lib/investigation";

type SortKey = keyof LogRow;

export function LogTable() {
  const [q, setQ] = useState("");
  const [onlyFlagged, setOnlyFlagged] = useState(false);
  const [sortKey, setSortKey] = useState<SortKey>("time");
  const [sortDir, setSortDir] = useState<1 | -1>(1);

  const rows = useMemo(() => {
    let r = [...ACCESS_LOGS];
    if (onlyFlagged) r = r.filter((x) => x.flagged);
    if (q) {
      const needle = q.toLowerCase();
      r = r.filter((x) =>
        `${x.user} ${x.event} ${x.system} ${x.category} ${x.ip} ${x.location}`
          .toLowerCase()
          .includes(needle),
      );
    }
    r.sort((a, b) => {
      const av = a[sortKey];
      const bv = b[sortKey];
      if (av === bv) return 0;
      return av > bv ? sortDir : -sortDir;
    });
    return r;
  }, [q, onlyFlagged, sortKey, sortDir]);

  function toggleSort(key: SortKey) {
    if (key === sortKey) setSortDir((d) => (d === 1 ? -1 : 1));
    else {
      setSortKey(key);
      setSortDir(1);
    }
  }

  const stats = useMemo(() => {
    const users = new Set(ACCESS_LOGS.map((r) => r.user));
    const systems = new Set(ACCESS_LOGS.map((r) => r.system));
    const flagged = ACCESS_LOGS.filter((r) => r.flagged).length;
    return { total: ACCESS_LOGS.length, users: users.size, systems: systems.size, flagged };
  }, []);

  const columns: { key: SortKey; label: string }[] = [
    { key: "time", label: "timestamp" },
    { key: "user", label: "user_id" },
    { key: "event", label: "event_type" },
    { key: "system", label: "system" },
    { key: "category", label: "data_category" },
    { key: "access", label: "access_type" },
    { key: "ip", label: "ip" },
    { key: "location", label: "location" },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          ["Events", stats.total],
          ["Users", stats.users],
          ["Systems", stats.systems],
          ["Flagged", stats.flagged],
        ].map(([label, val]) => (
          <div key={label as string} className="rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3">
            <div className="text-[11px] text-[var(--ink-3)]">{label}</div>
            <div className="mt-0.5 font-serif text-[22px]">{val}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search user, system, location..."
          className="w-full max-w-xs rounded-lg border border-[var(--line-2)] bg-[var(--surface)] px-3.5 py-2 text-[13px] outline-none focus:border-[var(--ink-3)]"
        />
        <label className="flex items-center gap-2 text-[13px] text-[var(--ink-2)]">
          <input
            type="checkbox"
            checked={onlyFlagged}
            onChange={(e) => setOnlyFlagged(e.target.checked)}
          />
          Flagged only
        </label>
        <span className="text-[12.5px] text-[var(--ink-3)]">{rows.length} shown</span>
      </div>

      <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--line)]">
        <table className="w-full min-w-[720px] border-collapse text-[12.5px]">
          <thead>
            <tr className="bg-[var(--paper-2)] text-left text-[var(--ink-3)]">
              {columns.map((c) => (
                <th
                  key={c.key}
                  onClick={() => toggleSort(c.key)}
                  className="cursor-pointer select-none whitespace-nowrap px-3 py-2 font-semibold hover:text-[var(--ink)]"
                >
                  {c.label}
                  {sortKey === c.key ? (sortDir === 1 ? " ↑" : " ↓") : ""}
                </th>
              ))}
              <th className="px-3 py-2 font-semibold">status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr
                key={i}
                className={`border-t border-[var(--line)] ${r.flagged ? "bg-[var(--v-gap-bg)]" : ""}`}
              >
                <td className="whitespace-nowrap px-3 py-2 font-mono">{r.time}</td>
                <td className="whitespace-nowrap px-3 py-2">{r.user}</td>
                <td className="whitespace-nowrap px-3 py-2">{r.event}</td>
                <td className="whitespace-nowrap px-3 py-2">{r.system}</td>
                <td className="whitespace-nowrap px-3 py-2">{r.category}</td>
                <td className="whitespace-nowrap px-3 py-2">{r.access}</td>
                <td className="whitespace-nowrap px-3 py-2 font-mono">{r.ip}</td>
                <td className="whitespace-nowrap px-3 py-2">{r.location}</td>
                <td className="whitespace-nowrap px-3 py-2">
                  {r.flagged ? (
                    <span className="pill pill-fail">FLAGGED</span>
                  ) : (
                    <span className="pill pill-pass">NORMAL</span>
                  )}
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={9} className="px-3 py-6 text-center text-[var(--ink-3)]">
                  No events match those filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-[11.5px] text-[var(--ink-3)]">
        Fictional dataset for a simulated case study. Not real access logs.
      </p>
    </div>
  );
}
