import React from "react";
import { useNavigate } from "react-router-dom";
import "./Education.css";

const Education = () => {
  const navigate = useNavigate();

  // Example experience data
  const experiences = [
    {
      id: 1,
      date: "Sept 2020 - sept 2024",
      role: "Bachelor of Technology in Computer Science and Engineering",
      company: "Guru Gobind Singh Inderprastha University at New Delhi",
      description:
        "Here i learnt about the various web technologies and programming languages such as JavaScripts, SQL, PHP, Python and C++.While learning all of this i made various project employing my on hand knowledge and delivering the outstanding results.",
    },
    {
      id: 2,
      date: "April 2018 - April 2020",
      role: "Higher Elementary Education in PCM",
      company: "Guru Harkrishan Public School at Vasant Vihar, New Delhi",
      description:
        "Here I studied the Physics, Cheimistry, Maths and basics of Programming in C++ and i scored 7.8/10 CGPA",
    },
  ];

  return (
    <section className="experience-section">
      <div className="experience-content">
        <h1>Education</h1>
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

export default Education;
