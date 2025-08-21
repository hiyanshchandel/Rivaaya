import { motion } from "framer-motion";
const ArtisanCard = ({ name, craft, story, avatar }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md"
  >
    <div className="flex items-center gap-4">
      <img src={avatar} alt={name} className="h-16 w-16 rounded-xl object-cover"/>
      <div>
        <h3 className="text-lg font-bold text-slate-900">{name}</h3>
        <p className="text-sm font-medium text-violet-700">{craft}</p>
      </div>
    </div>
    <p className="mt-3 text-slate-600">{story}</p>
    <div className="mt-4 flex gap-2">
      <button className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">View Works</button>
      <button className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800">Follow</button>
    </div>
  </motion.div>
);

export default ArtisanCard;