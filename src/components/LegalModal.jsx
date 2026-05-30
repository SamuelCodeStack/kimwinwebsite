import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// --- LEGAL CONTENT DATA (Added directly to avoid import errors) ---
const legalContent = {
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "April 2026",
    sections: [
      {
        header: "Information Collection",
        content:
          "We collect information that you voluntarily provide to us when you fill out our contact form, including your name, email address, and any documents you choose to upload via Cloudinary.",
      },
      {
        header: "Use of Information",
        content:
          "Your information is used solely to provide customized packaging quotes and respond to your business inquiries. We do not sell or share your data with third parties.",
      },
      {
        header: "Data Security",
        content:
          "We use secure third-party services like EmailJS and Cloudinary to handle your data. By using this form, you acknowledge that no method of internet transmission is 100% secure.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    lastUpdated: "April 2026",
    sections: [
      {
        header: "Agreement to Terms",
        content:
          "By using the Kimwin Corporation website, you agree to be bound by these terms. All customized packaging requests are subject to production review and formal quotation.",
      },
      {
        header: "User Conduct",
        content:
          "Users agree not to upload malicious files or spam the contact system. We reserve the right to ignore inquiries that violate our safety policies.",
      },
      {
        header: "Intellectual Property",
        content:
          "All content on this website, including the Kimwin logo and product designs, is the property of Kimwin Corporation and may not be used without prior written consent.",
      },
    ],
  },
};

export default function LegalModal({ type, isOpen, onClose }) {
  // Guard clause to prevent crash if type is null
  if (!type) return null;

  const data = type === "privacy" ? legalContent.privacy : legalContent.terms;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800"
          >
            {/* Header */}
            <div className="p-6 border-b dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-900/50">
              <div>
                <h2 className="text-2xl font-black text-blue-900 dark:text-white uppercase tracking-tight">
                  {data.title}
                </h2>
                <p className="text-xs text-slate-500 font-medium">
                  Last Updated: {data.lastUpdated}
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-500"
              >
                <X size={24} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
              <div className="space-y-8">
                {data.sections.map((section, idx) => (
                  <div key={idx} className="space-y-3">
                    <h3 className="text-lg font-bold text-red-600 dark:text-red-500 flex items-center gap-2">
                      <span className="text-slate-300 dark:text-slate-700 font-mono text-sm">
                        0{idx + 1}
                      </span>
                      {section.header}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Button */}
            <div className="p-6 bg-slate-50 dark:bg-slate-900/50 border-t dark:border-slate-800 text-center">
              <button
                onClick={onClose}
                className="px-8 py-3 bg-blue-900 dark:bg-red-600 text-white font-bold rounded-xl uppercase tracking-widest text-sm hover:opacity-90 transition-opacity"
              >
                I Understand
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
