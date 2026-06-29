export type PostingTime = {
  platform: string;
  emoji: string;
  bestDays: string;
  bestHours: string;
  engagement: string;
  engagementLevel: number; // 0-100
  tip: string;
};

export const postingTimes: PostingTime[] = [
  {
    platform: "TikTok",
    emoji: "🎵",
    bestDays: "Tue, Thu, Fri",
    bestHours: "6–10 AM & 7–11 PM",
    engagement: "High",
    engagementLevel: 92,
    tip: "Post when your audience is winding down. First 3 seconds decide everything.",
  },
  {
    platform: "Instagram",
    emoji: "📸",
    bestDays: "Mon, Wed, Fri",
    bestHours: "11 AM–1 PM & 7–9 PM",
    engagement: "High",
    engagementLevel: 86,
    tip: "Reels reach far beyond followers. Use 3–5 niche hashtags, not 30.",
  },
  {
    platform: "YouTube Shorts",
    emoji: "▶️",
    bestDays: "Thu–Sun",
    bestHours: "12–3 PM & 5–8 PM",
    engagement: "Medium-High",
    engagementLevel: 78,
    tip: "Loop-friendly endings boost re-watches and the Shorts algorithm.",
  },
  {
    platform: "Facebook",
    emoji: "👍",
    bestDays: "Tue–Thu",
    bestHours: "9 AM–12 PM",
    engagement: "Medium",
    engagementLevel: 64,
    tip: "Native video and questions outperform external links in reach.",
  },
  {
    platform: "Pinterest",
    emoji: "📌",
    bestDays: "Sat, Sun",
    bestHours: "8–11 PM",
    engagement: "Medium",
    engagementLevel: 60,
    tip: "Vertical 2:3 pins with clear text overlays get saved the most.",
  },
  {
    platform: "LinkedIn",
    emoji: "💼",
    bestDays: "Tue, Wed, Thu",
    bestHours: "8–10 AM",
    engagement: "Medium-High",
    engagementLevel: 74,
    tip: "Hook + whitespace + a story. Comment within the first hour to boost reach.",
  },
  {
    platform: "Twitter / X",
    emoji: "🐦",
    bestDays: "Mon–Wed",
    bestHours: "9 AM–12 PM",
    engagement: "Medium",
    engagementLevel: 58,
    tip: "Threads outperform single posts. Lead with the boldest line.",
  },
];
