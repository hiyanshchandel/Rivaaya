// -----------------------------
// Hero Section
// -----------------------------

import { motion } from "framer-motion";
const Hero = () => (
  <section className="relative min-h-[95vh] w-full" aria-label="Hero">
    {/* Background image */}
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <img
        src="https://plus.unsplash.com/premium_photo-1661380954234-13d98a83577c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Handloom weaving background"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent"/>
    </div>

    <div className="pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/60 px-3 py-1 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-violet-600"/>
            <span className="text-xs font-semibold text-slate-700">Crafted by hand. Amplified by AI.</span>
          </div>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Discover authentic Indian crafts, 
            <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent"> told by their makers.</span>
          </h1>
          <p className="mt-5 text-lg text-slate-700">
            Rivaaya is a marketplace that helps artisans share their stories, reach new audiences, and sell directly—while preserving heritage.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#shop" className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-slate-800">Explore the Marketplace</a>
            <a href="#join" className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:shadow">I’m an Artisan</a>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="mt-14 flex justify-center">
        <a href="#shop" className="group flex flex-col items-center text-slate-600">
          <span className="text-xs font-medium">Scroll to explore</span>
          <span className="mt-2 inline-block rounded-full border border-slate-300 p-2 group-hover:border-violet-500">
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
              <path d="M12 5v14m0 0l-6-6m6 6l6-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </a>
      </div>
    </div>
  </section>
);

export default Hero;