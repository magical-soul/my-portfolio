import styles from "./whyHireMe.module.scss";

export const whyHireMePointers = [
  "Proven experience in global product companies building high-quality web applications", 
    "Strong frontend performance & UX focus",
    "Production-ready mindset (not just demos)",
    "Ability to work collaboratively in a team environment",
    "Passion for learning and staying up-to-date with industry trends",
    "Immediate availability in Dubai"
];

export default function WhyHireMe() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Why Hire Me?</h2>

      <div className={styles.card}>
        <ul className={styles.list}>
          {whyHireMePointers.map((pointer, idx) => (
            <li key={idx} className={styles.listItem}>
              {pointer}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
