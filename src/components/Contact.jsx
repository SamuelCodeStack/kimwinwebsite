import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import KCLogo from "../assets/kc-logo.png";

export default function Contact() {
  const mapUrl =
    "https://www.google.com/maps?q=14.703167,120.969083&hl=es;z=14&output=embed";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

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
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white uppercase"
          >
            CONTACT <span className="text-red-500">EXPERTS</span>
          </motion.h1>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 md:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Map Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full h-[400px] lg:h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800"
          >
            <iframe
              title="Kimwin Location"
              src={mapUrl}
              className="w-full h-full border-0 grayscale dark:invert-[0.9] hover:grayscale-0 transition-all duration-700"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>

          {/* Info & Form Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <MapPin />,
                  title: "Office Address",
                  detail: "1F. De Zafra St. Barangay Maysan, Valenzuela City",
                },
                {
                  icon: <Phone />,
                  title: "Support Line",
                  detail: "(02) 8277-0030 / 8277-0036",
                },
                {
                  icon: <Mail />,
                  title: "Email Us",
                  detail: "kimwinsales@gmail.com",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className={`bg-gray-50 dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-800 hover:border-red-500 transition-colors ${i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}`}
                >
                  <div className="text-red-600 mb-3">{card.icon}</div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    {card.title}
                  </p>
                  <p className="text-sm font-semibold text-blue-900 dark:text-white">
                    {card.detail}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Form Section */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-50 dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-slate-800 grow"
            >
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-5 py-4 rounded-xl bg-white dark:bg-slate-800 border dark:border-slate-700 focus:ring-2 focus:ring-red-500 outline-none transition-all dark:text-white"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-5 py-4 rounded-xl bg-white dark:bg-slate-800 border dark:border-slate-700 focus:ring-2 focus:ring-red-500 outline-none transition-all dark:text-white"
                  />
                </div>
                <textarea
                  rows="4"
                  placeholder="Tell us about your project..."
                  className="w-full px-5 py-4 rounded-xl bg-white dark:bg-slate-800 border dark:border-slate-700 focus:ring-2 focus:ring-red-500 outline-none transition-all resize-none dark:text-white"
                ></textarea>

                {/* --- DYNAMIC THEME BUTTON --- */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-500 group shadow-lg
                    /* LIGHT MODE: Blue bg, Red text hover */
                    bg-blue-900 text-white hover:shadow-red-500/20
                    /* DARK MODE: Red bg, Blue text hover */
                    dark:bg-red-600 dark:text-white dark:hover:bg-red-700 dark:hover:shadow-blue-500/40"
                >
                  <span className="group-hover:text-red-500 dark:group-hover:text-blue-200 transition-colors">
                    Send Message
                  </span>
                  <Send
                    size={20}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-red-500 dark:group-hover:text-blue-200 transition-all"
                  />
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
