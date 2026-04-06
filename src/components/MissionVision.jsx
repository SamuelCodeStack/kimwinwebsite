import { motion } from "framer-motion";

export default function MissionVision() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* --- MISSION CARD --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-12 md:p-16 rounded-[3rem] bg-gray-50 dark:bg-slate-900 border-4 border-transparent hover:border-red-600 transition-all duration-500 shadow-xl"
          >
            <h2 className="text-4xl md:text-5xl font-black text-blue-950 dark:text-white uppercase leading-tight mb-8 tracking-tighter">
              OUR <span className="text-red-600">MISSION</span>
            </h2>
            <p className="text-gray-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed font-medium">
              To provide sustainable and customized packaging solutions that
              empower brands. We are driven to meet the satisfying requirements
              of our clients through precision manufacturing, affordable
              quality, and a commitment to "Circle the Customer" with
              responsive, future-ready services.
            </p>
          </motion.div>

          {/* --- VISION CARD --- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-12 md:p-16 rounded-[3rem] bg-blue-950 text-white border-4 border-transparent hover:border-red-600 transition-all duration-500 shadow-xl"
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-8 tracking-tighter">
              OUR <span className="text-red-600">VISION</span>
            </h2>
            <p className="text-blue-100/80 text-lg md:text-xl leading-relaxed font-medium">
              To become a premier global force in the plastic and packaging
              industry. Our vision is to "Circle the Globe," expanding our reach
              to every corner of the international market while maintaining the
              local integrity and innovation that has defined Kimwin Corporation
              since 1983.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
