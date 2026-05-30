import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import KCLogo from "../assets/kc-logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Why Us?", path: "/services" },
    { name: "Our Work", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="bg-white dark:bg-slate-900 shadow-md sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-20 md:h-28">
        {/* --- ENHANCED LOGO & BRANDING --- */}
        <Link to="/" className="flex items-center gap-3 md:gap-5 group">
          <img
            src={KCLogo}
            alt="Kimwin Corp Logo"
            className="w-12 md:w-28 h-auto object-contain dark:brightness-0 dark:invert transition-transform group-hover:scale-105"
          />

          <div className="flex flex-col justify-center border-l-2 border-slate-200 dark:border-slate-700 pl-3 md:pl-5">
            <span className="font-black text-xl md:text-5xl text-blue-900 dark:text-white leading-[0.75] tracking-tighter">
              KIMWIN
            </span>
            <span className="text-[8px] md:text-[16px] uppercase font-black tracking-[0.3em] md:tracking-[0.4em] text-red-600 mt-1">
              Corporation
            </span>
          </div>
        </Link>

        {/* --- DESKTOP NAVIGATION --- */}
        <div className="hidden lg:flex gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-black uppercase tracking-widest transition-colors hover:text-red-600 ${
                  isActive
                    ? "text-blue-700 border-b-4 border-red-600 pb-1"
                    : "text-slate-600 dark:text-slate-300"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* --- UTILITIES (THEME & MOBILE TOGGLE) --- */}
        <div className="flex items-center gap-2 md:gap-6">
          <ThemeToggle />
          <button
            className="lg:hidden p-2 text-blue-900 dark:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X size={28} className="md:w-9 md:h-9" />
            ) : (
              <Menu size={28} className="md:w-9 md:h-9" />
            )}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU WITH ANIMATION --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 overflow-hidden"
          >
            <div className="p-6 space-y-4 flex flex-col shadow-2xl">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `text-xl md:text-2xl font-black uppercase tracking-tight block py-2 ${
                        isActive
                          ? "text-red-600 border-l-4 border-red-600 pl-4"
                          : "text-slate-800 dark:text-slate-200 hover:text-red-600 transition-colors"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}

              {/* Optional Mobile CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-4 border-t border-slate-100 dark:border-slate-800"
              >
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Industrial Solutions • Manila, PH
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
