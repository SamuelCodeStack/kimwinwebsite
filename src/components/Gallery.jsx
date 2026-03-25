import { motion } from "framer-motion";
import KCLogo from "../assets/kc-logo.png";

export default function Gallery() {
  return (
    <div className="bg-white dark:bg-slate-950 transition-colors">
      {/* --- HERO BANNER SECTION --- */}
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
            Quality Assured
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white uppercase"
          >
            OUR <span className="text-red-500">EXCELLENCE</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[1, 2, 3, 4, 5, 6].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10, borderColor: "#ef4444" }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl bg-white dark:bg-slate-800 border-2 border-transparent transition-all shadow-lg"
            >
              <div className="aspect-square bg-gray-200 dark:bg-slate-700" />
              <div className="p-4 font-bold dark:text-white">
                Product {item}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
