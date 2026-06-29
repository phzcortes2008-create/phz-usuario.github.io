import { useState } from "react";
import { Sparkles, Check, X, ExternalLink } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { aiCategories, type AITool } from "../data/aiTools";
import { cn } from "../utils/cn";

function ToolCard({ tool, delay }: { tool: AITool; delay: number }) {
  return (
    <div
      className="glass animate-fade-up flex flex-col rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/15"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent text-2xl">
          {tool.emoji}
        </div>
        <h3 className="text-lg font-semibold text-white">{tool.name}</h3>
      </div>

      <p className="mt-3 text-sm text-mist">{tool.description}</p>

      <div className="mt-4">
        <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-zinc-500">
          Best use cases
        </p>
        <div className="flex flex-wrap gap-1.5">
          {tool.useCases.map((u) => (
            <span
              key={u}
              className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-mist"
            >
              {u}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div>
          <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-emerald-400/80">
            Pros
          </p>
          <ul className="space-y-1.5">
            {tool.pros.map((p) => (
              <li key={p} className="flex items-start gap-1.5 text-xs text-mist">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400/80" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-rose-400/70">
            Cons
          </p>
          <ul className="space-y-1.5">
            {tool.cons.map((c) => (
              <li key={c} className="flex items-start gap-1.5 text-xs text-mist">
                <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-rose-400/70" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a
        href={tool.url}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-white to-zinc-300 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-[1.02] active:scale-95"
      >
        Official Website <ExternalLink className="h-4 w-4" />
      </a>
    </div>
  );
}

export default function AITools() {
  const [active, setActive] = useState(aiCategories[0].id);
  const cat = aiCategories.find((c) => c.id === active)!;

  return (
    <div>
      <PageHeader
        icon={Sparkles}
        title="Best AI Tools"
        subtitle="Hand-picked AI tools across image, video, voice, music and coding."
        badge="27 tools curated"
      />

      <div className="mb-7 flex flex-wrap gap-2">
        {aiCategories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={cn(
              "rounded-xl border px-4 py-2 text-sm font-medium transition-all",
              active === c.id
                ? "border-white/20 bg-white/10 text-white"
                : "border-white/[0.06] bg-white/[0.02] text-mist hover:border-white/15 hover:text-white",
            )}
          >
            {c.label}
            <span className="ml-2 text-xs text-zinc-600">{c.tools.length}</span>
          </button>
        ))}
      </div>

      <p className="mb-5 text-sm text-mist">{cat.tagline}</p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {cat.tools.map((t, i) => (
          <ToolCard key={t.name} tool={t} delay={i * 50} />
        ))}
      </div>
    </div>
  );
}
