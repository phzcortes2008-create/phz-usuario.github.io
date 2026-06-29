import {
  LayoutDashboard,
  Sparkles,
  BookOpen,
  Clock,
  Flame,
  Wrench,
  FolderHeart,
  CalendarDays,
  Calculator,
  StickyNote,
  Newspaper,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  to: string;
  label: string;
  icon: LucideIcon;
  group: string;
};

export const navItems: NavItem[] = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard, group: "Workspace" },
  { to: "/ai-tools", label: "AI Tools", icon: Sparkles, group: "Discover" },
  { to: "/prompts", label: "Prompt Library", icon: BookOpen, group: "Discover" },
  { to: "/posting-times", label: "Posting Times", icon: Clock, group: "Discover" },
  { to: "/viral-ideas", label: "Viral Ideas", icon: Flame, group: "Discover" },
  { to: "/marketing-tools", label: "Marketing Tools", icon: Wrench, group: "Discover" },
  { to: "/resources", label: "Resources", icon: FolderHeart, group: "Discover" },
  { to: "/planner", label: "Content Planner", icon: CalendarDays, group: "Produce" },
  { to: "/calculator", label: "Calculator", icon: Calculator, group: "Produce" },
  { to: "/notes", label: "Notes", icon: StickyNote, group: "Produce" },
  { to: "/news", label: "Marketing News", icon: Newspaper, group: "Stay sharp" },
];
