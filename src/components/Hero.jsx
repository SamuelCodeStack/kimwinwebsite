import { motion } from "framer-motion";
import WarehouseImg from "../assets/Kimwinwarehouse.png";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[550px] lg:min-h-[750px] bg-slate-900 flex items-center">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          src={WarehouseImg}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Kimwin Warehouse"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-black text-white uppercase leading-tight max-w-3xl"
          >
            Custom Packaging <span className="text-red-500">Solutions</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-xl mt-6 max-w-xl leading-relaxed"
          >
            Premium, tailored packaging designed for impact and durability.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 text-white px-10 py-5 rounded-lg font-black uppercase tracking-wider shadow-lg shadow-red-500/20"
            >
              Start Your Project
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/30 text-white px-10 py-5 rounded-lg font-black uppercase tracking-wider backdrop-blur-sm"
            >
              View Catalog
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
