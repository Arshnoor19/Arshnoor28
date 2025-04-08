import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa"; // Import social media icons

import "./ContactMe.css";

const Contact = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <section className="contact-section">
      <div className="contact-content">
        <h1>Contact Me</h1>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="cta-button">
            Send Message
          </button>
        </form>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a
            href="https://github.com/Arshnoor19"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/arshnoor-singh-82559b229/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" />
          </a>
          <a
            href="https://x.com/10_kairon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="icon" />
          </a>

          <a
            href="mailto:arshnoorsinghkairon@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="icon" />
          </a>
        </div>

        {/* Back Button */}
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

export default Contact;
