import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Our Platform</h1>
        <p>
          This platform helps individuals understand, track, and reduce their
          carbon footprint through accurate calculations and meaningful insights.
        </p>
      </section>

      <section className="about-section">
        <h2>What is a Carbon Footprint?</h2>
        <p>
          A carbon footprint represents the total greenhouse gas emissions
          caused directly or indirectly by human activities. These emissions
          are typically measured in terms of carbon dioxide equivalents (CO₂e).
        </p>
      </section>

      <section className="about-section">
        <h2>What Does This Application Do?</h2>
        <ul>
          <li>Calculates your carbon footprint based on daily activities</li>
          <li>Provides detailed reports and visual insights</li>
          <li>Helps you track changes over time</li>
          <li>Encourages sustainable and eco-friendly choices</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>How Calculations Work</h2>
        <p>
          The calculations are based on standard emission factors and commonly
          accepted environmental data. Inputs such as energy usage, transport,
          and lifestyle choices are converted into estimated emissions.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to promote environmental awareness and empower people
          to make informed decisions that contribute to a more sustainable future.
        </p>
      </section>

      <section className="about-footer">
        <p>
          Together, small changes can create a big impact on our planet.
        </p>
      </section>
    </div>
  );
};

export default About;
