import { motion } from "framer-motion";
import { Package, Printer, Recycle } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Custom Box Manufacturing",
      desc: "Tailor-made corrugated and rigid boxes designed to fit your product's exact dimensions.",
      icon: <Package className="text-blue-600" size={32} />,
      image:
        "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Premium Branding & Print",
      desc: "High-definition offset and digital printing to make your brand stand out on every shelf.",
      icon: <Printer className="text-blue-600" size={32} />,
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Eco-Friendly Solutions",
      desc: "Sustainable, 100% recyclable materials that reduce environmental impact.",
      icon: <Recycle className="text-blue-600" size={32} />,
      image:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-white dark:bg-slate-950 transition-colors overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-bold uppercase tracking-[0.2em] text-sm mb-4"
          >
            Expertise in Motion
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-blue-900 dark:text-white uppercase"
          >
            OUR PROFESSIONAL <span className="text-blue-500">SERVICES</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }} // w-24
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1.5 bg-blue-500 mx-auto mt-6 rounded-full"
          ></motion.div>
        </div>

        {/* Alternating Service Rows */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Side: Slides in from the side based on index */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -70 : 70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-1 space-y-6"
              >
                <div className="inline-block p-4 rounded-2xl bg-blue-50 dark:bg-blue-900/10 text-blue-600">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-black text-blue-900 dark:text-white uppercase">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-500 dark:text-gray-400">
                  {service.desc}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-900 dark:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest hover:shadow-xl hover:shadow-blue-500/20 transition-all"
                >
                  View Details
                </motion.button>
              </motion.div>

              {/* Image Side: Slides in from the opposite side */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 70 : -70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-1 w-full relative group"
              >
                {/* Decorative Background Block with Motion */}
                <motion.div
                  initial={{ rotate: 0 }}
                  whileInView={{ rotate: 3 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="absolute -inset-4 bg-blue-500/10 rounded-[2rem]"
                ></motion.div>

                <div className="relative overflow-hidden rounded-[2rem] shadow-2xl aspect-video lg:aspect-square">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={service.image}
                    className="w-full h-full object-cover"
                    alt={service.title}
                  />
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
