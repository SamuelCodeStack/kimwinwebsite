import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Custom Box Manufacturing",
      desc: "Tailor-made corrugated and rigid boxes designed to fit your product's exact dimensions. We ensure structural integrity and premium material selection for every build.",
      image:
        "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Premium Branding & Print",
      desc: "High-definition offset and digital printing to make your brand stand out on every shelf. Our precision printing technology captures every detail of your corporate identity.",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Eco-Friendly Solutions",
      desc: "Sustainable, 100% recyclable materials that reduce environmental impact without compromising on strength. We turn sustainability into a successful business solution.",
      image:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800",
    },
  ];

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
        {/* Header Section */}
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-red-500 font-bold uppercase tracking-[0.3em] text-sm mb-4"
          >
            Expertise in Motion
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-black text-blue-900 dark:text-white uppercase leading-tight"
          >
            OUR PROFESSIONAL <span className="text-red-500">SERVICES</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-2 bg-blue-600 mx-auto mt-8 rounded-full"
          ></motion.div>
        </div>

        {/* Alternating Services List */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Side */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={smoothSpring}
                className="flex-1 space-y-6"
              >
                <h3 className="text-3xl md:text-4xl font-black text-blue-900 dark:text-white uppercase">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed text-justify">
                  {service.desc}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-900 dark:bg-red-600 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest hover:shadow-2xl hover:shadow-red-500/20 transition-all"
                >
                  Learn More
                </motion.button>
              </motion.div>

              {/* Image Side */}
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
                {/* Decorative Background Frame */}
                <div className="absolute -inset-4 bg-gray-100 dark:bg-slate-900 rounded-[2.5rem] -rotate-2 -z-10 transition-transform group-hover:rotate-0 duration-500"></div>
                <div className="absolute -inset-4 border-2 border-red-500/10 rounded-[2.5rem] rotate-3 -z-10"></div>

                <div className="relative overflow-hidden rounded-[2rem] shadow-2xl aspect-video lg:aspect-square">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.8 }}
                    src={service.image}
                    className="w-full h-full object-cover"
                    alt={service.title}
                  />
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
