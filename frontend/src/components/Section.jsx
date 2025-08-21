const Section = ({ id, eyebrow, title, description, children }) => (
  <section id={id} className="relative py-16 sm:py-20">
    <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-violet-300/40 to-transparent"/>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        {eyebrow && (
          <span className="inline-block rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-violet-700">
            {eyebrow}
          </span>
        )}
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
        {description && <p className="mt-3 text-slate-600">{description}</p>}
      </div>
      <div className="mt-10">{children}</div>
    </div>
  </section>
);

export default Section;