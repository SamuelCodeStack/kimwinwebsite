import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
} from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import KCCustomerS from "../assets/KimwinCustomerService.png";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("idle");

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // Ensure you use sendForm when passing form.current
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current, // Pass the actual form DOM element
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          setStatus("success");
          form.current.reset();
          setTimeout(() => setStatus("idle"), 5000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("error");
          setTimeout(() => setStatus("idle"), 4000);
        },
      );
  };

  const mapUrl =
    "https://www.google.com/maps?q=14.703167,120.969083&hl=es;z=14&output=embed";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors">
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[60vh] lg:h-[70vh] flex items-center overflow-hidden bg-slate-950 py-12 lg:py-0">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={KCCustomerS}
            alt="Customer Support"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/80 lg:bg-slate-950/70 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 w-full relative z-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 lg:mb-6">
                  <div className="w-6 lg:w-8 h-[2px] bg-red-600" />
                  <span className="text-red-500 font-bold uppercase text-[9px] lg:text-[10px] tracking-[0.3em] lg:tracking-[0.4em]">
                    Contact Infrastructure
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase leading-none tracking-tight">
                  GET IN <br className="hidden sm:block" />
                  <span className="text-red-600">TOUCH.</span>
                </h1>
                <p className="text-slate-400 text-base lg:text-lg mt-6 max-w-md mx-auto lg:mx-0 font-medium leading-relaxed">
                  Connect with our technical sales team for specialized
                  logistics and custom packaging solutions.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 border border-white/10 backdrop-blur-md p-6 lg:p-10 rounded-2xl space-y-6 lg:space-y-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                <div>
                  <p className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] text-red-500 mb-2">
                    HQ Location
                  </p>
                  <p className="text-white font-bold text-base lg:text-lg leading-tight">
                    Valenzuela City, <br /> Philippines
                  </p>
                </div>
                <div>
                  <p className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] text-red-500 mb-2">
                    Availability
                  </p>
                  <p className="text-white font-bold text-base lg:text-lg leading-tight">
                    Mon — Sat <br /> 08:00 - 18:00
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-white/10">
                <p className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-3">
                  Authorized Technical Scope
                </p>
                <div className="flex flex-wrap gap-2 lg:gap-3">
                  {["Custom Tooling", "Bulk Supply", "QC Testing"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="text-[9px] lg:text-[10px] font-bold border border-white/20 px-2 lg:px-3 py-1 text-slate-300 uppercase tracking-wider rounded-full"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- FORM & MAP SECTION --- */}
      <section id="contact" className="py-24 px-6 md:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full h-[400px] lg:h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800"
          >
            <iframe
              title="Kimwin Location"
              src={mapUrl}
              className="w-full h-full border-0 grayscale dark:invert-[0.9] hover:grayscale-0 transition-all duration-700"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {[
                {
                  icon: <MapPin />,
                  title: "Office Address",
                  detail: "1F. De Zafra St. Barangay Maysan, Valenzuela City",
                },
                {
                  icon: <Phone />,
                  title: "Support Line",
                  detail: "(02) 8277-0030 / 8277-0036",
                },
                {
                  icon: <Mail />,
                  title: "Email Us",
                  detail: "kimwinsales@gmail.com",
                },
                {
                  icon: <Send />,
                  title: "Careers",
                  detail: "kimwinhr@gmail.com",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  // Removed the conditional 'sm:col-span-2' to keep all cards equal size
                  className="bg-gray-50 dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-800 hover:border-red-500 transition-colors flex flex-col h-full"
                >
                  <div className="text-red-600 mb-3">{card.icon}</div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    {card.title}
                  </p>
                  {/* Added break-words to handle long emails on small screens */}
                  <p className="text-sm font-semibold text-blue-900 dark:text-white break-words mt-1">
                    {card.detail}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={itemVariants}
              className="bg-gray-50 dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-slate-800 grow"
            >
              <form ref={form} className="space-y-4" onSubmit={sendEmail}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    name="from_name"
                    required
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-5 py-4 rounded-xl bg-white dark:bg-slate-800 border dark:border-slate-700 focus:ring-2 focus:ring-red-500 outline-none transition-all dark:text-white"
                  />
                  <input
                    name="reply_to"
                    required
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-5 py-4 rounded-xl bg-white dark:bg-slate-800 border dark:border-slate-700 focus:ring-2 focus:ring-red-500 outline-none transition-all dark:text-white"
                  />
                </div>

                <div className="relative group">
                  <select
                    name="subject"
                    required
                    defaultValue=""
                    className="w-full px-5 py-4 rounded-xl bg-white dark:bg-slate-800 border dark:border-slate-700 focus:ring-2 focus:ring-red-500 outline-none transition-all dark:text-white appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      How can we help?
                    </option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Custom Packaging Request">
                      Custom Packaging Request
                    </option>
                    <option value="Bulk Order Inquiry">
                      Bulk Order Inquiry
                    </option>
                    <option value="Other">Other</option>
                  </select>
                  <ChevronDown
                    className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-focus-within:text-red-500 transition-colors"
                    size={20}
                  />
                </div>

                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="Tell us about your project..."
                  className="w-full px-5 py-4 rounded-xl bg-white dark:bg-slate-800 border dark:border-slate-700 focus:ring-2 focus:ring-red-500 outline-none transition-all resize-none dark:text-white"
                ></textarea>

                <motion.button
                  disabled={status === "sending" || status === "success"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-500 group shadow-lg disabled:opacity-70 disabled:cursor-not-allowed
                    ${status === "success" ? "bg-green-600 text-white" : status === "error" ? "bg-red-800 text-white" : "bg-blue-900 text-white dark:bg-red-600 hover:shadow-red-500/20 dark:hover:shadow-blue-500/40"}`}
                >
                  <AnimatePresence mode="wait">
                    {status === "idle" && (
                      <motion.div
                        key="idle"
                        className="flex items-center gap-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <span className="group-hover:text-red-500 dark:group-hover:text-blue-200 transition-colors">
                          Send Message
                        </span>
                        <Send
                          size={20}
                          className="group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-red-500 dark:group-hover:text-blue-200 transition-all"
                        />
                      </motion.div>
                    )}
                    {status === "sending" && (
                      <motion.div
                        key="sending"
                        className="flex items-center gap-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <span>Processing...</span>
                        <Loader2 size={20} className="animate-spin" />
                      </motion.div>
                    )}
                    {status === "success" && (
                      <motion.div
                        key="success"
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <span>Message Sent!</span>
                        <CheckCircle2 size={20} />
                      </motion.div>
                    )}
                    {status === "error" && (
                      <motion.div
                        key="error"
                        className="flex items-center gap-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <span>Error Occurred</span>
                        <AlertCircle size={20} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
