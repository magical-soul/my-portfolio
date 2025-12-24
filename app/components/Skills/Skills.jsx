import styles from "./skills.module.scss";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Angular",
  "Redux",
  "Server-Side Rendering (SSR)",
  "Web Performance",
  "Core Web Vitals",
  "REST APIs",
  "WebSockets",
  "Jest",
  "React Testing Library",
  "Tailwind CSS",
  "API Integration",
  "Gemini API",
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
