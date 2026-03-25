import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, AlertCircle } from "lucide-react";
import KCLogo from "../assets/kc-logo.png";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] bg-white dark:bg-slate-950 transition-colors flex flex-col">
      {/* --- HERO BANNER SECTION (Matches About/Services) --- */}
      <section className="relative py-24 bg-blue-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
          <img
            src={KCLogo}
            alt=""
            className="w-full h-full object-contain scale-110 brightness-0 invert"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-500 font-black uppercase text-sm mb-4 tracking-[0.3em]"
          >
            Error 404
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white uppercase"
          >
            PAGE <span className="text-red-500">NOT FOUND</span>
          </motion.h1>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="flex-grow flex items-center justify-center py-20 px-6">
        <div className="max-w-2xl w-full text-center space-y-8">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 mb-4"
          >
            <AlertCircle size={48} />
          </motion.div>

          <div className="space-y-4">
            <h2 className="text-3xl font-black text-blue-950 dark:text-white uppercase">
              Lost in Transit?
            </h2>
            <p className="text-gray-500 dark:text-slate-400 text-lg">
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable. Let's get your project
              back on track.
            </p>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
          >
            <Link to="/" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-900 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg shadow-blue-900/20"
              >
                <Home size={20} /> Back to Home
              </motion.button>
            </Link>

            <Link to="/contact" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full border-2 border-red-600 text-red-600 dark:text-red-500 px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all"
              >
                Contact Support
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
