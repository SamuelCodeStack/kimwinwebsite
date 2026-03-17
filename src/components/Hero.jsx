import { motion } from "framer-motion";
import { Package, Leaf, Printer, Factory } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[550px] lg:min-h-[650px] bg-slate-900 flex items-center">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-32 lg:pb-40"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-black text-white uppercase leading-tight max-w-2xl"
          >
            Custom Packaging <span className="text-orange-400">Solutions</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-lg mt-6 max-w-lg"
          >
            Premium, tailored packaging designed for impact and sustainability.
          </motion.p>
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-orange-500 text-white px-8 py-4 rounded font-black uppercase"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>

      {/* Cards with Hover Animation */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 -mt-20 relative z-20 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border-b-4 border-orange-400"
            >
              <Package className="text-orange-500 mb-4" />
              <h3 className="font-bold text-blue-900 dark:text-white">
                Custom Design
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
