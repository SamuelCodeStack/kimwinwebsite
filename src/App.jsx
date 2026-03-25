import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      {/* Reset scroll position on every navigation */}
      <ScrollToTop />

      <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
              </>
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />

        {/* Floating action button */}
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
