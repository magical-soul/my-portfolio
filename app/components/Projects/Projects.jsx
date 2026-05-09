import styles from "./projects.module.scss";

const projects = [
  {
    title: "AI Content Creator Platform",
    tech: "Next.js, React, Gemini API, Tailwind CSS",
    description:
      "AI-powered content generation platform with performance-optimized UI and SSR",
    impact:
      "Built a full-stack AI-powered content generation platform using React and Next.js. Integrated AI APIs for real-time content creation. Deployed on Vercel with optimized performance and responsive UI. Designed to help creators and marketers improve productivity.",
    live: "https://ai-creator-platform-jojo.vercel.app",
  },
  {
    title: "StackFlow",
    tech: "ReactJS, JavaScript, HTML5, CSS3, GraphQL, NodeJS, ExpressJS, MongoDB",
    description:
      "A modern full-stack application leveraging React, Node.js, and GraphQL to demonstrate clean architecture and end-to-end ownership",
    impact:
      "Deployed the frontend on Vercel and backend on Render, handling real-world concerns such as environment configuration, CORS policies, secure database connections, and build optimizations.",
    live: "https://booking-api-event.vercel.app/",
  },
  {
    title: "Generative AI With LLMs Models",
    tech: "ReactJS, JavaScript, HTML5, CSS3, GraphQL, NodeJS, ExpressJS, MongoDB",
    description:
      "Generative AI application using Langchain, huggingface and aws services. This showcases  How real-world AI applications are structured on cloud, How to connect multiple AWS services into a working pipeline and How prompt-based systems can be integrated into scalable architectures",
      
      //how we can use various foundational LLM models including open source models using aws bedrock.",
    impact:
      "Designed an API using API Gateway, Built backend logic with AWS Lambda, Integrated with Bedrock foundation models for content generation, Stored generated blog outputs in Amazon S3, Monitored logs and system behavior using CloudWatch",
    live: "https://www.linkedin.com/posts/jyoti-baraskar-61040890_from-learning-building-recently-i-completed-ugcPost-7456832842296328194-jgV2?utm_source=share&utm_medium=member_desktop&rcm=ACoAABNIKWwBGYPEQM6f6_7AijnxX7viUFvNHMs",
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.heading}>Projects</h2>

      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.title} className={styles.card}>
            <div className={styles.content}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <p className={styles.content__tech}>{project.tech}</p>

              <p className={styles.content__impact}>{project.impact}</p>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  className="inline-block mt-4 text-blue-600 hover:underline"
                >
                 Project →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
