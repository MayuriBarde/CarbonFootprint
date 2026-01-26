import EmissionChart from "../components/charts/EmissionChart";

function Dashboard() {
  return (
    <div className="dashboard-container container">
      <h2>Dashboard</h2>
      <h3>Total Emission: 2.4 Tons CO₂ / Year</h3>
      <EmissionChart />
    </div>
  );
}

export default Dashboard;
