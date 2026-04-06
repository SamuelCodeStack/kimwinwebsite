import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import KCLogo from "../assets/kc-logo.png";

// Import your product images
import DisposableUtensils from "../assets/disposable utensils.png";
import PaperBag from "../assets/paperbag.png";
import PaperCup from "../assets/papercup.png";
import PlasticStraw from "../assets/plasticstraw.png";
import PlasticBag from "../assets/plasticbag.png";

export default function Gallery() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      name: "Paper Bag",
      img: PaperBag,
      tag: "RECYCLABLE",
      desc: "Customizable high-strength paper bags designed for heavy industrial use and premium retail branding. 100% biodegradable and reinforced for maximum load capacity.",
    },
    {
      name: "Paper Cup",
      img: PaperCup,
      tag: "INSULATED",
      desc: "Advanced double-wall insulation technology keeps beverages at the target temperature while providing a comfortable grip. Available in various industrial-grade coatings.",
    },
    {
      name: "Disposable Utensils",
      img: DisposableUtensils,
      tag: "ECO-FRIENDLY",
      desc: "High-quality, durable utensils engineered for commercial food service. Our manufacturing process ensures heat resistance and structural integrity for diverse catering needs.",
    },
    {
      name: "Plastic Straw",
      img: PlasticStraw,
      tag: "INDUSTRIAL USE",
      desc: "Precision-extruded plastic straws designed for flexibility and impact resistance. We offer a full range of diameters and lengths to suit specific packaging requirements.",
    },
    {
      name: "Plastic Bag",
      img: PlasticBag,
      tag: "INDUSTRIAL USE",
      desc: "High-durability industrial plastic bags engineered for superior tear resistance and load-bearing strength. Fully customizable in size and thickness to meet your specific packaging requirements.",
    },
  ];

  const smoothSpring = {
    type: "spring",
    stiffness: 300,
    damping: 30,
    mass: 0.8,
  };

  // Container to handle the timing of children appearing
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors">
      {/* --- COMPACT HERO BANNER --- */}
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
            Quality Assured
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white uppercase"
          >
            OUR <span className="text-red-500">EXCELLENCE</span>
          </motion.h1>
        </div>
      </section>

      {/* --- ALTERNATING ENTRY GALLERY --- */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <motion.div
          className="flex flex-col gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {products.map((product, i) => {
            const isSelected = selectedProduct === i;
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={i}
                // --- ALTERNATING ENTRY ANIMATION ---
                variants={{
                  hidden: { opacity: 0, x: isEven ? -100 : 100 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={smoothSpring}
                layout
                onClick={() => setSelectedProduct(isSelected ? null : i)}
                className={`cursor-pointer overflow-hidden rounded-[3rem] bg-gray-50 dark:bg-slate-900 shadow-2xl relative flex flex-col items-center min-h-[400px] border-4 
                  ${isEven ? "md:flex-row" : "md:flex-row-reverse"}
                  ${isSelected ? "border-red-600" : "border-transparent hover:border-red-500/50"}`}
                whileHover={!isSelected ? { y: -5 } : {}}
              >
                {/* Image Container */}
                <motion.div
                  layout
                  transition={smoothSpring}
                  className={`overflow-hidden bg-white dark:bg-slate-800 flex-shrink-0 relative
                    ${isSelected ? "w-full md:w-1/2 aspect-square md:aspect-auto md:h-[500px]" : "w-full md:w-2/5 aspect-video md:aspect-auto md:h-[400px]"}`}
                >
                  <motion.img
                    layout
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-900/5 transition-colors" />
                </motion.div>

                {/* Text Container */}
                <motion.div
                  layout
                  transition={smoothSpring}
                  className={`p-10 md:p-14 text-left flex-grow flex flex-col justify-center
                    ${isSelected ? "md:w-1/2" : "md:w-3/5"}`}
                >
                  <motion.span
                    layout
                    className="text-xs font-black text-red-500 uppercase tracking-[0.2em] mb-3"
                  >
                    {product.tag}
                  </motion.span>
                  <motion.h3
                    layout
                    transition={smoothSpring}
                    className={`font-black text-blue-950 dark:text-white uppercase leading-tight mb-4
                      ${isSelected ? "text-3xl md:text-5xl" : "text-2xl md:text-4xl"}`}
                  >
                    {product.name}
                  </motion.h3>

                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.1 }}
                        className="space-y-6"
                      >
                        <p className="text-gray-600 dark:text-slate-400 leading-relaxed text-base md:text-lg max-w-md">
                          {product.desc}
                        </p>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-blue-900 dark:bg-red-600 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs shadow-lg"
                        >
                          View Specifications
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {!isSelected && (
                    <motion.p
                      layout
                      className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mt-4"
                    >
                      + Expand Details
                    </motion.p>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </div>
  );
}
