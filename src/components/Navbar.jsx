import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

// 1. Import your custom logo image
import KCLogo from "../assets/kc-logo.png"; // Make sure to save image_0.png as kc-logo.png in src/assets/

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white dark:bg-slate-900 shadow-sm sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        {/* Logo Section - Wrap in Link to go Home */}
        <Link to="/" className="flex items-center gap-3 group">
          {/* 2. Display the custom KC Logo */}
          <img
            src={KCLogo}
            alt="Kimwin Corp Logo"
            className="w-16 h-auto object-contain dark:brightness-0 dark:invert transition-transform group-hover:scale-105"
          />
          <span className="font-bold text-lg text-blue-900 dark:text-white leading-tight">
            KIMWIN
            <br />
            {/* 3. Updated subheading to use the logo's deep blue/sky blue scheme */}
            <span className="text-[10px] uppercase tracking-widest text-red-500">
              Corporation
            </span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-bold uppercase tracking-wider transition-colors hover:text-blue-500 ${
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-400 pb-1"
                    : "text-gray-600 dark:text-gray-300"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* Mobile Toggle Button */}
          <button
            className="lg:hidden p-2 text-blue-900 dark:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-t dark:border-slate-800 p-6 space-y-4 flex flex-col shadow-xl animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-lg font-bold uppercase tracking-widest ${
                  isActive
                    ? "text-blue-500"
                    : "text-gray-600 dark:text-gray-300"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
