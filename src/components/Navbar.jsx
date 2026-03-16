import { useState } from "react";
import { Menu, X, Box } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-slate-900 shadow-sm sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center text-white font-bold italic">
            K
          </div>
          <span className="font-bold text-lg text-blue-900 dark:text-white leading-tight">
            KIMWIN
            <br />
            <span className="text-[10px] uppercase tracking-widest text-orange-500">
              Corporation
            </span>
          </span>
        </div>

        <div className="hidden lg:flex gap-8 text-gray-600 dark:text-gray-300 font-medium text-sm">
          <a
            href="#"
            className="text-orange-500 border-b-2 border-orange-500 pb-1"
          >
            Home
          </a>
          <a href="#" className="hover:text-orange-500 transition">
            Services
          </a>
          <a href="#" className="hover:text-orange-500 transition">
            Solutions
          </a>
          <a href="#" className="hover:text-orange-500 transition">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button className="hidden lg:block bg-blue-900 dark:bg-orange-500 text-white dark:text-slate-900 px-6 py-2 rounded text-sm font-bold uppercase transition-colors">
            Request a Quote
          </button>
          <button
            className="lg:hidden dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-t dark:border-slate-800 p-6 space-y-4 flex flex-col shadow-xl">
          <a href="#" className="text-orange-500 font-bold">
            Home
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-300">
            Services
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-300">
            Solutions
          </a>
          <button className="bg-blue-900 dark:bg-orange-500 text-white dark:text-slate-900 w-full py-3 rounded font-bold">
            Request a Quote
          </button>
        </div>
      )}
    </nav>
  );
}
