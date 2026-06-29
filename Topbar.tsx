import { Menu, Search, Bell } from "lucide-react";

export default function Topbar({
  onMenu,
  onSearch,
}: {
  onMenu: () => void;
  onSearch: () => void;
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/[0.06] bg-[#0B0B0B]/80 backdrop-blur-xl">
      <div className="flex items-center gap-3 px-4 py-3 sm:px-6">
        <button
          onClick={onMenu}
          className="rounded-lg p-2 text-mist hover:bg-white/5 hover:text-white lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>

        <button
          onClick={onSearch}
          className="group flex flex-1 items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] px-3.5 py-2.5 text-left transition-colors hover:border-white/15 hover:bg-white/[0.05] sm:max-w-md"
        >
          <Search className="h-4 w-4 text-mist" />
          <span className="flex-1 text-sm text-zinc-500 group-hover:text-zinc-400">
            Search tools, prompts, pages…
          </span>
          <kbd className="hidden rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] text-mist sm:block">
            ⌘K
          </kbd>
        </button>

        <div className="ml-auto flex items-center gap-2">
          <button className="relative rounded-xl border border-white/[0.07] bg-white/[0.03] p-2.5 text-mist transition-colors hover:border-white/15 hover:text-white">
            <Bell className="h-4 w-4" />
            <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </button>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-zinc-300 to-zinc-500 text-xs font-bold text-black">
            PH
          </div>
        </div>
      </div>
    </header>
  );
}
