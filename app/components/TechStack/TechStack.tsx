import Image from "next/image";
import node from "@/public/icons/nodejs.png";
import react from "@/public/icons/react.png";
import next from "@/public/icons/nextjs.png";
import html from "@/public/icons/html.png";
import css from "@/public/icons/css.png";

const techs = [node, react, next, html, css];

export default function TechStack() {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-2xl font-semibold text-center mb-6">Tech Stack</h2>
      <div className="flex justify-center gap-5 flex-wrap">
        {techs.map((icon, i) => (
          <div key={i} className="w-12 h-12">
            <Image src={icon} alt="Tech Icon" />
          </div>
        ))}
      </div>
    </section>
  );
}
