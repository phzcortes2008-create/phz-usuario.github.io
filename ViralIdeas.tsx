import { useState } from "react";
import { Flame, ChevronDown } from "lucide-react";
import PageHeader from "../components/PageHeader";
import CopyButton from "../components/CopyButton";
import { ideaPacks } from "../data/viralIdeas";
import { cn } from "../utils/cn";

export default function ViralIdeas() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      <PageHeader
        icon={Flame}
        title="Viral Ideas"
        subtitle="Plug-and-play idea packs: hooks, CTAs, titles, scripts and more."
        badge="500+ ideas"
      />

      <div className="grid grid-cols-1 gap-4">
        {ideaPacks.map((pack, i) => {
          const isOpen = open === i;
          return (
            <div
              key={pack.title}
              className="glass animate-fade-up overflow-hidden rounded-2xl"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center gap-4 p-5 text-left transition-colors hover:bg-white/[0.02]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent text-2xl">
                  {pack.emoji}
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-white">{pack.title}</h3>
                  <p className="text-sm text-mist">{pack.description}</p>
                </div>
                <span className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-mist sm:block">
                  {pack.count} ideas
                </span>
                <ChevronDown
                  className={cn("h-5 w-5 shrink-0 text-mist transition-transform", isOpen && "rotate-180")}
                />
              </button>

              {isOpen && (
                <div className="border-t border-white/[0.06] p-5">
                  <p className="mb-3 text-xs text-mist">
                    Sample templates — swap the [BRACKETS] for your topic.
                  </p>
                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {pack.items.map((item, j) => (
                      <div
                        key={j}
                        className="flex items-center justify-between gap-3 rounded-xl border border-white/[0.06] bg-black/40 px-4 py-3"
                      >
                        <p className="text-sm text-zinc-300">{item}</p>
                        <CopyButton text={item} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
