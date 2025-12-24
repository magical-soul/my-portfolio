"use client";

import { useState, useEffect } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

import { useInView } from "react-intersection-observer";

const sections = ["hero","about","tech","projects","experience","achievements","education","contact"];


export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md">
      <nav className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="font-bold text-lg text-blue-600 dark:text-blue-400">Jyoti Baraskar</div>
        <ul className="flex gap-6">
          {["#hero","#about","#tech","#projects","#experience","#achievements","#education","#contact"].map((link) => (
            <li key={link}>
              <a href={link} className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition">
                {link.replace("#","").toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 text-gray-800 dark:text-gray-200"
        >
          {darkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
        </button>
      </nav>
    </header>
  );
}
