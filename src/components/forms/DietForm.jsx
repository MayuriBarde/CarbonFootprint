import React from "react";
import "./Forms.css";

function DietForm() {
  return (
    <div className="container form-container">
      <div className="form-card" id="diet">
        <h2 className="form-title">Diet Form</h2>

        <form className="diet-form">
         
           
          <div className="form-row">
            <label>Age</label>
            <input type="number" placeholder="Enter your age" />
          </div>

          <div className="form-row">
            <label>Gender</label>
            <select>
              <option value="">Select gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-row">
            <label>Height (cm)</label>
            <input type="number" placeholder="Enter height in cm" />
          </div>

          <div className="form-row">
            <label>Weight (kg)</label>
            <input type="number" placeholder="Enter weight in kg" />
          </div>

          <div className="form-row">
            <label>Diet Preference</label>
            <select>
              <option value="">Select preference</option>
              <option>Vegetarian</option>
              <option>Non-Vegetarian</option>
              <option>Vegan</option>
            </select>
          </div>

          <div className="form-row">
            <label>Health Goal</label>
            <select>
              <option value="">Select goal</option>
              <option>Weight Loss</option>
              <option>Weight Gain</option>
              <option>Maintain Fitness</option>
            </select>
          </div>

          
          <button type="submit" className="submit-btn">
            Submit Diet Plan
          </button>
        </form>
      </div>
    </div>
  );
}

export default DietForm;