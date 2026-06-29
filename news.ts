export type NewsItem = {
  source: string;
  emoji: string;
  category: string;
  title: string;
  summary: string;
  time: string;
};

export const news: NewsItem[] = [
  {
    source: "OpenAI",
    emoji: "🤖",
    category: "AI",
    title: "New multimodal models raise the bar for creative work",
    summary: "Faster image and video generation with better text rendering is reshaping ad creative workflows for marketers.",
    time: "2h ago",
  },
  {
    source: "Google",
    emoji: "🔍",
    category: "Google",
    title: "Search expands AI overviews to more queries",
    summary: "Brands are adapting content strategies to stay visible as AI summaries change click behavior on the SERP.",
    time: "5h ago",
  },
  {
    source: "Meta",
    emoji: "📘",
    category: "Meta",
    title: "Advantage+ campaigns get smarter creative testing",
    summary: "Automated creative and audience tools push more advertisers toward broad targeting with AI-led optimization.",
    time: "8h ago",
  },
  {
    source: "TikTok",
    emoji: "🎵",
    category: "TikTok",
    title: "Search ads and shopping features keep expanding",
    summary: "TikTok doubles down on search and commerce, turning the app into a discovery and purchase engine.",
    time: "12h ago",
  },
  {
    source: "YouTube",
    emoji: "▶️",
    category: "YouTube",
    title: "Shorts monetization and AI tools roll out wider",
    summary: "Creators get new AI editing features and revenue options as Shorts competes harder for attention.",
    time: "1d ago",
  },
  {
    source: "Marketing",
    emoji: "📈",
    category: "Marketing",
    title: "Short-form video remains the highest ROI format",
    summary: "Latest industry reports show short-form video and UGC continue to deliver the best returns for brands.",
    time: "1d ago",
  },
  {
    source: "AI",
    emoji: "✨",
    category: "AI",
    title: "Voice agents move into customer support at scale",
    summary: "Low-latency voice models make real-time AI agents viable, cutting response times for support teams.",
    time: "2d ago",
  },
  {
    source: "Meta",
    emoji: "📘",
    category: "Meta",
    title: "Instagram pushes original content in the algorithm",
    summary: "Reposts get downranked while original Reels and carousels earn more reach for creators and brands.",
    time: "2d ago",
  },
];

export const newsFilters = ["All", "AI", "Marketing", "Google", "Meta", "TikTok", "YouTube"];
