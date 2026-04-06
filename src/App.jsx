import { HashRouter as Router, Routes, Route } from "react-router-dom";
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
    /* Using HashRouter instead of BrowserRouter to fix 404 on refresh */
    <Router>
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

          {/* Catch-all for 404s */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
