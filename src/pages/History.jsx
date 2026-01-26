import React from "react";
import "./History.css";

const History = () => {
  return (
    <div className="history-page">

      {/* PAGE HEADER */}
      <header className="history-header">
        <h1>History of Calculations</h1>
        <div className="header-accent">
          <p>
          Review your past carbon footprint records based on daily activities.
          Track patterns and understand how your lifestyle impacts the environment.
        </p>
        </div>
      </header>

      {/* Note */}
      <div className="sample-data-note mb-4">
        <span>Note:</span> The data displayed below is sample data for demonstration purposes only.
      </div>

      {/* SUMMARY CARDS */}
      <section className="history-summary">
        <div className="summary-card">
          <h3>Total Records</h3>
          <span>12</span>
        </div>

        <div className="summary-card">
          <h3>Total Emissions</h3>
          <span>184.6 kg CO₂e</span>
        </div>

        <div className="summary-card">
          <h3>Highest Source</h3>
          <span>Transport</span>
        </div>

        <div className="summary-card">
          <h3>Last Updated</h3>
          <span>22 Jan 2026</span>
        </div>
      </section>

      {/* HISTORY TABLE */}
      <section className="history-table-section">
        <table className="history-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Activity Details</th>
              <th>Carbon Footprint (kg CO₂e)</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>2026-01-20</td>
              <td>Electricity</td>
              <td>Household electricity usage</td>
              <td>12.5</td>
            </tr>

            <tr>
              <td>2026-01-21</td>
              <td>Transport</td>
              <td>Car travel (18 km)</td>
              <td>8.2</td>
            </tr>

            <tr>
              <td>2026-01-22</td>
              <td>Transport</td>
              <td>Domestic flight</td>
              <td>25.7</td>
            </tr>

            <tr>
              <td>2026-01-23</td>
              <td>Diet</td>
              <td>Non-vegetarian diet</td>
              <td>6.4</td>
            </tr>

            <tr>
              <td>2026-01-24</td>
              <td>Waste</td>
              <td>Low recycling habits</td>
              <td>4.9</td>
            </tr>

            <tr>
              <td>2026-01-25</td>
              <td>Electricity</td>
              <td>High AC usage</td>
              <td>15.3</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* FOOTER NOTE */}
      <footer className="history-footer">
        <p>
          Monitoring your history helps identify high-impact areas and supports
          smarter, sustainable decisions over time.
        </p>
      </footer>

    </div>
  );
};

export default History;