import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import RussiaMarket from "./pages/RussiaMarket";
import WhyRussiaDetail from "./pages/WhyRussiaDetail";
import OperationModel from "./pages/OperationModel";
import ForWhom from "./pages/ForWhom";

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hakkimizda" element={<About />} />
            <Route path="/rusya-pazari" element={<RussiaMarket />} />
            <Route path="/neden-rusya-detay" element={<WhyRussiaDetail />} />
            <Route path="/hizmetler" element={<Services />} />
            <Route path="/operasyon-modeli" element={<OperationModel />} />
            <Route path="/kimler-icin" element={<ForWhom />} />
            <Route path="/iletisim" element={<Contact />} />
            
            {/* Catch-all redirect to clear demo links like /about/ or /contact/ indexing */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
