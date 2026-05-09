import styles from "./certifications.module.scss";


// AWS Cloud Practitioner Essentials — Amazon Web Services | Apr 2026
// Claude AI Fundamentals (Claude 101) — Anthropic | May 2026
// Google AI Essentials — Google | 2026
export const certifications = [
 {
   title: "AWS Cloud Practitioner Essentials — Amazon Web Services | Apr 2026",
 },
 {
   title: "Claude AI Fundamentals (Claude 101) — Anthropic | May 2026",
    link: "https://verify.skilljar.com/c/i5payqsa5vvw"
 },
 {
   title: "Google AI Essentials — Google | 2026",
   link: "https://www.coursera.org/account/accomplishments/specialization/certificate/7SM5U8QQCV3G"
 }
];

export default function Certifications() {
  return (
    <section id="certifications" className={styles.section}>
      <h2 className={styles.heading}>Certifications</h2>

      <div className={styles.card}>
        <ul className={styles.list}>
          {certifications.map((certification, idx) => (
            <li key={idx} className={styles.listItem}>
              {certification.link ? (
                <a
                  href={certification.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {certification.title}
                </a>
              ) : (
                certification.title
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
