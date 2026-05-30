import { motion } from "framer-motion";
import KCGraphicArtist from "../assets/KimwinGraphicArtist.png";
import KCCustomerService from "../assets/KimwinCustomerService.png";
import KCCustomPackaging from "../assets/KimwinCustomPackging.png";

export default function Services() {
  const services = [
    {
      title: "Custom Box Manufacturing",
      desc: "Tailor-made corrugated and rigid boxes designed to fit your product's exact dimensions. We ensure structural integrity and premium material selection for every build.",
      image: KCCustomPackaging,
    },
    {
      title: "Premium Branding & Print",
      desc: "High-definition offset and digital printing to make your brand stand out on every shelf. Our precision printing technology captures every detail of your corporate identity.",
      image: KCGraphicArtist,
    },
    {
      title: "Customer Service",
      desc: "Our dedicated support team ensures seamless communication and project management from concept to delivery. We prioritize your deadlines and specific requirements with expert care.",
      image: KCCustomerService,
    },
  ];

  const smoothSpring = {
    type: "spring",
    stiffness: 70,
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
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Side - Reduced width for larger images */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={smoothSpring}
                className="w-full lg:w-2/5 space-y-6"
              >
                <h3 className="text-3xl md:text-5xl font-black text-blue-900 dark:text-white uppercase leading-tight">
                  {service.title}
                </h3>
                <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 leading-relaxed text-justify">
                  {service.desc}
                </p>
              </motion.div>

              {/* Image Side - Increased width */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  x: index % 2 === 0 ? 50 : -50,
                }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ ...smoothSpring, delay: 0.1 }}
                className="w-full lg:w-3/5 relative group"
              >
                {/* Decorative Background Frames */}
                <div className="absolute -inset-4 bg-gray-100 dark:bg-slate-900 rounded-[2.5rem] -rotate-1 z-0 transition-transform group-hover:rotate-0 duration-500"></div>
                <div className="absolute -inset-4 border-2 border-red-500/10 rounded-[2.5rem] rotate-2 z-0"></div>

                <div className="relative z-10 overflow-hidden rounded-[2rem] shadow-2xl aspect-[16/10]">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
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
