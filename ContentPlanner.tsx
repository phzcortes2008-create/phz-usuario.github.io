import { useState } from "react";
import { CalendarDays, Plus, Trash2, Target, CheckCircle2, Circle, Lightbulb } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { useLocalStorage } from "../utils/useLocalStorage";
import { cn } from "../utils/cn";

type Events = Record<string, string[]>;
type Goal = { id: string; text: string; done: boolean };
type Idea = { id: string; text: string };

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const uid = () => Math.random().toString(36).slice(2, 9);

export default function ContentPlanner() {
  const [cursor, setCursor] = useState(() => new Date());
  const [events, setEvents] = useLocalStorage<Events>("phz_events", {});
  const [selected, setSelected] = useState<string | null>(null);
  const [draft, setDraft] = useState("");

  const [weekly, setWeekly] = useLocalStorage<Goal[]>("phz_weekly", [
    { id: uid(), text: "Post 5 short-form videos", done: false },
    { id: uid(), text: "Write 3 newsletters", done: true },
  ]);
  const [monthly, setMonthly] = useLocalStorage<Goal[]>("phz_monthly", [
    { id: uid(), text: "Grow audience by 10%", done: false },
  ]);
  const [checklist, setChecklist] = useLocalStorage<Goal[]>("phz_checklist", [
    { id: uid(), text: "Hook written", done: false },
    { id: uid(), text: "Script approved", done: false },
    { id: uid(), text: "Thumbnail designed", done: false },
    { id: uid(), text: "Scheduled & published", done: false },
  ]);
  const [ideas, setIdeas] = useLocalStorage<Idea[]>("phz_ideas", [
    { id: uid(), text: "Behind-the-scenes of our workflow" },
  ]);
  const [ideaDraft, setIdeaDraft] = useState("");
  const [notes, setNotes] = useLocalStorage<string>("phz_planner_notes", "");

  const year = cursor.getFullYear();
  const month = cursor.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const todayKey = new Date().toISOString().slice(0, 10);

  const keyFor = (d: number) =>
    `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;

  const addEvent = () => {
    if (!selected || !draft.trim()) return;
    setEvents({ ...events, [selected]: [...(events[selected] || []), draft.trim()] });
    setDraft("");
  };
  const removeEvent = (key: string, idx: number) => {
    const list = [...(events[key] || [])];
    list.splice(idx, 1);
    setEvents({ ...events, [key]: list });
  };

  const toggle = (list: Goal[], set: (g: Goal[]) => void, id: string) =>
    set(list.map((g) => (g.id === id ? { ...g, done: !g.done } : g)));
  const remove = (list: Goal[], set: (g: Goal[]) => void, id: string) =>
    set(list.filter((g) => g.id !== id));

  const GoalList = ({
    title,
    icon: Icon,
    list,
    set,
  }: {
    title: string;
    icon: typeof Target;
    list: Goal[];
    set: (g: Goal[]) => void;
  }) => {
    const [d, setD] = useState("");
    return (
      <div className="glass rounded-2xl p-5">
        <div className="mb-3 flex items-center gap-2">
          <Icon className="h-4 w-4 text-mist" />
          <h3 className="text-sm font-semibold text-white">{title}</h3>
        </div>
        <div className="space-y-1.5">
          {list.map((g) => (
            <div key={g.id} className="group flex items-center gap-2.5">
              <button onClick={() => toggle(list, set, g.id)}>
                {g.done ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                ) : (
                  <Circle className="h-4 w-4 text-zinc-600" />
                )}
              </button>
              <span className={cn("flex-1 text-sm", g.done ? "text-zinc-600 line-through" : "text-mist")}>
                {g.text}
              </span>
              <button
                onClick={() => remove(list, set, g.id)}
                className="text-zinc-700 opacity-0 transition-opacity hover:text-rose-400 group-hover:opacity-100"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>
        <div className="mt-3 flex gap-2">
          <input
            value={d}
            onChange={(e) => setD(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && d.trim()) {
                set([...list, { id: uid(), text: d.trim(), done: false }]);
                setD("");
              }
            }}
            placeholder="Add item…"
            className="flex-1 rounded-lg border border-white/[0.07] bg-black/40 px-3 py-2 text-xs text-white placeholder:text-zinc-600 focus:border-white/20 focus:outline-none"
          />
          <button
            onClick={() => {
              if (d.trim()) {
                set([...list, { id: uid(), text: d.trim(), done: false }]);
                setD("");
              }
            }}
            className="rounded-lg border border-white/10 bg-white/5 px-2.5 text-mist hover:text-white"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <PageHeader
        icon={CalendarDays}
        title="Content Planner"
        subtitle="Plan, schedule and track your content — saved automatically."
        badge="Autosaved"
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {/* Calendar */}
        <div className="glass rounded-2xl p-5 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-base font-semibold text-white">
              {monthNames[month]} {year}
            </h3>
            <div className="flex gap-1">
              <button
                onClick={() => setCursor(new Date(year, month - 1, 1))}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm text-mist hover:text-white"
              >
                ‹
              </button>
              <button
                onClick={() => setCursor(new Date())}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-mist hover:text-white"
              >
                Today
              </button>
              <button
                onClick={() => setCursor(new Date(year, month + 1, 1))}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm text-mist hover:text-white"
              >
                ›
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1.5">
            {weekdays.map((d) => (
              <div key={d} className="py-1 text-center text-[10px] font-semibold uppercase text-zinc-600">
                {d}
              </div>
            ))}
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`e${i}`} />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const key = keyFor(day);
              const has = (events[key] || []).length > 0;
              return (
                <button
                  key={key}
                  onClick={() => setSelected(key)}
                  className={cn(
                    "relative flex aspect-square flex-col items-center justify-center rounded-xl border text-sm transition-all",
                    selected === key
                      ? "border-white/30 bg-white/10 text-white"
                      : "border-white/[0.05] bg-white/[0.02] text-mist hover:border-white/15 hover:text-white",
                    key === todayKey && "ring-1 ring-emerald-400/40",
                  )}
                >
                  {day}
                  {has && <span className="absolute bottom-1.5 h-1 w-1 rounded-full bg-white" />}
                </button>
              );
            })}
          </div>

          {selected && (
            <div className="mt-5 rounded-xl border border-white/[0.06] bg-black/30 p-4">
              <p className="mb-2 text-xs font-semibold text-white">Scheduled · {selected}</p>
              <div className="space-y-1.5">
                {(events[selected] || []).map((ev, i) => (
                  <div key={i} className="group flex items-center gap-2 rounded-lg bg-white/[0.03] px-3 py-2">
                    <span className="flex-1 text-sm text-mist">{ev}</span>
                    <button
                      onClick={() => removeEvent(selected, i)}
                      className="text-zinc-700 opacity-0 transition-opacity hover:text-rose-400 group-hover:opacity-100"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
                {(events[selected] || []).length === 0 && (
                  <p className="text-xs text-zinc-600">Nothing scheduled yet.</p>
                )}
              </div>
              <div className="mt-3 flex gap-2">
                <input
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addEvent()}
                  placeholder="Add content to this day…"
                  className="flex-1 rounded-lg border border-white/[0.07] bg-black/40 px-3 py-2 text-xs text-white placeholder:text-zinc-600 focus:border-white/20 focus:outline-none"
                />
                <button
                  onClick={addEvent}
                  className="rounded-lg bg-gradient-to-r from-white to-zinc-300 px-3 text-sm font-semibold text-black"
                >
                  Add
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Goals */}
        <div className="space-y-5">
          <GoalList title="Weekly Goals" icon={Target} list={weekly} set={setWeekly} />
          <GoalList title="Monthly Goals" icon={Target} list={monthly} set={setMonthly} />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
        <GoalList title="Content Checklist" icon={CheckCircle2} list={checklist} set={setChecklist} />

        {/* Idea board */}
        <div className="glass rounded-2xl p-5">
          <div className="mb-3 flex items-center gap-2">
            <Lightbulb className="h-4 w-4 text-mist" />
            <h3 className="text-sm font-semibold text-white">Idea Board</h3>
          </div>
          <div className="space-y-1.5">
            {ideas.map((idea) => (
              <div key={idea.id} className="group flex items-center gap-2 rounded-lg bg-white/[0.03] px-3 py-2">
                <span className="flex-1 text-sm text-mist">{idea.text}</span>
                <button
                  onClick={() => setIdeas(ideas.filter((x) => x.id !== idea.id))}
                  className="text-zinc-700 opacity-0 transition-opacity hover:text-rose-400 group-hover:opacity-100"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <input
              value={ideaDraft}
              onChange={(e) => setIdeaDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && ideaDraft.trim()) {
                  setIdeas([...ideas, { id: uid(), text: ideaDraft.trim() }]);
                  setIdeaDraft("");
                }
              }}
              placeholder="Capture an idea…"
              className="flex-1 rounded-lg border border-white/[0.07] bg-black/40 px-3 py-2 text-xs text-white placeholder:text-zinc-600 focus:border-white/20 focus:outline-none"
            />
            <button
              onClick={() => {
                if (ideaDraft.trim()) {
                  setIdeas([...ideas, { id: uid(), text: ideaDraft.trim() }]);
                  setIdeaDraft("");
                }
              }}
              className="rounded-lg border border-white/10 bg-white/5 px-2.5 text-mist hover:text-white"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Notes */}
        <div className="glass rounded-2xl p-5">
          <h3 className="mb-3 text-sm font-semibold text-white">Notes</h3>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Jot down anything…"
            className="h-[180px] w-full resize-none rounded-xl border border-white/[0.06] bg-black/40 p-3 text-sm text-mist placeholder:text-zinc-600 focus:border-white/20 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
