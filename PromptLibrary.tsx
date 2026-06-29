import { useMemo, useState } from "react";
import { BookOpen, Search } from "lucide-react";
import PageHeader from "../components/PageHeader";
import CopyButton from "../components/CopyButton";
import { prompts, promptCategories } from "../data/prompts";
import { cn } from "../utils/cn";

export default function PromptLibrary() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return prompts.filter((p) => {
      const matchCat = active === "All" || p.category === active;
      const matchQ =
        !query.trim() ||
        (p.title + p.text + p.category).toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQ;
    });
  }, [active, query]);

  return (
    <div>
      <PageHeader
        icon={BookOpen}
        title="Viral Prompt Library"
        subtitle="Battle-tested, copy-ready prompts organized by marketing channel."
        badge="14 categories"
      />

      {/* Search */}
      <div className="mb-5 flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3 focus-within:border-white/20">
        <Search className="h-4 w-4 text-mist" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search prompts…"
          className="w-full bg-transparent text-sm text-white placeholder:text-zinc-600 focus:outline-none"
        />
        {query && (
          <button onClick={() => setQuery("")} className="text-xs text-mist hover:text-white">
            Clear
          </button>
        )}
      </div>

      {/* Categories */}
      <div className="mb-7 flex flex-wrap gap-2">
        {["All", ...promptCategories].map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={cn(
              "rounded-lg border px-3 py-1.5 text-xs font-medium transition-all",
              active === c
                ? "border-white/20 bg-white/10 text-white"
                : "border-white/[0.06] bg-white/[0.02] text-mist hover:border-white/15 hover:text-white",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <p className="mb-4 text-xs text-mist">
        {filtered.length} prompt{filtered.length !== 1 && "s"}
      </p>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {filtered.map((p, i) => (
          <div
            key={p.title + i}
            className="glass animate-fade-up flex flex-col rounded-2xl p-5"
            style={{ animationDelay: `${i * 30}ms` }}
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <h3 className="text-sm font-semibold text-white">{p.title}</h3>
                <span className="text-[11px] text-mist">{p.category}</span>
              </div>
              <CopyButton text={p.text} />
            </div>
            <div className="mt-3 rounded-xl border border-white/[0.06] bg-black/40 p-4">
              <p className="font-mono text-[13px] leading-relaxed text-zinc-300">{p.text}</p>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="glass rounded-2xl p-10 text-center">
          <p className="text-sm text-mist">No prompts match your search.</p>
        </div>
      )}
    </div>
  );
}
