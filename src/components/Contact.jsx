import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Paperclip,
  ChevronDown,
} from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import KCLogo from "../assets/kc-logo.png";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("idle");

  const sendEmail = async (e) => {
    e.preventDefault();

    const fileInput = form.current.querySelector('input[type="file"]');
    const file = fileInput.files[0];

    // --- FILE TYPE VALIDATION ---
    if (file) {
      const allowedTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "application/pdf",
      ];
      if (!allowedTypes.includes(file.type)) {
        alert("Invalid file type. Please upload only JPEG, PNG, or PDF files.");
        return;
      }
    }

    setStatus("sending");
    let attachmentUrl = ""; // Reset to empty for conditional EmailJS logic

    if (file) {
      const cloudData = new FormData();
      cloudData.append("file", file);
      cloudData.append("upload_preset", "Kimwin Corporation");

      try {
        const uploadRes = await fetch(
          "https://api.cloudinary.com/v1_1/dvsluqcud/upload",
          {
            method: "POST",
            body: cloudData,
          },
        );
        const data = await uploadRes.json();
        attachmentUrl = data.secure_url;
      } catch (err) {
        console.error("Cloudinary Upload Failed:", err);
      }
    }

    const templateParams = {
      from_name: form.current.from_name.value,
      reply_to: form.current.reply_to.value,
      subject: form.current.subject.value,
      message: form.current.message.value,
      attachment_link: attachmentUrl,
    };

    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          setStatus("success");

          // --- RESET LOGIC ---
          form.current.reset();

          // Reset the Paperclip label text manually
          const fileLabel =
            form.current.querySelector('input[type="file"]').previousSibling;
          if (fileLabel)
            fileLabel.innerText = "Add Attachment (JPG, PNG, PDF - Max 10MB)";

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
      <section className="relative py-24 bg-blue-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
          <img
            src={KCLogo}
            alt=""
            className="w-full h-full object-contain scale-110 brightness-0 invert"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-500 font-black uppercase text-sm mb-4 tracking-[0.3em]"
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white uppercase"
          >
            CONTACT <span className="text-red-500">EXPERTS</span>
          </motion.h1>
        </div>
      </section>

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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              ].map((card, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className={`bg-gray-50 dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-800 hover:border-red-500 transition-colors ${i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}`}
                >
                  <div className="text-red-600 mb-3">{card.icon}</div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    {card.title}
                  </p>
                  <p className="text-sm font-semibold text-blue-900 dark:text-white">
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
                    <option value="Career Application">
                      Career Application
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

                <div className="relative">
                  <label className="flex items-center gap-3 w-full px-5 py-4 rounded-xl bg-white dark:bg-slate-800 border-2 border-dashed border-gray-200 dark:border-slate-700 hover:border-red-500 dark:hover:border-red-500 transition-all cursor-pointer group">
                    <Paperclip
                      className="text-gray-400 group-hover:text-red-500"
                      size={20}
                    />
                    <span className="text-gray-400 group-hover:text-red-500 text-sm font-medium italic">
                      Add Attachment (JPG, PNG, PDF - Max 10MB)
                    </span>
                    <input
                      type="file"
                      name="my_file"
                      className="hidden"
                      accept=".jpg, .jpeg, .png, .pdf"
                      onChange={(e) => {
                        const fileName = e.target.files[0]?.name;
                        if (fileName)
                          e.target.previousSibling.innerText = fileName;
                      }}
                    />
                  </label>
                </div>

                <motion.button
                  disabled={status === "sending" || status === "success"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-500 group shadow-lg disabled:opacity-70 disabled:cursor-not-allowed
                    ${
                      status === "success"
                        ? "bg-green-600 text-white"
                        : status === "error"
                          ? "bg-red-800 text-white"
                          : "bg-blue-900 text-white dark:bg-red-600 hover:shadow-red-500/20 dark:hover:shadow-blue-500/40"
                    }`}
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
