import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-black text-blue-950 dark:text-white"
        >
          OUR EXCELLENCE
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[1, 2, 3, 4, 5, 6].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="overflow-hidden rounded-2xl bg-white dark:bg-slate-800"
            >
              <div className="aspect-square bg-gray-200 dark:bg-slate-700" />
              <div className="p-4 font-bold dark:text-white">
                Product {item}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
