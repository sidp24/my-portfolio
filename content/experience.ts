export type ExperienceEntry = {
  role: string;
  org: string;
  period: string;
  location?: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Undergraduate Researcher",
    org: "Q-Sim Laboratory — Rutgers University · advised by Prof. Shaowen Chen",
    period: "Sept 2025 – Present",
    location: "Piscataway, NJ",
    bullets: [
      "Built end-to-end Python pipelines (NumPy, SciPy, Matplotlib) for spatial image-map analysis, region-of-interest extraction, and peak detection across large multi-instrument datasets.",
      "Developed Monte Carlo simulation tooling around SRIM/TRIM, turning raw simulation output into documented parameters that guide sample fabrication and irradiation planning.",
      "Standardized reproducible, version-controlled analysis workflows across spectroscopy, microscopy, and simulation, replacing one-off processing scripts across the group.",
    ],
  },
  {
    role: "Software Engineering Intern",
    org: "Iconectiv (Ericsson)",
    period: "June 2025 – Aug 2025",
    location: "Bridgewater, NJ",
    bullets: [
      "Built Python microservices to ingest, process, and visualize distributed-system telemetry in real time, cutting workflow runtimes by 20%.",
      "Unified Tenable, GitHub, and internal lifecycle APIs into one centralized pipeline delivering security and infrastructure visibility for 5+ engineering teams.",
      "Optimized Jenkins and AWS CodeBuild CI/CD pipelines — better validation logic and failure detection reduced build failures by 30%.",
      "Developed a searchable VM inventory system tracking 100+ assets across environments.",
    ],
  },
  {
    role: "President & Programming Lead",
    org: "SCAR Robotics (IEEE-VEXU)",
    period: "2024 – Present",
    location: "Rutgers University",
    bullets: [
      "Led a 25+ person team through the full engineering lifecycle — mechanical design, embedded C++ control systems, and competition strategy.",
      "Designed PID motion control and X-drive holonomic control algorithms in PROS (C++).",
      "Top 20 global finish at VEX U World Championship 2026; Top 25 in 2025.",
      "Ran team operations end to end: roster, budget, travel grants, and cross-subteam coordination.",
    ],
  },
  {
    role: "Software Development Intern",
    org: "Iconectiv (Ericsson)",
    period: "May 2024 – Aug 2024",
    location: "Bridgewater, NJ",
    bullets: [
      "Created a DevOps monitoring platform tracking 200+ enterprise applications and their interdependencies, replacing manual audit processes.",
      "Engineered Python modules for automated update orchestration and patch management, cutting patch cycles from weeks to hours.",
      "Launched a Ruby on Rails + AngularJS dashboard suite with real-time alerts and system-health visualizations.",
      "Deployed a metadata engine aggregating 1,000+ GitHub repositories, powering 100+ internal dashboards.",
    ],
  },
  {
    role: "Camp Lead",
    org: "iCode Bridgewater",
    period: "May 2023 – Aug 2023",
    bullets: [
      "Ran game-development and coding camps; guided students through hands-on software projects.",
    ],
  },
  {
    role: "President",
    org: "FRC Team 7587",
    period: "Sept 2022 – June 2023",
    bullets: [
      "Directed team strategy, fundraising, and outreach while overseeing build, programming, and competition prep.",
    ],
  },
  {
    role: "Co-founder & Lead Engineer",
    org: "Myndful",
    period: "Aug 2022 – 2025",
    bullets: [
      "Co-founded an AI mental-health startup serving 6,000+ monthly users across 5+ schools.",
      "Architected full-stack systems with React, FastAPI, TensorFlow, and AWS EC2, and led school rollouts across multiple districts.",
    ],
  },
  {
    role: "Programming Lead",
    org: "FRC Team 7586",
    period: "Sept 2021 – June 2022",
    bullets: [
      "Led the software team building autonomous and driver-assist features in Java/WPILib — vision processing and control-loop tuning for competition reliability.",
    ],
  },
  {
    role: "Instructor",
    org: "Code Ninjas",
    period: "Aug 2021 – 2022",
    location: "Piscataway, NJ",
    bullets: [
      "Taught JavaScript, Python, Lua, Java, and C# to students of all backgrounds.",
    ],
  },
];
