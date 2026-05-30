import { motion } from "framer-motion";
import { ArrowRight, Heart, Zap, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import KCFactory from "../assets/KimwinFactory.png";
import KCPlasticD from "../assets/KimwinFacroty2.png";

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
      {/* --- COMPANY OVERVIEW: ASYMMETRIC OVERLAP LAYOUT --- */}
      <section className="relative py-24 lg:py-40 bg-slate-950 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-l from-blue-950/0 to-slate-950 z-10" />
          <img
            src={KCFactory}
            alt="Manufacturing Facility"
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <div className="flex flex-col lg:flex-row items-end gap-12">
            {/* LEFT SIDE: Typography & Branding */}
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[2px] w-12 bg-red-600" />
                  <span className="text-red-600 font-black uppercase tracking-[0.4em] text-xs">
                    Since 1983
                  </span>
                </div>

                <h2 className="text-7xl md:text-8xl lg:text-[120px] font-black text-white leading-[0.8] tracking-tighter uppercase mb-12">
                  THE <br />
                  <span
                    className="text-transparent stroke-white stroke-2 italic"
                    style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}
                  >
                    COMPANY
                  </span>{" "}
                  <br />
                  <span className="text-red-600">OVERVIEW</span>
                </h2>

                <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-12">
                  <div>
                    <p className="text-white font-bold text-3xl tracking-tighter">
                      40+
                    </p>
                    <p className="text-slate-500 uppercase text-[10px] tracking-widest font-bold">
                      Years Experience
                    </p>
                  </div>
                  <div>
                    <p className="text-white font-bold text-3xl tracking-tighter">
                      GLOBAL
                    </p>
                    <p className="text-slate-500 uppercase text-[10px] tracking-widest font-bold">
                      Market Presence
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT SIDE: Floating Glass Narrative Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-5/12 bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl"
            >
              <div className="space-y-8 text-blue-50/90 text-lg leading-relaxed font-light">
                {/* Text remains exactly as provided */}
                <p>
                  Our Company was founded in{" "}
                  <span className="text-white font-bold">1983</span> as a single
                  Proprietorship registered as
                  <span className="text-red-500 font-bold ml-1">
                    Sherwel Enterprises
                  </span>
                  . Over the years, we expanded our horizons and our company was
                  lengthened to a corporation and became
                  <span className="text-white font-medium italic">
                    {" "}
                    Sherwel Manufacturing Corporation
                  </span>
                  .
                </p>

                <p className="relative">
                  <span className="absolute -left-6 top-0 bottom-0 w-[1px] bg-red-600/50" />
                  From there, a change of corporate name has been decided and
                  was registered by the third quarter of{" "}
                  <span className="text-white font-bold">1995</span> and
                  presented our company as{" "}
                  <span className="text-red-600 font-black tracking-wider uppercase">
                    Kimwin Corporation
                  </span>
                  .
                </p>

                <div className="pt-4">
                  <p className="text-blue-200/70 text-base leading-relaxed border-t border-white/5 pt-8">
                    KIMWIN CORPORATION is globally expanding the full range of
                    products which vision is to supply globally and to become a
                    major player in manufacturing of plastic industry. Driven to
                    meet the needs of its client that can cope to the satisfying
                    world of requirements of the customer.
                  </p>
                </div>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute top-0 right-0 p-4">
                <div className="w-8 h-8 border-t-2 border-r-2 border-red-600/50" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- MISSION & VISION: STRATEGIC FRAMEWORK LAYOUT --- */}
      <section className="py-32 bg-white dark:bg-slate-900 text-slate-900 dark:text-white overflow-hidden relative transition-colors duration-500">
        {/* Background Subtle Blueprint Grid */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-5 pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* LEFT COLUMN: The Large Floating Glass Panel & Metrics (Moved from Right) */}
            <div className="lg:col-span-7 space-y-8 lg:pr-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }} // Changed to slide from left
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 60, damping: 15 }}
                className="bg-slate-50/50 dark:bg-white/[0.03] backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-white/[0.08] shadow-2xl relative overflow-hidden"
              >
                {/* Subtle Lettering Watermarks */}
                <span className="absolute -bottom-10 -left-6 text-[18rem] font-black text-slate-900/[0.02] dark:text-white/[0.01] select-none pointer-events-none">
                  MV
                </span>

                <div className="space-y-10 relative z-10">
                  {/* Section 1: Mission Block */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-red-600 dark:text-red-500">
                        //
                      </span>
                      <h3 className="text-xs font-black uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">
                        01. Corporate Mission
                      </h3>
                    </div>
                    <p className="text-lg md:text-xl text-slate-800 dark:text-slate-100 leading-relaxed font-medium">
                      <span className="text-red-600 dark:text-red-500 italic font-bold">
                        KIMWIN CORPORATION
                      </span>
                      , is dedicated to provide innovative, high-quality, and
                      cost-effective plastic and paper manufacturing solutions
                      to customers worldwide.
                    </p>
                  </div>

                  {/* Decorative Divider Line */}
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />

                  {/* Section 2: Vision Block */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-red-600 dark:text-red-500">
                        //
                      </span>
                      <h3 className="text-xs font-black uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">
                        02. Global Vision
                      </h3>
                    </div>
                    <p className="text-lg md:text-xl text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                      To be a global-class leader in the plastic and paper
                      manufacturing industry, recognized for quality,
                      innovation, and customer satisfaction.
                    </p>
                  </div>
                </div>

                {/* Bottom Card Tech Badges */}
                <div className="mt-10 pt-8 border-t border-slate-200 dark:border-white/[0.06] flex gap-6">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-red-600 dark:bg-red-500 rounded-full" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
                      Resource Ready
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-red-600 dark:bg-red-500 rounded-full" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
                      Global Service
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT COLUMN: The Bold Typographic Anchors (Moved from Left) */}

            <div className="lg:col-span-5 space-y-12 order-2 lg:order-1">
              {/* Header Tag */}
              <div className="inline-block border border-red-500/30 bg-red-50 dark:bg-red-950/20 px-4 py-1.5 rounded-sm">
                <span className="text-red-600 dark:text-red-500 font-black uppercase tracking-[0.3em] text-[10px]">
                  Strategic Framework
                </span>
              </div>

              {/* Massive Typography */}
              <h2 className="text-5xl md:text-7xl font-black leading-[0.95] uppercase tracking-tighter text-blue-950 dark:text-white">
                MISSION <br />
                <span className="text-red-600 dark:text-red-500 italic">
                  STATEMENT
                </span>{" "}
                <br />
                VISION <br />
                <span className="text-red-600 dark:text-red-500">FORWARD.</span>
              </h2>

              {/* Bottom Left: Operational Advantage Callout */}
              <div className="p-8 bg-slate-50 dark:bg-slate-950/60 rounded-2xl border-l-4 border-red-600 shadow-xl lg:shadow-none dark:shadow-2xl max-w-md border border-slate-200 dark:border-white/5">
                <span className="text-red-600 dark:text-red-500 font-black uppercase tracking-widest text-[11px] mb-2 block">
                  Operational Advantage
                </span>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Our advanced framework transforms manufacturing efficiency
                  into a viable business model, ensuring absolute precision at
                  an accessible scale worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STRATEGY & CAPABILITIES: INDUSTRIAL GRID --- */}
      <section className="relative py-24 lg:py-40 bg-slate-950 overflow-hidden">
        {/* Background Visual: Subtle Texture & Image */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src={KCPlasticD}
            className="w-full h-full object-cover grayscale"
            alt="Infrastructure"
          />
          <div className="absolute inset-0 bg-blue-950/80 mix-blend-multiply" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* RIGHT: Detailed Narrative (7 Columns) */}
            <div className="lg:col-span-7 relative">
              {/* Technical Grid Overlay Decoration */}
              <div className="absolute -top-12 -right-12 w-64 h-64 border border-white/5 grid grid-cols-4 grid-rows-4 opacity-20 hidden lg:grid">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="border-[0.5px] border-white/10" />
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 p-10 lg:p-16 rounded-3xl relative z-20"
              >
                <div className="space-y-8">
                  <p className="text-blue-100/90 text-xl leading-relaxed italic font-light">
                    "A clearly defined strategy guides our company’s daily
                    action, called –{" "}
                    <span className="text-white font-bold not-italic">
                      Circle the Customer Circle the Globe
                    </span>
                    ."
                  </p>

                  <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                    <p>
                      It means adding new products, equipments, and services to
                      solve the broadening requirements of the customer
                      challenges and doing so around the world.
                    </p>
                    <p>
                      Our Company also has the experience and the resources to
                      satisfy practically every customer’s requirements. In
                      today’s competitive markets, it is important to provide
                      good quality in an affordable price.
                    </p>
                  </div>

                  <div className="pt-8 border-t border-white/10 flex flex-wrap gap-8">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
                      <span className="text-xs font-bold uppercase tracking-widest text-white">
                        Resource Ready
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
                      <span className="text-xs font-bold uppercase tracking-widest text-white">
                        Global Service
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            {/* LEFT: Branding & Headline (5 Columns) */}
            <div className="lg:col-span-5 space-y-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 border border-red-600/30 rounded-sm bg-red-600/5"
              >
                <span className="text-red-500 font-black uppercase tracking-[0.4em] text-[10px]">
                  Strategic Framework
                </span>
              </motion.div>

              <h2 className="text-6xl md:text-7xl font-black text-white leading-tight uppercase tracking-tighter">
                CIRCLE THE <br />
                <span className="text-red-600 italic">CUSTOMER</span> <br />
                CIRCLE THE <span className="text-red-600 italic">GLOBE.</span>
              </h2>

              {/* Unique Pelletizer Feature Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-blue-950/40 border-l-4 border-red-600 backdrop-blur-md rounded-r-xl"
              >
                <p className="text-xs font-bold text-red-500 uppercase tracking-widest mb-2">
                  Operational Advantage
                </p>
                <p className="text-blue-50 font-medium">
                  Our scrap pelletizer transforms efficiency into a viable
                  business model, ensuring quality at an affordable price.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- VALUES & MISSION: UNIFIED EDITORIAL LAYOUT --- */}
      <section className="py-40 bg-white dark:bg-slate-950 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center">
          {/* Header Section */}
          <div className="space-y-8 mb-24">
            <div className="flex justify-center items-center gap-4">
              <div className="h-px w-12 bg-red-600" />
              <span className="text-red-600 font-bold uppercase tracking-[0.6em] text-[10px]">
                Company Ethos
              </span>
              <div className="h-px w-12 bg-red-600" />
            </div>

            <h2 className="text-6xl md:text-8xl font-black text-blue-950 dark:text-white leading-none uppercase tracking-tighter">
              Our Culture <br />
              <span className="text-red-600 uppercase">Defined.</span>
            </h2>
          </div>

          {/* The Unified Values Stream */}
          <div className="space-y-16 relative">
            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-blue-900/80 dark:text-slate-300 leading-relaxed font-medium">
                Our company is proud to share this common culture, comprised of{" "}
                <span className="text-red-600 font-black">
                  six universal values:
                </span>
              </p>
            </div>

            {/* Values Display: Large, Spaced, and Centered */}
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 py-12 border-y-2 border-slate-100 dark:border-slate-900">
              {[
                "Spirit",
                "Pride",
                "Determination",
                "Commitment",
                "Passion",
                "Integrity",
              ].map((v) => (
                <div key={v} className="group flex items-center gap-4">
                  <span className="text-3xl md:text-5xl font-black text-blue-950 dark:text-white uppercase tracking-tighter transition-colors group-hover:text-red-600">
                    {v}
                  </span>
                  <div className="h-2 w-2 bg-red-600 rounded-full last:hidden" />
                </div>
              ))}
            </div>
          </div>

          {/* Secondary Narrative Section */}
          <div className="mt-24 grid md:grid-cols-2 gap-16 items-start text-left">
            <div className="space-y-6 md:border-r border-slate-100 dark:border-slate-800 md:pr-16">
              <h3 className="text-2xl font-black text-blue-950 dark:text-white uppercase tracking-tight">
                Best Product <br /> & Services
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-lg">
                We not only provide them BEST PRODUCT and SERVICES, but we
                listen to them, respond quickly to their daily requirements and
                anticipate future needs.
              </p>
            </div>

            <div className="space-y-8 flex flex-col justify-center h-full">
              <blockquote className="relative pl-8 border-l-4 border-red-600">
                <p className="text-xl text-blue-950 dark:text-slate-300 italic font-medium leading-relaxed">
                  "These are much more than words. These values inspire the way,
                  we serve our customers who rely on true business success."
                </p>
              </blockquote>
            </div>
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
