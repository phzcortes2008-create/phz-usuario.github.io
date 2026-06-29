import { FolderHeart, ExternalLink } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { resourceCategories } from "../data/resources";

export default function Resources() {
  return (
    <div>
      <PageHeader
        icon={FolderHeart}
        title="Resources"
        subtitle="Free assets to design, edit and ship content faster."
        badge="10 collections"
      />

      <div className="space-y-10">
        {resourceCategories.map((cat) => (
          <section key={cat.label}>
            <h2 className="mb-4 text-lg font-bold text-white">{cat.label}</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {cat.items.map((item, i) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group glass animate-fade-up flex items-center gap-3 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/15"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent text-xl">
                    {item.emoji}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-white">{item.name}</p>
                    <p className="truncate text-xs text-mist">{item.description}</p>
                  </div>
                  <ExternalLink className="h-4 w-4 shrink-0 text-zinc-600 transition-colors group-hover:text-white" />
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
