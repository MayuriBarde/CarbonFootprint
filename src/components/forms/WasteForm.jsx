import React from "react";
import "./Forms.css";

function WasteForm() {
  return (
    <div className="container form-container">
      <div className="form-card">
        <h2 className="form-title">Waste Management Form</h2>

        <form className="waste-form">
          
          <div className="form-row">
            <label>Address</label>
            <textarea placeholder="Enter complete address"></textarea>
          </div>

          <div className="form-row">
            <label>Type of Waste</label>
            <select>
              <option value="">Select waste type</option>
              <option>Dry Waste</option>
              <option>Wet Waste</option>
              <option>Electronic Waste</option>
              <option>Biomedical Waste</option>
            </select>
          </div>

          <div className="form-row">
            <label>Quantity (Approx.)</label>
            <input type="text" placeholder="e.g. 5 kg" />
          </div>

          <div className="form-row">
            <label>Pickup Date</label>
            <input type="date" />
          </div>

         
          <button type="submit" className="submit-btn">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}

export default WasteForm;