import { Clock, Lightbulb } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { postingTimes } from "../data/postingTimes";

export default function PostingTimes() {
  return (
    <div>
      <PageHeader
        icon={Clock}
        title="Best Posting Times"
        subtitle="Data-backed schedules to maximize reach and engagement per platform."
        badge="7 platforms"
      />

      {/* Desktop table */}
      <div className="glass hidden overflow-hidden rounded-2xl md:block">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-white/[0.07] text-[11px] uppercase tracking-wide text-zinc-500">
              <th className="px-5 py-4 font-semibold">Platform</th>
              <th className="px-5 py-4 font-semibold">Best Days</th>
              <th className="px-5 py-4 font-semibold">Best Hours</th>
              <th className="px-5 py-4 font-semibold">Avg. Engagement</th>
            </tr>
          </thead>
          <tbody>
            {postingTimes.map((p, i) => (
              <tr
                key={p.platform}
                className="animate-fade-up border-b border-white/[0.04] transition-colors last:border-0 hover:bg-white/[0.03]"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{p.emoji}</span>
                    <span className="font-semibold text-white">{p.platform}</span>
                  </div>
                </td>
                <td className="px-5 py-4 text-mist">{p.bestDays}</td>
                <td className="px-5 py-4 text-mist">{p.bestHours}</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-24 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-zinc-400 to-white"
                        style={{ width: `${p.engagementLevel}%` }}
                      />
                    </div>
                    <span className="text-xs text-mist">{p.engagement}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="space-y-3 md:hidden">
        {postingTimes.map((p, i) => (
          <div key={p.platform} className="glass animate-fade-up rounded-2xl p-4" style={{ animationDelay: `${i * 40}ms` }}>
            <div className="flex items-center gap-3">
              <span className="text-xl">{p.emoji}</span>
              <span className="font-semibold text-white">{p.platform}</span>
              <span className="ml-auto text-xs text-mist">{p.engagement}</span>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
              <div>
                <p className="text-zinc-500">Best Days</p>
                <p className="text-mist">{p.bestDays}</p>
              </div>
              <div>
                <p className="text-zinc-500">Best Hours</p>
                <p className="text-mist">{p.bestHours}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tips */}
      <h2 className="mb-4 mt-10 text-lg font-bold text-white">Platform tips</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {postingTimes.map((p, i) => (
          <div
            key={p.platform}
            className="glass animate-fade-up flex gap-3 rounded-2xl p-4"
            style={{ animationDelay: `${i * 40}ms` }}
          >
            <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-amber-300/70" />
            <div>
              <p className="text-sm font-semibold text-white">
                {p.emoji} {p.platform}
              </p>
              <p className="mt-0.5 text-sm text-mist">{p.tip}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
