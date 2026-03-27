import { motion } from "framer-motion";
import { Globe, ArrowRight, Heart, Zap, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import KCLogo from "../assets/kc-logo.png";

export default function AboutUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const values = [
    "Spirit",
    "Pride",
    "Determination",
    "Commitment",
    "Passion",
    "Integrity",
  ];

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors overflow-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative py-24 lg:py-32 bg-blue-900 flex items-center justify-center overflow-hidden">
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
            Established 1983
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-white uppercase"
          >
            OUR <span className="text-red-500">STORY</span>
          </motion.h1>
        </div>
      </section>

      {/* --- MAIN STORY SECTION --- */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Historical Narrative & Resources */}
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
              Our <span className="text-red-600">Evolution</span>
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="space-y-6 text-gray-600 dark:text-slate-400 text-lg leading-relaxed text-justify"
            >
              <p>
                Our company was founded in <strong>1983</strong> as a single
                proprietorship registered as{" "}
                <strong>Sherwell Enterprises</strong>. Over the years, we
                expanded our horizons and transitioned into a corporation,
                becoming <strong>Sherwell Manufacturing Corporation</strong>.
              </p>
              <p>
                By the third quarter of <strong>1995</strong>, a strategic
                change of corporate name was registered, officially presenting
                our company to the world as{" "}
                <span className="text-blue-900 dark:text-white font-bold">
                  KIMWIN CORPORATION
                </span>
                .
              </p>
              <p>
                KIMWIN CORPORATION is globally expanding its full range of
                products with a vision to supply the international market and
                become a major player in the plastic manufacturing industry. We
                have the experience and resources to satisfy practically every
                customer requirement. In today’s competitive markets, we turn
                sustainability into a successful business solution through our{" "}
                <strong>scrap pelletizer</strong> technology, providing premium
                quality at an affordable price.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side: THE PHOTO & Strategy Card */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-red-600/10 rounded-[3rem] rotate-3 -z-10"></div>
              <div className="absolute -inset-4 border-2 border-blue-600/20 rounded-[3rem] -rotate-2 -z-10"></div>

              <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl aspect-video lg:aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  alt="Kimwin Manufacturing Facility"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-center">
                  <p className="text-white font-bold italic">
                    "Solving challenges through innovation and global reach."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Strategy Spotlight Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-blue-900 text-white p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden group"
            >
              <Globe className="absolute -right-4 -bottom-4 text-white/10 w-32 h-32 group-hover:scale-110 transition-transform duration-700" />
              <h3 className="text-red-500 font-black uppercase tracking-widest text-sm mb-4">
                Our Strategy
              </h3>
              <h4 className="text-2xl font-black mb-4 uppercase">
                CIRCLE THE CUSTOMER{" "}
                <span className="text-red-500 italic">CIRCLE THE GLOBE</span>
              </h4>
              <p className="text-blue-100 leading-relaxed relative z-10">
                We solve customer challenges by adding new products, equipment,
                and services to meet broadening requirements with precision
                around the world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- VALUES & PHILOSOPHY SECTION --- */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-3xl font-black text-blue-950 dark:text-white uppercase flex items-center gap-3">
                <Heart className="text-red-600" /> Six Universal Values
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {values.map((val, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="py-4 px-4 bg-white dark:bg-slate-800 border-l-4 border-red-600 font-bold text-blue-900 dark:text-blue-100 uppercase text-xs tracking-widest shadow-sm rounded-r-xl"
                  >
                    {val}
                  </motion.div>
                ))}
              </div>
              <p className="text-gray-500 dark:text-slate-400 italic text-lg leading-relaxed">
                "These are much more than words; these values inspire the way we
                serve our customers who rely on true business success."
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-blue-950 p-10 rounded-[3rem] text-white relative overflow-hidden"
            >
              <Zap className="absolute -top-10 -right-10 text-white/5 w-48 h-48" />
              <h3 className="text-2xl font-black uppercase mb-6 leading-tight">
                Beyond Products:{" "}
                <span className="text-red-500">Anticipating Needs</span>
              </h3>
              <p className="text-blue-100/80 text-lg leading-relaxed mb-8">
                We don't only provide the best products and services; we listen,
                respond quickly to daily requirements, and anticipate future
                needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-red-500" />
                  <span className="font-bold uppercase tracking-widest text-xs">
                    Customer-Centric Listening
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-red-500" />
                  <span className="font-bold uppercase tracking-widest text-xs">
                    Rapid Daily Response
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 text-center">
        <h2 className="text-3xl font-black text-blue-950 dark:text-white uppercase mb-8">
          Ready to Elevate Your Branding?
        </h2>
        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-900 dark:bg-red-600 text-white px-12 py-5 rounded-full font-black uppercase tracking-widest flex items-center gap-3 mx-auto shadow-xl"
          >
            Contact Our Team <ArrowRight size={20} />
          </motion.button>
        </Link>
      </section>
    </div>
  );
}
