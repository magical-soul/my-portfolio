import styles from "./projects.module.scss";

const projects = [
  {
    title: "Agentic AI App Builder",
    tech: "Next.js (App Router), React, TypeScript, Prisma, PostgreSQL (Supabase), Gemini AI, Arcjet, Clerk, Vercel",
    description:
      "An AI-powered full-stack SaaS workspace enabling users to instantly generate, compile, and render live interactive web applications straight inside the browser from a single natural language prompt.",
    impact: `• Engineered a full-stack code-generation pipeline utilizing server-side Gemini AI models to securely translate prompts into production-ready React schemas while isolating secret keys from the client bundle.
           • Built an in-browser sandbox layout system that parses AI output, dynamically installs required packages, and updates live interactive UI components in real time.
           • Architected a high-concurrency database layer using Supavisor transaction pooling and strict connection limits to eliminate latency chokepoints and runtime crashes on Vercel's serverless edge networks.
           • Implemented multi-tenant route guards and security thresholds by integrating Clerk OAuth flows alongside Arcjet middleware to manage user tokens and defend against prompt-injection spikes.`,
    live: "https://ai-app-builder-red.vercel.app/",
  },
   {
    title: "Emaar Workflow & Multi-Tenant Approval Engine",
    tech: "React, Node.js, TypeScript, Prisma ORM, PostgreSQL (Neon), Docker, Vercel, Render",
    description:
      "Production-live, concurrent multi-tenant workflow state machine and signature approval engine.",
    impact: `• Architected strict database query boundaries and middleware gates ensuring 100% data isolation between corporate tenant workspaces.
             • Implemented Optimistic Concurrency Control (OCC) version locks and atomic status constraints to eliminate multi-user signature race conditions.
             • Engineered dynamic consensus processors to enforce abstract workflow rules including SINGLE unlock, MULTIPLE unanimous matrices, and QUORUM majority votes (>50%).
             • Developed a persistent background SLA daemon processing 24/7 to monitor validation time windows and automatically trigger cascading escalation breaches.
             • Refactored monolithic code states into decoupled, focused frontend feature micro-hooks to isolate rendering scopes and eliminate UI calculation lag.
             • Orchestrated full-stack cloud deployment splitting the static React UI onto Vercel's global CDN edge networks and anchoring the Node API container on Render.`,
    live: "https://emmar-workflow-system-frontend.vercel.app/",
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
  {
    title: "AeroNet Core: Multi-Threaded Telemetry Grid",
    tech: "React, TypeScript, Web Workers, Zustand, HTML5 Canvas",
    description:
      "Hardware-accelerated geospatial dashboard processing high-frequency data streams off-thread",
    impact:
      "Engineered a high-performance aerospace telemetry console capable of processing real-time coordinates at 60 FPS. Isolated heavy trajectory computations off the browser's main thread by designing an asynchronous, background Web Worker ingestion channel. Bypassed React Virtual DOM overhead entirely by painting rendering updates onto an HTML5 Canvas synced via requestAnimationFrame. Normalized global state architecture using a fine-grained Zustand store, converting index arrays into constant-time O(1) dictionary lookups to eliminate UI lag and ensure smooth, serverless client-side execution.",
    live: "https://telemetry-client-worker-dashboard.vercel.app",
  },
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
  title: "Wordle Game Application",
  tech: "React, Vite, Tailwind CSS (v4), Vercel",
  description:
    "A lightweight, fully responsive frontend Wordle MVP application built with isolated game logic and zero backend dependency.",
  impact: `• Decoupled game mechanics from the layout layer by engineering a centralized custom state hook (\`useWordle\`) to handle keystroke events, grid updates, and validation logic.
           • Resolved character grading desynchronization by designing a specialized two-step scoring algorithm to accurately track and isolate duplicate letter edge cases.
           • Built an interactive virtual keyboard matrix that dynamically updates its color profile (gray, yellow, green) based on live evaluation states to streamline user navigation.
           • Eliminated API network roundtrips and deployment overhead by structuring a localized dictionary memory array, enabling sub-millisecond page loads and offline playability.`,
  live: "https://tgm-wordle.vercel.app/",
}
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
