import React from 'react';
import './HomePage.css'; // Optional: for styling

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to My Homepage</h1>

      {/* Section 1 */}
      <h2>Section 1: About Me</h2>
      <ul>
        <li>Subheading 1.1: My Background</li>
        <li>Subheading 1.2: My Interests</li>
        <li>Subheading 1.3: My Goals</li>
      </ul>

      {/* Section 2 */}
      <h2>Section 2: My Projects</h2>
      <ul>
        <li>Subheading 2.1: Project 1</li>
        <li>Subheading 2.2: Project 2</li>
        <li>Subheading 2.3: Project 3</li>
      </ul>

      {/* Section 3 */}
      <h2>Section 3: Contact Me</h2>
      <ul>
        <li>Subheading 3.1: Email</li>
        <li>Subheading 3.2: Phone</li>
        <li>Subheading 3.3: Social Media</li>
      </ul>
    </div>
  );
};

export default HomePage;