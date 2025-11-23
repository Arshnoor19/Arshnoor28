import React from "react";
import TransitionWrapper from "./component/TransitionWrapper";

const backgroundGlyphs = [
  { glyph: "[]", top: "8%", left: "10%", delay: "0.2s", duration: "20s" },
  { glyph: "{}", top: "40%", left: "85%", delay: "1s", duration: "18s" },
  { glyph: "()", top: "65%", left: "5%", delay: "0.5s", duration: "22s" },
  { glyph: "[]", top: "25%", left: "60%", delay: "1.4s", duration: "16s" },
  { glyph: "{}", top: "75%", left: "70%", delay: "0.8s", duration: "24s" },
  { glyph: "()", top: "50%", left: "30%", delay: "1.1s", duration: "19s" },
];

const experiences = [
  {
    title: "Product Engineer",
    company: "Kiwimesh Technologies Pvt. Ltd.",
    period: "June 2025 - Present",
    description:
      "At Kiwimesh Technologies, I work across development and technical operations. I build and maintain app modules using React, React Native (Expo), JavaScript, Python, Flask, and Supabase, handling backend logic, API integrations, and deployment tasks. I coordinate with clients and field teams like WAPCOS to gather requirements, define milestones, and deliver clear technical reports. I also research new frameworks, optimize deployment workflows, and troubleshoot issues across mobile apps and internal dashboards. My role focuses on reliable execution, fast problem-solving, and maintaining steady project progress.",
    achievements: [
      "Building and maintaining application modules using React, React Native (Expo), JavaScript, Python, Flask, and Supabase",
      "Handling backend logic, API integrations, and deployment configurations",
      "Ensuring clean documentation and smooth project handovers",
      "Working closely with clients and field teams, especially during projects with partners like WAPCOS",
      "Collecting technical data, defining milestones, and preparing structured reports",
      "Exploring new frameworks, researching deployment architectures, and troubleshooting issues across mobile apps, dashboards, and internal tools",
    ],
    tags: [
      "React",
      "React Native",
      "JavaScript",
      "Python",
      "Flask",
      "Supabase",
    ],
  },
  {
    title: "Software Associate",
    company: "Zipher",
    period: "Sept 2024 - April 2025",
    description:
      "I made the decision to deliver the Webpages to the US clients and helped them make the revenue of 1 Million Dollars. I also added various features like RSS and Ihomefinder plugins to optimize the workflow and ultimately make revenue.",
    achievements: [
      "Delivered webpages to US clients, contributing to $1M revenue generation",
      "Implemented RSS and Ihomefinder plugins to optimize workflow efficiency",
      "Enhanced client satisfaction through timely deliveries and feature enhancements",
    ],
    tags: ["React", "JavaScript", "HTML", "CSS", "WordPress"],
  },
  {
    title: "Software Engineer",
    company: "Hull Advisory Ltd.",
    period: "Dec 2024 - March 2025",
    description:
      "Developed a home page using React, CSS and HTML and made the deliveries on time while understanding the client's requirements.",
    achievements: [
      "Built responsive homepage using React, CSS, and HTML",
      "Delivered projects on time while meeting all client requirements",
      "Collaborated effectively with cross-functional teams",
    ],
    tags: ["React", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Junior Software Associate",
    company: "Zipher",
    period: "June 2024 - Sept 2024",
    description:
      "Started my journey into corporate world and understood the various git and coding concepts to get hands on experience.",
    achievements: [
      "Learned version control with Git and GitHub",
      "Gained practical experience in software development workflows",
      "Contributed to team projects and code reviews",
    ],
    tags: ["Git", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Back-End Developer",
    company: "Bharat Electronics Ltd.",
    period: "June 2022 - Sept 2022",
    description:
      "My first internship where I learned about the tools like PHPMyAdmin and Apache Servers along with the practical knowledge of using SQL to work on the servers.",
    achievements: [
      "Gained hands-on experience with PHPMyAdmin and Apache Servers",
      "Developed SQL queries for database management and operations",
      "Learned server-side development and database administration",
    ],
    tags: ["PHP", "MySQL", "Apache", "SQL"],
  },
  {
    title: "Part-Time Computer Science Teacher",
    company: "ASK Tutorials",
    period: "April 2022 - Present",
    description:
      "During my Bachelors in Computer Science and Engineering, I started teaching. This time I taught CBSE Syllabus to the Students.",
    achievements: [
      "Taught Computer Science to students following CBSE curriculum",
      "Developed effective teaching methodologies for programming concepts",
      "Helped students understand fundamental CS principles",
    ],
    tags: ["Teaching", "Computer Science", "Education"],
  },
];

const Experience = () => {
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
              className="absolute text-4xl sm:text-6xl md:text-8xl font-semibold text-slate-200/60 opacity-40 blur-[0.2px] motion-safe:animate-spin"
            >
              {glyph}
            </span>
          ))}
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-24 pb-8 sm:pb-12 md:pb-16 lg:pb-20 min-h-screen">
          <div className="max-w-4xl mx-auto w-full">
            <div className="mb-8 sm:mb-12 animate-fade-in">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 font-display scroll-mt-14 sm:scroll-mt-24">
                Experience
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed">
                Building products and leading engineering initiatives across
                startups and enterprises.
              </p>
            </div>

            <div className="space-y-5 sm:space-y-6 md:space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 p-4 sm:p-6 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3 sm:mb-4">
                    <div className="flex-1">
                      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 font-display">
                        {exp.title}
                      </h2>
                      <p className="text-base sm:text-lg text-slate-600 mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <span className="px-2.5 sm:px-3 py-1 text-xs sm:text-sm font-medium bg-slate-100 text-slate-700 rounded-full border border-slate-200 w-fit self-start sm:self-auto">
                      {exp.period}
                    </span>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {exp.description}
                    </p>

                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-slate-900 mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="text-sm sm:text-base text-slate-600 flex gap-2"
                          >
                            <span className="text-brand-teal mt-1.5 flex-shrink-0">
                              •
                            </span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                      {exp.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2.5 sm:px-3 py-1 text-xs sm:text-sm font-medium bg-slate-100 text-slate-700 rounded-full border border-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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

export default Experience;
