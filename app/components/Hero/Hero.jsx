"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./hero.module.scss";
import profilePic from "@/public/profilePic.jpg";

export const greeting = {
  name: "Jyoti Baraskar",
  title: "Hi, I’m Jyoti Baraskar 👋",
  subtitle: "Senior Frontend Engineer | React | Next.js | Performance | AI",
  description:
    "Senior Frontend Engineer with 8+ years of experience building scalable React & Next.js applications for eCommerce and enterprise platforms. Focused on performance, accessibility, and real-world impact.",
  resumeLink: "",
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
