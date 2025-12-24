import styles from "./education.module.scss";

export const education = [
  {
    degree: "B.Tech – Electronics Engineering",
    institute: "Walchand College of Engineering, Sangli",
    duration: "2011 – 2015",
    grade: "CGPA 9.3/10 · Bronze Medalist",
  },
];

export default function Education() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Education</h2>

      {education.map((edu, i) => (
        <div key={i} className={styles.card}>
          <h3 className={styles.degree}>{edu.degree}</h3>
          <p className={styles.institute}>{edu.institute}</p>

          <p className={styles.duration}>{edu.duration}</p>

          <p className={styles.meta}>{edu.grade}</p>
        </div>
      ))}
    </section>
  );
}
