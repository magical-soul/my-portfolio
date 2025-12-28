import styles from "./projects.module.scss";

const projects = [
  {
    title: "AI Content Creator Platform",
    tech: "Next.js, React, Gemini API, Tailwind CSS",
    description:
      "AI-powered content generation platform with performance-optimized UI and SSR.",
    impact:
      "Built a full-stack AI-powered content generation platform using React and Next.js. Integrated AI APIs for real-time content creation. Deployed on Vercel with optimized performance and responsive UI. Designed to help creators and marketers improve productivity.",
    live: "https://ai-creator-platform-jojo.vercel.app",
  },
  {
    title: "High-Traffic eCommerce Platform - Vestiaire Collective",
    tech: "Next.js, React, SSR, i18n, Jest",
    description:
      "The leading global online marketplace for desirable pre-loved fashion having a mission to transform the fashion industry for a more sustainable future by empowering community to promote circular fashion. Scalable marketplace UI focused on SEO and performance.",
    impact:
      "Improved Lighthouse score by 20% and reduced page load times by 40%.",
    live: "https://www.vestiairecollective.com/",
  },
  {
    title: "Schemes Provider Application",
    tech: "ReactJS, Redux, React-Routing, JavaScript, HTML5, CSS3, .net core, Entity framework",
    description:
      "LR's service provider assessment schemes help assure the public of competence and safety. Independently assess service providers working within the electricity, gas, and water sectors in the UK. By operating these schemes, we help assure a common level of competency through technical assessments. Service providers can also find information about how to get accredited.",
    impact:
      "Improved Lighthouse score by 20% and reduced page load times by 40%.",
  },
  {
    title: "Branch Finder",
    tech: "ReactJS, Redux, React-Router, BingMap, JavaScript, HTML, SCSS, Tealium",
    description:
      "Branch finder application is used to find the nearest Post Oﬃce in a UK. It also gives informa%on about diﬀerent postcodes, opening hours allowing you to choose the service you require. It has different services of Delivery office, post office etc. User can track and trace the branch and parcels on maps",
    impact:
      "Improved Lighthouse score by 20% and reduced page load times by 40%.",
  },
  {
    title: "Eaton Foreseer Monitoring application",
    tech: "ReactJS, Flux, Redux, Highchart, InteractJS, JavaScript, HTML5, CSS3, C++",
    description:
      "Foreseer software is to deliver a single monitoring and management system that ties thousands of complex devices together and builds intelligence around them. It offers vendor-independent solutions designed to help data centers, hospitals, industrial facilities, financial institutions and other organizations to reduce energy consumption and downtime by monitoring parameters of multiple devices(UPSs, PXMs).",
    impact:
      "Improved Lighthouse score by 20% and reduced page load times by 40%.",
    live: "https://www.eaton.com/content/dam/eaton/services/eess/eess-documents/foreseer-br02606004e.pdf",
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
