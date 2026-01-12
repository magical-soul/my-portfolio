"use client";

import { useEffect, useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import styles from "./navbar.module.scss";

export default function Navbar() {
  const [theme, setTheme] = useState("dark");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <nav className={styles.nav}>
      <h2 className={styles.logo}>Jyoti.dev</h2>

      <ul className={styles.links}>
        <li>
          <a href="#skills">Skills</a>
        </li>
         <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#achievements">Achievements</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className={styles.actions}>
        <button
          className={styles.themeBtn}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          aria-label="Toggle theme"
        >
          {theme === "light" ? "☀️" : "🌙"}
        </button>

        <button
          className={styles.menuBtn}
          onClick={() => setOpen(true)}
          aria-label="Menu"
        >
          ☰
        </button>
      </div>
      {open && <MobileMenu close={() => setOpen(false)} />}
    </nav>
  );
}
