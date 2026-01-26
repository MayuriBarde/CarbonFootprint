import { useState } from "react";
import TransportForm from "../components/forms/TransportForm";
import ElectricityForm from "../components/forms/ElectricityForm";
import DietForm from "../components/forms/DietForm";
import WasteForm from "../components/forms/WasteForm";
import './Calculator.css'

function Calculator() {
  const [total, setTotal] = useState(0);

  const calculate = () => {
    setTotal(2450);
  };

  return (
    <div className="container calculator-container">
      <h2>Carbon Footprint Calculator</h2>

      <TransportForm />
      <ElectricityForm />
      <DietForm />
      <WasteForm />

      <div className="button-container">
        <button onClick={calculate} className="btn  calculate-btn">Calculate</button>
      </div>

      {total > 0 && <h3>Total Emission: {total} kg CO₂</h3>}
    </div>
  );
}

export default Calculator;
