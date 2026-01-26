import React from "react";
import "./Reports.css";

const Reports = () => {
  return (
    <div className="reports-page">
      {/* Header */}
      <div className="reports-header">
        <h1>Emission Report</h1>
        <p>
          A detailed breakdown of your carbon emissions based on daily activities.
          This report helps you understand where your impact is highest.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="reports-summary">
        <div className="report-card">
          <h3>Transport</h3>
          <span>900 kg CO₂</span>
          <p>Emissions from vehicles and commuting</p>
        </div>

        <div className="report-card">
          <h3>Electricity</h3>
          <span>800 kg CO₂</span>
          <p>Household and appliance energy use</p>
        </div>

        <div className="report-card">
          <h3>Diet</h3>
          <span>500 kg CO₂</span>
          <p>Food consumption and dietary habits</p>
        </div>

        <div className="report-card">
          <h3>Waste</h3>
          <span>250 kg CO₂</span>
          <p>Waste generation and disposal</p>
        </div>
      </div>

      {/* Detailed Section */}
      <div className="reports-details">
        <h2>Insights & Interpretation</h2>
        <p>
          Transport and electricity together contribute the majority of emissions.
          Shifting to public transport, renewable energy sources, and efficient
          appliances can significantly reduce your carbon footprint.
        </p>

        <p>
          Dietary choices and waste management also play an important role.
          Sustainable food options and recycling practices help lower emissions
          over time.
        </p>
      </div>
    </div>
  );
};

export default Reports;