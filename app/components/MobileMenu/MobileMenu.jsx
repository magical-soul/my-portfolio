"use client";

import { motion } from "framer-motion";
import styles from "./mobileMenu.module.scss";

export default function MobileMenu({ close }) {
  return (
    <motion.div
      className={styles.overlay}
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={close}
        aria-label="Close menu"
        className={styles.closeButton}
      >
        ✕
      </button>
      <ul>
        <li>
          <a href="#skills" onClick={close}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" onClick={close}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={close}>
            Contact
          </a>
        </li>
      </ul>
    </motion.div>
  );
}
