import { useState } from "react";
import { StickyNote, Plus, Trash2, Check } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { useLocalStorage } from "../utils/useLocalStorage";
import { cn } from "../utils/cn";

type Note = { id: string; title: string; body: string; updated: number };
const uid = () => Math.random().toString(36).slice(2, 9);

export default function Notes() {
  const [notes, setNotes] = useLocalStorage<Note[]>("phz_notes", [
    {
      id: uid(),
      title: "Welcome to Notes",
      body: "This is your Notion-style scratchpad. Everything saves automatically.\n\nCreate a new note with the + button and start writing.",
      updated: Date.now(),
    },
  ]);
  const [activeId, setActiveId] = useState(notes[0]?.id ?? "");
  const [saved, setSaved] = useState(true);

  const active = notes.find((n) => n.id === activeId) ?? notes[0];

  const update = (patch: Partial<Note>) => {
    setSaved(false);
    setNotes((prev) =>
      prev.map((n) => (n.id === active.id ? { ...n, ...patch, updated: Date.now() } : n)),
    );
    setTimeout(() => setSaved(true), 500);
  };

  const addNote = () => {
    const n: Note = { id: uid(), title: "Untitled", body: "", updated: Date.now() };
    setNotes([n, ...notes]);
    setActiveId(n.id);
  };

  const del = (id: string) => {
    const next = notes.filter((n) => n.id !== id);
    setNotes(next);
    if (id === activeId && next[0]) setActiveId(next[0].id);
  };

  return (
    <div>
      <PageHeader
        icon={StickyNote}
        title="Notes"
        subtitle="A clean, Notion-style space for your thoughts — autosaved."
        badge="Autosaved"
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[280px_1fr]">
        {/* List */}
        <div className="glass rounded-2xl p-3">
          <button
            onClick={addNote}
            className="mb-3 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-white to-zinc-300 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-[1.02] active:scale-95"
          >
            <Plus className="h-4 w-4" /> New Note
          </button>
          <div className="space-y-1">
            {notes.map((n) => (
              <button
                key={n.id}
                onClick={() => setActiveId(n.id)}
                className={cn(
                  "group flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left transition-colors",
                  n.id === active?.id ? "bg-white/[0.07]" : "hover:bg-white/[0.03]",
                )}
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-white">{n.title || "Untitled"}</p>
                  <p className="truncate text-xs text-zinc-600">
                    {new Date(n.updated).toLocaleDateString()} · {n.body.slice(0, 30) || "Empty"}
                  </p>
                </div>
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    del(n.id);
                  }}
                  className="text-zinc-700 opacity-0 transition-opacity hover:text-rose-400 group-hover:opacity-100"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </span>
              </button>
            ))}
            {notes.length === 0 && (
              <p className="px-3 py-6 text-center text-xs text-zinc-600">No notes yet.</p>
            )}
          </div>
        </div>

        {/* Editor */}
        {active ? (
          <div className="glass rounded-2xl p-6">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs text-zinc-600">
                Last edited {new Date(active.updated).toLocaleString()}
              </span>
              <span
                className={cn(
                  "inline-flex items-center gap-1 text-xs transition-colors",
                  saved ? "text-emerald-400/80" : "text-amber-300/70",
                )}
              >
                <Check className="h-3.5 w-3.5" /> {saved ? "Saved" : "Saving…"}
              </span>
            </div>
            <input
              value={active.title}
              onChange={(e) => update({ title: e.target.value })}
              placeholder="Untitled"
              className="w-full bg-transparent text-2xl font-bold text-white placeholder:text-zinc-700 focus:outline-none"
            />
            <div className="my-4 h-px bg-white/[0.06]" />
            <textarea
              value={active.body}
              onChange={(e) => update({ body: e.target.value })}
              placeholder="Start writing…"
              className="h-[55vh] w-full resize-none bg-transparent text-sm leading-relaxed text-mist placeholder:text-zinc-700 focus:outline-none"
            />
          </div>
        ) : (
          <div className="glass flex items-center justify-center rounded-2xl p-10">
            <p className="text-sm text-mist">Create a note to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
}
