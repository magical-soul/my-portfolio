import styles from "./whyHireMe.module.scss";

export const whyHireMePointers = [
  // "I've shipped frontend for a global fashion platform with millions of users — optimising Core Web Vitals, reducing load times by X%, and leading team practices. Now based in Dubai, I bring that same high-performance, scalable frontend thinking to your product"
  "Delivered scalable frontend solutions for a global fashion eCommerce platform serving millions of users worldwide",
  "Improved application performance and Core Web Vitals, contributing to faster load times and enhanced customer experience",
  "Drove high-performance and scalable frontend engineering practices within cross-functional product teams",
  "Now based in Dubai, I bring that same high-performance, scalable frontend thinking to your product and high-growth organizations",
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
