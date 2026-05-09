import styles from "./experience.module.scss";

export const experience = [
  {
    company: "Vestiaire Collective",
    role: "Senior Frontend Engineer",
    duration: "2021 – 2025 | Paris, France",
    points: [
      "Improved Lighthouse performance by 40% and reduced page load times by 20% through SSR optimisation, lazy loading, and Core Web Vitals tuning",
      "Built scalable React & Next.js experiences for a global fashion marketplace serving millions of users across 6 international markets",
      "Drove SEO, organic growth, and conversion improvements through performance-focused frontend architecture and optimized landing pages",
      "Integrated REST & GraphQL APIs supporting checkout, orders, user accounts, and platform workflows",
      "Implemented feature flags with LaunchDarkly enabling controlled rollouts and A/B experimentation at scale",
      "Collaborated closely with product, backend, analytics, and marketing teams to deliver customer-focused digital experiences",
      "Integrated analytics and user journey tracking systems including Google Analytics and Snowplow for data-driven decision making",
      "Contributed to CI/CD workflows, UAT validation, release coordination, and production monitoring for reliable deployments",
      "Mentored junior engineers through code reviews, pair programming, and internal knowledge-sharing sessions",
    ],
  },
  {
    company: "J.P. Morgan",
    role: "Frontend Engineer",
    duration: "2019 – 2020 | Mumbai, India",
    points: [
      "Developed real-time web applications using React, WebSockets, and REST APIs for business-critical financial workflows",
      "Collaborated with cross-functional teams to deliver scalable and reliable frontend solutions",
      "Investigated and resolved production issues while improving application stability and maintainability",
      "Strengthened application stability via unit testing and CI/CD",
    ],
  },
  {
    company: "Capgemini",
    role: "Associate Consultant",
    duration: "2018 – 2019 | Mumbai, India",
    points: [
      "Built responsive React.js and Angular applications for enterprise clients focusing on cross-browser compatibility, accessibility, and clean component architecture",
      "Developed reusable component libraries and implemented interactive UI features in collaboration with backend services",
      "Participated in code reviews, debugging, and production issue resolution to maintain high code quality",
    ],},
  {
    company: "Eaton",
    role: "Associate Engineer",
    duration: "2015 – 2018 | Pune, India",
    points: [
      "Built industrial monitoring and control dashboards using React.js integrating real-time and historical data from backend APIs",
      "Developed interactive UI modules and data visualisations for complex enterprise workflows across industrial facilities",
      "Improved frontend performance and UI responsiveness for complex data workflows; ensured production readiness and cross-browser compatibility",
      "Collaborated with backend teams to integrate REST APIs and ensure seamless data flow between frontend and backend systems",],
  },
];

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <h2 className={styles.title}>Experience</h2>

      {experience.map((job, i) => (
        <div key={i} className={styles.card}>
          <h3 className={styles.role}>
            {job.role} – {job.company}
          </h3>
          <p className={styles.duration}>{job.duration}</p>

          <ul className={styles.list}>
            {job.points.map((p, idx) => (
              <li key={idx} className={styles.listItem}>
                {p}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
