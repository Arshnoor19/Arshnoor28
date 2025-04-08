import React from "react";
import { useNavigate } from "react-router-dom";
import "./Experience.css";

const Experience = () => {
  const navigate = useNavigate();

  // Example experience data
  const experiences = [
    {
      id: 2,
      date: "Sept 2024 - Present",
      role: "Software Associate",
      company: "Zipher",
      description:
        "I made the decision to deliver the Webpages to the US clents and helped them make the revenue of 1 Million Dollars also i added various features like RSS and Ihomefinder plugins to optimize the workflow and ultimately make revenue.",
    },
    {
      id: 1,
      date: " Dec 2024 -  March 2025",
      role: "Software Engineer",
      company: "Hull Advisory Ltd.",
      description:
        "Developed a home page using React, CSS and HTML and made the deliveries on time while understanding the client's requirements.",
    },
    {
      id: 3,
      date: "June 2024 - Sept 2024",
      role: "Junior Software Associate",
      company: "Zipher",
      description:
        "Started my journey into corporate world and understood the various git and coding concepts to get hands on Experience.",
    },
    {
      id: 4,
      date: "June 2022 - Sept 2022",
      role: "Back-End Developer",
      company: "Bharat Electronics Ltd.",
      description:
        "My first internship i learned about the tools like PHPMyAdmin and Apache Servers along with the practical knowledge of using SQL to work on the servers.",
    },
    {
      id: 4,
      date: "April 2022 - present",
      role: "Part-Time Computer Science Teacher ",
      company: "ASK Tutorials",
      description:
        "During my Bachelors in Computer Sience and Engineering i Started teaching also this time i taught CBSE Syllabus to the Students.",
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
