import styles from "./achievements.module.scss";

export const achievements = [
 {
   title: "Featured in 50InTech, Paris for Women in Technology",
   link: "https://app.50intech.com/en/article/the-idea-of-millions-of-people-using-our-application-is-really-motivating/"
 },
 {
   title: "Speaker on Web Performance Optimization at Web Meetup, Vestiaire Collective, Paris, France"
 },
 {
   title: "Participant – Web Summit 2023, Lisbon, Portugal, gaining exposure to global tech innovations."
 },
 {
   title: "E-STAR Awards for Learning, Accountability & Engagement at Eaton"
 }
];

export default function Achievements() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Achievements</h2>

      <div className={styles.card}>
        <ul className={styles.list}>
          {achievements.map((achieve, idx) => (
            <li key={idx} className={styles.listItem}>
              {achieve.link ? (
                <a
                  href={achieve.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {achieve.title}
                </a>
              ) : (
                achieve.title
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
