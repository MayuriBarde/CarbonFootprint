import React, { useState } from "react";
import "./Forms.css";

function TransportationForm() {
  const [vehicleType, setVehicleType] = useState("");
  const [bikeType, setBikeType] = useState("");

  const [carFuel, setCarFuel] = useState("");
  const [carClass, setCarClass] = useState("");

  const [busFuel, setBusFuel] = useState("");
  const [busType, setBusType] = useState("");

  const [truckFuel, setTruckFuel] = useState("");
  const [truckType, setTruckType] = useState("");

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
            <select
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="">Select vehicle</option>
              <option value="Bike">Bike</option>
              <option value="Car">Car</option>
              <option value="Bus">Bus</option>
              <option value="Truck">Truck</option>
            </select>
          </div>

          {/* BIKE OPTIONS */}
          {vehicleType === "Bike" && (
            <div className="form-row">
              <label>Bike Type</label>
              <select
                value={bikeType}
                onChange={(e) => setBikeType(e.target.value)}
              >
                <option value="">Select bike type</option>
                <option value="0.08">Normal / Commuter</option>
                <option value="0.10">Standard</option>
                <option value="0.14">Sports / Racer</option>
                <option value="0.18">Super Bike</option>
              </select>
            </div>
          )}

          {/* CAR OPTIONS */}
          {vehicleType === "Car" && (
            <>
              <div className="form-row">
                <label>Fuel Type</label>
                <select
                  value={carFuel}
                  onChange={(e) => setCarFuel(e.target.value)}
                >
                  <option value="">Select fuel type</option>
                  <option value="petrol">Petrol</option>
                  <option value="diesel">Diesel</option>
                  <option value="cng">CNG</option>
                  <option value="electric">Electric</option>
                </select>
              </div>

              {carFuel && (
                <div className="form-row">
                  <label>Car Class</label>
                  <select
                    value={carClass}
                    onChange={(e) => setCarClass(e.target.value)}
                  >
                    <option value="">Select car class</option>

                    {carFuel === "petrol" && (
                      <>
                        <option value="0.17">Hatchback</option>
                        <option value="0.19">Sedan</option>
                        <option value="0.22">SUV</option>
                      </>
                    )}

                    {carFuel === "diesel" && (
                      <>
                        <option value="0.15">Hatchback</option>
                        <option value="0.17">Sedan</option>
                        <option value="0.20">SUV</option>
                      </>
                    )}

                    {carFuel === "cng" && (
                      <>
                        <option value="0.13">Hatchback</option>
                        <option value="0.15">Sedan</option>
                        <option value="0.18">SUV</option>
                      </>
                    )}

                    {carFuel === "electric" && (
                      <>
                        <option value="0.03">Hatchback (EV)</option>
                        <option value="0.04">Sedan (EV)</option>
                        <option value="0.05">SUV (EV)</option>
                      </>
                    )}
                  </select>
                </div>
              )}
            </>
          )}

          {/* BUS OPTIONS */}
          {vehicleType === "Bus" && (
            <>
              <div className="form-row">
                <label>Fuel Type</label>
                <select
                  value={busFuel}
                  onChange={(e) => setBusFuel(e.target.value)}
                >
                  <option value="">Select fuel type</option>
                  <option value="diesel">Diesel</option>
                  <option value="cng">CNG</option>
                  <option value="electric">Electric</option>
                </select>
              </div>

              {busFuel && (
                <div className="form-row">
                  <label>Bus Type</label>
                  <select
                    value={busType}
                    onChange={(e) => setBusType(e.target.value)}
                  >
                    <option value="">Select bus type</option>

                    {busFuel === "diesel" && (
                      <>
                        <option value="0.80">Mini Bus</option>
                        <option value="1.00">City Bus</option>
                        <option value="1.30">AC Bus</option>
                      </>
                    )}

                    {busFuel === "cng" && (
                      <>
                        <option value="0.60">Mini Bus</option>
                        <option value="0.75">City Bus</option>
                        <option value="1.00">AC Bus</option>
                      </>
                    )}

                    {busFuel === "electric" && (
                      <option value="0.25">Electric Bus</option>
                    )}
                  </select>
                </div>
              )}
            </>
          )}

          {/* 🚚 TRUCK OPTIONS */}
          {vehicleType === "Truck" && (
            <>
              <div className="form-row">
                <label>Fuel Type</label>
                <select
                  value={truckFuel}
                  onChange={(e) => setTruckFuel(e.target.value)}
                >
                  <option value="">Select fuel type</option>
                  <option value="diesel">Diesel</option>
                  <option value="cng">CNG</option>
                  <option value="electric">Electric</option>
                </select>
              </div>

              {truckFuel && (
                <div className="form-row">
                  <label>Truck Type</label>
                  <select
                    value={truckType}
                    onChange={(e) => setTruckType(e.target.value)}
                  >
                    <option value="">Select truck type</option>

                    {truckFuel === "diesel" && (
                      <>
                        <option value="0.60">Light Truck (LCV)</option>
                        <option value="1.20">Medium Truck</option>
                        <option value="1.80">Heavy Truck</option>
                        <option value="2.50">Trailer / Multi-axle</option>
                      </>
                    )}

                    {truckFuel === "cng" && (
                      <>
                        <option value="0.45">Light Truck (CNG)</option>
                        <option value="0.90">Medium Truck (CNG)</option>
                      </>
                    )}

                    {truckFuel === "electric" && (
                      <option value="0.30">Electric Truck</option>
                    )}
                  </select>
                </div>
              )}
            </>
          )}

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
