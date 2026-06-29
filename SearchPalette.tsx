import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, CornerDownLeft } from "lucide-react";
import { navItems } from "../data/nav";
import { aiCategories } from "../data/aiTools";
import { prompts } from "../data/prompts";
import { marketingCategories } from "../data/marketingTools";
import { ideaPacks } from "../data/viralIdeas";

type Entry = { label: string; sub: string; to: string };

const index: Entry[] = [
  ...navItems.map((n) => ({ label: n.label, sub: "Page", to: n.to })),
  ...aiCategories.flatMap((c) =>
    c.tools.map((t) => ({ label: t.name, sub: `AI Tool · ${c.label}`, to: "/ai-tools" })),
  ),
  ...prompts.map((p) => ({ label: p.title, sub: `Prompt · ${p.category}`, to: "/prompts" })),
  ...marketingCategories.flatMap((c) =>
    c.tools.map((t) => ({ label: t.name, sub: `Tool · ${c.label}`, to: "/marketing-tools" })),
  ),
  ...ideaPacks.map((i) => ({ label: i.title, sub: "Viral Idea", to: "/viral-ideas" })),
];

export default function SearchPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  const results = useMemo(() => {
    if (!q.trim()) return index.slice(0, 8);
    const lower = q.toLowerCase();
    return index.filter((e) => (e.label + e.sub).toLowerCase().includes(lower)).slice(0, 12);
  }, [q]);

  useEffect(() => {
    if (open) setQ("");
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!open) return null;

  const go = (to: string) => {
    navigate(to);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center px-4 pt-[12vh]" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="glass-strong relative w-full max-w-xl overflow-hidden rounded-2xl glow-ring animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-white/[0.06] px-4">
          <Search className="h-5 w-5 text-mist" />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search tools, prompts, pages…"
            className="w-full bg-transparent py-4 text-sm text-white placeholder:text-zinc-600 focus:outline-none"
            onKeyDown={(e) => {
              if (e.key === "Enter" && results[0]) go(results[0].to);
            }}
          />
          <kbd className="hidden rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] text-mist sm:block">
            ESC
          </kbd>
        </div>
        <div className="max-h-[50vh] overflow-y-auto p-2">
          {results.length === 0 && (
            <p className="px-3 py-6 text-center text-sm text-mist">No results found.</p>
          )}
          {results.map((r, i) => (
            <button
              key={i}
              onClick={() => go(r.to)}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-white/[0.06]"
            >
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-white">{r.label}</p>
                <p className="truncate text-xs text-mist">{r.sub}</p>
              </div>
              <CornerDownLeft className="h-3.5 w-3.5 shrink-0 text-zinc-600" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
