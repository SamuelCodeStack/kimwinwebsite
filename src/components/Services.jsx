import { motion } from "framer-motion";
import { Package, Printer, Recycle } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Custom Box Manufacturing",
      desc: "Tailor-made corrugated and rigid boxes designed to fit your product's exact dimensions.",
      icon: <Package className="text-red-600" size={32} />,
      image:
        "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Premium Branding & Print",
      desc: "High-definition offset and digital printing to make your brand stand out on every shelf.",
      icon: <Printer className="text-red-600" size={32} />,
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Eco-Friendly Solutions",
      desc: "Sustainable, 100% recyclable materials that reduce environmental impact.",
      icon: <Recycle className="text-red-600" size={32} />,
      image:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800",
    },
  ];

  // 1. Define a global "Spring" transition for consistent smoothness
  const smoothSpring = {
    type: "spring",
    stiffness: 100,
    damping: 20,
    mass: 1,
  };

  return (
    <section
      id="services"
      className="py-24 bg-white dark:bg-slate-950 transition-colors overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header Animation */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-red-500 font-bold uppercase tracking-[0.2em] text-sm mb-4"
          >
            Expertise in Motion
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
            className="text-4xl md:text-6xl font-black text-blue-900 dark:text-white uppercase"
          >
            OUR PROFESSIONAL <span className="text-red-500">SERVICES</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            className="h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"
          ></motion.div>
        </div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Animation: Slide + Fade with Spring */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }} // Triggers slightly before reaching the element
                transition={smoothSpring}
                className="flex-1 space-y-6"
              >
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className="inline-block p-4 rounded-2xl bg-red-50 dark:bg-red-900/10 text-red-600 transition-colors"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-3xl font-black text-blue-900 dark:text-white uppercase">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
                  {service.desc}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-900 dark:bg-red-600 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest hover:shadow-xl hover:shadow-red-500/20 transition-all flex items-center gap-2"
                >
                  View Details
                </motion.button>
              </motion.div>

              {/* Image Animation: Zoom + Float effect */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  x: index % 2 === 0 ? 50 : -50,
                }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ ...smoothSpring, delay: 0.1 }}
                className="flex-1 w-full relative group"
              >
                {/* Background Shadow/Decoration with floating motion */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -inset-4 bg-red-500/10 rounded-[2rem] rotate-3"
                ></motion.div>

                <div className="relative overflow-hidden rounded-[2rem] shadow-2xl aspect-video lg:aspect-square">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.8, ease: "anticipate" }}
                    src={service.image}
                    className="w-full h-full object-cover"
                    alt={service.title}
                  />
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-blue-950/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
