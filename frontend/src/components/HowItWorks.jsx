

// -----------------------------
// How It Works (3-step)
// -----------------------------
import Section from "./Section";
const HowItWorks = () => (
  <Section id="how" eyebrow="How it works" title="From voice note to storefront">
    <div className="grid gap-6 md:grid-cols-3">
      {[
        {
          title: "Share",
          desc: "Upload a photo and a quick voice note in your language.",
          icon: (
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
              <path d="M4 8l8-4 8 4-8 4-8-4zm8 4l8-4v8l-8 4-8-4v-8l8 4z" fill="currentColor"/>
            </svg>
          ),
        },
        {
          title: "Generate",
          desc: "AI crafts your story, product description, and social content.",
          icon: (
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
              <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" fill="currentColor"/>
            </svg>
          ),
        },
        {
          title: "Sell",
          desc: "Publish to the marketplace with payments and shipping support.",
          icon: (
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
              <path d="M3 3h18v4H3V3zm0 6h18v12H3V9zm4 3h4v6H7v-6z" fill="currentColor"/>
            </svg>
          ),
        },
      ].map((step) => (
        <div key={step.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white">
            {step.icon}
          </div>
          <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
          <p className="mt-1 text-slate-600">{step.desc}</p>
        </div>
      ))}
    </div>
  </Section>
);

export default HowItWorks;