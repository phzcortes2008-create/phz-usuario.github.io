export type MarketingTool = {
  name: string;
  emoji: string;
  description: string;
  url: string;
};

export type MarketingCategory = {
  id: string;
  label: string;
  tools: MarketingTool[];
};

export const marketingCategories: MarketingCategory[] = [
  {
    id: "keyword",
    label: "Keyword Research",
    tools: [
      { name: "Ahrefs", emoji: "🔎", description: "Deep keyword and backlink intelligence for SEO pros.", url: "https://ahrefs.com" },
      { name: "Semrush", emoji: "📊", description: "All-in-one keyword, competitor and PPC research suite.", url: "https://semrush.com" },
      { name: "Ubersuggest", emoji: "💡", description: "Affordable keyword ideas and content suggestions.", url: "https://neilpatel.com/ubersuggest" },
    ],
  },
  {
    id: "seo",
    label: "SEO",
    tools: [
      { name: "Surfer SEO", emoji: "🏄", description: "Data-driven on-page optimization and content scoring.", url: "https://surferseo.com" },
      { name: "Screaming Frog", emoji: "🐸", description: "Powerful technical SEO site crawler and auditor.", url: "https://screamingfrog.co.uk" },
      { name: "Clearscope", emoji: "📝", description: "Content optimization grading for higher rankings.", url: "https://clearscope.io" },
    ],
  },
  {
    id: "analytics",
    label: "Analytics",
    tools: [
      { name: "Google Analytics", emoji: "📈", description: "The standard for web traffic and behavior analytics.", url: "https://analytics.google.com" },
      { name: "Plausible", emoji: "🔒", description: "Privacy-first, lightweight web analytics.", url: "https://plausible.io" },
      { name: "Mixpanel", emoji: "🧪", description: "Product analytics for funnels and retention.", url: "https://mixpanel.com" },
    ],
  },
  {
    id: "heatmaps",
    label: "Heatmaps",
    tools: [
      { name: "Hotjar", emoji: "🔥", description: "Heatmaps, recordings and surveys to understand users.", url: "https://hotjar.com" },
      { name: "Microsoft Clarity", emoji: "🔬", description: "Free heatmaps and session recordings.", url: "https://clarity.microsoft.com" },
      { name: "Crazy Egg", emoji: "🥚", description: "Visual click and scroll mapping with A/B tests.", url: "https://crazyegg.com" },
    ],
  },
  {
    id: "funnels",
    label: "Funnels",
    tools: [
      { name: "ClickFunnels", emoji: "🛒", description: "Build complete sales funnels without code.", url: "https://clickfunnels.com" },
      { name: "Systeme.io", emoji: "⚙️", description: "All-in-one funnels, email and courses.", url: "https://systeme.io" },
      { name: "Leadpages", emoji: "🎯", description: "High-converting landing pages and lead capture.", url: "https://leadpages.com" },
    ],
  },
  {
    id: "email",
    label: "Email",
    tools: [
      { name: "Klaviyo", emoji: "✉️", description: "Email & SMS automation built for ecommerce.", url: "https://klaviyo.com" },
      { name: "Mailchimp", emoji: "🐵", description: "Popular email marketing for small businesses.", url: "https://mailchimp.com" },
      { name: "ConvertKit", emoji: "🪄", description: "Creator-focused email automation and newsletters.", url: "https://kit.com" },
    ],
  },
  {
    id: "crm",
    label: "CRM",
    tools: [
      { name: "HubSpot", emoji: "🧲", description: "Free-to-start CRM with marketing and sales tools.", url: "https://hubspot.com" },
      { name: "Pipedrive", emoji: "📋", description: "Visual sales pipeline CRM for closing deals.", url: "https://pipedrive.com" },
      { name: "Salesforce", emoji: "☁️", description: "Enterprise-grade CRM platform.", url: "https://salesforce.com" },
    ],
  },
  {
    id: "automation",
    label: "Automation",
    tools: [
      { name: "Zapier", emoji: "🔗", description: "Connect 6000+ apps with no-code automations.", url: "https://zapier.com" },
      { name: "Make", emoji: "🧠", description: "Visual, powerful workflow automation builder.", url: "https://make.com" },
      { name: "n8n", emoji: "🔁", description: "Open-source, self-hostable workflow automation.", url: "https://n8n.io" },
    ],
  },
  {
    id: "affiliates",
    label: "Affiliates",
    tools: [
      { name: "PartnerStack", emoji: "🤝", description: "Manage and scale partner & affiliate programs.", url: "https://partnerstack.com" },
      { name: "Impact", emoji: "💥", description: "Partnership automation for affiliates and influencers.", url: "https://impact.com" },
      { name: "Rewardful", emoji: "🎁", description: "Simple affiliate tracking for SaaS via Stripe.", url: "https://rewardful.com" },
    ],
  },
  {
    id: "design",
    label: "Design",
    tools: [
      { name: "Canva", emoji: "🎨", description: "Drag-and-drop design for social and marketing.", url: "https://canva.com" },
      { name: "Figma", emoji: "🖌️", description: "Collaborative interface and brand design.", url: "https://figma.com" },
      { name: "Framer", emoji: "🪟", description: "Design and ship beautiful websites fast.", url: "https://framer.com" },
    ],
  },
];
