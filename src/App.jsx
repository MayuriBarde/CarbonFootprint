import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import History from "./pages/History";
import Learn from "./pages/Learn";
import Dashboard from "./pages/Dashboard";
import Calculator from "./pages/Calculator";
import Reports from "./pages/Reports";
import Footer from "./components/common/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/history" element={<History />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
      < Footer />
    </BrowserRouter>
  );
}

export default App;
