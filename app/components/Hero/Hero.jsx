"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./hero.module.scss";
import profilePic from "@/public/profilePic.jpg";

export const greeting = {
  name: "Jyoti Baraskar",
  title: "Hi, I’m Jyoti Baraskar 👋",
  subtitle: "Senior Fullstack Engineer |  React · Next.js · Node.js · TypeScript · Cloud & DevOps · Core Web Vitals | AI",
  description:
    "8+ years building scalable web applications, Improved performance scores by 40% on large-scale eCommerce platforms. Experience across React, Next.js, APIs, analytics, SEO, and cloud technologies. Worked closely with product, marketing, backend, and data teams in global environments.",
  resumeLink: "/Jyoti_Baraskar_Resume.pdf",
};

export default function Hero() {
  return (
    <section className={styles.hero}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold">{greeting.title}</h1>
        <p className="mt-2 text-gray-400">{greeting.subtitle}</p>
        <p className="mt-4 max-w-xl text-gray-300">{greeting.description}</p>
        {greeting.resumeLink && (
          <a
            href={greeting.resumeLink || "#"}
            className={styles.resumeLink}
          >
              <i className="fa-solid fa-file-arrow-down fa-xl"></i> View Resume
          </a>
        )}
      </motion.div>

      <div className={styles.avatar}>
        <Image
          src={profilePic}
          alt="Jyoti Baraskar"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
    </section>
  );
}
