import styles from "./skills.module.scss";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Angular",
  "Redux",
  "HTML5",
  "CSS3",
  "Server-Side Rendering (SSR)",
  "Web Performance",
  "Core Web Vitals",
  "REST APIs",
  "WebSockets",
  "Web Workers",
  "Jest",
  "React Testing Library",
  "Tailwind CSS",
  "API Integration",
  "Gemini API",
  "Node.js",
  "ExpressJS",
  "GraphQL",
  "MongoDB",
  "PostgreSQL",
  "AWS cloud services",
  "Docker",
  "Kubernetes",
  "CI/CD",
  "Git",
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2>Skills</h2>
      <div className={styles.list}>
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  );
}
