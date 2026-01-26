import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">

      <header className="about-header">
        <h1>About the Platform</h1>
        <p>
          A smart system designed to help people understand, measure,
          and reduce their carbon footprint using meaningful data.
        </p>
      </header>

      <section className="about-grid">
        <div className="about-box">
          <h2>What is a Carbon Footprint?</h2>
          <p>
            It represents the total greenhouse gas emissions produced
            by daily human activities, measured in CO₂ equivalents.
          </p>
        </div>

        <div className="about-box">
          <h2>What Does This App Do?</h2>
          <ul>
            <li>Calculates emissions from daily activities</li>
            <li>Shows insights using reports</li>
            <li>Tracks footprint over time</li>
            <li>Promotes sustainable habits</li>
          </ul>
        </div>

        <div className="about-box">
          <h2>How Calculations Work</h2>
          <p>
            The system uses verified emission factors and environmental
            datasets to convert user inputs into emission values.
          </p>
        </div>

        <div className="about-box">
          <h2>Our Mission</h2>
          <p>
            To empower individuals with awareness and data so they
            can make environmentally responsible decisions.
          </p>
        </div>

        {/* NEW BOX 1 */}
        <div className="about-box">
          <h2>Who Can Use This Platform?</h2>
          <p>
            This platform is designed for students, individuals, and
            organizations who want to understand their environmental
            impact and take steps toward sustainability.
          </p>
        </div>

        {/* NEW BOX 2 */}
        <div className="about-box">
          <h2>Why Carbon Tracking is Important</h2>
          <p>
            Tracking carbon emissions helps identify major impact areas,
            supports informed decision-making, and enables measurable
            progress toward environmental responsibility.
          </p>
        </div>
      </section>

      <footer className="about-note">
        <p>Small choices today create a sustainable tomorrow 🌱</p>
      </footer>

    </div>
  );
};

export default About;