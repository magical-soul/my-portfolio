import styles from "./contact.module.scss";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact</h2>
      <p>Let’s work together or just say hi 👋</p>
      <p>📍 Dubai, UAE</p>

      <div className={styles.items}>
        <p className={styles.item}>
          <a href="mailto:jyoti.baraskar123@gmail.com">
            <i className="fa-solid fa-envelope"></i>
            <span>Email</span>
          </a>
        </p>

        <p className={styles.item}>
          <a
            href="https://www.linkedin.com/in/jyoti-baraskar-61040890/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
        </p>

        <p className={styles.item}>
          <a href="https://github.com/magical-soul" target="_blank">
            <i className="fab fa-github" />
            <span>GitHub</span>
          </a>
        </p>
      </div>
    </section>
  );
}
