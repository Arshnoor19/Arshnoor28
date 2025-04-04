import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation (if needed)
import "./Projects.css";

const Projects = () => {
  const navigate = useNavigate(); // Initialize useNavigate (if needed)

  // Example project data
  const projects = [
    {
      id: 1,
      title: "Bike Buddy",
      description:
        "An App that would allow thew users to see in real time the best mechanics in there areas.",
      // Replace with your image path
      link: "https://github.com/Arshnoor19/bikebud", // Replace with your project link
    },
    {
      id: 2,
      title: "3D Web Portfolio",
      description:
        "A 3d web Portfolio with a floating island and the various routing pages.",
      image: "project2.jpg", // Replace with your image path
      link: "https://github.com/Arshnoor19/three_try", // Replace with your project link
    },
    {
      id: 3,
      title: "3D Shirt Designer",
      description:
        "A 3d shirt Designing website that would help the buyers to understand the fitting better",
      image: "project3.jpg", // Replace with your image path
      link: "https://github.com/Arshnoor19/Shirt", // Replace with your project link
    },
    {
      id: 4,
      title: "Security Dashbourd",
      description:
        "A Basic and to the point dashhbourd made for the Indian army with the help of PHP, SQL and Apache Servers",
      image: "project3.jpg", // Replace with your image path
      link: "https://drive.google.com/drive/folders/1oLJFKXyShbz-jrWak1XkxOXPo63NGLwl?usp=sharing", // Replace with your project link
    },
  ];

  return (
    <section className="projects-section">
      <div className="projects-content">
        <h1>My Projects</h1>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
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

export default Projects;
