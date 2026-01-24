import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h3>CarbonTrack</h3>
      <div>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/reports">Reports</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
}

export default Navbar;
