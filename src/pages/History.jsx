import React, { useState, useEffect } from "react";
import './History.css'

const History = () => {
  // Sample data - replace with API / database fetch later
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Fetch user history from backend here
    // Example static data for now
    const sampleData = [
      { id: 1, date: "2026-01-20", activity: "Electricity usage", footprint: 12.5 },
      { id: 2, date: "2026-01-21", activity: "Car travel", footprint: 8.2 },
      { id: 3, date: "2026-01-22", activity: "Flights", footprint: 25.7 },
    ];
    setHistory(sampleData);
  }, []);

  return (
    <div className="history-container container">
      <h1>History of Calculations</h1>
      {history.length === 0 ? (
        <p>No history available yet. Start calculating your carbon footprint!</p>
      ) : (
        <table className="history-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Activity</th>
              <th>Carbon Footprint (kg CO₂e)</th>
            </tr>
          </thead>
          <tbody>
            {history.map((entry) => (
              <tr key={entry.id}>
                <td>{entry.date}</td>
                <td>{entry.activity}</td>
                <td>{entry.footprint}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default History;
