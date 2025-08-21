
// -----------------------------
// About / Story Section
// -----------------------------
import Section from "./Section";
const AboutSection = () => (
  <Section
    id="story"
    eyebrow="Our Story"
    title="A bridge between tradition and tomorrow"
    description="Rivaaya helps artisans narrate their heritage with AI—turning voice notes into product stories, translating across languages, and connecting to buyers who care."
  >
    <div className="grid items-center gap-8 md:grid-cols-2">
      <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-violet-50 via-white to-cyan-50 p-6 shadow-sm">
        <ul className="space-y-4 text-slate-700">
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-violet-600 text-white">1</span>
            Voice-to-Story: articulate your craft through simple voice notes.
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-violet-600 text-white">2</span>
            Multilingual Reach: we translate and tailor content for global audiences.
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-violet-600 text-white">3</span>
            Smart Marketing: AI-generated descriptions, hashtags, and trend insights.
          </li>
        </ul>
      </div>
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1974&auto=format&fit=crop"
          alt="Artisan at work"
          className="w-full rounded-3xl border border-slate-200 object-cover shadow-md"
        />
        <div className="pointer-events-none absolute -bottom-6 -right-6 hidden h-28 w-28 rounded-3xl bg-gradient-to-tr from-violet-500 to-cyan-400 opacity-20 blur-2xl md:block"/>
      </div>
    </div>
  </Section>
);

export default AboutSection;