import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
import { navItems } from "../data/nav";
import { cn } from "../utils/cn";

const groups = ["Workspace", "Discover", "Produce", "Stay sharp"];

export default function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      {/* Mobile backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={onClose}
      />

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-[260px] flex-col border-r border-white/[0.06] bg-[#0d0d0d]/95 backdrop-blur-xl transition-transform duration-300 lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* Brand */}
        <div className="flex items-center justify-between px-5 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-white to-zinc-400 text-sm font-extrabold text-black shadow-lg">
              P
            </div>
            <div className="leading-tight">
              <p className="text-sm font-bold tracking-tight text-white">PHZ Hub</p>
              <p className="text-[11px] text-mist">Marketing Workspace</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-mist hover:bg-white/5 hover:text-white lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 space-y-6 overflow-y-auto px-3 pb-6">
          {groups.map((group) => (
            <div key={group}>
              <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-600">
                {group}
              </p>
              <div className="space-y-0.5">
                {navItems
                  .filter((n) => n.group === group)
                  .map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      end={item.to === "/"}
                      onClick={onClose}
                      className={({ isActive }) =>
                        cn(
                          "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all",
                          isActive
                            ? "bg-white/[0.07] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                            : "text-zinc-400 hover:bg-white/[0.04] hover:text-white",
                        )
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <item.icon
                            className={cn(
                              "h-[18px] w-[18px] transition-colors",
                              isActive ? "text-white" : "text-zinc-500 group-hover:text-zinc-300",
                            )}
                          />
                          {item.label}
                          {isActive && (
                            <span className="ml-auto h-1.5 w-1.5 rounded-full bg-white" />
                          )}
                        </>
                      )}
                    </NavLink>
                  ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Upgrade card */}
        <div className="px-3 pb-5">
          <div className="glass rounded-2xl p-4">
            <p className="text-sm font-semibold text-white">Pro Workspace</p>
            <p className="mt-1 text-xs text-mist">All tools, prompts & planners — unlocked.</p>
            <button className="mt-3 w-full rounded-lg bg-gradient-to-r from-white to-zinc-300 py-2 text-xs font-semibold text-black transition-transform hover:scale-[1.02] active:scale-95">
              Upgrade
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
