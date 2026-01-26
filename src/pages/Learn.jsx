import "./Learn.css";

const Learn = () => {
  return (
    <section class="learn-section">
      <div class="learn-container">
        <h1>Learn About Sustainability</h1>
        <div className="header-accent">
          <p class="intro">
          Understanding environmental sustainability is the first step toward reducing our impact on the planet.
          This section provides essential knowledge and practical guidance.
          </p>
        </div>

        <div class="learn-card">
          <h2>What is Sustainability?</h2>
          <p>
            Sustainability refers to meeting our present needs without compromising the ability of future generations
            to meet theirs. It focuses on environmental protection, social responsibility, and economic balance.
          </p>
        </div>

        <div class="learn-card">
          <h2>Understanding Carbon Footprint</h2>
          <p>
            A carbon footprint measures the total greenhouse gas emissions caused by an individual, organization,
            or activity. These emissions mainly come from energy consumption, transportation, food choices, and waste generation.
          </p>
        </div>

        <div class="learn-card">
          <h2>Major Sources of Carbon Emissions</h2>
          <ul>
            <li>Electricity and energy usage</li>
            <li>Transportation (cars, flights, public transport)</li>
            <li>Food consumption and dietary choices</li>
            <li>Waste and recycling habits</li>
          </ul>
        </div>

        <div class="learn-card">
          <h2>Why Reducing Carbon Footprint Matters</h2>
          <p>
            High carbon emissions contribute to climate change, global warming, and environmental degradation.
            Reducing emissions helps protect ecosystems, improves air quality, and ensures long-term environmental stability.
          </p>
        </div>

        <div class="learn-card ">
          <h2>Simple Ways to Live More Sustainably</h2>
          <ul>
            <li>Use energy-efficient appliances</li>
            <li>Prefer public transport or carpooling</li>
            <li>Reduce plastic use and recycle waste</li>
            <li>Adopt plant-based or locally sourced foods</li>
            <li>Conserve water and electricity</li>
          </ul>
        </div>

        <div class="learn-card">
          <h2>How This Platform Helps</h2>
          <p>
            This platform allows users to calculate their carbon footprint, track progress over time,
            and gain insights that encourage sustainable behavior through data-driven awareness.
          </p>
        </div>

        <p class="quote">
          “Education is the foundation of sustainability. Small informed actions today lead to a healthier planet tomorrow.”
        </p>
      </div>
    </section>

  );
};

export default Learn;