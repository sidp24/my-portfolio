export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  tech: string[];
  image?: string;
  links: { live?: string; repo?: string };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "airnote",
    title: "AirNote",
    description:
      "An AR whiteboard: notes anchored to real surfaces, shared live between users. Keeping the board stable while the camera moves was the core problem; the first versions only held up in controlled conditions, and it took several rewrites of the homography and optical-flow tracking before it worked anywhere else. FastAPI services sync state over WebSockets, with Firebase behind them, and a Gemini layer answers questions about what's on the board.",
    tags: ["AI/ML", "Web"],
    tech: ["Python", "FastAPI", "OpenCV", "WebSocket", "Firebase", "Gemini"],
    links: {},
    featured: true,
  },
  {
    slug: "hbn-pl-pipeline",
    title: "hBN PL Mapping Pipeline",
    description:
      "An analysis pipeline for photoluminescence scans of hBN samples, built in Rutgers' Q-Sim lab. It normalizes raw scans, segments regions of interest, and clusters emission spots so results are comparable across samples. An early version quietly distorted the data; I had tuned it to look right before I understood the physics well enough to judge it. The rebuilt version is what I now use for real analysis.",
    tags: ["Research", "Data"],
    tech: ["Python", "NumPy", "SciPy", "Matplotlib"],
    links: {},
    featured: true,
  },
  {
    slug: "myndful",
    title: "Myndful",
    description:
      "A mental-health chatbot for adolescents, serving 6,000+ monthly users across five schools. I co-founded the project, trained the TensorFlow model, and built the React frontend. Most of the real work went into making responses genuinely useful rather than merely on-topic.",
    tags: ["AI/ML", "Web"],
    tech: ["TensorFlow", "Python", "React", "FastAPI", "AWS"],
    image: "/images/myndful.png",
    links: { live: "https://myndful.vercel.app/" },
    featured: true,
  },
  {
    slug: "stat-arb-simulator",
    title: "Statistical Arbitrage Simulator",
    description:
      "A backtesting framework for pairs trading, written to learn the mechanics firsthand. It finds cointegrated pairs, generates z-score signals, and evaluates 50+ configurations in parallel, reporting PnL, Sharpe ratio, and max drawdown. A Streamlit dashboard exposes every parameter.",
    tags: ["Quant", "Data"],
    tech: ["Python", "pandas", "statsmodels", "Streamlit"],
    image: "/images/stat.png",
    links: {
      live: "https://statarbitsim.streamlit.app/",
      repo: "https://github.com/sidp24/Statistical-Arbitrage-Simulator",
    },
    featured: true,
  },
  {
    slug: "holobrain",
    title: "Holobrain",
    description:
      "A gesture-controlled AR neuroanatomy viewer: real-time interaction with 3D MRI-derived models. Built in 24 hours at HackRU 2024 with Unity, C#, and TensorFlow Lite. First place.",
    tags: ["AI/ML", "Hackathon"],
    tech: ["Unity", "C#", "TensorFlow Lite"],
    image: "/images/holo.jpg",
    links: { repo: "https://github.com/sidp24/HackRU" },
    featured: true,
  },
  {
    slug: "vex-scar-arm",
    title: "VEX U SCARA Arm",
    description:
      "Motion planning for a SCARA arm in PROS (C++), written for SCAR Robotics' VEX U program. The team finished Top 20 globally at the 2026 World Championship.",
    tags: ["Robotics"],
    tech: ["C++", "PROS"],
    image: "/images/vex.jpg",
    links: { repo: "https://github.com/sidp24/VEX25-SCAR-24in" },
    featured: true,
  },
  {
    slug: "portfolio",
    title: "This Site",
    description:
      "Next.js, TypeScript, and Tailwind, deployed on Vercel. All content is plain typed data; no CMS.",
    tags: ["Web"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: { repo: "https://github.com/sidp24/my-portfolio" },
  },
  {
    slug: "data-viz-dashboard",
    title: "Data Visualization Dashboard",
    description:
      "Upload a CSV and explore it through interactive scatter and bar charts, with live updates and configurable titles, labels, and styles.",
    tags: ["Data", "Web"],
    tech: ["Python", "pandas", "Plotly", "Dash"],
    image: "/images/dvd.png",
    links: { repo: "https://github.com/sidp24/Data-Visualization-Dashboard" },
  },
  {
    slug: "elevator-code",
    title: "ElevatorCode (FRC 7587)",
    description:
      "WPILib/Java control software for an FRC elevator subsystem, with structured subsystem code and a full Gradle build.",
    tags: ["Robotics"],
    tech: ["Java", "WPILib", "Gradle"],
    image: "/images/elevator.jpeg",
    links: { repo: "https://github.com/sidp24/ElevatorCode" },
  },
  {
    slug: "dummyboard",
    title: "Dummyboard",
    description:
      "A WPILib test harness for motors and controllers, used to onboard new teammates and check hardware quickly during build season.",
    tags: ["Robotics"],
    tech: ["Java", "WPILib", "Gradle"],
    image: "/images/dummyboard.jpg",
    links: { repo: "https://github.com/sidp24/dummyboard2022" },
  },
  {
    slug: "pidtest",
    title: "PIDTest",
    description:
      "A minimal WPILib project for tuning PID control loops on real hardware.",
    tags: ["Robotics"],
    tech: ["Java", "WPILib"],
    image: "/images/board.jpg",
    links: { repo: "https://github.com/sidp24/PIDTest" },
  },
  {
    slug: "bombot2022",
    title: "BomBot2022",
    description:
      "Robot code for the 2022 FRC season. Standard Gradle/WPILib structure.",
    tags: ["Robotics"],
    tech: ["Java", "WPILib", "Gradle"],
    image: "/images/batt.jpg",
    links: { repo: "https://github.com/sidp24/BomBot2022" },
  },
];

export const projectFilters = [
  "All",
  "AI/ML",
  "Web",
  "Data",
  "Robotics",
  "Quant",
  "Research",
  "Hackathon",
] as const;
