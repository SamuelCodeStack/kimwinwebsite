import { motion } from "framer-motion";
import { ShieldCheck, Target, Users, History, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Adjusted path assuming your logo is in src/assets/
import KCLogo from "../assets/kc-logo.png";

export default function AboutUs() {
  const stats = [
    {
      label: "Years Experience",
      value: "40+",
      icon: <History className="text-red-600" size={20} />,
    },
    {
      label: "Products Delivered",
      value: "10M+",
      icon: <ShieldCheck className="text-red-600" size={20} />,
    },
    {
      label: "Global Partners",
      value: "500+",
      icon: <Users className="text-red-600" size={20} />,
    },
    {
      label: "Success Rate",
      value: "99%",
      icon: <Target className="text-red-600" size={20} />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors overflow-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative py-24 lg:py-32 bg-blue-900 flex items-center justify-center overflow-hidden">
        {/* Background Watermark - Removed rotate-12 and adjusted scale */}
        <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
          <img
            src={KCLogo}
            alt=""
            className="w-full h-full object-contain scale-110 brightness-0 invert"
            /* Removed 'rotate-12' to make it perfectly horizontal */
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            className="text-red-500 font-black uppercase text-sm mb-4"
          >
            Established 1983
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-white uppercase leading-none"
          >
            OUR <span className="text-red-500">STORY</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-blue-100 mt-8 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            From a local workshop to a premier industrial force, Kimwin
            Corporation has redefined customized packaging for over four
            decades.
          </motion.p>
        </div>
      </section>

      {/* --- CORE CONTENT SECTION --- */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Story & Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-100 dark:border-blue-800">
              Legacy of Excellence
            </div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-black text-blue-950 dark:text-white uppercase leading-tight"
            >
              PRECISION DRIVEN <br />
              <span className="text-red-600 italic underline decoration-blue-600">
                PACKAGING
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-gray-600 dark:text-slate-400 text-lg leading-relaxed"
            >
              Based in the industrial heart of Valenzuela City, Kimwin
              Corporation specializes in high-durability corrugated boxes and
              premium branding solutions. We don't just build boxes; we build
              the first impression your customers ever receive.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border-2 border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-900/50 hover:border-red-500 transition-colors group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm group-hover:bg-red-500 group-hover:text-white transition-all">
                      {stat.icon}
                    </div>
                    <span className="text-3xl font-black text-blue-950 dark:text-white">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side: Imagery */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative Frames */}
            <div className="absolute -inset-4 bg-red-600/10 rounded-[3rem] rotate-3 -z-10"></div>
            <div className="absolute -inset-4 border-2 border-blue-600/20 rounded-[3rem] -rotate-2 -z-10"></div>

            <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl aspect-[4/5] lg:aspect-square">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                alt="Kimwin Logistics Hub"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 to-transparent"></div>

              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <p className="text-white font-bold italic">
                  "Packaging is the silent ambassador of your brand."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-blue-950 dark:text-white uppercase mb-8">
            Ready to Elevate Your Branding?
          </h2>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-900 dark:bg-red-600 text-white px-12 py-5 rounded-full font-black uppercase tracking-widest flex items-center gap-3 mx-auto shadow-xl transition-colors"
            >
              Contact Our Team <ArrowRight size={20} />
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}
