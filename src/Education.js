import React from "react";
import { GraduationCap, Award } from "lucide-react";
import TransitionWrapper from "./component/TransitionWrapper";

const backgroundGlyphs = [
  { glyph: "[]", top: "8%", left: "10%", delay: "0.2s", duration: "20s" },
  { glyph: "{}", top: "40%", left: "85%", delay: "1s", duration: "18s" },
  { glyph: "()", top: "65%", left: "5%", delay: "0.5s", duration: "22s" },
  { glyph: "[]", top: "25%", left: "60%", delay: "1.4s", duration: "16s" },
  { glyph: "{}", top: "75%", left: "70%", delay: "0.8s", duration: "24s" },
  { glyph: "()", top: "50%", left: "30%", delay: "1.1s", duration: "19s" },
];

const education = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Guru Gobind Singh Inderprastha University, New Delhi",
    period: "Sept 2020 - Sept 2024",
    description:
      "Here I learned about various web technologies and programming languages such as JavaScript, SQL, PHP, Python and C++. While learning all of this, I made various projects employing my hands-on knowledge and delivering outstanding results.",
    highlights: [
      "Learned web technologies: JavaScript, SQL, PHP, Python, C++",
      "Built multiple projects applying practical knowledge",
      "Gained expertise in software development and problem-solving",
    ],
  },
  {
    degree: "Higher Secondary Education in PCM",
    institution: "Guru Harkrishan Public School, Vasant Vihar, New Delhi",
    period: "April 2018 - April 2020",
    description:
      "Here I studied Physics, Chemistry, Maths and basics of Programming in C++. I scored 7.8/10 CGPA.",
    highlights: [
      "CGPA: 7.8/10",
      "Studied Physics, Chemistry, and Mathematics",
      "Learned fundamentals of C++ programming",
    ],
  },
];

const certifications = [
  // Add your certifications here when available
];

const Education = () => {
  return (
    <TransitionWrapper>
      <section className="relative min-h-screen overflow-hidden bg-white dark:bg-slate-900 text-brand-navy dark:text-slate-100 transition-colors duration-300">
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
              className="absolute text-4xl sm:text-6xl md:text-8xl font-semibold text-slate-200/60 dark:text-slate-700/40 opacity-40 blur-[0.2px] motion-safe:animate-spin"
            >
              {glyph}
            </span>
          ))}
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-24 pb-8 sm:pb-12 md:pb-16 lg:pb-20 min-h-screen">
          <div className="max-w-4xl mx-auto w-full">
            <div className="mb-8 sm:mb-12 animate-fade-in">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4 font-display scroll-mt-14 sm:scroll-mt-24">
                Education
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                Academic background and professional certifications.
              </p>
            </div>

            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              <section>
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                  <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-brand-teal dark:text-teal-400" />
                  <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-slate-100 font-display">
                    Degrees
                  </h2>
                </div>
                <div className="space-y-5 sm:space-y-6">
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 p-4 sm:p-6 animate-slide-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3 sm:mb-4">
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-slate-100 font-display">
                            {edu.degree}
                          </h3>
                          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-1">
                            {edu.institution}
                          </p>
                        </div>
                        <span className="px-2.5 sm:px-3 py-1 text-xs sm:text-sm font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-600 w-fit self-start sm:self-auto">
                          {edu.period}
                        </span>
                      </div>
                      <div className="space-y-3 sm:space-y-4">
                        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                          {edu.description}
                        </p>
                        <ul className="space-y-1.5 sm:space-y-2">
                          {edu.highlights.map((highlight, hIndex) => (
                            <li
                              key={hIndex}
                              className="text-sm sm:text-base text-slate-600 dark:text-slate-300 flex gap-2"
                            >
                              <span className="text-brand-teal dark:text-teal-400 mt-1.5 flex-shrink-0">
                                •
                              </span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {certifications.length > 0 && (
                <section>
                  <div className="flex items-center gap-2 mb-4 sm:mb-6">
                    <Award className="h-5 w-5 sm:h-6 sm:w-6 text-brand-teal dark:text-teal-400" />
                    <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-slate-100 font-display">
                      Certifications
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {certifications.map((cert, index) => (
                      <div
                        key={index}
                        className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300 p-4 sm:p-6 animate-slide-up"
                        style={{
                          animationDelay: `${
                            (index + education.length) * 100
                          }ms`,
                        }}
                      >
                        <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100 font-display mb-1">
                          {cert.name}
                        </h3>
                        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-3">
                          {cert.issuer}
                        </p>
                        <span className="px-2.5 sm:px-3 py-1 text-xs sm:text-sm font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-600">
                          {cert.year}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </section>
    </TransitionWrapper>
  );
};

export default Education;
