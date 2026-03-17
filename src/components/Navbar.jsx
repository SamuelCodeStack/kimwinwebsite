import { useState } from "react";
import { Link, NavLink } from "react-router-dom"; // Using NavLink for active states
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Centralized links for easy management
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white dark:bg-slate-900 shadow-sm sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        {/* Logo - Wrap in Link to always go Home */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center text-white font-bold italic group-hover:bg-orange-500 transition-colors">
            K
          </div>
          <span className="font-bold text-lg text-blue-900 dark:text-white leading-tight">
            KIMWIN
            <br />
            <span className="text-[10px] uppercase tracking-widest text-orange-500">
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
                `text-sm font-bold uppercase tracking-wider transition-colors hover:text-orange-500 ${
                  isActive
                    ? "text-orange-500 border-b-2 border-orange-500 pb-1"
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

          <Link to="/contact">
            <button className="hidden lg:block bg-blue-900 dark:bg-orange-500 text-white dark:text-slate-900 px-6 py-2.5 rounded text-xs font-black uppercase transition-all hover:opacity-90 active:scale-95">
              Request a Quote
            </button>
          </Link>

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
                    ? "text-orange-500"
                    : "text-gray-600 dark:text-gray-300"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <button className="bg-blue-900 dark:bg-orange-500 text-white dark:text-slate-900 w-full py-4 rounded-xl font-black uppercase tracking-widest mt-4">
              Request a Quote
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
