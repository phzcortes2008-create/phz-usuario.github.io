import { useState } from "react";
import { Wrench, ExternalLink } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { marketingCategories } from "../data/marketingTools";
import { cn } from "../utils/cn";

export default function MarketingTools() {
  const [active, setActive] = useState("all");
  const cats =
    active === "all" ? marketingCategories : marketingCategories.filter((c) => c.id === active);

  return (
    <div>
      <PageHeader
        icon={Wrench}
        title="Marketing Tools"
        subtitle="The complete stack — from keyword research to CRM and automation."
        badge="10 categories"
      />

      <div className="mb-7 flex flex-wrap gap-2">
        <button
          onClick={() => setActive("all")}
          className={cn(
            "rounded-lg border px-3 py-1.5 text-xs font-medium transition-all",
            active === "all"
              ? "border-white/20 bg-white/10 text-white"
              : "border-white/[0.06] bg-white/[0.02] text-mist hover:border-white/15 hover:text-white",
          )}
        >
          All
        </button>
        {marketingCategories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={cn(
              "rounded-lg border px-3 py-1.5 text-xs font-medium transition-all",
              active === c.id
                ? "border-white/20 bg-white/10 text-white"
                : "border-white/[0.06] bg-white/[0.02] text-mist hover:border-white/15 hover:text-white",
            )}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="space-y-10">
        {cats.map((cat) => (
          <section key={cat.id}>
            <h2 className="mb-4 text-lg font-bold text-white">{cat.label}</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cat.tools.map((t, i) => (
                <div
                  key={t.name}
                  className="group glass animate-fade-up flex flex-col rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/15"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent text-xl">
                      {t.emoji}
                    </div>
                    <h3 className="text-base font-semibold text-white">{t.name}</h3>
                  </div>
                  <p className="mt-3 flex-1 text-sm text-mist">{t.description}</p>
                  <a
                    href={t.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Visit <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
