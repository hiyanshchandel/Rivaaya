// -----------------------------
// Join CTA
// -----------------------------
import Section from "./Section";
const JoinCTA = () => (
  <Section
    id="join"
    eyebrow="For Artisans"
    title="Ready to bring your craft online?"
    description="Join Rivaaya and get your own AI-powered storefront in minutes."
  >
    <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-50 via-white to-cyan-50 p-8 text-center shadow-sm">
      <p className="max-w-2xl text-slate-700">
        Start with a photo and a voice note—our assistant will generate your product page,
        translate your story, and help you reach the right buyers.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button className="rounded-2xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-violet-700">Create my storefront</button>
        <button className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:shadow">Talk to us</button>
      </div>
    </div>
  </Section>
);

export default JoinCTA;