export type Award = {
  title: string;
  org: string;
  year: string;
  description: string;
  link?: string;
};

export const awards: Award[] = [
  {
    title: "VEXU Worlds — Top 20 Globally",
    org: "VEX U World Championship",
    year: "2026",
    description:
      "Led programming for SCAR Robotics to a Top 20 global finish in 2026, after a Top 25 finish in 2025.",
  },
  {
    title: "HackRU 2024 — First Place",
    org: "HackRU",
    year: "2024",
    description:
      "Built and deployed Holobrain, an AR neuroanatomy tool (Unity + C#, TensorFlow Lite) with real-time 3D model interaction — in under 24 hours.",
    link: "https://devpost.com/sidp24",
  },
  {
    title: "Keynote Speaker — NJASCD Conference",
    org: "NJASCD",
    year: "2023",
    description:
      "Delivered a keynote on applying AI and conversational chatbots to support educators, drawn from firsthand experience building and deploying Myndful.",
  },
  {
    title: "Congressional App Challenge — Winner",
    org: "U.S. House of Representatives (Rep. Frank Pallone)",
    year: "2022",
    description:
      "Federal recognition for Myndful, an AI mental-health chatbot adopted by 6,000+ students across 5+ schools.",
    link: "https://www.congressionalappchallenge.us/",
  },
];
