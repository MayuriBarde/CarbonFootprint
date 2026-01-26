import React, { useState } from "react";
import "./Forms.css";

function ElectricityForm() {
  const [oldReading, setOldReading] = useState("");
  const [newReading, setNewReading] = useState("");

  const unitsUsed =
    oldReading && newReading ? newReading - oldReading : 0;

  const impact =
    unitsUsed > 200
      ? "High electricity usage ⚠️"
      : unitsUsed > 100
      ? "Medium electricity usage 🙂"
      : "Low electricity usage 🌱";

  const billAmount = unitsUsed * 6; // simple approx rate

  return (
    <div className="container form-container">
      <div className="form-card" id="electricity">
        <h2 className="form-title">Electricity Usage Form</h2>

        <form className="electricity-form" >

          <div className="form-row">
            <label>Your Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>

          <div className="form-row">
            <label>House Type</label>
            <select>
              <option value="">Select house type</option>
              <option>Flat</option>
              <option>Independent House</option>
              <option>Shop / Office</option>
            </select>
          </div>

          <div className="form-row">
            <label>Number of Family Members</label>
            <input type="number" placeholder="Example: 4" />
          </div>

          <div className="form-row">
            <label>Main Electricity Use</label>
            <select>
              <option value="">Select main use</option>
              <option>Fans & Lights</option>
              <option>AC</option>
              <option>Refrigerator</option>
              <option>All Appliances</option>
            </select>
          </div>

          <div className="form-row">
            <label>Average Daily Usage (Hours)</label>
            <input type="number" placeholder="Example: 6 hours" />
          </div>

          <div className="form-row">
            <label>Month</label>
            <select>
              <option value="">Select month</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
            </select>
          </div>

          <div className="form-row">
            <label>Last Month Meter Reading</label>
            <input
              type="number"
              placeholder="Example: 250"
              value={oldReading}
              onChange={(e) => setOldReading(e.target.value)}
            />
          </div>

          <div className="form-row">
            <label>This Month Meter Reading</label>
            <input
              type="number"
              placeholder="Example: 320"
              value={newReading}
              onChange={(e) => setNewReading(e.target.value)}
            />
          </div>

          {/* Result Section */}
          <div className="result-box">
            <p><strong>Total Units Used:</strong> {unitsUsed}</p>
            <p><strong>Estimated Bill Amount:</strong> ₹{billAmount}</p>
            <p><strong>Electricity Impact:</strong> {impact}</p>
          </div>

         

          <button type="submit" className="submit-btn">
            Save Details
          </button>
              
        </form>
      </div>
    </div>
  );
}

export default ElectricityForm;