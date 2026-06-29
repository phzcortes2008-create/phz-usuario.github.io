export type Resource = {
  name: string;
  emoji: string;
  description: string;
  url: string;
};

export type ResourceCategory = {
  label: string;
  items: Resource[];
};

export const resourceCategories: ResourceCategory[] = [
  {
    label: "Free Icons",
    items: [
      { name: "Lucide", emoji: "✏️", description: "Beautiful open-source icon set.", url: "https://lucide.dev" },
      { name: "Heroicons", emoji: "🦸", description: "Crafted SVG icons by Tailwind makers.", url: "https://heroicons.com" },
      { name: "Phosphor", emoji: "🌟", description: "Flexible icon family for interfaces.", url: "https://phosphoricons.com" },
    ],
  },
  {
    label: "Free Fonts",
    items: [
      { name: "Google Fonts", emoji: "🔤", description: "1500+ free, open-source typefaces.", url: "https://fonts.google.com" },
      { name: "Fontshare", emoji: "🅰️", description: "Quality fonts free for commercial use.", url: "https://fontshare.com" },
    ],
  },
  {
    label: "Mockups",
    items: [
      { name: "Mockuuups", emoji: "📱", description: "Drag-and-drop device & product mockups.", url: "https://mockuuups.studio" },
      { name: "Shots", emoji: "📷", description: "Create stunning mockups and presentations.", url: "https://shots.so" },
    ],
  },
  {
    label: "Templates",
    items: [
      { name: "Notion Templates", emoji: "🗂️", description: "Productivity and planning templates.", url: "https://notion.so/templates" },
      { name: "Canva Templates", emoji: "🖼️", description: "Social, ads, and presentation templates.", url: "https://canva.com" },
    ],
  },
  {
    label: "Video Assets",
    items: [
      { name: "Mixkit", emoji: "🎞️", description: "Free video clips, music and SFX.", url: "https://mixkit.co" },
      { name: "Coverr", emoji: "🎥", description: "Beautiful free stock footage.", url: "https://coverr.co" },
    ],
  },
  {
    label: "Transitions",
    items: [
      { name: "Motion Array", emoji: "🌀", description: "Premiere & After Effects transitions.", url: "https://motionarray.com" },
      { name: "Mixkit Transitions", emoji: "✂️", description: "Free transition packs for editors.", url: "https://mixkit.co/free-premiere-pro-templates" },
    ],
  },
  {
    label: "LUTs",
    items: [
      { name: "Lutify.me", emoji: "🎨", description: "Cinematic color grading LUTs.", url: "https://lutify.me" },
      { name: "FreeLUTs", emoji: "🌈", description: "Free LUT packs for color grading.", url: "https://freeluts.com" },
    ],
  },
  {
    label: "Sound Effects",
    items: [
      { name: "Freesound", emoji: "🔉", description: "Huge library of free sound effects.", url: "https://freesound.org" },
      { name: "Pixabay Audio", emoji: "🎶", description: "Royalty-free SFX and music.", url: "https://pixabay.com/sound-effects" },
    ],
  },
  {
    label: "Stock Videos",
    items: [
      { name: "Pexels Videos", emoji: "📹", description: "Free 4K stock video clips.", url: "https://pexels.com/videos" },
      { name: "Videvo", emoji: "🎬", description: "Free stock footage and motion graphics.", url: "https://videvo.net" },
    ],
  },
  {
    label: "Stock Photos",
    items: [
      { name: "Unsplash", emoji: "🏞️", description: "High-resolution free photography.", url: "https://unsplash.com" },
      { name: "Pexels", emoji: "📸", description: "Free stock photos for any project.", url: "https://pexels.com" },
    ],
  },
];
