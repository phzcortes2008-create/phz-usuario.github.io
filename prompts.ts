export type Prompt = {
  title: string;
  category: string;
  text: string;
};

export const promptCategories = [
  "TikTok",
  "Instagram",
  "Facebook Ads",
  "Google Ads",
  "Copywriting",
  "Email Marketing",
  "Sales",
  "Landing Pages",
  "Product Descriptions",
  "YouTube",
  "Thumbnail",
  "UGC",
  "AI Videos",
  "Image Generation",
];

export const prompts: Prompt[] = [
  { category: "TikTok", title: "Viral Hook Generator", text: "Act as a viral TikTok strategist. Give me 10 scroll-stopping hooks for a video about [TOPIC]. Each hook must be under 8 words, create curiosity or tension, and be written for a [TARGET AUDIENCE]." },
  { category: "TikTok", title: "Trend Adaptation", text: "I sell [PRODUCT]. Suggest 5 current TikTok trend formats I can adapt, and write the exact on-screen text and voiceover script for each one." },
  { category: "Instagram", title: "Carousel Outline", text: "Create a 7-slide Instagram carousel about [TOPIC] for [AUDIENCE]. Slide 1 must be a bold hook, slides 2-6 give actionable value, slide 7 is a strong CTA. Keep each slide under 25 words." },
  { category: "Instagram", title: "Reel Script", text: "Write a 30-second Instagram Reel script about [TOPIC]. Include a hook in the first 2 seconds, 3 quick value points, and a CTA. Add suggested on-screen captions." },
  { category: "Facebook Ads", title: "PAS Ad Copy", text: "Write a Facebook ad for [PRODUCT] using the Problem-Agitate-Solution framework. Audience: [AUDIENCE]. Include 3 headline variations and 1 primary text under 125 words." },
  { category: "Facebook Ads", title: "Angle Brainstorm", text: "Give me 10 distinct marketing angles to advertise [PRODUCT] on Facebook. For each, state the emotional driver and the target sub-audience." },
  { category: "Google Ads", title: "RSA Headlines", text: "Generate 15 responsive search ad headlines (max 30 chars) and 4 descriptions (max 90 chars) for [PRODUCT/SERVICE] targeting the keyword [KEYWORD]." },
  { category: "Google Ads", title: "Negative Keywords", text: "I'm running Google Ads for [BUSINESS]. List 30 negative keywords I should add to avoid irrelevant clicks, grouped by theme." },
  { category: "Copywriting", title: "AIDA Framework", text: "Write persuasive copy for [PRODUCT] using the AIDA framework (Attention, Interest, Desire, Action). Tone: [TONE]. Length: ~150 words." },
  { category: "Copywriting", title: "Headline Machine", text: "Generate 20 high-converting headlines for [OFFER]. Mix curiosity, benefit-driven, and urgency styles. Audience: [AUDIENCE]." },
  { category: "Email Marketing", title: "Welcome Sequence", text: "Write a 5-email welcome sequence for new subscribers of [BRAND]. Email 1: welcome + quick win. 2: story. 3: value. 4: social proof. 5: soft offer. Include subject lines." },
  { category: "Email Marketing", title: "Re-engagement", text: "Write a re-engagement email to win back inactive subscribers for [BRAND]. Make it personal, include a clear incentive, and a 1-click CTA." },
  { category: "Sales", title: "Cold Outreach DM", text: "Write a short, non-salesy cold DM to a [ROLE] at a [INDUSTRY] company offering [SERVICE]. Lead with value, keep it under 60 words, end with a low-friction question." },
  { category: "Sales", title: "Objection Handling", text: "List the top 8 objections prospects have about [PRODUCT] and write a confident, empathetic response to each." },
  { category: "Landing Pages", title: "Full Page Copy", text: "Write complete landing page copy for [PRODUCT]: hero headline + subhead, 3 benefit blocks, social proof section, FAQ (5 Qs), and final CTA. Tone: [TONE]." },
  { category: "Landing Pages", title: "Above-the-Fold", text: "Write 5 hero section variations (headline + subheadline + CTA button text) for a landing page selling [OFFER] to [AUDIENCE]." },
  { category: "Product Descriptions", title: "Benefit-Led Description", text: "Write a benefit-led product description for [PRODUCT]. Include a punchy opening line, 4 bullet benefits, and a closing line that drives purchase. SEO keyword: [KEYWORD]." },
  { category: "Product Descriptions", title: "Amazon Listing", text: "Create an Amazon listing for [PRODUCT]: a keyword-rich title, 5 bullet points, and a description with relevant search terms." },
  { category: "YouTube", title: "Video Script", text: "Write a YouTube script for a [LENGTH] video titled '[TITLE]'. Include a hook, intro, 3-5 main sections with talking points, and an outro with CTA." },
  { category: "YouTube", title: "Title & Description", text: "Generate 10 click-worthy YouTube titles and an SEO-optimized description (with timestamps and 10 tags) for a video about [TOPIC]." },
  { category: "Thumbnail", title: "Thumbnail Text", text: "Suggest 10 ultra-short, high-contrast thumbnail text options (2-4 words) for a video about [TOPIC] that maximize curiosity and clicks." },
  { category: "Thumbnail", title: "Thumbnail Concept", text: "Describe 5 YouTube thumbnail concepts for '[TITLE]'. For each: main subject, emotion, color scheme, and overlay text." },
  { category: "UGC", title: "UGC Script", text: "Write a 45-second authentic UGC ad script for [PRODUCT]. Tone: casual and relatable. Structure: hook, problem, product reveal, demo, result, CTA." },
  { category: "UGC", title: "Creator Brief", text: "Create a UGC creator brief for [BRAND]: product talking points, do's and don'ts, required shots, hook ideas, and CTA." },
  { category: "AI Videos", title: "Veo Prompt", text: "Write a detailed cinematic text-to-video prompt for [SCENE]. Specify camera movement, lighting, mood, lens, subject action, and setting in vivid detail." },
  { category: "AI Videos", title: "Storyboard", text: "Break this concept into a 6-shot AI video storyboard: [CONCEPT]. For each shot give the visual prompt and a one-line caption." },
  { category: "Image Generation", title: "Photoreal Prompt", text: "Write a photorealistic image prompt of [SUBJECT]. Include composition, lighting, camera/lens, color palette, mood, and fine details. Aspect ratio [RATIO]." },
  { category: "Image Generation", title: "Brand Visual", text: "Create an on-brand image prompt for [BRAND] selling [PRODUCT]. Style: [STYLE]. Include scene, lighting, palette and where text/logo could be placed." },
];
