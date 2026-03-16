export default function Gallery() {
  const products = [1, 2, 3, 4, 5, 6];

  return (
    <section className="py-24 bg-gray-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-blue-950 dark:text-white uppercase tracking-tight">
          Our Packaging Excellence
        </h2>
        <div className="w-24 h-1.5 bg-orange-400 mx-auto mt-4 mb-16 rounded-full"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item) => (
            <div
              key={item}
              className="group overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent dark:border-slate-700"
            >
              <div className="aspect-[4/3] bg-gray-200 dark:bg-slate-700 overflow-hidden flex items-center justify-center relative">
                {/* Replace this div with an <img> tag later */}
                <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-transparent transition-colors"></div>
                <span className="text-gray-400 dark:text-slate-500 font-bold uppercase tracking-widest text-xs">
                  Product View {item}
                </span>

                {/* Hover Zoom Effect Simulation */}
                <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/10 transition-colors"></div>
              </div>
              <div className="p-6 text-left">
                <p className="font-bold text-blue-900 dark:text-orange-400 uppercase text-sm tracking-wider">
                  Premium Series
                </p>
                <h4 className="text-gray-600 dark:text-gray-300 mt-1">
                  Custom Industrial Solution
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
