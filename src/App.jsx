import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import WhyRezzivion from "./pages/WhyRezzivion.jsx";
import HowWeWork from "./pages/HowWeWork.jsx";
import Contact from "./pages/Contact.jsx";

// Service Pages
import LegalProcessManagement from "./pages/services/LegalProcessManagement.jsx";
import FinanceAccounting from "./pages/services/FinanceAccounting.jsx";
import DataAIEnablement from "./pages/services/DataAIEnablement.jsx";
import BFSI from "./pages/services/BFSI.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/why-rezzivion" element={<WhyRezzivion />} />
          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/contact" element={<Contact />} />

          {/* Individual Service Pages */}
          <Route
            path="/services/legal-process-management"
            element={<LegalProcessManagement />}
          />

          <Route
            path="/services/finance-accounting"
            element={<FinanceAccounting />}
          />

          <Route
            path="/services/data-ai-enablement"
            element={<DataAIEnablement />}
          />

          <Route
            path="/services/bfsi"
            element={<BFSI />}
          />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;