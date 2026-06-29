import { useState } from "react";
import { Newspaper, ArrowUpRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { news, newsFilters } from "../data/news";
import { cn } from "../utils/cn";

export default function News() {
  const [filter, setFilter] = useState("All");
  const items = filter === "All" ? news : news.filter((n) => n.category === filter);

  return (
    <div>
      <PageHeader
        icon={Newspaper}
        title="Marketing News"
        subtitle="The latest in AI, Google, Meta, TikTok and YouTube — distilled."
        badge="Updated daily"
      />

      <div className="mb-7 flex flex-wrap gap-2">
        {newsFilters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-lg border px-3 py-1.5 text-xs font-medium transition-all",
              filter === f
                ? "border-white/20 bg-white/10 text-white"
                : "border-white/[0.06] bg-white/[0.02] text-mist hover:border-white/15 hover:text-white",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {items.map((n, i) => (
          <article
            key={i}
            className="group glass animate-fade-up flex flex-col rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/15"
            style={{ animationDelay: `${i * 40}ms` }}
          >
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-white/10 to-transparent text-base">
                {n.emoji}
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-mist">
                {n.category}
              </span>
              <span className="ml-auto text-xs text-zinc-600">{n.time}</span>
            </div>
            <h3 className="mt-4 flex items-start gap-1.5 text-base font-semibold leading-snug text-white">
              {n.title}
              <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-mist opacity-0 transition-opacity group-hover:opacity-100" />
            </h3>
            <p className="mt-2 flex-1 text-sm text-mist">{n.summary}</p>
            <p className="mt-4 text-xs font-medium text-zinc-500">{n.source}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
