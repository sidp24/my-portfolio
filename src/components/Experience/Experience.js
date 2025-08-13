import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Experience.css";

const defaultItems = [
  {
    title: "May 2025",
    cardTitle: "Iconectiv (Ericsson) — SWE Intern, Engineering",
    cardSubtitle: "Dashboards • Automation • Data Pipelines",
    cardDetailedText:
      "Automated 4+ internal tools with Python, Bash, and Jenkins to cut reporting time by 90%+, built CI/CD pipelines with AWS CodeBuild, integrated APIs (Tenable, GitHub, EOL) for security analytics, and developed a VM dashboard to track 100+ systems.",
  },
  {
    title: "Jan 2025",
    cardTitle: "Rutgers IEEE-VEXU — Build Lead",
    cardSubtitle: "Competitive Robotics",
    cardDetailedText:
      "Led design, assembly, and testing across mechanical/electrical/software. Implemented agile build cycles and reliability improvements that elevated competition performance.",
  },
  {
    title: "May 2024",
    cardTitle: "Iconectiv (Ericsson) — SDE Intern, DevOps",
    cardSubtitle: "Dashboards • Automation • Data Pipelines",
    cardDetailedText:
      "Architected a platform to surface third-party software dependencies across 200+ apps. Automated GitHub metadata parsing with Python; built dashboards with Ruby on Rails, Smashing, and Node.js; integrated CI/CD and reporting.",
  },
  {
    title: "Aug 2023",
    cardTitle: "edWeb — Keynote Speaker",
    cardSubtitle: "AI + Student Well-Being",
    cardDetailedText:
      "Presented how Myndful.AI addresses gaps in school mental health resources. Shared UX principles for student-friendly chat interfaces and discussed AI’s role in education support.",
  },
  {
    title: "May 2023",
    cardTitle: "iCode Bridgewater — Camp Lead",
    cardSubtitle: "STEM Camps",
    cardDetailedText:
      "Led game dev and coding camps; created inclusive, high-energy learning environments. Guided students through hands-on software projects and teamwork practices.",
  },
  {
    title: "Dec 2022",
    cardTitle: "Congressional App Challenge — 1st Place",
    cardSubtitle: "Award by Rep. Frank Pallone",
    cardDetailedText:
      "Recognized for impact in destigmatizing mental health using accessible conversational AI. Praised for innovation and community value.",
  },
  {
    title: "Aug 2022",
    cardTitle: "Myndful — Co-founder & Lead Engineer",
    cardSubtitle: "AI mental health chatbot for students",
    cardDetailedText:
      "Built an ML-powered mental health chatbot for adolescents. Implemented a TensorFlow Sequential (3-layer dense) model and shipped a responsive React frontend. Deployed custom school sites and led rollouts across multiple districts.",
  },
  {
    title: "Aug 2021",
    cardTitle: "Code Ninjas — Instructor",
    cardSubtitle: "Piscataway, NJ",
    cardDetailedText:
      "Taught JavaScript, Python, Lua, Java, and C# to students of diverse backgrounds. Helped grow our Instagram and Facebook presence by creating short videos showcasing student wins and center highlights.",
  },
];

export default function Experience({ items = defaultItems }) {
  return (
    <section id="experience" className="xp">
      <div className="xp__timeline">
        <VerticalTimeline lineColor="var(--border)">
          {items.map((it, idx) => (
            <VerticalTimelineElement
              key={idx}
              date={it.title}
              contentStyle={{
                background: "rgba(255,255,255,0.06)",
                color: "var(--text)",
              }}
              contentArrowStyle={{
                borderRight: "6px solid rgba(255,255,255,0.06)",
              }}
              iconStyle={{
                // keep the brand gradient, but sizing & ring are handled in CSS for consistency
                background:
                  "linear-gradient(135deg, var(--accent), var(--accent-2))",
                color: "#0b0f14",
                boxShadow: "none",
              }}
            >
              <h3 className="xp-card-title">{it.cardTitle}</h3>
              <h4 className="xp-card-subtitle">{it.cardSubtitle}</h4>
              <p className="xp-card-detail">{it.cardDetailedText}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}
