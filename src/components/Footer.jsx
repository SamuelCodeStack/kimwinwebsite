import { Facebook, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import KCLogo from "../assets/kc-logo.png";
import ShopeeBrandedLogo from "../assets/shopee.svg";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* 1. Brand & Logo Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={KCLogo}
                alt="Kimwin Corp Logo"
                className="w-16 h-auto object-contain brightness-0 invert"
              />
              <span className="font-bold text-xl leading-tight tracking-tight">
                KIMWIN
                <br />
                <span className="text-[10px] uppercase tracking-[0.2em] text-red-500">
                  Corporation
                </span>
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Providing sustainable and custom packaging solutions globally
              since 1983. Your brand, our priority.
            </p>

            <div className="flex gap-6 items-center">
              <a
                href="#"
                className="text-white hover:text-blue-400 transition-all hover:scale-110"
              >
                <Facebook size={28} />
              </a>
              <a
                href="https://shopee.ph/your-shop-url"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110 group"
                title="Visit our Shopee Store"
              >
                <img
                  src={ShopeeBrandedLogo}
                  alt="Shopee Store"
                  className="w-10 h-10 object-contain rounded-lg shadow-lg border border-white/10 group-hover:border-red-500 transition-all"
                />
              </a>
            </div>
          </div>

          {/* 2. Services Column */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-7">
              Services
            </h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <Link
                  to="/services"
                  className="hover:text-red-500 transition-colors"
                >
                  Custom Box Design
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-red-500 transition-colors"
                >
                  Sustainable Materials
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-red-500 transition-colors"
                >
                  Branding & Printing
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Company Column */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-7">
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <Link
                  to="/about"
                  className="hover:text-red-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-red-500 transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-red-500 transition-colors"
                >
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Contact Info */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-7">
              Get In Touch
            </h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-red-500 shrink-0" />
                <span>
                  1F. De Zafra St. Barangay Maysan, <br /> Valenzuela City
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-red-500 shrink-0" />
                <span>(02) 8277-0030 / 8277-0036</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-red-500 shrink-0" />
                <span>kimwinsales@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-black/40 border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-[11px] uppercase tracking-widest">
          <p>© 2026 Kimwin Corporation. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
