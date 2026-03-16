import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery"; // This is the middle section
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors">
      <Navbar />

      {/* 1. Top Section */}
      <Hero />

      {/* 2. Middle Section (Crucial to prevent overlap) */}
      <Gallery />

      {/* 3. Bottom Section */}
      <Footer />
    </div>
  );
}

export default App;
