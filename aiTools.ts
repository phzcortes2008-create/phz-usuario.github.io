export type AITool = {
  name: string;
  emoji: string;
  description: string;
  useCases: string[];
  pros: string[];
  cons: string[];
  url: string;
};

export type AICategory = {
  id: string;
  label: string;
  tagline: string;
  tools: AITool[];
};

export const aiCategories: AICategory[] = [
  {
    id: "image",
    label: "Image",
    tagline: "Generate and edit stunning visuals",
    tools: [
      {
        name: "ChatGPT Images",
        emoji: "🖼️",
        description: "Native image generation inside ChatGPT with strong prompt understanding and text rendering.",
        useCases: ["Quick concept art", "Marketing visuals with text", "Iterative editing in chat"],
        pros: ["Excellent text-in-image", "Conversational editing", "No extra tool needed"],
        cons: ["Slower at peak times", "Less stylistic control than Midjourney"],
        url: "https://chatgpt.com",
      },
      {
        name: "Midjourney",
        emoji: "🎨",
        description: "Industry-leading aesthetic quality for artistic and photorealistic imagery.",
        useCases: ["Brand moodboards", "Hero imagery", "Concept design"],
        pros: ["Best-in-class aesthetics", "Huge style range", "Strong community"],
        cons: ["Discord/web workflow", "Subscription required"],
        url: "https://midjourney.com",
      },
      {
        name: "Ideogram",
        emoji: "🔤",
        description: "Specializes in accurate, legible typography inside generated images.",
        useCases: ["Logos & posters", "Ad creatives with copy", "Typographic art"],
        pros: ["Superb text accuracy", "Generous free tier", "Fast"],
        cons: ["Less photoreal than rivals", "Smaller style library"],
        url: "https://ideogram.ai",
      },
      {
        name: "Flux",
        emoji: "⚡",
        description: "Open, high-fidelity model family with excellent prompt adherence and detail.",
        useCases: ["Photorealism", "Custom pipelines", "Fine-tuned styles"],
        pros: ["Open weights", "Great detail", "Flexible deployment"],
        cons: ["Setup complexity", "Needs strong GPU for local"],
        url: "https://blackforestlabs.ai",
      },
      {
        name: "Recraft",
        emoji: "🧩",
        description: "Vector-aware AI design tool for icons, illustrations and brand sets.",
        useCases: ["Scalable vector art", "Consistent icon sets", "Brand illustrations"],
        pros: ["True vector output", "Style consistency", "Designer focused"],
        cons: ["Niche use case", "Learning curve"],
        url: "https://recraft.ai",
      },
    ],
  },
  {
    id: "video",
    label: "Video",
    tagline: "Text-to-video and cinematic generation",
    tools: [
      {
        name: "Veo 3",
        emoji: "🎬",
        description: "Google's flagship text-to-video with native audio and cinematic motion.",
        useCases: ["Cinematic b-roll", "Ad concepts", "Short films"],
        pros: ["Native audio", "Strong realism", "Long coherence"],
        cons: ["Limited access", "Premium pricing"],
        url: "https://deepmind.google/technologies/veo",
      },
      {
        name: "Kling AI",
        emoji: "🌀",
        description: "High-quality video generation with strong motion physics and lip-sync.",
        useCases: ["Talking avatars", "Product motion", "Social clips"],
        pros: ["Great motion", "Lip-sync support", "Competitive quality"],
        cons: ["Queue times", "Credit based"],
        url: "https://klingai.com",
      },
      {
        name: "Hailuo",
        emoji: "🎥",
        description: "MiniMax video model known for dynamic camera moves and fidelity.",
        useCases: ["Dynamic shots", "Trailer style clips", "Creative concepts"],
        pros: ["Cinematic camera", "Fast iteration", "Affordable"],
        cons: ["Shorter clips", "Occasional artifacts"],
        url: "https://hailuoai.video",
      },
      {
        name: "Seedance",
        emoji: "💃",
        description: "ByteDance's video model with smooth, expressive human motion.",
        useCases: ["Dance & performance", "Character animation", "Social trends"],
        pros: ["Expressive motion", "Good for people", "Trend ready"],
        cons: ["Limited regions", "Newer ecosystem"],
        url: "https://seed.bytedance.com",
      },
      {
        name: "Runway",
        emoji: "🛫",
        description: "Full creative suite: Gen-3 video, editing, and motion tools for pros.",
        useCases: ["Pro video editing", "VFX & inpainting", "Storyboarding"],
        pros: ["Complete toolkit", "Great editor", "Reliable"],
        cons: ["Credits add up", "Steeper UI"],
        url: "https://runwayml.com",
      },
    ],
  },
  {
    id: "voice",
    label: "Voice",
    tagline: "Realistic AI voices and cloning",
    tools: [
      {
        name: "ElevenLabs",
        emoji: "🎙️",
        description: "The standard for natural TTS, voice cloning, and multilingual dubbing.",
        useCases: ["Voiceovers", "Audiobooks", "Dubbing"],
        pros: ["Most natural voices", "Voice cloning", "Many languages"],
        cons: ["Credits limit", "Premium for commercial"],
        url: "https://elevenlabs.io",
      },
      {
        name: "Fish Audio",
        emoji: "🐟",
        description: "Open and fast TTS platform with quality cloning at low cost.",
        useCases: ["Budget voiceovers", "Custom voices", "Devs & apps"],
        pros: ["Affordable", "Open models", "Fast"],
        cons: ["Less polished UI", "Smaller voice library"],
        url: "https://fish.audio",
      },
      {
        name: "Cartesia",
        emoji: "🔊",
        description: "Ultra low-latency voice models built for real-time conversational AI.",
        useCases: ["Voice agents", "Real-time apps", "IVR systems"],
        pros: ["Very low latency", "Streaming first", "Developer API"],
        cons: ["API focused", "Fewer ready voices"],
        url: "https://cartesia.ai",
      },
    ],
  },
  {
    id: "music",
    label: "Music",
    tagline: "AI music and song generation",
    tools: [
      {
        name: "Suno",
        emoji: "🎵",
        description: "Generate full songs with vocals and lyrics from a simple prompt.",
        useCases: ["Original songs", "Ad jingles", "Background tracks"],
        pros: ["Full songs w/ vocals", "Easy to use", "Fast"],
        cons: ["Less granular control", "Credit based"],
        url: "https://suno.com",
      },
      {
        name: "Udio",
        emoji: "🎚️",
        description: "High-fidelity music generation with strong control and audio quality.",
        useCases: ["High-quality tracks", "Remix & extend", "Genre exploration"],
        pros: ["Excellent audio quality", "Good control", "Extend tracks"],
        cons: ["Learning curve", "Generation limits"],
        url: "https://udio.com",
      },
    ],
  },
  {
    id: "coding",
    label: "Coding",
    tagline: "AI assistants and dev environments",
    tools: [
      {
        name: "ChatGPT",
        emoji: "🤖",
        description: "Versatile assistant for code generation, debugging, and explanations.",
        useCases: ["Debugging", "Prototyping", "Learning"],
        pros: ["Broad knowledge", "Great reasoning", "Plugins & tools"],
        cons: ["Context limits", "Can hallucinate APIs"],
        url: "https://chatgpt.com",
      },
      {
        name: "Claude",
        emoji: "📐",
        description: "Anthropic's model excelling at long context and clean, careful code.",
        useCases: ["Large refactors", "Doc analysis", "Careful coding"],
        pros: ["Huge context", "Strong coding", "Thoughtful output"],
        cons: ["Usage caps", "Conservative at times"],
        url: "https://claude.ai",
      },
      {
        name: "Gemini",
        emoji: "✨",
        description: "Google's multimodal model with massive context and tight ecosystem fit.",
        useCases: ["Multimodal tasks", "Google integration", "Long docs"],
        pros: ["Massive context", "Multimodal", "Fast"],
        cons: ["Inconsistent at edge cases", "Ecosystem lock-in"],
        url: "https://gemini.google.com",
      },
      {
        name: "Cursor",
        emoji: "🖱️",
        description: "AI-native code editor with deep codebase awareness and agents.",
        useCases: ["Whole-repo edits", "Pair programming", "Agentic coding"],
        pros: ["Codebase context", "Fast edits", "Agent mode"],
        cons: ["Subscription", "Resource heavy"],
        url: "https://cursor.com",
      },
      {
        name: "Windsurf",
        emoji: "🏄",
        description: "Agentic IDE with flows that keep AI and developer in sync.",
        useCases: ["Agentic workflows", "Refactoring", "Rapid building"],
        pros: ["Smooth agent flows", "Clean UX", "Context aware"],
        cons: ["Newer tool", "Plan limits"],
        url: "https://windsurf.com",
      },
    ],
  },
];
