import React from "react";
import "./Forms.css";

function TransportationForm() {
  return (
    <div className="container form-container">
      <div className="form-card" id="transport">

        <div className="form-header">
             <h2 className="form-title">Transport Form</h2>
        </div>

        <form className="transport-form">
         
          <div className="form-row">
            <label>From Location</label>
            <input type="text" placeholder="Pickup location" />
          </div>

          <div className="form-row">
            <label>To Location</label>
            <input type="text" placeholder="Drop location" />
          </div>

          <div className="form-row">
            <label>Vehicle Type</label>
            <select>
              <option value="">Select vehicle</option>
              <option>Bike</option>
              <option>Car</option>
              <option>Bus</option>
              <option>Truck</option>
            </select>
          </div>

          <div className="form-row">
            <label>Date of Travel</label>
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

export default TransportationForm;