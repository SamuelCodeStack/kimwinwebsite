import { Package, Leaf, Printer, Factory } from "lucide-react";

export default function Hero() {
  const features = [
    {
      title: "Custom Box Design",
      icon: <Package className="text-orange-500" />,
    },
    {
      title: "Sustainable Materials",
      icon: <Leaf className="text-emerald-500" />,
    },
    {
      title: "Branding & Printing",
      icon: <Printer className="text-blue-500" />,
    },
    { title: "Bulk Production", icon: <Factory className="text-purple-500" /> },
  ];

  return (
    <section className="relative">
      {/* 1. The Main Banner Area */}
      <div className="relative min-h-[550px] lg:min-h-[650px] bg-slate-900 flex items-center">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          alt="Factory"
        />

        {/* Content Container - Increased padding-bottom (pb-32) to make room for cards */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-32 lg:pb-40">
          <h1 className="text-3xl md:text-6xl font-black text-white uppercase leading-tight max-w-2xl">
            Custom Packaging{" "}
            <span className="text-orange-400 underline decoration-2 underline-offset-8">
              Solutions
            </span>{" "}
            For Your Brand
          </h1>
          <p className="text-gray-300 text-lg mt-6 max-w-lg">
            Elevate your products with premium, tailored packaging designed for
            impact and sustainability.
          </p>
          <div className="mt-8">
            <button className="bg-orange-500 text-white px-8 py-4 rounded font-black uppercase hover:scale-105 transition-transform shadow-lg">
              Start Your Project
            </button>
          </div>
        </div>
      </div>

      {/* 2. The Floating Cards Container */}
      {/* We use -mt-16 to pull them up, but the pb-32 above ensures they don't hit the button */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 -mt-16 md:-mt-24 relative z-20 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border-b-4 border-orange-400 transition-colors"
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="font-bold text-blue-900 dark:text-white text-lg">
                {f.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                World-class quality for your packaging needs.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
