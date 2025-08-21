import { motion } from "framer-motion";
const CategoryCard = ({ name, img }) => (
  <motion.a
    href="#"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
    className="group relative block overflow-hidden rounded-2xl bg-white shadow hover:shadow-lg"
  >
    <img src={img} alt={name} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"/>
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"/>
    <div className="absolute bottom-0 left-0 right-0 p-4">
      <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 backdrop-blur">
        {name}
        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
          <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </div>
  </motion.a>
);

export default CategoryCard;