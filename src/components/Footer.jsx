import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

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
              Providing premium, sustainable, and custom packaging solutions
              globally since 1998. Your brand, our priority.
            </p>
            <div className="flex gap-5">
              <Facebook
                size={18}
                className="hover:text-orange-400 cursor-pointer transition-colors"
              />
              <Twitter
                size={18}
                className="hover:text-orange-400 cursor-pointer transition-colors"
              />
              <Linkedin
                size={18}
                className="hover:text-orange-400 cursor-pointer transition-colors"
              />
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
                  123 Industrial Park Way,
                  <br />
                  Metro City, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-orange-400 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-orange-400 shrink-0" />
                <span>info@kimwin.com</span>
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
