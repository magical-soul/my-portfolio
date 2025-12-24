import styles from "./experience.module.scss";

export const experience = [
  {
    company: "Vestiaire Collective",
    role: "Senior Frontend Engineer",
    duration: "2021 – 2025 | Paris, France",
    points: [
      "Led development of high-traffic eCommerce platform using Next.js with SSR",
      "Improved Lighthouse score by 20% and reduced page load time by 40%",
      "Implemented i18n across 6 language domains",
      "Mentored junior developers and drove frontend best practices",
    ],
  },
  {
    company: "J.P. Morgan",
    role: "Frontend Engineer",
    duration: "2019 – 2020 | Mumbai, India",
    points: [
      "Built real-time trading dashboards using Angular and WebSockets",
      "Optimized large datasets with Ag-Grid",
      "Strengthened application stability via unit testing and CI/CD",
    ],
  },
  {
    company: "Eaton",
    role: "Frontend Engineer",
    duration: "2015 – 2018 | Pune, India",
    points: [
      "Owned Alarm Management module in enterprise monitoring platform",
      "Built interactive charts using Highcharts",
      "Improved UX with drag-and-drop and multi-touch interactions",
    ],
  },
];

export default function Experience() {
  return (
    <section className={styles.section}>
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
