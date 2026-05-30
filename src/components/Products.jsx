import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  ArrowRight,
  Package,
  Paperclip,
  Coffee,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Import Background & Static Assets
import KCPlasticD from "../assets/KimwinPlasticDepartment.png";
import OurWork from "../assets/OurWork.png";

// Import Alternating Product Catalog Images
// import PlasticUtensil from "../assets/Plastic_Utensil-removebg-preview.png";
// import PaperPlasticBag from "../assets/Paper_PlasticBag-removebg-preview.png";
// import PlasticCup from "../assets/Paper_PlasticCup-removebg-preview.png";
// import PaperPlateStraw from "../assets/PaperPlateStraw-removebg-preview.png";
import BROWN_KRAFT_PAPER_BAG from "../assets/PaperCatalog/BROWN_KRAFT_PAPER_BAG.png";
import FOOTLONG_TRAY_SILVER from "../assets/PaperCatalog/FOOTLONG_TRAY_SILVER.png";
import KIKIAM_TRAY_SILVER from "../assets/PaperCatalog/KIKIAM_TRAY_SILVER.png";
import PAPER_BOWL from "../assets/PaperCatalog/PAPER_BOWL.png";
import PAPER_CUP from "../assets/PaperCatalog/PAPER_CUP.png";
import Paper_Plate from "../assets/PaperCatalog/Paper_Plate.png";
import SIOPAO_WRAPPER from "../assets/PaperCatalog/SIOPAO_WRAPPER.png";
import SQUARE_TRAY_SILVER from "../assets/PaperCatalog/SQUARE_TRAY_SILVER.png";
import MICROWABLE_CONTAINER from "../assets/PlasticCatalog/MICROWABLE_CONTAINER.png";
import PLASTIC_CUPS from "../assets/PlasticCatalog/PLASTIC_CUPS.png";
import ROLL_BAG from "../assets/PlasticCatalog/ROLL_BAG.png";
import ROLL_TRASHBAG_BLACK from "../assets/PlasticCatalog/ROLL_TRASHBAG_BLACK.png";
import ROLL_TRASHBAG_CLEAR from "../assets/PlasticCatalog/ROLL_TRASHBAG_CLEAR.png";
import SANDO_BAG from "../assets/PlasticCatalog/SANDO_BAG.png";
import FLEXIBLE_STRAW from "../assets/DrinkingStrawCatalog/FLEXIBLE_STRAW.png";
import PAPER_STRAW from "../assets/DrinkingStrawCatalog/PAPER_STRAW.png";
import SAGO_DRINKING_STRAW from "../assets/DrinkingStrawCatalog/SAGO_DRINKING_STRAW.png";

// Import Interactive Slider Assets
import TakeAwayPackaging from "../assets/TakeAwayPackaging.png";
import TakeAwayPackagingDesign from "../assets/TakeAwayPackaging_WithDesign.png";
import Papercup2 from "../assets/PaperPlasticCup.png";
import Kimwinpapercup from "../assets/PaperPlasticCupDesign.png";
import Paperbag2 from "../assets/PaperPlasticBag.png";
import Kimwinpaperbag from "../assets/PaperPlasticBagDesign.png";

const PLACEHOLDERS = {
  PREMIUM_BOX_BASE: TakeAwayPackaging,
  PREMIUM_BOX_DESIGN: TakeAwayPackagingDesign,
  ECO_PAPER_BASE: Paperbag2,
  ECO_PAPER_DESIGN: Kimwinpaperbag,
  ARTISAN_CUP_BASE: Papercup2,
  ARTISAN_CUP_DESIGN: Kimwinpapercup,
};

export default function Products() {
  const [selectedOption, setSelectedOption] = useState("premium_box");
  const containerRef = useRef(null);

  // MotionValue for high-performance slider tracking
  const handleX = useMotionValue(0);

  // Set initial slider track position to the middle on mount
  useEffect(() => {
    if (containerRef.current) {
      handleX.set(containerRef.current.offsetWidth / 2);
    }
  }, [handleX]);

  // Transform raw pixels into a fluid percentage for the clipPath mask
  const clipPathValue = useTransform(handleX, (latest) => {
    if (!containerRef.current) return 50;
    return (latest / containerRef.current.offsetWidth) * 100;
  });

  const options = [
    {
      key: "premium_box",
      name: "PREMIUM BOX",
      icon: Package,
      base: PLACEHOLDERS.PREMIUM_BOX_BASE,
      design: PLACEHOLDERS.PREMIUM_BOX_DESIGN,
    },
    {
      key: "eco_paper",
      name: "ECO PAPER BOX",
      icon: Paperclip,
      base: PLACEHOLDERS.ECO_PAPER_BASE,
      design: PLACEHOLDERS.ECO_PAPER_DESIGN,
    },
    {
      key: "artisan_cup",
      name: "ARTISAN CUP",
      icon: Coffee,
      base: PLACEHOLDERS.ARTISAN_CUP_BASE,
      design: PLACEHOLDERS.ARTISAN_CUP_DESIGN,
    },
  ];

  const currentOptionData = options.find((opt) => opt.key === selectedOption);

  const products = [
    {
      name: "Paper Products",
      // 1. Change this to an array containing multiple image imports
      img: [
        BROWN_KRAFT_PAPER_BAG,
        FOOTLONG_TRAY_SILVER,
        KIKIAM_TRAY_SILVER,
        PAPER_BOWL,
        PAPER_CUP,
        Paper_Plate,
        SIOPAO_WRAPPER,
        SQUARE_TRAY_SILVER,
      ],
      tag: "RECYCLABLE",
      desc: "Customizable high-strength paper bags designed for heavy industrial use.",
    },
    {
      name: "Plastic Products",
      // 2. You can mix and match any of your imported assets here
      img: [
        MICROWABLE_CONTAINER,
        PLASTIC_CUPS,
        ROLL_BAG,
        ROLL_TRASHBAG_BLACK,
        ROLL_TRASHBAG_CLEAR,
        SANDO_BAG,
      ],
      tag: "INSULATED",
      desc: "Advanced double-wall insulation keeps beverages at the target temperature.",
    },
    {
      name: "Drinking Straw Products",
      // 3. Keep a single image if a product doesn't have an alternative view yet
      img: [FLEXIBLE_STRAW, PAPER_STRAW, SAGO_DRINKING_STRAW],
      tag: "ECO-FRIENDLY",
      desc: "High-quality, durable utensils engineered for commercial food service.",
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors overflow-x-hidden">
      {/* --- REBALANCED INDUSTRIAL HERO --- */}
      <section className="relative min-h-[80vh] lg:h-[85vh] flex items-center overflow-hidden bg-slate-950 py-12 lg:py-0">
        <div className="absolute inset-0 z-0">
          <motion.img
            src={KCPlasticD}
            alt="Manufacturing Facility"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        </div>

        <div className="absolute right-[-10%] lg:right-[5%] top-1/2 -translate-y-1/2 select-none pointer-events-none z-10 overflow-hidden">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.03 }}
            className="text-[8rem] md:text-[15rem] lg:text-[25rem] font-black text-white leading-none tracking-tighter"
          >
            WORK
          </motion.h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 w-full relative z-20">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 space-y-6 order-2 lg:order-1 relative z-30 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block py-1 px-3 border border-red-600/50 text-red-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4">
                  Catalog 2026
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase leading-[0.85] tracking-tighter">
                  OUR <br />
                  <span className="text-red-600 italic">WORK</span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-slate-400 text-sm md:text-base max-w-xs mx-auto lg:mx-0 leading-relaxed font-medium"
              >
                Precision-engineered packaging solutions designed for
                high-performance industrial standards and global distribution.
              </motion.p>
            </div>

            <div className="lg:col-span-7 flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative w-full flex justify-center lg:justify-end">
                <div className="absolute inset-0 bg-red-600/10 blur-[80px] lg:blur-[150px] rounded-full scale-100 lg:scale-125" />
                <motion.img
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  src={OurWork}
                  alt="Featured Product"
                  className="w-[85%] sm:w-[70%] md:w-[60%] lg:w-[800px] xl:w-[950px] lg:-mr-32 h-auto max-h-[40vh] lg:max-h-none object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] relative z-20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- INTERACTIVE LAB (SPLIT SLIDER SECTION) --- */}
      <section className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white py-24 px-6 min-h-screen flex items-center justify-center transition-colors duration-300">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Controls & Description Stack */}
          <div className="space-y-10">
            <p className="text-blue-600 dark:text-blue-500 font-black uppercase text-xs tracking-widest">
              INTERACTIVE LAB
            </p>
            <h2 className="text-6xl md:text-8xl font-black uppercase leading-[0.9]">
              From Concept to <span className="text-blue-600">Reality.</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed text-justify max-w-lg">
              Visualize the transformation. Swipe across the packaging to see
              how we apply structural design, premium textures, and branding to
              standard industry containers.
            </p>

            <div className="space-y-4">
              {options.map((opt) => {
                const isSelected = selectedOption === opt.key;
                const Icon = opt.icon;
                return (
                  <button
                    key={opt.key}
                    onClick={() => setSelectedOption(opt.key)}
                    className={`w-full flex items-center gap-6 p-6 rounded-2xl border-4 transition-all uppercase tracking-widest font-black text-sm text-left
                    ${isSelected ? "border-blue-700 bg-blue-50/50 dark:bg-blue-900/20" : "border-slate-200 dark:border-slate-800 hover:border-red-500/50 dark:hover:bg-slate-900"}`}
                  >
                    <Icon
                      className={`w-8 h-8 ${isSelected ? "text-blue-600" : "text-slate-400"}`}
                    />
                    {opt.name}
                  </button>
                );
              })}
            </div>

            <p className="text-slate-500 dark:text-gray-600 font-bold uppercase text-[10px] tracking-widest mt-6">
              Drag over the image handle to compare live changes
            </p>
          </div>

          {/* Interactive Rendering Box */}
          <div
            ref={containerRef}
            className="relative group overflow-hidden rounded-[2rem] h-[500px] lg:h-[600px] w-full border border-slate-200 dark:border-slate-800 shadow-2xl bg-slate-100 dark:bg-slate-900"
          >
            {/* Layer A: Raw Base Component */}
            <div className="absolute inset-0">
              <img
                src={currentOptionData.base}
                alt="Plain Base Packaging"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 bg-black/50 backdrop-blur text-white px-5 py-2 rounded-full font-black uppercase text-xs tracking-wider z-30">
                PLAIN BASE
              </div>
            </div>

            {/* Layer B: Masked Graphic Finished Asset */}
            <motion.div
              className="absolute inset-0 z-10"
              style={{
                clipPath: useTransform(
                  clipPathValue,
                  (v) => `inset(0 0 0 ${v}%)`,
                ),
              }}
            >
              <img
                src={currentOptionData.design}
                alt="Bespoke Designed Packaging"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 right-6 bg-blue-600 text-white px-5 py-2 rounded-full font-black uppercase text-xs tracking-wider z-30">
                KIMWIN BESPOKE
              </div>
            </motion.div>

            {/* Slider Divider Control Anchor */}
            {/* Interactive Slider Handle */}
            <motion.div
              drag="x"
              dragElastic={0}
              dragMomentum={false}
              dragConstraints={containerRef}
              style={{ x: handleX }}
              whileHover={{ scale: 1.05 }}
              className="absolute top-0 bottom-0 z-20 flex flex-col items-center justify-center cursor-ew-resize"
            >
              {/* The line itself */}
              <div className="h-full w-1 bg-white shadow-lg"></div>

              {/* The circle grabber with arrows */}
              <div className="absolute top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-slate-900 rounded-full shadow-lg flex items-center justify-center border-2 border-slate-200 dark:border-slate-700">
                <ChevronLeft className="w-5 h-5 text-slate-900 dark:text-white" />
                <ChevronRight className="w-5 h-5 text-slate-900 dark:text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- ALTERNATING PRODUCT LIST SECTION WITH WORKING IMAGE CAROUSEL --- */}
      <section className="py-32 max-w-7xl mx-auto px-6 space-y-40">
        {products.map((product, i) => {
          const isEven = i % 2 === 0;

          // This turns a single image string into an array, or accepts an array of multiple images
          const imagesArray = Array.isArray(product.img)
            ? product.img
            : [product.img];

          // Create an internal state component instance hook per product row mapping
          const [currentImgIndex, setCurrentImgIndex] = useState(0);

          const nextImage = (e) => {
            e.stopPropagation();
            setCurrentImgIndex((prev) => (prev + 1) % imagesArray.length);
          };

          const prevImage = (e) => {
            e.stopPropagation();
            setCurrentImgIndex(
              (prev) => (prev - 1 + imagesArray.length) % imagesArray.length,
            );
          };

          return (
            <div
              key={i}
              className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-16 lg:gap-24`}
            >
              {/* Carousel Graphic Frame Side - 60% Width */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-[60%] flex justify-center items-center relative"
              >
                {/* Decorative Background Glow */}
                <div className="absolute w-[80%] h-[80%] bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-[100px] -z-10" />

                <div className="relative group w-full flex flex-col items-center justify-center min-h-[400px] lg:min-h-[550px]">
                  {/* Image Wrapper for Smooth Fade Animations */}
                  <div className="overflow-hidden w-full h-full flex items-center justify-center relative">
                    <motion.img
                      key={currentImgIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      src={imagesArray[currentImgIndex]}
                      alt={`${product.name} view ${currentImgIndex + 1}`}
                      className="w-full h-auto max-h-[550px] object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-2xl"
                    />
                  </div>

                  {/* Carousel Navigation Arrows & Dots - Displays dynamically if imagesArray has more than 1 asset */}
                  {imagesArray.length > 1 ? (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 z-30 p-3 rounded-full bg-white/90 dark:bg-slate-900/90 shadow-xl backdrop-blur-sm border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white hover:bg-red-600 dark:hover:bg-red-600 hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 z-30 p-3 rounded-full bg-white/90 dark:bg-slate-900/90 shadow-xl backdrop-blur-sm border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white hover:bg-red-600 dark:hover:bg-red-600 hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0"
                        aria-label="Next image"
                      >
                        <ChevronRight size={20} />
                      </button>

                      {/* Micro-Dot Slide Progress Indicators */}
                      <div className="absolute bottom-[-30px] flex gap-2 z-30 justify-center w-full">
                        {imagesArray.map((_, dotIndex) => (
                          <button
                            key={dotIndex}
                            onClick={() => setCurrentImgIndex(dotIndex)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                              currentImgIndex === dotIndex
                                ? "w-6 bg-blue-600"
                                : "w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                            }`}
                            aria-label={`Go to slide ${dotIndex + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  ) : (
                    /* Hint label inside development mode to show how to activate the slider navigation layout */
                    <span className="absolute bottom-[-35px] text-[10px] text-slate-400/60 dark:text-slate-600 font-mono tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                      [ Single Image Active: Pass an array to launch slide
                      controls ]
                    </span>
                  )}

                  {/* Dynamic Interactive Shadow Base */}
                  <div className="absolute -bottom-10 w-1/3 h-6 bg-black/10 dark:bg-white/5 blur-3xl rounded-[100%] group-hover:w-1/2 transition-all" />
                </div>
              </motion.div>

              {/* Descriptive Typography Side - 40% Width */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full lg:w-[40%] space-y-8 text-center lg:text-left"
              >
                <div className="flex flex-col items-center lg:items-start gap-4">
                  <span className="px-5 py-1.5 bg-red-600 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full">
                    {product.tag}
                  </span>
                  <div className="h-1 w-20 bg-blue-600 rounded-full" />
                </div>

                <h3 className="text-5xl md:text-7xl font-black text-blue-950 dark:text-white uppercase leading-[0.9] tracking-tighter">
                  {product.name}
                </h3>

                <p className="text-gray-500 dark:text-gray-400 text-xl leading-relaxed font-medium">
                  {product.desc}
                </p>

                <motion.button
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 text-blue-950 dark:text-white group mx-auto lg:mx-0"
                >
                  <span className="font-bold uppercase tracking-[0.2em] text-xs">
                    Request Specs
                  </span>
                  <div className="h-10 w-10 rounded-full border border-blue-950/20 dark:border-white/20 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 group-hover:text-white transition-all">
                    <ArrowRight size={18} />
                  </div>
                </motion.button>
              </motion.div>
            </div>
          );
        })}

        {/* --- OTHER ITEMS CLEAN CENTERED LAYOUT SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="pt-20 border-t border-slate-100 dark:border-slate-900 text-center space-y-12 max-w-4xl mx-auto relative"
        >
          {/* Decorative Background Glow for Minimalist Finish */}
          <div className="absolute inset-0 bg-red-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

          <div className="flex flex-col items-center gap-4">
            <div className="h-1 w-12 bg-red-600 rounded-full" />
            <h2 className="text-5xl md:text-7xl font-black text-blue-950 dark:text-white uppercase tracking-tighter leading-none mt-2">
              OTHER ITEMS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto px-4">
            {[
              "PRINCE FORK / SPOON",
              "3 KING FORK / SPOON",
              "ALUMINUM FOIL",
              "BAMBOO TOOTHPICK",
              "CLING WRAP",
              "STRETCH FILM",
              "STRAIGHT BELTED STRAW",
              "I-BELTED STRAW FOR BODY PACK",
              "CANDY STRAW",
              "JUMBO STRAW",
              "HARD STRAW",
              "PILLOW PACK STRAW",
              "STRAIGHT STRAW",
              "SOFTDRINKS STRAW",
              "PLAIN AND PRINTED POLYBAG",
              "LAUNDRY BAG",
              "SEEDLING BAG",
              "WOVEN ECO BAG",
              "VEGETABLE BAG",
              "ICE BAG",
              "FLAT TRASHBAG",
              "PLASTIC TWINE STRAW ROPE",
              "KRAFT WRAPPER",
              "THERMAL PAPER",
              "JOURNAL PAPER",
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-900 flex items-center justify-center text-center transition-all shadow-sm ${
                  index === 4
                    ? "md:col-span-2 md:max-w-md md:mx-auto w-full"
                    : ""
                }`}
              >
                <p className="text-blue-950 dark:text-slate-200 font-extrabold text-base md:text-lg tracking-wide uppercase">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <div className="pb-24" />
    </div>
  );
}
