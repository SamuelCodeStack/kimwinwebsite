import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  Package,
  Paperclip,
  Coffee,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import TakeAwayPackaging from "../assets/TakeAwayPackaging.png";
import TakeAwayPackagingDesign from "../assets/TakeAwayPackaging_WithDesign.png";
import Papercup2 from "../assets/PaperPlasticCup.png";
import Kimwinpapercup from "../assets/PaperPlasticCupDesign.png";
import Paperbag2 from "../assets/PaperPlasticBag.png";
import Kimwinpaperbag from "../assets/PaperPlasticBagDesign.png";

// PLACEHOLDER IMAGES - Replace these with your actual assets
const PLACEHOLDERS = {
  PREMIUM_BOX_BASE: TakeAwayPackaging,
  PREMIUM_BOX_DESIGN: TakeAwayPackagingDesign, // Mock blend for design
  ECO_PAPER_BASE: Paperbag2,
  ECO_PAPER_DESIGN: Kimwinpaperbag, // Mock blend for design
  ARTISAN_CUP_BASE: Papercup2,
  ARTISAN_CUP_DESIGN: Kimwinpapercup, // Mock blend for design
};

export default function InteractiveLab() {
  const [selectedOption, setSelectedOption] = useState("premium_box");
  const containerRef = useRef(null);

  // Use MotionValue for smooth tracking
  const handleX = useMotionValue(0);

  // Set the slider to the middle on mount
  useEffect(() => {
    if (containerRef.current) {
      handleX.set(containerRef.current.offsetWidth / 2);
    }
  }, [handleX]);

  // Transform the X position to a percentage for clipPath
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

  return (
    <section className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white py-24 px-6 min-h-screen flex items-center justify-center transition-colors duration-300">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Side */}
        <div className="space-y-10">
          <p className="text-blue-600 dark:text-blue-500 font-black uppercase text-xs tracking-widest">
            INTERACTIVE LAB
          </p>
          <h2 className="text-6xl md:text-8xl font-black uppercase leading-[0.9]">
            From Concept to <span className="text-blue-600">Reality.</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed text-justify max-w-lg">
            Visualize the transformation. Swipe across the packaging to see how
            we apply structural design, premium textures, and branding to
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
            Hover or Drag over the image to compare
          </p>
        </div>

        {/* Image Slider Side - MADE BIGGER */}
        <div
          ref={containerRef}
          className="relative group overflow-hidden rounded-[2rem] h-[500px] lg:h-[600px] w-full border border-slate-200 dark:border-slate-800 shadow-2xl"
        >
          {/* Base Layer (PLAIN BASE) */}
          <div className="absolute inset-0">
            <img
              src={currentOptionData.base}
              alt="Plain Base Packaging"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 left-6 bg-black/50 backdrop-blur text-white px-5 py-2 rounded-full font-black uppercase text-xs tracking-wider">
              PLAIN BASE
            </div>
          </div>

          {/* Masked Overlay Layer (KIMWIN BESPOKE) */}
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
            <div className="absolute top-6 right-6 bg-blue-600 text-white px-5 py-2 rounded-full font-black uppercase text-xs tracking-wider">
              KIMWIN BESPOKE
            </div>
          </motion.div>

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
  );
}
