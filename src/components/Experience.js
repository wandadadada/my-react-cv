// Experience.js
import React from 'react';

const Experience = () => {
  return (
    <div>
      <h2>Experience</h2>
      {/* Each job would be a component, or you can use a list item for each */}
      <div>
        <h3>New Channel Education Group Inc.</h3>
        <p>English Teacher --- English (for International English test) 2018 - 2023</p>
        <ul>
          <li>Design and prepare teaching materials and interactive teaching which including PowerPoint, researching, and collaborating and discussing teaching techniques and methods.
          </li>
          <li>Motivation in English learning for both adult and teenage learner.
          </li>
          {/* Add other points */}
        </ul>
      </div>
      <div>
        <h3>New Channel Education Group Inc.</h3>
        <p>English Teacher --- English (for International English test) 2018 - 2023</p>
        <ul>
          <li>Design and prepare teaching materials and interactive teaching which including PowerPoint, researching, and collaborating and discussing teaching techniques and methods.
          </li>
          <li>Motivation in English learning for both adult and teenage learner.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
