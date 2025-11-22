import React from "react";
import { ExternalLink, Github } from "lucide-react";
import TransitionWrapper from "./component/TransitionWrapper";

const backgroundGlyphs = [
  { glyph: "[]", top: "8%", left: "10%", delay: "0.2s", duration: "20s" },
  { glyph: "{}", top: "40%", left: "85%", delay: "1s", duration: "18s" },
  { glyph: "()", top: "65%", left: "5%", delay: "0.5s", duration: "22s" },
  { glyph: "[]", top: "25%", left: "60%", delay: "1.4s", duration: "16s" },
  { glyph: "{}", top: "75%", left: "70%", delay: "0.8s", duration: "24s" },
  { glyph: "()", top: "50%", left: "30%", delay: "1.1s", duration: "19s" },
];

const projects = [
  {
    title: "Bike Buddy",
    description:
      "An App that would allow the users to see in real time the best mechanics in their areas.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    link: "#",
    github: "https://github.com/Arshnoor19/bikebud",
  },
  {
    title: "3D Web Portfolio",
    description:
      "A 3D web Portfolio with a floating island and the various routing pages.",
    tags: ["React", "Three.js", "WebGL", "JavaScript"],
    link: "#",
    github: "https://github.com/Arshnoor19/three_try",
  },
  {
    title: "3D Shirt Designer",
    description:
      "A 3D shirt Designing website that would help the buyers to understand the fitting better.",
    tags: ["React", "Three.js", "Tailwind CSS", "WebGL"],
    link: "#",
    github: "https://github.com/Arshnoor19/Shirt",
  },
  {
    title: "Security Dashboard",
    description:
      "A Basic and to the point dashboard made for the Indian army with the help of PHP, SQL and Apache Servers.",
    tags: ["PHP", "MySQL", "Apache", "JavaScript"],
    link: "https://drive.google.com/drive/folders/1oLJFKXyShbz-jrWak1XkxOXPo63NGLwl?usp=sharing",
    github: "#",
  },
];

const Projects = () => {
  const handleKeyDown = (event, url) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (url && url !== "#") {
        window.open(url, "_blank", "noopener,noreferrer");
      }
    }
  };

  return (
    <TransitionWrapper>
      <section className="relative min-h-screen overflow-hidden bg-white text-brand-navy">
        <div className="pointer-events-none absolute inset-0 z-0">
          {backgroundGlyphs.map(({ glyph, top, left, delay, duration }) => (
            <span
              key={`${glyph}-${top}-${left}`}
              aria-hidden="true"
              style={{
                top,
                left,
                animationDelay: delay,
                animationDuration: duration,
              }}
              className="absolute text-8xl font-semibold text-slate-200/60 opacity-40 blur-[0.2px] motion-safe:animate-spin"
            >
              {glyph}
            </span>
          ))}
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-12 sm:pb-16 lg:pb-20 min-h-screen">
          <div className="max-w-6xl mx-auto w-full">
            <div className="mb-12 animate-fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-display scroll-mt-16 sm:scroll-mt-24">
                Projects
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600">
                A selection of projects I've built, from MVPs to production
                systems serving thousands of users.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-6 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-semibold text-slate-900 font-display">
                      {project.title}
                    </h2>
                    <div className="flex gap-2">
                      {project.link !== "#" && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-500 hover:text-brand-teal transition-colors focus-ring rounded p-1"
                          aria-label="View project"
                          tabIndex={0}
                          onKeyDown={(e) => handleKeyDown(e, project.link)}
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                      {project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-500 hover:text-brand-teal transition-colors focus-ring rounded p-1"
                          aria-label="View on GitHub"
                          tabIndex={0}
                          onKeyDown={(e) => handleKeyDown(e, project.github)}
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-base text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm font-medium bg-slate-100 text-slate-700 rounded-full border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </TransitionWrapper>
  );
};

export default Projects;
