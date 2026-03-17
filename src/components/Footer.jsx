import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/shopee.svg";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white transition-colors">
      {/* Top Footer Content */}
      {/* // Change py-16 to pt-32 pb-16 */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* 1. Brand & Logo */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white text-blue-950 rounded-lg flex items-center justify-center font-bold italic shadow-lg">
                K
              </div>
              <span className="font-bold text-xl leading-tight tracking-tight">
                KIMWIN
                <br />
                <span className="text-[10px] uppercase tracking-[0.2em] text-orange-400">
                  Corporation
                </span>
              </span>
            </div>
            <p className="text-blue-100/60 text-sm leading-relaxed max-w-xs">
              Providing sustainable, and custom packaging solutions globally
              since 1983. Your brand, our priority.
            </p>
            <div className="flex gap-6 items-center">
              {/* Facebook Icon - Increased size to match */}
              <a
                href="#"
                className="hover:text-orange-400 transition-all hover:scale-110"
              >
                <Facebook
                  size={28}
                  className="cursor-pointer transition-colors"
                />
              </a>

              {/* Custom Shopee Icon - Made Bigger */}
              <a
                href="https://shopee.ph/your-shop-url"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
                title="Shopee"
              >
                <img
                  src={Logo}
                  alt="Shopee"
                  /* Increased from w-5 h-5 to w-8 h-8 (32px) */
                  className="w-8 h-8 object-contain transition-all duration-300"
                />
              </a>
            </div>
          </div>

          {/* 2. Services Column */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-7">
              Services
            </h4>
            <ul className="space-y-4 text-sm text-blue-100/70">
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Custom Box Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Sustainable Materials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Branding & Printing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Bulk Production
                </a>
              </li>
            </ul>
          </div>

          {/* 3. Company Column */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-7">
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm text-blue-100/70">
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          {/* 4. Contact Info */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-7">
              Get In Touch
            </h4>
            <ul className="space-y-4 text-sm text-blue-100/70">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-orange-400 shrink-0" />
                <span>
                  1F. De Zafra St. Barangay Maysan,
                  <br />
                  Valenzuela City
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-orange-400 shrink-0" />
                <span>(02) 8277-0030 / 8277-0036</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-orange-400 shrink-0" />
                <span>kimwinsales@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom Copyright Bar */}
      <div className="bg-blue-900/50 border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-100/40 text-[11px] uppercase tracking-widest">
            © 2026 Kimwin Corporation. All rights reserved.
          </p>
          <div className="flex gap-6 text-[11px] uppercase tracking-widest text-blue-100/40">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
