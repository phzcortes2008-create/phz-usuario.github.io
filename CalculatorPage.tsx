import { useState } from "react";
import { Calculator as CalcIcon } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { cn } from "../utils/cn";

type Field = { key: string; label: string; prefix?: string; suffix?: string };
type Calc = {
  id: string;
  title: string;
  emoji: string;
  desc: string;
  fields: Field[];
  compute: (v: Record<string, number>) => { label: string; value: string }[];
};

const fmt = (n: number, dec = 2) =>
  isFinite(n)
    ? n.toLocaleString(undefined, { minimumFractionDigits: dec, maximumFractionDigits: dec })
    : "—";

const calcs: Calc[] = [
  {
    id: "roi",
    title: "ROI Calculator",
    emoji: "📈",
    desc: "Return on investment from gain and cost.",
    fields: [
      { key: "gain", label: "Revenue / Gain", prefix: "$" },
      { key: "cost", label: "Investment Cost", prefix: "$" },
    ],
    compute: (v) => [
      { label: "Net Profit", value: "$" + fmt(v.gain - v.cost) },
      { label: "ROI", value: fmt(((v.gain - v.cost) / v.cost) * 100) + "%" },
    ],
  },
  {
    id: "cpm",
    title: "CPM",
    emoji: "👁️",
    desc: "Cost per 1,000 impressions.",
    fields: [
      { key: "spend", label: "Ad Spend", prefix: "$" },
      { key: "impr", label: "Impressions" },
    ],
    compute: (v) => [{ label: "CPM", value: "$" + fmt((v.spend / v.impr) * 1000) }],
  },
  {
    id: "cpc",
    title: "CPC",
    emoji: "🖱️",
    desc: "Cost per click.",
    fields: [
      { key: "spend", label: "Ad Spend", prefix: "$" },
      { key: "clicks", label: "Clicks" },
    ],
    compute: (v) => [{ label: "CPC", value: "$" + fmt(v.spend / v.clicks) }],
  },
  {
    id: "cpa",
    title: "CPA",
    emoji: "🎯",
    desc: "Cost per acquisition.",
    fields: [
      { key: "spend", label: "Ad Spend", prefix: "$" },
      { key: "conv", label: "Conversions" },
    ],
    compute: (v) => [{ label: "CPA", value: "$" + fmt(v.spend / v.conv) }],
  },
  {
    id: "roas",
    title: "ROAS",
    emoji: "💰",
    desc: "Return on ad spend.",
    fields: [
      { key: "rev", label: "Revenue", prefix: "$" },
      { key: "spend", label: "Ad Spend", prefix: "$" },
    ],
    compute: (v) => [
      { label: "ROAS", value: fmt(v.rev / v.spend) + "x" },
      { label: "As %", value: fmt((v.rev / v.spend) * 100) + "%" },
    ],
  },
  {
    id: "profit",
    title: "Profit",
    emoji: "🪙",
    desc: "Profit and margin.",
    fields: [
      { key: "rev", label: "Revenue", prefix: "$" },
      { key: "cost", label: "Total Costs", prefix: "$" },
    ],
    compute: (v) => [
      { label: "Profit", value: "$" + fmt(v.rev - v.cost) },
      { label: "Margin", value: fmt(((v.rev - v.cost) / v.rev) * 100) + "%" },
    ],
  },
  {
    id: "revenue",
    title: "Revenue",
    emoji: "🧾",
    desc: "Projected revenue from units.",
    fields: [
      { key: "units", label: "Units Sold" },
      { key: "price", label: "Price per Unit", prefix: "$" },
    ],
    compute: (v) => [{ label: "Revenue", value: "$" + fmt(v.units * v.price) }],
  },
  {
    id: "cr",
    title: "Conversion Rate",
    emoji: "🔄",
    desc: "Conversions ÷ visitors.",
    fields: [
      { key: "conv", label: "Conversions" },
      { key: "visitors", label: "Visitors / Clicks" },
    ],
    compute: (v) => [{ label: "Conversion Rate", value: fmt((v.conv / v.visitors) * 100) + "%" }],
  },
  {
    id: "affiliate",
    title: "Affiliate Commission",
    emoji: "🤝",
    desc: "Earnings from commission rate.",
    fields: [
      { key: "sale", label: "Sale Amount", prefix: "$" },
      { key: "rate", label: "Commission Rate", suffix: "%" },
    ],
    compute: (v) => [{ label: "Commission", value: "$" + fmt(v.sale * (v.rate / 100)) }],
  },
];

function CalcCard({ calc, delay }: { calc: Calc; delay: number }) {
  const [vals, setVals] = useState<Record<string, string>>({});
  const nums: Record<string, number> = {};
  calc.fields.forEach((f) => (nums[f.key] = parseFloat(vals[f.key] || "0") || 0));
  const filled = calc.fields.some((f) => vals[f.key]);
  const results = calc.compute(nums);

  return (
    <div className="glass animate-fade-up flex flex-col rounded-2xl p-5" style={{ animationDelay: `${delay}ms` }}>
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent text-xl">
          {calc.emoji}
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">{calc.title}</h3>
          <p className="text-xs text-mist">{calc.desc}</p>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        {calc.fields.map((f) => (
          <div key={f.key}>
            <label className="mb-1 block text-xs text-mist">{f.label}</label>
            <div className="flex items-center rounded-xl border border-white/[0.07] bg-black/40 px-3 focus-within:border-white/20">
              {f.prefix && <span className="text-sm text-zinc-500">{f.prefix}</span>}
              <input
                type="number"
                value={vals[f.key] || ""}
                onChange={(e) => setVals({ ...vals, [f.key]: e.target.value })}
                placeholder="0"
                className="w-full bg-transparent px-2 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none"
              />
              {f.suffix && <span className="text-sm text-zinc-500">{f.suffix}</span>}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-2">
        {results.map((r) => (
          <div
            key={r.label}
            className={cn(
              "flex items-center justify-between rounded-xl border border-white/[0.06] px-4 py-3",
              filled ? "bg-white/[0.05]" : "bg-black/30",
            )}
          >
            <span className="text-xs text-mist">{r.label}</span>
            <span className="text-lg font-bold text-white">{filled ? r.value : "—"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CalculatorPage() {
  return (
    <div>
      <PageHeader
        icon={CalcIcon}
        title="Marketing Calculator"
        subtitle="Crunch the numbers — ROI, CPM, CPC, ROAS, margins and more."
        badge="9 calculators"
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {calcs.map((c, i) => (
          <CalcCard key={c.id} calc={c} delay={i * 40} />
        ))}
      </div>
    </div>
  );
}
