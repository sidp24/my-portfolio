export type SkillCategory = {
  title: string;
  items: string[];
};

// Mirrors the résumé's five categories exactly.
export const skills: SkillCategory[] = [
  {
    title: "Languages",
    items: [
      "Python",
      "Java",
      "C++",
      "TypeScript",
      "JavaScript",
      "SQL",
      "Ruby",
      "HTML/CSS",
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      "React",
      "Node.js",
      "Express",
      "FastAPI",
      "TensorFlow",
      "OpenCV",
      "Redux",
      "Streamlit",
      "WebSocket",
      "NumPy",
      "SciPy",
      "Matplotlib",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    items: [
      "AWS (EC2, S3, Lambda)",
      "Docker",
      "GitHub Actions",
      "Jenkins",
      "CI/CD",
      "Linux",
    ],
  },
  {
    title: "Databases & Backend",
    items: ["PostgreSQL", "SQLite", "Redis", "Firebase"],
  },
  {
    title: "Developer Tools",
    items: ["Git", "Jira"],
  },
];

// Résumé's curated "Relevant Coursework" line — rendered as a compact list, not a full section.
export const coursework = [
  "Data Structures",
  "Discrete Mathematics 1 & 2",
  "Linear Optimization",
  "Introduction to AI",
  "Linear Algebra",
  "Multivariable Calculus",
  "Differential Equations",
  "Partial Differential Equations",
];
