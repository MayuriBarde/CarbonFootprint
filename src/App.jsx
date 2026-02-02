import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import LoginModal from "./pages/LoginModal";
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
        <Route path="/loginModal" element={<LoginModal />} />
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
