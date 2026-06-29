import { Link } from "react-router-dom";
import {
  Sparkles,
  BookOpen,
  Clock,
  Flame,
  Scissors,
  ImageIcon,
  Workflow,
  Newspaper,
  Search as SearchIcon,
  BarChart3,
  ArrowUpRight,
  TrendingUp,
  Zap,
  Layers,
} from "lucide-react";

const cards = [
  { title: "Best AI Tools", desc: "Curated image, video, voice, music & coding AI.", icon: Sparkles, to: "/ai-tools", tag: "27 tools" },
  { title: "Viral Prompt Library", desc: "Copy-ready prompts for every platform.", icon: BookOpen, to: "/prompts", tag: "14 categories" },
  { title: "Social Media Posting Times", desc: "Best days & hours to post for max reach.", icon: Clock, to: "/posting-times", tag: "7 platforms" },
  { title: "Trending Content", desc: "Viral hooks, titles, scripts & ideas.", icon: TrendingUp, to: "/viral-ideas", tag: "500+ ideas" },
  { title: "Video Editors", desc: "Pro AI video generation & editing tools.", icon: Scissors, to: "/ai-tools", tag: "Video" },
  { title: "Thumbnail Tools", desc: "High-CTR thumbnail texts & concepts.", icon: ImageIcon, to: "/viral-ideas", tag: "100+ texts" },
  { title: "Automation Tools", desc: "Connect apps & automate your workflow.", icon: Workflow, to: "/marketing-tools", tag: "No-code" },
  { title: "Marketing News", desc: "AI, Google, Meta, TikTok & YouTube.", icon: Newspaper, to: "/news", tag: "Live" },
  { title: "SEO Tools", desc: "Keyword research & on-page optimization.", icon: SearchIcon, to: "/marketing-tools", tag: "SEO" },
  { title: "Analytics", desc: "Track traffic, funnels & conversions.", icon: BarChart3, to: "/marketing-tools", tag: "Insights" },
];

const stats = [
  { label: "AI Tools Curated", value: "27+", icon: Zap },
  { label: "Ready Prompts", value: "28+", icon: BookOpen },
  { label: "Idea Packs", value: "500+", icon: Flame },
  { label: "Categories", value: "40+", icon: Layers },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="animate-fade-up relative mb-10 overflow-hidden rounded-3xl border border-white/[0.06] grid-bg glow-ring">
        <div className="absolute -right-20 -top-24 h-80 w-80 animate-float rounded-full bg-white/[0.04] blur-[100px]" />
        <div className="relative px-6 py-12 sm:px-12 sm:py-16">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-mist">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Your all-in-one marketing command center
          </span>
          <h1 className="mt-5 max-w-2xl text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
            Create, plan & scale <span className="text-gradient">faster</span> with PHZ Hub.
          </h1>
          <p className="mt-4 max-w-xl text-sm text-mist sm:text-base">
            Every AI tool, viral prompt, posting schedule and growth resource — in one premium,
            beautifully organized workspace.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/ai-tools"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-white to-zinc-300 px-5 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.03] active:scale-95"
            >
              Explore AI Tools <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to="/prompts"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Browse Prompts
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="glass animate-fade-up rounded-2xl p-4"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <s.icon className="h-5 w-5 text-mist" />
            <p className="mt-3 text-2xl font-bold text-white">{s.value}</p>
            <p className="text-xs text-mist">{s.label}</p>
          </div>
        ))}
      </section>

      {/* Cards */}
      <div className="mb-5 flex items-end justify-between">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-white">Explore the hub</h2>
          <p className="text-sm text-mist">Jump into any workspace module.</p>
        </div>
      </div>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => (
          <Link
            key={c.title}
            to={c.to}
            className="group glass animate-fade-up relative overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/15"
            style={{ animationDelay: `${i * 40}ms` }}
          >
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/[0.03] blur-2xl transition-opacity group-hover:opacity-100" />
            <div className="relative flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent">
                <c.icon className="h-5 w-5 text-white" />
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-mist">
                {c.tag}
              </span>
            </div>
            <h3 className="relative mt-4 flex items-center gap-1.5 text-base font-semibold text-white">
              {c.title}
              <ArrowUpRight className="h-4 w-4 -translate-x-1 text-mist opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
            </h3>
            <p className="relative mt-1 text-sm text-mist">{c.desc}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
