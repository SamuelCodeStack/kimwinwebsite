import { motion } from "framer-motion";
import {
  Package,
  ShieldCheck,
  Ruler,
  Truck,
  Printer,
  Recycle,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Custom Box Manufacturing",
      desc: "Tailor-made corrugated and rigid boxes designed to fit your product's exact dimensions and protection needs. We utilize high-grade materials to ensure structural integrity during shipping.",
      icon: <Package className="text-orange-500" size={32} />,
      image:
        "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Premium Branding & Print",
      desc: "High-definition offset and digital printing to make your brand stand out on every shelf. Our ink technology ensures vibrant colors that don't fade or smudge.",
      icon: <Printer className="text-orange-500" size={32} />,
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Eco-Friendly Solutions",
      desc: "Sustainable, 100% recyclable materials that reduce environmental impact without sacrificing strength. Join the green revolution with Kimwin's bio-degradable options.",
      icon: <Recycle className="text-orange-500" size={32} />,
      image:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-white dark:bg-slate-950 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-orange-500 font-bold uppercase tracking-[0.2em] text-sm mb-4"
          >
            Expertise in Motion
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-blue-950 dark:text-white uppercase leading-tight"
          >
            OUR PROFESSIONAL <span className="text-orange-500">SERVICES</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto mt-6 rounded-full"></div>
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
              {/* Left Side: Text Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex-1 space-y-6"
              >
                <div className="inline-block p-4 rounded-2xl bg-orange-50 dark:bg-orange-500/10 text-orange-500">
                  {service.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-blue-950 dark:text-white uppercase">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
                  {service.desc}
                </p>
                <div className="pt-4">
                  <button className="flex items-center gap-3 bg-blue-950 dark:bg-orange-500 text-white dark:text-slate-900 px-8 py-4 rounded-xl font-bold uppercase tracking-widest hover:opacity-90 transition-all">
                    View Details <span>→</span>
                  </button>
                </div>
              </motion.div>

              {/* Right Side: Image */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex-1 w-full"
              >
                <div className="relative group">
                  {/* Decorative Background Block */}
                  <div className="absolute -inset-4 bg-orange-500/10 dark:bg-orange-500/5 rounded-[2rem] rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>

                  {/* Main Image */}
                  <div className="relative overflow-hidden rounded-[2rem] shadow-2xl aspect-video lg:aspect-square">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-blue-950/20 group-hover:bg-transparent transition-colors"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
