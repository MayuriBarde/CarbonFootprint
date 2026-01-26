import EmissionChart from "../components/charts/EmissionChart";
import './Dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard-container container">

      {/* Page Header */}
      <div className="dashboard-header mb-5">
          <h1>Carbon Emission Dashboard</h1>
        <div className="header-accent">
          <p>
            A complete overview of your carbon footprint, emission sources,
            and opportunities to reduce environmental impact.
          </p>
        </div>
      </div>
      {/* Sample Data Notice */}
      <div className="sample-data-note mb-4">
        <span>Note:</span> The data displayed below is sample data for demonstration purposes only.
      </div>

      {/* Summary Cards */}
      <div className="row mb-5">
        <div className="col-md-3">
          <div className="summary-card">
            <h6>Total Emissions</h6>
            <h4>2.4 Tons</h4>
            <span>CO₂ / Year</span>
          </div>
        </div>

        <div className="col-md-3">
          <div className="summary-card">
            <h6>Highest Source</h6>
            <h4>Transport</h4>
            <span>45% Contribution</span>
          </div>
        </div>

        <div className="col-md-3">
          <div className="summary-card">
            <h6>Monthly Average</h6>
            <h4>200 kg</h4>
            <span>CO₂</span>
          </div>
        </div>

        <div className="col-md-3">
          <div className="summary-card ">
            <h6>Reduction Potential</h6>
            <h4>18%</h4>
            <span>With lifestyle changes</span>
          </div>
        </div>
      </div>

      {/* Split Section */}
      <div className="row mb-5">
        <div className="col-md-6">
          <div className="dashboard-box">
            <h4>Emission Distribution</h4>
            <EmissionChart />
          </div>
        </div>

        <div className="col-md-6">
          <div className="dashboard-box">
            <h4>Category Breakdown</h4>
            <ul className="list-group">
              <li className="list-group-item">
                Transportation <span>1.1 Tons CO₂</span>
              </li>
              <li className="list-group-item">
                Electricity <span>0.7 Tons CO₂</span>
              </li>
              <li className="list-group-item">
                Food <span>0.4 Tons CO₂</span>
              </li>
              <li className="list-group-item">
                Waste <span>0.2 Tons CO₂</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="comparison-box mb-5">
        <h4>How You Compare</h4>
        <p>
          Your annual emissions are slightly above the national average.
          Reducing private transport usage and energy consumption can help
          bring your footprint below average levels.
        </p>
      </div>

      {/* Recommendations */}
      <div className="recommendations-section">
        <h4>Recommended Actions</h4>

        <div className="row">
          <div className="col-md-4">
            <div className="action-card">
              <h6>Use Public Transport</h6>
              <p>
                Switching from private vehicles can reduce transport emissions
                by up to 30%.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="action-card">
              <h6>Optimize Electricity Usage</h6>
              <p>
                Energy-efficient appliances and mindful usage lower household
                emissions significantly.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="action-card">
              <h6>Sustainable Diet</h6>
              <p>
                Reducing food waste and choosing plant-based options can help
                reduce your food-related footprint.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;
