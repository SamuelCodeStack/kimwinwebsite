import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors">
        <Navbar />

        <Routes>
          {/* Home Route: Displays Hero + some previews */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
              </>
            }
          />

          {/* Individual Pages */}
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
