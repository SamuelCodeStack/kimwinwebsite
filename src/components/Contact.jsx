import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const mapUrl =
    "https://www.google.com/maps?q=14.703167,120.969083&hl=es;z=14&output=embed";

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
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
    <section
      id="contact"
      className="py-24 bg-white dark:bg-slate-950 transition-colors overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-blue-950 dark:text-white uppercase tracking-tight">
            Contact Our Experts
          </h2>
          {/* Change: Orange bar to Blue */}
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Side: Animated Map Container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="w-full h-[400px] lg:h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800"
          >
            <iframe
              title="Kimwin Valenzuela Location"
              src={mapUrl}
              className="w-full h-full border-0 grayscale dark:invert-[0.9] dark:hue-rotate-180 transition-all duration-700 hover:grayscale-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          {/* Right Side: Staggered Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1 */}
              <motion.div
                variants={itemVariants}
                className="bg-gray-50 dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-800 hover:border-blue-500 transition-colors group sm:col-span-2 lg:col-span-1"
              >
                {/* Change: Icon to Red */}
                <MapPin className="text-red-600 mb-3" size={24} />
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Office Address
                </p>
                <p className="text-sm font-semibold text-blue-900 dark:text-white">
                  1F. De Zafra St. Barangay Maysan, Valenzuela City
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                variants={itemVariants}
                className="bg-gray-50 dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-800 hover:border-blue-500 transition-colors group"
              >
                {/* Change: Icon to Red */}
                <Phone className="text-red-600 mb-3" size={24} />
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Support Line
                </p>
                <p className="text-sm font-semibold text-blue-900 dark:text-white">
                  (02) 8277-0030 / 8277-0036
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                variants={itemVariants}
                className="bg-gray-50 dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-800 hover:border-blue-500 transition-colors group"
              >
                {/* Change: Icon to Red */}
                <Mail className="text-red-600 mb-3" size={24} />
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Email Us
                </p>
                <p className="text-sm font-semibold text-blue-900 dark:text-white">
                  kimwinsales@gmail.com
                </p>
              </motion.div>
            </div>

            {/* Animated Form */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-50 dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-slate-800 grow"
            >
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-5 py-4 rounded-xl bg-white dark:bg-slate-800 border dark:border-slate-700 dark:text-white outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-5 py-4 rounded-xl bg-white dark:bg-slate-800 border dark:border-slate-700 dark:text-white outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                <textarea
                  rows="4"
                  placeholder="Tell us about your project..."
                  className="w-full px-5 py-4 rounded-xl bg-white dark:bg-slate-800 border dark:border-slate-700 dark:text-white outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                ></textarea>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-900 dark:bg-blue-600 text-white font-black uppercase py-5 rounded-xl flex items-center justify-center gap-3 hover:opacity-90 transition-all shadow-lg"
                >
                  Send Message <Send size={18} />
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
