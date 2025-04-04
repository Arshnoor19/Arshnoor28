import React from "react";
import { useNavigate } from "react-router-dom";
import "./Experience.css";

const Experience = () => {
  const navigate = useNavigate();

  // Example experience data
  const experiences = [
    {
      id: 1,
      date: "Jan 2024 - Present",
      role: "Software Engineer",
      company: "Tech Corp",
      description:
        "Developed scalable web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    },
    {
      id: 2,
      date: "Jun 2021 - Dec 2022",
      role: "Frontend Developer",
      company: "Web Solutions",
      description:
        "Designed and implemented user interfaces for client projects. Optimized web performance and improved user experience.",
    },
    {
      id: 3,
      date: "Sep 2020 - May 2021",
      role: "Intern",
      company: "Code Academy",
      description:
        "Learned and applied web development fundamentals. Assisted in building small-scale projects using HTML, CSS, and JavaScript.",
    },
  ];

  return (
    <section className="experience-section">
      <div className="experience-content">
        <h1>Experience</h1>
        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-date">{exp.date}</div>
              <div className="timeline-content">
                <h2>{exp.role}</h2>
                <h3>{exp.company}</h3>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="cta-button"
          onClick={() => navigate("/")} // Navigate back to homepage
        >
          Back to Home
        </button>
      </div>
    </section>
  );
};

export default Experience;
